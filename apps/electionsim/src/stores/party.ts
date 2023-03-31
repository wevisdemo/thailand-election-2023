import { writable } from 'svelte/store';
import { TheyWorkForUs } from '@thailand-election-2023/database';
import type { Party } from '@thailand-election-2023/database';

type PartyMap = Map<Party['Name'], Party>;

interface PartyStore {
	list: Party[];
	map: PartyMap;
}

const DEFAULT_PARTY_COLOR = '#CCCCCC';

const createPartiesStore = () => {
	const { subscribe, update } = writable<PartyStore>({
		list: [],
		map: new Map(),
	});

	return {
		subscribe,
		load: async () => {
			const list = (
				await TheyWorkForUs.Parties.fetchAll({
					fields: 'Name,Color,PartyGroup',
					where: '(PartyType,eq,พรรค)',
				})
			).map(({ Color, ...rest }) => ({
				...rest,
				Color: Color || DEFAULT_PARTY_COLOR,
			}));

			const map: PartyMap = new Map(list.map((party) => [party.Name, party]));

			update(() => ({
				list,
				map,
			}));
		},
	};
};

export const party = createPartiesStore();
