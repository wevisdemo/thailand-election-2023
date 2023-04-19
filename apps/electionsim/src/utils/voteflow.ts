import { get } from 'svelte/store';
import { party, type Party } from '../stores/party';
import type {
	PopularityRecord,
	PopularityTree,
} from '../stores/district-popularity';

export interface VoteFlowMatrix {
	[from: string]: { [to: string]: number };
}

export class Voteflow {
	matrix: VoteFlowMatrix;

	constructor() {
		const $party = get(party);
		this.matrix = this.createVoteFlowMatrix($party.list);
	}

	private createVoteFlowMatrix(parties: Party[]): VoteFlowMatrix {
		return parties.reduce(
			(obj, from) => ({
				...obj,
				[from.Name]: parties.reduce(
					(obj, to) => ({
						...obj,
						[to.Name]: from.Name === to.Name ? 1 : 0,
					}),
					{}
				),
			}),
			{}
		);
	}

	public updateVoteFlow(from: string, to: string, value: number) {
		const deductableValue =
			value < this.matrix[from][from] ? value : this.matrix[from][from];

		this.matrix[from][to] += value;
		this.matrix[from][from] -= deductableValue;
	}

	public updateVoteFlowBetweenGroups(
		partiesA: string[],
		partiesB: string[],
		changes: number
	) {
		const [fromParties, toParties] =
			changes > 0 ? [partiesA, partiesB] : [partiesB, partiesA];

		fromParties.forEach((from) => {
			const deductableValue =
				Math.min(Math.abs(changes), this.matrix[from][from]) /
				(fromParties.length + toParties.length);

			toParties.forEach((to) => {
				this.updateVoteFlow(from, to, Math.min(deductableValue));
			});
		});
	}

	private applyVoteFlow(records: PopularityRecord[]): PopularityRecord[] {
		const $party = get(party);
		const partyNames = Object.keys(this.matrix);
		const voteVector: { [name: string]: number } = partyNames.reduce(
			(obj, name) => ({
				...obj,
				[name]: records.find(({ party }) => name === party.Name)?.points || 0,
			}),
			{}
		);

		const totalVote = records.reduce((sum, { points }) => sum + points, 0);

		return partyNames
			.map((partyA) => ({
				party: $party.map.get(partyA) as Party,
				points:
					partyNames.reduce(
						(sum, partyB) =>
							sum + voteVector[partyB] * this.matrix[partyB][partyA],
						0
					) * totalVote,
			}))
			.filter(({ points }) => points > 0)
			.sort((a, z) => z.points - a.points);
	}

	public calculateVoteFlowResult(popularity: PopularityTree): PopularityTree {
		return Object.entries(popularity).reduce(
			(provice, [province, districts]) => ({
				...provice,
				[province]: Object.entries(districts).reduce(
					(provice, [district, popularities]) =>
						popularities
							? {
									...provice,
									[district]: this.applyVoteFlow(popularities),
							  }
							: provice,
					{}
				),
			}),
			{}
		);
	}
}
