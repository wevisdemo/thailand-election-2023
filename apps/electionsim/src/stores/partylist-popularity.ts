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

			const pointsPerRepresentative =
				pollData.reduce((sum, { popularity }) => sum + +popularity, 0) /
				EXPECTED_PARTYLIST_REPRESENTATIVE;

			const partyPoints = pollData
				.map(({ party, popularity }) => ({
					party: $party.map.get(party) as Party,
					representatives: Math.floor(+popularity / pointsPerRepresentative),
					remainder: +popularity % pointsPerRepresentative,
				}))
				.sort((a, z) => z.remainder - a.remainder);

			const currentPresentatives = partyPoints.reduce(
				(sum, { representatives }) => sum + representatives,
				0
			);

			for (
				let i = 0;
				i < EXPECTED_PARTYLIST_REPRESENTATIVE - currentPresentatives;
				i++
			) {
				partyPoints[i].representatives++;
			}

			update(() =>
				partyPoints
					.map(({ remainder, ...rest }) => rest)
					.sort((a, z) => z.representatives - a.representatives)
			);
		},
	};
};

export const partylistPopularity = createPartylistPopularityStore();
