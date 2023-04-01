<script lang="ts">
	import type { RepresentativeRecord } from '../../../stores/representatives';

	export let representativeRecord: RepresentativeRecord[];

	$: topTotal = representativeRecord.reduce((prev, cur) =>
		prev.total > cur.total ? prev : cur
	);
</script>

<div class="w-full flex flex-col">
	<div class="flex mt-5">
		<div class="typo-b6 font-bold flex-1">พรรค</div>
		<div class="typo-b6 font-bold w-[76px] text-right">ส.ส. เขต</div>
		<div class="typo-b6 font-bold w-[76px] text-right">ส.ส. บัญชีฯ</div>
		<div class="typo-b6 font-bold w-[72px] text-right">รวม</div>
	</div>
	{#each representativeRecord as { party, fromDistrict, fromPartylist, total }}
		<div class="flex mt-5">
			<div class="typo-b6 flex-1">{party.Name}</div>
			<div class="typo-b6 w-[76px] text-right">{fromDistrict}</div>
			<div class="typo-b6 w-[76px] text-right">{fromPartylist}</div>
			<div class="typo-b6 w-[72px] text-right">{total}</div>
		</div>
		<div
			class="h-4 mt-1"
			style="width: {(total / topTotal.total) *
				100}%; background-color: {party.Color};"
		/>
	{/each}
</div>
