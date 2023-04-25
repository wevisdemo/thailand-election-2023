import { get, writable } from 'svelte/store';
import { csv } from 'd3-fetch';
import { base } from '$app/paths';
import { party, type Party } from '../stores/party';
import { input as inputStore } from './input';
import { districtPopularity } from './district-popularity';

const EXPECTED_PARTYLIST_REPRESENTATIVE = 100;

interface PollRecord {
	party: Party;
	popularity: number;
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

			const pollData = input.quiz6
				? await getPollRecordsFromPollCsv(input.quiz6.filename)
				: getPollRecordsFromDistrictPopularity();

			const pointsPerRepresentative =
				pollData.reduce((sum, { popularity }) => sum + popularity, 0) /
				EXPECTED_PARTYLIST_REPRESENTATIVE;

			const partyPoints = pollData
				.map(({ party, popularity }) => ({
					party,
					representatives: Math.floor(+popularity / pointsPerRepresentative),
					remainder: popularity % pointsPerRepresentative,
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

async function getPollRecordsFromPollCsv(
	filename: string
): Promise<PollRecord[]> {
	const $party = get(party);

	const rawRecords = (await csv(`${base}/data/${filename}`)) as {
		party: string;
		popularity: string;
	}[];

	return rawRecords.map(({ party, popularity }) => ({
		party: $party.map.get(party) as Party,
		popularity: +popularity,
	}));
}

function getPollRecordsFromDistrictPopularity(): PollRecord[] {
	const popularityMap = new Map<string, PollRecord>();

	Object.values(get(districtPopularity)).forEach((districts) =>
		Object.values(districts).forEach((records) =>
			records.forEach(({ party, points }) => {
				popularityMap.set(party.Name, {
					party,
					popularity: (popularityMap.get(party.Name)?.popularity || 0) + points,
				});
			})
		)
	);

	return [...popularityMap.values()].sort(
		(a, z) => z.popularity - a.popularity
	);
}

export const partylistPopularity = createPartylistPopularityStore();
