<script lang="ts">
	import { base } from '$app/paths';
	import { Content, contentManager } from '../../stores/content';
	import { ScaleAns, input } from '../../stores/input';
	import { quiz8ToWord } from '../../utils/mapInputToWord';
	import Dropdown from '../dropdown.svelte';
	import type { Party } from '../../stores/party';

	export let parties: Party[];

	const whitelistParties = [
		'เพื่อไทย',
		'ก้าวไกล',
		'พลังประชารัฐ',
		'ประชาธิปัตย์',
		'ภูมิใจไทย',
		'รวมไทยสร้างชาติ',
	];

	$: ans = $input.input.quiz8;
	$: [word, percent] = quiz8ToWord(ans?.percent);
	$: isFinished = $contentManager.isFinished;
	$: partiesOption = parties.filter(({ Name }) =>
		whitelistParties.includes(Name)
	);

	const onFromSelect = (newParty: string) => {
		input.updateQuize8From(newParty);
	};

	const onToSelect = (newParty: string) => {
		input.updateQuize8To(newParty);
	};
</script>

<div
	class="text-left h-full grow flex flex-col justify-between w-full max-w-[698px] px-6 py-0 md:py-10"
>
	<div>
		<p class="typo-h7 text-xl">#8: อื่นๆ</p>
		<h6 class="typo-h6 font-bold">
			ปัจจัยที่ว่า จะทำให้คนเปลี่ยนใจจากพรรคไหน ไปเลือกพรรคไหนแทน?
		</h6>
	</div>
	<div
		class="w-full max-w-[400px] mx-auto flex flex-col items-center justify-between my-10 space-y-5"
	>
		<!-- <div
			class="w-full flex flex-col justify-between mt-1 items-center"
		> -->
		<div class="w-full">
			<h4 class="typo-b4 font-bold">เปลี่ยนใจจากเลือก...</h4>
			<Dropdown
				selectedInput={ans?.from}
				options={partiesOption.filter(({ Name }) => Name !== ans?.to)}
				onSelect={onFromSelect}
			/>
		</div>
		<div class="w-full">
			<h4 class="typo-b4 font-bold">ไปเลือก...</h4>
			<Dropdown
				selectedInput={ans?.to}
				options={partiesOption.filter(({ Name }) => Name !== ans?.from)}
				onSelect={onToSelect}
			/>
		</div>
		<div class="w-full">
			<div class="w-full">
				<h4 class="typo-b4 font-bold">มีคนเปลี่ยนใจมากแค่ไหน?</h4>
				<div class="w-full flex justify-between my-1">
					<p class="typo-h7 text-xl">ไม่เปลี่ยนเลย</p>
					<p class="typo-h7 text-xl">เปลี่ยนใจทุกคน</p>
				</div>
				<div class="w-full flex items-center justify-between mt-1">
					<div
						class="border border-black w-10 h-10 rounded-full cursor-pointer {ans?.percent ==
						ScaleAns.Scale0
							? 'bg-byx-red'
							: ''}"
						on:click={() => input.updateQuize8Percent(ScaleAns.Scale0)}
					/>
					<div
						class="border border-black w-9 h-9 rounded-full cursor-pointer {ans?.percent ==
						ScaleAns.Scale10
							? 'bg-byx-red'
							: ''}"
						on:click={() => input.updateQuize8Percent(ScaleAns.Scale10)}
					/>
					<div
						class="border border-black w-8 h-8 rounded-full cursor-pointer {ans?.percent ==
						ScaleAns.Scale30
							? 'bg-byx-red'
							: ''}"
						on:click={() => input.updateQuize8Percent(ScaleAns.Scale30)}
					/>
					<div
						class="border border-black w-7 h-7 rounded-full cursor-pointer {ans?.percent ==
						ScaleAns.Scale50
							? 'bg-byx-red'
							: ''}"
						on:click={() => input.updateQuize8Percent(ScaleAns.Scale50)}
					/>
					<div
						class="border border-black w-8 h-8 rounded-full cursor-pointer {ans?.percent ==
						ScaleAns.Scale70
							? 'bg-byx-red'
							: ''}"
						on:click={() => input.updateQuize8Percent(ScaleAns.Scale70)}
					/>
					<div
						class="border border-black w-9 h-9 rounded-full cursor-pointer {ans?.percent ==
						ScaleAns.Scale90
							? 'bg-byx-red'
							: ''}"
						on:click={() => input.updateQuize8Percent(ScaleAns.Scale90)}
					/>
					<div
						class="border border-black w-10 h-10 rounded-full cursor-pointer {ans?.percent ==
						ScaleAns.Scale100
							? 'bg-byx-red'
							: ''}"
						on:click={() => input.updateQuize8Percent(ScaleAns.Scale100)}
					/>
				</div>
			</div>
			<div class="h-28 text-center mt-1">
				{#if ans}
					<h4 class="typo-b4">{word}</h4>
					<h6 class="typo-h6 font-bold">{percent}</h6>
				{/if}
			</div>
		</div>
		<!-- </div> -->
	</div>
	<div class="w-full flex items-center justify-between space-x-5">
		{#if isFinished}
			<button
				class="hover:opacity-1 typo-b3 px-4 py-2 border border flex items-center justify-between border-black w-full text-white bg-black"
				on:click={() => {
					contentManager.updateContent(Content.EditQuiz);
				}}
			>
				<b>บันทึกคำตอบ</b>
				<div
					class="border-1 border-t border-r w-2 h-2 rotate-45 border-white"
				/>
			</button>
		{:else}
			<button
				class="hover:opacity-1 typo-b3 px-4 py-2 border flex items-center justify-between border-black w-full"
				on:click={() => {
					contentManager.updateContent(Content.Quiz7);
				}}
			>
				<div
					class="border-1 border-t border-l w-2 h-2 -rotate-45 border-black"
				/>
				<b>ย้อนกลับ</b>
			</button>
			<a
				href="{base}/result"
				class="typo-b3 beyondx-gradient-bg text-white py-2 px-4 w-full flex items-center justify-between font-bold"
				on:click={() => {
					contentManager.toggleFinished();
				}}
			>
				ส่งข้อมูล
				<div
					class="border-1 border-t border-r w-2 h-2 rotate-45 border-white"
				/>
			</a>
		{/if}
	</div>
</div>
