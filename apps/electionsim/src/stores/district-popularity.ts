import { get, writable } from 'svelte/store';
import { csv } from 'd3-fetch';
import { base } from '$app/paths';
import type { Party } from '../stores/party';
import { party } from './party';
import { Voteflow } from '../utils/voteflow';

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

const BASE_POPULARITY_PATH = `${base}/data/popularity-projection-2566.csv`; // POPULARITY MUST ORDER BY SCORE DESC

let basePopularity: PopularityTree;

const createDistrictPopularityStore = () => {
	const { subscribe, update } = writable<PopularityTree>({});

	return {
		subscribe,
		load: async () => {
			const $party = get(party);
			const popularityRecord = (await csv(
				BASE_POPULARITY_PATH
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

			update(() => basePopularity);
		},
		calculate() {
			const voteflow = new Voteflow();

			voteflow.updateVoteFlow('พลังประชารัฐ', 'ก้าวไกล', 0.2);
			voteflow.updateVoteFlow('พลังประชารัฐ', 'เพื่อไทย', 0.1);

			console.log(voteflow.matrix['พลังประชารัฐ']);

			update(() => voteflow.calculateVoteFlowResult(basePopularity));
		},
	};
};

export const districtPopularity = createDistrictPopularityStore();
