<script lang="ts">
	import type { Party } from '../../../stores/party';
	import type { Coordinate2D } from './coordinate';
	import type { PartyListTooltipData } from './partylist-tooltip.svelte';

	export let party: Party;
	export let cells: Coordinate2D[];
	export let size: number;
	export let partylistTooltip: PartyListTooltipData | null;

	const onHoverPartylist = ({ target }: MouseEvent) => {
		const { x, y } = (target as SVGElement).getBoundingClientRect();
		partylistTooltip = { party, count: cells.length, position: { x, y } };
	};
</script>

<g
	on:mouseenter={onHoverPartylist}
	on:mouseleave={() => (partylistTooltip = null)}
	class="cursor-default"
>
	{#each cells as { x, y }}
		<rect
			{x}
			{y}
			width={size}
			height={size}
			fill="url(#party-bg-{party.Name})"
			stroke-width="0.7"
			class="stroke-white"
		/>
	{/each}
</g>
