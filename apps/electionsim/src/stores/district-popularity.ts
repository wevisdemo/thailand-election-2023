import { get, writable } from 'svelte/store';
import { csv } from 'd3-fetch';
import { base } from '$app/paths';
import { party, type Party } from '../stores/party';
import { Voteflow } from '../utils/voteflow';
import { input as inputStore } from './input';
import { mapPositiveRatio, mapRangeRatio } from '../utils/map-input-to-value';
import { PartySide } from '@thailand-election-2023/database';

interface RawPopularityRecord {
	province: string;
	electorialDistrictNumber: string;
	party: string;
	points: string;
}

export interface PopularityRecord {
	party: Party;
	points: number;
}

export interface PopularityTree {
	[province: string]: { [district: string]: PopularityRecord[] };
}

interface CandidatesPartyChange {
	name: string;
	province: string;
	electorialDistrictNumber: string;
	fromParty: string;
	toParty: string;
}

let basePopularity: PopularityTree;
let candidatesPartyChanges: CandidatesPartyChange[];

const createDistrictPopularityStore = () => {
	const { subscribe, update } = writable<PopularityTree>({});

	return {
		subscribe,
		load: async () => {
			const $party = get(party);
			// POPULARITY MUST ORDER BY SCORE DESC
			const popularityRecord = (await csv(
				`${base}/data/popularity-projection-2566.csv`
			)) as RawPopularityRecord[];

			basePopularity = popularityRecord.reduce<PopularityTree>(
				(
					obj,
					{ province, electorialDistrictNumber, party: partyName, points }
				) => {
					if (!obj[province]) {
						obj[province] = {};
					}

					if (!obj[province][+electorialDistrictNumber]) {
						obj[province][+electorialDistrictNumber] = [];
					}

					if (!$party.map.get(partyName)) {
						party.add({ Name: partyName });
					}

					obj[province][+electorialDistrictNumber].push({
						party: $party.map.get(partyName) as Party,
						points: +points,
					});

					return obj;
				},
				{}
			);

			candidatesPartyChanges = (await csv(
				`${base}/data/candidate-party-changes-66.csv`
			)) as CandidatesPartyChange[];

			update(() => basePopularity);
		},
		calculate() {
			const { input } = get(inputStore);
			const $party = get(party);
			const voteflow = new Voteflow();

			// คุณคิดว่า คนไทยทุกๆ 10 คนจะเลือก ส.ส. เขตจากตัวบุคคลหรือพรรคอย่างละกี่คน?
			if (input.quiz1) {
				const value = 1 - mapPositiveRatio[input.quiz1];

				if (value > 0) {
					candidatesPartyChanges.forEach(
						({ province, electorialDistrictNumber, fromParty, toParty }) =>
							voteflow.updateDistrictVoteFlow(
								province,
								electorialDistrictNumber,
								fromParty,
								toParty,
								value
							)
					);
				}
			}

			// คุณคิดว่า คนเคยเลือก (บัตรเขต) พรรคพลังประชารัฐ จะเปลี่ยนไปเลือก พรรครวมไทยสร้างชาติ มากแค่ไหน?
			if (input.quiz2) {
				voteflow.updateVoteFlow(
					'พลังประชารัฐ',
					'รวมไทยสร้างชาติ',
					mapPositiveRatio[input.quiz2]
				);
			}

			// จากกระแส Strategic Voting ระหว่างพรรคเพื่อไทย และพรรคก้าวไกล คุณคิดว่า ผลโหวตจะถูกเทไปทางใด
			if (input.quiz3) {
				const ratio = mapRangeRatio[input.quiz3];

				if (ratio > 0) {
					voteflow.updateVoteFlow('ก้าวไกล', 'เพื่อไทย', ratio);
				} else if (ratio < 0) {
					voteflow.updateVoteFlow('เพื่อไทย', 'ก้าวไกล', -ratio);
				}
			}

			// ในทางกลับกัน คุณคิดว่าใน กลุ่มคนเลือกพรรคฝั่งรัฐบาล ผลโหลตจะเทเข้าหรือออกจากพรรคพลังประชารัฐ/รวมไทยสร้างชาติ หรือไม่?
			if (input.quiz4) {
				const ratio = mapRangeRatio[input.quiz4];

				if (ratio !== 0) {
					const targetGovernmentParties = ['พลังประชารัฐ', 'รวมไทยสร้างชาติ'];
					const otherGovernmentParties = $party.list
						.filter(
							({ Name, PartyGroup }) =>
								PartyGroup === PartySide.Government &&
								!targetGovernmentParties.includes(Name)
						)
						.map(({ Name }) => Name);

					voteflow.updateVoteFlowBetweenGroups(
						otherGovernmentParties,
						targetGovernmentParties,
						ratio
					);
				}
			}

			// คุณคิดว่า เมื่อเทียบกับการ เลือกตั้งปี 62 ความนิยมต่อ ส.ส. ของคนไทย เบนไปจาก เดิมหรือไม่? ไปทางฝ่ายใด?
			if (input.quiz5) {
				const ratio = mapRangeRatio[input.quiz5];

				if (ratio !== 0) {
					const oppositionParties = $party.list
						.filter(({ PartyGroup }) => PartyGroup === PartySide.Opposition)
						.map(({ Name }) => Name);

					const governmentParties = $party.list
						.filter(({ PartyGroup }) => PartyGroup === PartySide.Government)
						.map(({ Name }) => Name);

					voteflow.updateVoteFlowBetweenGroups(
						oppositionParties,
						governmentParties,
						ratio
					);
				}
			}

			// Extra custom voteflow
			if (
				input.quiz7 &&
				input.quiz8?.percent &&
				input.quiz8?.from &&
				input.quiz8?.to
			) {
				voteflow.updateVoteFlow(
					input.quiz8.from,
					input.quiz8.to,
					mapRangeRatio[input.quiz8.percent]
				);
			}

			update(() => voteflow.calculateVoteFlowResult(basePopularity));
		},
	};
};

export const districtPopularity = createDistrictPopularityStore();
