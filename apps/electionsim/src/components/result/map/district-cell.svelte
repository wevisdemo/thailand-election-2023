<script lang="ts">
	import { districtPopularity } from '../../../stores/district-popularity';
	import type { Coordinate2D } from './coordinate';
	import type { DistrictTooltipData } from './district-tooltip.svelte';

	export let province: string;
	export let districtNumber: number;
	export let position: Coordinate2D;
	export let size: number;
	export let districtTooltip: DistrictTooltipData | null = null;

	$: currentDistrictRepresentatives =
		$districtPopularity[province][districtNumber];

	$: totalPoints = currentDistrictRepresentatives.reduce(
		(sum, { points }) => sum + points,
		0
	);

	$: popularityRanking = currentDistrictRepresentatives.map(
		({ party, points }) => ({
			party,
			percentage: Math.round((points * 100) / totalPoints),
		})
	);

	const onHoverDistrict = ({ target }: MouseEvent) => {
		const { x, y, width, height } = (
			target as SVGElement
		).getBoundingClientRect();

		districtTooltip = {
			province,
			districtNumber,
			popularityRanking,
			x: x + width,
			y: y + height,
			totalPoints,
		};
	};
</script>

<g
	on:mouseenter={(e) => onHoverDistrict(e)}
	on:mouseleave={() => (districtTooltip = null)}
	class="cursor-default"
>
	{#if districtNumber === 1}
		<text
			y={position.y - size / 4}
			x={position.x}
			alignment-baseline="baseline"
			font-size={size * 0.6}
		>
			{province}
		</text>
	{/if}
	<rect
		x={position.x}
		y={position.y}
		width={size}
		height={size}
		fill="url(#party-bg-{popularityRanking[0].party?.Name})"
		stroke-width="0.7"
		class="stroke-white"
	/>
</g>
