<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { districtPopularity } from '../../stores/district-popularity';
	import { resultElect62 } from '../../stores/result-elect-62';
	import { party } from '../../stores/party';
	import type { RepresentativeRecord } from '../../stores/representatives';
	import { PartySide } from '@thailand-election-2023/database';
	import { representatives } from '../../stores/representatives';
	import { Content, contentManager } from '../../stores/content';
	import GovernmentEstablish from '../../components/result/government-establish.svelte';
	import Graph from '../../components/result/graph/graph.svelte';
	import WaffleMap from '../../components/result/map/waffle-map.svelte';
	import CalculateLoading from '../../components/analyze/calculate.svelte';
	import Share from '../../components/result/share/share.svelte';
	import { partylistPopularity } from '../../stores/partylist-popularity';
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	enum Tabs {
		Map = 'map',
		Graph = 'graph',
	}

	let isDataReady = false;
	let isDelayTimeout = false;
	let isShare = false;

	onMount(async () => {
		if (!$contentManager.isFinished) {
			goto(base);
			isDataReady = true;
			isDelayTimeout = true;
		}
		setTimeout(() => {
			isDelayTimeout = true;
		}, 2000);
		if (!$contentManager.isEdited) {
			await party.load();
		}
		await districtPopularity.load();
		await partylistPopularity.load();
		await resultElect62.load();
		districtPopularity.calculate();
		isDataReady = true;
	});

	let selectedTab = Tabs.Map;

	$: [governmentParties, oppositionParties, governmentPoints] =
		$representatives.reduce<
			[RepresentativeRecord[], RepresentativeRecord[], number]
		>(
			([government, opposition, governmentPoints], party) =>
				$party.list.find(({ Name }) => party.party.Name === Name)
					?.PartyGroup === PartySide.Government
					? [[...government, party], opposition, governmentPoints + party.total]
					: [government, [party, ...opposition], governmentPoints],
			[[], [], 0]
		);

	const onTabChange = (newTab: Tabs) => {
		selectedTab = newTab;
	};

	const onEditQuiz = () => {
		contentManager.startEdit();
		contentManager.updateContent(Content.EditQuiz);
	};

	const toggleIsShare = () => {
		isShare = !isShare;
	};
</script>

{#if !isDataReady && !isDelayTimeout}
	<CalculateLoading />
{:else if !isShare}
	<div class="h-screen flex flex-col relative">
		<div class="fixed top-0 w-full h-1 beyondx-gradient-bg" />
		<div class="flex-1 flex flex-col items-center pt-10">
			<div class="flex-1 flex flex-col items-center container">
				<div class="flex w-full items-start md:items-center">
					<h7 class="typo-h7 font-bold grow"
						>จำลองผล #เลือกตั้ง66 <br class="inline md:hidden" /> จากคำตอบของคุณ</h7
					>
					<a
						href="{base}/quiz"
						class="cursor-pointer flex"
						on:click={onEditQuiz}
					>
						<span class="typo-b5 text-byx-blue ml-1 underline text-right"
							>แก้ไขคำตอบ</span
						>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="ml-1"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M19.0575 6.74987C19.3392 6.46852 19.4974 6.08674 19.4974 5.68862C19.4974 5.29051 19.3392 4.90872 19.0575 4.62737L16.3725 1.94237C16.0911 1.66071 15.7094 1.50244 15.3112 1.50244C14.9131 1.50244 14.5314 1.66071 14.25 1.94237L3 13.1924V17.9999H7.8075L19.0575 6.74987ZM15.3075 2.99987L18 5.69237L15.75 7.94237L13.0575 5.24987L15.3075 2.99987ZM4.5 16.4999V13.8074L12 6.30737L14.6925 8.99987L7.1925 16.4999H4.5Z"
								fill="#0000FF"
							/>
						</svg>
					</a>
				</div>
				<div class="w-full flex justify-center items-center mt-3">
					<button
						class="w-1/2 cetner pb-1 pl-4 border-b-2 cursor-pointer {selectedTab ===
						Tabs.Map
							? 'font-bold border-black'
							: ''}"
						on:click={() => onTabChange(Tabs.Map)}
					>
						รายเขต
					</button>
					<button
						class="w-1/2 cetner pb-1 pl-4 border-b-2 cursor-pointer {selectedTab ===
						Tabs.Graph
							? 'font-bold border-black'
							: ''}"
						on:click={() => onTabChange(Tabs.Graph)}
					>
						รวมจำนวน ส.ส.
					</button>
				</div>
				{#if selectedTab === Tabs.Map}
					<div
						class="grow relative w-full mb-[112px]"
						transition:fly={{ x: -400 }}
					>
						<WaffleMap />
					</div>
				{:else}
					<div class="w-full" transition:fly={{ x: 400 }}>
						<Graph
							elect66Record={$representatives}
							elect62Record={$resultElect62}
						/>
					</div>
				{/if}
			</div>
		</div>
		<GovernmentEstablish
			representativeRecord={$representatives}
			{governmentParties}
			{oppositionParties}
			{governmentPoints}
			toggleSide={party.toggleSide}
			{toggleIsShare}
		/>
	</div>
{:else}
	<div class="h-full flex flex-col">
		<election-header />
		<div class="sticky top-0 w-full h-1 beyondx-gradient-bg" />
		<div class="flex-1 flex justify-center items-center">
			<Share
				representativeRecord={$representatives}
				{governmentParties}
				{oppositionParties}
				{governmentPoints}
				{toggleIsShare}
			/>
		</div>
		<election-bottom index-path={base} about-path="{base}/about" />
		<election-footer />
	</div>
{/if}

<style lang="postcss">
	.container {
		@apply w-full max-w-[698px] px-6;
	}
</style>
