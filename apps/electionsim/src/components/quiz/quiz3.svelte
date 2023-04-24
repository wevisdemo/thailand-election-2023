<script lang="ts">
	import { base } from '$app/paths';
	import { Content, contentManager } from '../../stores/content';
	import { ScaleAns, input } from '../../stores/input';
	import { quiz3ToWord } from '../../utils/mapInputToWord';
	import Quiz3Info from '../infomation/quiz3Info.svelte';
	import ModalInfo from '../modal.svelte';

	$: ans = $input.input.quiz3;
	$: [word, percent] = quiz3ToWord(ans);
	$: isInfoOpen = false;
	$: isFinished = $contentManager.isFinished;

	const toggleIsInfoOpen = () => (isInfoOpen = !isInfoOpen);
</script>

{#if isInfoOpen}
	<ModalInfo>
		<Quiz3Info toggleModal={toggleIsInfoOpen} />
	</ModalInfo>
{/if}

<div
	class="text-left h-full grow flex flex-col justify-between w-full max-w-[698px] md:max-h-[650px] my-auto px-6 py-0 md:py-10"
>
	<div>
		<p class="typo-h7 text-xl">#3: Strategic Voting</p>
		<h6 class="typo-h6 font-bold">
			จากกระแสการโหวตเชิงยุทธศาสตร์ระหว่าง<span class="party-text-pt"
				>พรรคเพื่อไทย</span
			>และ<span class="party-text-kk">พรรคก้าวไกล</span>
			คุณคิดว่าผลโหวตจะถูกเทไปทางใด?
		</h6>
		<button
			class="flex items-center space-x-2 cursor-pointer"
			on:click={toggleIsInfoOpen}
		>
			<span class="typo-b4 text-blue underline text-byx-blue">
				เรื่องนี้มีผลอย่างไร?
			</span>
			<svg
				width="14"
				height="14"
				viewBox="0 0 14 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 7C0 10.9 3.1 14 7 14C10.9 14 14 10.9 14 7C14 3.1 10.9 0 7 0C3.1 0 0 3.1 0 7ZM1 7C1 3.7 3.7 1 7 1C10.3 1 13 3.7 13 7C13 10.3 10.3 13 7 13C3.7 13 1 10.3 1 7ZM7.5 10V5.5H5.5V6.5H6.5V10H5V11H9V10H7.5ZM6.2 3.3C6.2 2.8 6.6 2.5 7 2.5C7.4 2.5 7.8 2.7 7.8 3.2C7.8 3.7 7.4 4 7 4C6.6 4 6.2 3.8 6.2 3.3Z"
					fill="#0000FF"
				/>
			</svg>
		</button>
	</div>
	<div class="w-full flex flex-col items-center">
		<div class="w-full max-w-[400px]">
			<div class="w-full flex justify-between">
				<p class="typo-h7 text-xl">
					เทไปให้<br />ก้าวไกล
				</p>
				<p class="typo-h7 text-xl text-right">
					เทไปให้<br />เพื่อไทย
				</p>
			</div>
			<div class="w-full flex items-center justify-between mt-1">
				<button
					class="border border-black w-10 h-10 rounded-full cursor-pointer {ans ==
					ScaleAns.Scale0
						? 'bg-byx-red'
						: ''}"
					on:click={() => input.updateQuize3(ScaleAns.Scale0)}
				/>
				<button
					class="border border-black w-9 h-9 rounded-full cursor-pointer {ans ==
					ScaleAns.Scale10
						? 'bg-byx-red'
						: ''}"
					on:click={() => input.updateQuize3(ScaleAns.Scale10)}
				/>
				<button
					class="border border-black w-8 h-8 rounded-full cursor-pointer {ans ==
					ScaleAns.Scale30
						? 'bg-byx-red'
						: ''}"
					on:click={() => input.updateQuize3(ScaleAns.Scale30)}
				/>
				<button
					class="border border-black w-7 h-7 rounded-full cursor-pointer {ans ==
					ScaleAns.Scale50
						? 'bg-byx-red'
						: ''}"
					on:click={() => input.updateQuize3(ScaleAns.Scale50)}
				/>
				<button
					class="border border-black w-8 h-8 rounded-full cursor-pointer {ans ==
					ScaleAns.Scale70
						? 'bg-byx-red'
						: ''}"
					on:click={() => input.updateQuize3(ScaleAns.Scale70)}
				/>
				<button
					class="border border-black w-9 h-9 rounded-full cursor-pointer {ans ==
					ScaleAns.Scale90
						? 'bg-byx-red'
						: ''}"
					on:click={() => input.updateQuize3(ScaleAns.Scale90)}
				/>
				<button
					class="border border-black w-10 h-10 rounded-full cursor-pointer {ans ==
					ScaleAns.Scale100
						? 'bg-byx-red'
						: ''}"
					on:click={() => input.updateQuize3(ScaleAns.Scale100)}
				/>
			</div>
			<div class="h-28 text-center mt-1">
				{#if ans}
					<h4 class="typo-b4">{word}</h4>
					<h6 class="typo-h6 font-bold">{percent}</h6>
				{/if}
			</div>
		</div>
	</div>
	<div class="w-full flex items-center justify-between space-x-5">
		{#if isFinished}
			<a
				href="{base}/result"
				class="typo-b3 px-4 py-2 border border flex items-center justify-between border-black w-full text-white bg-black"
			>
				<b>บันทึกคำตอบ</b>
				<div
					class="border-1 border-t border-r w-2 h-2 rotate-45 border-white"
				/>
			</a>
		{:else}
			<button
				class="typo-b3 px-4 py-2 border flex items-center justify-between border-black w-full"
				on:click={() => {
					contentManager.updateContent(Content.Quiz2);
				}}
			>
				<div
					class="border-1 border-t border-l w-2 h-2 -rotate-45 border-black"
				/>
				<b>ย้อนกลับ</b>
			</button>
			{#if ans}
				<button
					class="typo-b3 px-4 py-2 border border flex items-center justify-between border-black w-full text-white bg-black"
					on:click={() => {
						contentManager.updateContent(Content.Quiz4);
					}}
				>
					<b>ต่อไป</b>
					<div
						class="border-1 border-t border-r w-2 h-2 rotate-45 border-white"
					/>
				</button>
			{:else}
				<button
					class="typo-b3 px-4 py-2 border border flex items-center justify-between border-black w-full text-black"
					on:click={() => {
						contentManager.updateContent(Content.Quiz4);
					}}
				>
					<b>ข้าม</b>
					<div
						class="border-1 border-t border-r w-2 h-2 rotate-45 border-black"
					/>
				</button>
			{/if}
		{/if}
	</div>
</div>
