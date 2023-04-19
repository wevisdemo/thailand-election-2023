import { derived } from 'svelte/store';
import type { Party } from '../stores/party';
import { districtPopularity } from './district-popularity';
import { partylistPopularity } from './partylist-popularity';

export interface RepresentativeRecord {
	party: Party;
	fromDistrict: number;
	fromPartylist: number;
	total: number;
}

export const representatives = derived(
	[districtPopularity, partylistPopularity],
	([$districtPopularity, $partylistPopularity]): RepresentativeRecord[] => {
		const partyRecordMap: { [partyName: string]: RepresentativeRecord } = {};

		const initPartyRecordIfNotExist = (party: Party) => {
			if (partyRecordMap[party.Name]) return;

			partyRecordMap[party.Name] = {
				party,
				fromDistrict: 0,
				fromPartylist: 0,
				total: 0,
			};
		};

		Object.values($districtPopularity).forEach((districts) =>
			Object.values(districts).forEach((popularities) => {
				const { party } = popularities[0];

				if (!party) return;
				initPartyRecordIfNotExist(party);

				partyRecordMap[party.Name].fromDistrict++;
				partyRecordMap[party.Name].total += 1;
			})
		);

		$partylistPopularity.forEach(({ party, representatives }) => {
			initPartyRecordIfNotExist(party);

			partyRecordMap[party.Name].fromPartylist += representatives;
			partyRecordMap[party.Name].total += representatives;
		});

		return Object.values(partyRecordMap).sort((a, z) => z.total - a.total);
	}
);
