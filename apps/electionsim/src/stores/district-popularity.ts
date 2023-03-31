import { get, writable } from 'svelte/store';
import type { Party } from '@thailand-election-2023/database';
import { csv } from 'd3-fetch';
import { base } from '$app/paths';
import { party } from './party';

interface RawPopularityRecord {
	province: string;
	electorialDistrictNumber: string;
	party: string;
	points: string;
}

interface PopularityRecord {
	party?: Party;
	points: number;
}

interface PopularityTree {
	[province: string]: { [district: string]: PopularityRecord[] };
}

const BASE_POPULARITY_PATH = `${base}/data/popularity-2562.csv`; // POPULARITY MUST ORDER BY SCORE DESC

const createDistrictPopularityStore = () => {
	const { subscribe, update } = writable<PopularityTree>({});

	return {
		subscribe,
		load: async () => {
			const $party = get(party);
			const popularityRecord = (await csv(
				BASE_POPULARITY_PATH
			)) as RawPopularityRecord[];

			const popularity = popularityRecord.reduce<PopularityTree>(
				(obj, { province, electorialDistrictNumber, party, points }) => {
					if (!obj[province]) {
						obj[province] = {};
					}

					if (!obj[province][electorialDistrictNumber]) {
						obj[province][electorialDistrictNumber] = [];
					}

					obj[province][electorialDistrictNumber].push({
						party: $party.map.get(party),
						points: +points,
					});

					return obj;
				},
				{}
			);

			update(() => popularity);
		},
		calculate() {
			// TODO: Re-Calculate from input store
		},
	};
};

export const districtPopularity = createDistrictPopularityStore();
