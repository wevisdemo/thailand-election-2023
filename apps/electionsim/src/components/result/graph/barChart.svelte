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
		<div
			class="typo-b6 font-bold w-[80px] text-right items-center justify-end flex"
		>
			ส.ส. เขต <div class="w-4 h-4 ml-2" style="background-color: #CCCCCC;" />
		</div>
		<div
			class="typo-b6 font-bold w-[102px] text-right items-center justify-end flex"
		>
			ส.ส. บัญชีฯ <div class="w-4 h-4 ml-2" style="background-color: #CCCCCC;">
				<div class="stripe-white w-full h-full" />
			</div>
		</div>
		<div class="typo-b6 font-bold w-[72px] text-right">รวม</div>
	</div>
	{#each representativeRecord as { party, fromDistrict, fromPartylist, total }}
		<div class="flex mt-5">
			<div class="typo-b6 flex-1">{party.Name}</div>
			<div class="typo-b6 w-[80px] text-right">{fromDistrict}</div>
			<div class="typo-b6 w-[102px] text-right">{fromPartylist}</div>
			<div class="typo-b6 w-[72px] text-right items-center justify-end flex">
				{total}
				{#if total % 2 === 0}
					<svg
						width="16"
						height="17"
						viewBox="0 0 16 17"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3 7.5L3.705 8.205L7.5 4.415V14H8.5V4.415L12.295 8.205L13 7.5L8 2.5L3 7.5Z"
							fill="#1FE43F"
						/>
					</svg>
				{:else}
					<svg
						width="16"
						height="17"
						viewBox="0 0 16 17"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M13 9L12.295 8.295L8.5 12.085L8.5 2.5L7.5 2.5L7.5 12.085L3.705 8.295L3 9L8 14L13 9Z"
							fill="#FF0000"
						/>
					</svg>
				{/if}
			</div>
		</div>
		<div class="flex flex-row relative">
			<div
				class="h-4 mt-1"
				style="width: {(total / topTotal.total) *
					100}%; background-color: {party.Color};"
			/>
			<div
				class="absolute top-0 bottom-0 right-0 stripe-white"
				style="left: {(fromDistrict / topTotal.total) *
					100}%; pointer-events: none; border-left: 1px solid white;"
			/>
		</div>
	{/each}
</div>
