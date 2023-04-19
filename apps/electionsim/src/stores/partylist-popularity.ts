import { get, writable } from 'svelte/store';
import { csv } from 'd3-fetch';
import { base } from '$app/paths';
import { party, type Party } from '../stores/party';
import { input as inputStore } from './input';
import { mapPollCsv } from '../utils/map-input-to-value';

const EXPECTED_PARTYLIST_REPRESENTATIVE = 100;

interface RawPollRecord {
	party: string;
	popularity: string;
}

interface PartylistRecord {
	party: Party;
	representatives: number;
}

const createPartylistPopularityStore = () => {
	const { subscribe, update } = writable<PartylistRecord[]>([]);

	return {
		subscribe,
		load: async () => {
			const { input } = get(inputStore);
			const $party = get(party);

			if (!input.quiz6) return;

			const pollData = (await csv(
				`${base}/data/${mapPollCsv[input.quiz6]}`
			)) as RawPollRecord[];

			const totalKnownPartyRepresentatives = pollData.reduce(
				(sum, { popularity }) => sum + +popularity,
				0
			);

			update(() =>
				pollData.map<PartylistRecord>(({ party, popularity }) => ({
					party: $party.map.get(party) as Party,
					representatives: Math.round(
						(+popularity * EXPECTED_PARTYLIST_REPRESENTATIVE) /
							totalKnownPartyRepresentatives
					),
				}))
			);
		},
	};
};

export const partylistPopularity = createPartylistPopularityStore();
