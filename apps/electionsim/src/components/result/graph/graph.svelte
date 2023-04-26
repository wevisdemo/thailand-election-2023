<script lang="ts">
	import BarChart from './barChart.svelte';
	import type { RepresentativeRecord } from '../../../stores/representatives';

	export let elect66Record: RepresentativeRecord[];
	export let elect62Record: RepresentativeRecord[];

	enum Tab {
		Elect66 = 'elect66',
		Elect62 = 'elect62',
	}

	$: selectedTab = Tab.Elect66;
	$: currentRecord = elect66Record;

	const onTabChange = (newTab: Tab) => {
		selectedTab = newTab;
		if (newTab === Tab.Elect66) {
			currentRecord = elect66Record;
		} else {
			currentRecord = elect62Record;
		}
	};
</script>

<div class="flex gap-x-[10px] mt-5">
	<button
		class="typo-b6 py-[5px] px-[10px] border border-black {selectedTab ===
		Tab.Elect66
			? 'bg-black text-white'
			: ''}"
		on:click={() => onTabChange(Tab.Elect66)}
	>
		แบบจำลองผลปี 66 ของคุณ
	</button>
	<button
		class="typo-b6 py-[5px] px-[10px] border border-black {selectedTab ===
		Tab.Elect62
			? 'bg-black text-white'
			: ''}"
		on:click={() => onTabChange(Tab.Elect62)}
	>
		ผลเลือกตั้ง 62
	</button>
</div>

<div class="w-full mb-[172px]">
	<BarChart
		year={selectedTab}
		representativeRecord={currentRecord}
		{elect62Record}
	/>
</div>
