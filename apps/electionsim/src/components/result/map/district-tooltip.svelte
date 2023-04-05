<script lang="ts" context="module">
	import type { Party } from '@thailand-election-2023/database';

	const DISPLAY_RANK_MAX = 3;

	export interface DistrictTooltipData {
		province: string;
		districtNumber: number;
		popularityRanking: { party: Party; percentage: number }[];
		totalPoints: number;
		x: number;
		y: number;
	}
</script>

<script lang="ts">
	export let districtTooltip: DistrictTooltipData;
</script>

<div
	class="fixed rounded bg-black py-2 px-4 text-white space-y-2 transform z-50"
	style="left: {districtTooltip.x}px; top: {districtTooltip.y}px;"
>
	<div>
		<p>{districtTooltip.province}</p>
		<p>เขต {districtTooltip.districtNumber}</p>
	</div>

	<div>
		{#each districtTooltip.popularityRanking.slice(0, DISPLAY_RANK_MAX) as { party, percentage }, index}
			<div class="flex flex-col">
				<div class="flex flex-row space-x-2">
					<div
						class="w-3 h-3 mt-1"
						style="background: url('/party-icons/{party?.Name}.svg') {party?.Color} center/65% no-repeat;"
					/>
					<p class="flex-1" class:font-bold={index === 0}>{party?.Name}</p>
					<p class:font-bold={index === 0}>{percentage}%</p>
				</div>
			</div>
		{/each}
	</div>
</div>
