<script lang="ts">
	import type { RepresentativeRecord } from '../../stores/representatives';
	import type { Party } from '@thailand-election-2023/database';
	import GovernmentChartLabel from './government-chart-label.svelte';

	export let senateCount: number;
	export let representativeRecord: RepresentativeRecord[];
	export let governmentParties: RepresentativeRecord[];
	export let oppositionParties: RepresentativeRecord[];
	export let governmentPoints: number;

	$: totalCount = representativeRecord.reduce((acc, cur) => acc + cur.total, 0);

	$: senateBarSize = (senateCount / (senateCount + totalCount)) * 100;

	let hoveredPartyName: Party | null = null;
</script>

<div class="w-100 h-28 bg-black pt-5 flex flex-col items-center">
	<div class="flex flex-col w-[312px] md:w-[650px] relative">
		<div
			class="w-12 h-12 rounded-full beyondx-gradient-bg absolute flex justify-center items-center -top-10 right-0 cursor-pointer"
		>
			<svg
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M15.3598 10.8802L24.9598 20.4802L23.6158 21.8242L15.3598 13.5682L7.10377 21.8242L5.75977 20.4802L15.3598 10.8802Z"
					fill="white"
				/>
			</svg>
		</div>
		<p class="typo-b3 text-white font-bold">จัดตั้งรัฐบาล</p>

		<div class="flex flex-row h-6 relative">
			<div
				class="flex bg-black text-black items-center justify-center"
				style="width: {senateBarSize}%; background: #888888;"
			>
				ส.ว.
			</div>
			{#each [...governmentParties, ...oppositionParties] as { party, total }}
				<div
					class="flex justify-center"
					style="width: {(total / totalCount) *
						100}%; background-color: {party.Color};"
					on:mouseenter={() => (hoveredPartyName = party)}
					on:mouseleave={() => (hoveredPartyName = null)}
				>
					{#if hoveredPartyName === party}
						<div class="relative h-0 z-10">
							<div
								class="absolute bottom-1 rounded bg-black py-2 px-4 text-white whitespace-nowrap transform -translate-x-1/2"
							>
								<p class="font-bold">
									<span
										class="w-3 h-3 mr-2 rounded-full inline-block"
										style="background: {party.Color}"
									/>{party.Name}
								</p>
								<p>{total} ที่นั่ง</p>
							</div>
						</div>
					{/if}
				</div>
			{/each}
			<div
				class="absolute top-0 bottom-0 right-0 stripe-white"
				style="left: {(governmentPoints / totalCount) *
					100}%; pointer-events: none; border-left: 1px solid white;"
			/>

			<GovernmentChartLabel label="เลือกนายก" style="left: 50%;" />
			<GovernmentChartLabel
				label="ตั้งรัฐบาล"
				style="right: {(100 - senateBarSize) / 2}%;"
			/>
		</div>

		<div class="flex items-center justify-between text-white typo-b6 mt-2">
			<div class="flex space-x-1 items-center">
				<div class="w-4 h-4 mr-2" style="background-color: #CCCCCC;" />
				รัฐบาล ({governmentPoints})
			</div>
			<div class="flex space-x-1 items-center">
				<div class="w-4 h-4 mr-2" style="background-color: #CCCCCC;">
					<div class="stripe-white w-full h-full" />
				</div>
				ฝ่ายค้าน ({totalCount - governmentPoints})
			</div>
		</div>
	</div>
</div>
