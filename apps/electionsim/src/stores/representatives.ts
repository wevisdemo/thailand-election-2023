import type { Party } from '@thailand-election-2023/database';
import { derived } from 'svelte/store';
import { districtPopularity } from './district-popularity';

interface RepresentativeRecord {
	party: Party;
	fromDistrict: number;
	fromPartylist: number;
	total: number;
}

// TODO: Include partylist
export const representatives = derived(
	districtPopularity,
	($districtPopularity): RepresentativeRecord[] => {
		const partyRecordMap: { [partyName: string]: RepresentativeRecord } = {};

		Object.values($districtPopularity).forEach((districts) =>
			Object.values(districts).forEach((popularities) => {
				const { party } = popularities[0];

				if (!party) return;

				if (!partyRecordMap[party.Name]) {
					partyRecordMap[party.Name] = {
						party,
						fromDistrict: 0,
						fromPartylist: 0,
						total: 0,
					};
				}

				partyRecordMap[party.Name].fromDistrict++;
				partyRecordMap[party.Name].total++;
			})
		);

		return Object.values(partyRecordMap).sort((a, z) => z.total - a.total);
	}
);