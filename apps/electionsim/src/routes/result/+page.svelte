<script lang="ts">
	import { onMount } from 'svelte';
	import { districtPopularity } from '../../stores/district-popularity';
	import { party } from '../../stores/party';
	import type { RepresentativeRecord } from '../../stores/representatives';
	import { PartySide } from '@thailand-election-2023/database';
	import { representatives } from '../../stores/representatives';
	import { Content, contentManager } from '../../stores/content';
	import GovernmentEstablish from '../../components/result/government-establish.svelte';
	import Graph from '../../components/result/graph/graph.svelte';

	enum Tabs {
		Map = 'map',
		Graph = 'graph',
	}

	$: senateCount = 250;
	$: selectedTab = Tabs.Map;

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
		contentManager.updateContent(Content.EditQuiz);
	};

	onMount(async () => {
		await party.load();
		console.log($party);
		await districtPopularity.load();
		console.log($districtPopularity);
		console.log($representatives);
	});
</script>

<div class="h-screen flex flex-col">
	<div class="w-full h-1 beyondx-gradient-bg" />
	<div class="flex-1 flex flex-col items-center">
		<div class="flex flex-col w-[312px] md:w-[650px] mt-10">
			<div class="flex justify-center items-center">
				<div class="flex items-center">
					<h7 class="typo-h7 font-bold">จำลองผล #เลือกตั้ง66 จากคำตอบของคุณ</h7>
					<a
						href="/electionsim/quiz"
						class="cursor-pointer flex"
						on:click={onEditQuiz}
					>
						<h5 class="typo-b5 text-byx-blue ml-5 underline">แก้ไขคำตอบ</h5>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="ml-[5px]"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1 19.9999H22V21.4999H1V19.9999ZM19.0575 6.74987C19.3392 6.46852 19.4974 6.08674 19.4974 5.68862C19.4974 5.29051 19.3392 4.90872 19.0575 4.62737L16.3725 1.94237C16.0911 1.66071 15.7094 1.50244 15.3112 1.50244C14.9131 1.50244 14.5314 1.66071 14.25 1.94237L3 13.1924V17.9999H7.8075L19.0575 6.74987ZM15.3075 2.99987L18 5.69237L15.75 7.94237L13.0575 5.24987L15.3075 2.99987ZM4.5 16.4999V13.8074L12 6.30737L14.6925 8.99987L7.1925 16.4999H4.5Z"
								fill="#0000FF"
							/>
						</svg>
					</a>
				</div>
			</div>
			<div class="w-full flex justify-center items-center mt-3">
				<div
					class="w-1/2 cetner pb-1 pl-4 border-b-2 cursor-pointer {selectedTab ===
					Tabs.Map
						? 'font-bold border-black'
						: ''}"
					on:click={() => onTabChange(Tabs.Map)}
				>
					แผนที่
				</div>
				<div
					class="w-1/2 cetner pb-1 pl-4 border-b-2 cursor-pointer {selectedTab ===
					Tabs.Graph
						? 'font-bold border-black'
						: ''}"
					on:click={() => onTabChange(Tabs.Graph)}
				>
					กราฟ
				</div>
			</div>
			{#if selectedTab === Tabs.Graph}
				<Graph representativeRecord={$representatives} />
			{/if}
		</div>
	</div>
	<GovernmentEstablish
		{senateCount}
		representativeRecord={$representatives}
		{governmentParties}
		{oppositionParties}
		{governmentPoints}
	/>
</div>
