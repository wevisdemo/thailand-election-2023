<script lang="ts">
	import { Content, contentManager } from '../../stores/content';
	import { ScaleAns, input } from '../../stores/input';

	$: ans = $input.input.quiz3;
</script>

<div class="text-left flex flex-col w-[312px] md:w-[650px] py-10">
	<p class="typo-h7 text-xl">#3: Strategic Voting</p>
	<h6 class="typo-h6 font-bold">
		จากกระแส Strategic Voting ระหว่างพรรคเพื่อไทย และพรรคก้าวไกล คุณคิดว่า
		ผลโหวตจะถูกเทไปทางใด
	</h6>
	<span class="flex items-center space-x-2 cursor-pointer">
		<h4 class="typo-b4 text-blue underline text-byx-blue">
			เรื่องนี้มีผลอย่างไร?
		</h4>
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
	</span>
	<div class="w-full flex flex-col items-center mt-20">
		<div class="w-full flex justify-between">
			<p class="typo-h7 text-xl">เทไปให้พรรค<br class="md:hidden" />ก้าวไกล</p>
			<p class="typo-h7 text-xl text-right">
				เทไปให้พรรค<br class="md:hidden" />เพื่อไทย
			</p>
		</div>
		<div class="w-full flex items-center justify-between mt-1">
			<div
				class="border border-black w-10 h-10 rounded-full cursor-pointer {ans ==
				ScaleAns.Scale0
					? 'bg-byx-red'
					: ''}"
				on:click={() => input.updateQuize3(ScaleAns.Scale0)}
			/>
			<div
				class="border border-black w-9 h-9 rounded-full cursor-pointer {ans ==
				ScaleAns.Scale10
					? 'bg-byx-red'
					: ''}"
				on:click={() => input.updateQuize3(ScaleAns.Scale10)}
			/>
			<div
				class="border border-black w-8 h-8 rounded-full cursor-pointer {ans ==
				ScaleAns.Scale30
					? 'bg-byx-red'
					: ''}"
				on:click={() => input.updateQuize3(ScaleAns.Scale30)}
			/>
			<div
				class="border border-black w-7 h-7 rounded-full cursor-pointer {ans ==
				ScaleAns.Scale50
					? 'bg-byx-red'
					: ''}"
				on:click={() => input.updateQuize3(ScaleAns.Scale50)}
			/>
			<div
				class="border border-black w-8 h-8 rounded-full cursor-pointer {ans ==
				ScaleAns.Scale70
					? 'bg-byx-red'
					: ''}"
				on:click={() => input.updateQuize3(ScaleAns.Scale70)}
			/>
			<div
				class="border border-black w-9 h-9 rounded-full cursor-pointer {ans ==
				ScaleAns.Scale90
					? 'bg-byx-red'
					: ''}"
				on:click={() => input.updateQuize3(ScaleAns.Scale90)}
			/>
			<div
				class="border border-black w-10 h-10 rounded-full cursor-pointer {ans ==
				ScaleAns.Scale100
					? 'bg-byx-red'
					: ''}"
				on:click={() => input.updateQuize3(ScaleAns.Scale100)}
			/>
		</div>
		<h4 class="typo-b4 mt-2">เลือกพรรค</h4>
		<h6 class="typo-h6 font-bold">80%</h6>
		<div class="w-full mt-20 flex items-center justify-between space-x-5">
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
		</div>
	</div>
</div>
