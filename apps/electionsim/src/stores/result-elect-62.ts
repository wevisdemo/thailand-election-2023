import { get, writable } from 'svelte/store';
import { csv } from 'd3-fetch';
import { base } from '$app/paths';
import type { Party } from './party';
import { party } from './party';
import type { RepresentativeRecord } from './representatives';

interface RawResultElect62 {
	party: string;
	district: string;
	partylist: string;
}

const BASE_RESULT_ELECT_62_PATH = `${base}/data/result-2562.csv`;

const createResultElect62Store = () => {
	const { subscribe, update } = writable<RepresentativeRecord[]>([]);

	return {
		subscribe,
		load: async () => {
			const $party = get(party);
			const resultElect62Record = (await csv(
				BASE_RESULT_ELECT_62_PATH
			)) as RawResultElect62[];

			const resultElect62 = resultElect62Record.reduce<RepresentativeRecord[]>(
				(result, { party: partyName, district, partylist }) => {
					if (partyName === 'อนาคตใหม่') {
						return [
							...result,
							{
								party: $party.map.get('ก้าวไกล') as Party,
								fromDistrict: parseInt(district),
								fromPartylist: parseInt(partylist),
								total: parseInt(district) + parseInt(partylist),
							},
						];
					}
					if (!$party.map.get(partyName)) {
						party.add({ Name: partyName });
					}

					return [
						...result,
						{
							party: $party.map.get(partyName) as Party,
							fromDistrict: parseInt(district),
							fromPartylist: parseInt(partylist),
							total: parseInt(district) + parseInt(partylist),
						},
					];
				},
				[]
			);

			update(() => resultElect62.sort((a, b) => b.total - a.total));
		},
	};
};

export const resultElect62 = createResultElect62Store();
