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
	parties: Party[];
	globalMatrix: VoteFlowMatrix;
	districtMatrix: Map<string, VoteFlowMatrix>;

	constructor() {
		this.parties = get(party).list;
		this.globalMatrix = this.createVoteFlowMatrix();
		this.districtMatrix = new Map();
	}

	private createVoteFlowMatrix(): VoteFlowMatrix {
		return this.parties.reduce(
			(obj, from) => ({
				...obj,
				[from.Name]: this.parties.reduce(
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

	public updateVoteFlow(
		from: string,
		to: string,
		value: number,
		matrix: VoteFlowMatrix = this.globalMatrix
	) {
		const deductableValue =
			value < matrix[from][from] ? value : matrix[from][from];

		matrix[from][to] += value;
		matrix[from][from] -= deductableValue;
	}

	public updateDistrictVoteFlow(
		province: string,
		district: string,
		from: string,
		to: string,
		value: number
	) {
		const key = this.getDistrictVoteFlowKey(province, district);

		if (!this.districtMatrix.has(key)) {
			this.districtMatrix.set(key, this.createVoteFlowMatrix());
		}

		this.updateVoteFlow(from, to, value, this.districtMatrix.get(key));
	}

	private getDistrictVoteFlowKey(province: string, district: string) {
		return `${province}-${district}`;
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
				Math.min(Math.abs(changes), this.globalMatrix[from][from]) /
				(fromParties.length + toParties.length);

			toParties.forEach((to) => {
				this.updateVoteFlow(from, to, Math.min(deductableValue));
			});
		});
	}

	private applyVoteFlow(
		records: PopularityRecord[],
		matrix: VoteFlowMatrix
	): PopularityRecord[] {
		const partyMap = get(party).map;
		const partyNames = Object.keys(matrix);
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
				party: partyMap.get(partyA) as Party,
				points:
					partyNames.reduce(
						(sum, partyB) => sum + voteVector[partyB] * matrix[partyB][partyA],
						0
					) * totalVote,
			}))
			.filter(({ points }) => points > 0)
			.sort((a, z) => z.points - a.points);
	}

	public calculateVoteFlowResult(popularity: PopularityTree): PopularityTree {
		return Object.entries(popularity).reduce(
			(proviceObj, [province, districts]) => ({
				...proviceObj,
				[province]: Object.entries(districts).reduce(
					(districtObj, [district, popularities]) => {
						if (!popularities) return districtObj;

						const districtVoteflow = this.districtMatrix.get(
							this.getDistrictVoteFlowKey(province, district)
						);

						return {
							...districtObj,
							[district]: this.applyVoteFlow(
								districtVoteflow
									? this.applyVoteFlow(popularities, districtVoteflow)
									: popularities,
								this.globalMatrix
							),
						};
					},
					{}
				),
			}),
			{}
		);
	}
}
