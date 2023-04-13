<script lang="ts" context="module">
	import type { Party } from '../../../stores/party';
	import type { Coordinate2D } from './coordinate';

	export interface PartyListTooltipData {
		party: Party;
		count: number;
		position: Coordinate2D;
	}
</script>

<script lang="ts">
	export let partylistTooltip: PartyListTooltipData;
</script>

<div
	class="fixed rounded bg-black py-2 px-4 text-white space-y-2 transform -translate-x-full z-50"
	style="left: {partylistTooltip.position.x - 8}px; top: {partylistTooltip
		.position.y}px;"
>
	<p>บัญชีรายชื่อ</p>
	<div class="flex flex-row space-x-2">
		<div
			class="w-3 h-3 mt-1"
			style="background: url('/party-icons/{partylistTooltip.party
				.Name}.svg') {partylistTooltip.party.Color} center/65% no-repeat;"
		/>
		<div>
			<p class="font-bold">{partylistTooltip.party.Name}</p>
			<p class="opacity-70">{partylistTooltip.count} ที่นั่ง</p>
		</div>
	</div>
</div>
