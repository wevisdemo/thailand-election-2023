<script lang="ts">
	import Elect62 from './elect62.svelte';
	import Elect66 from './elect66.svelte';
	import type { RepresentativeRecord } from '../../../stores/representatives';

	export let representativeRecord: RepresentativeRecord[];

	enum Tab {
		Elect66 = 'elect66',
		Elect62 = 'elect62',
	}

	$: selectedTab = Tab.Elect66;

	const onTabChange = (newTab: Tab) => {
		selectedTab = newTab;
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

{#if selectedTab === Tab.Elect66}
	<Elect66 {representativeRecord} />
{/if}
{#if selectedTab === Tab.Elect62}
	<Elect62 {representativeRecord} />
{/if}
