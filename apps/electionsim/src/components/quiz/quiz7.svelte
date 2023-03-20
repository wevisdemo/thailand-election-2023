<script lang="ts">
	import { Content, contentManager } from '../../stores/content';
	import { input } from '../../stores/input';

	$: ans = $input.input.quiz7;
</script>

<div class="text-left flex flex-col w-[312px] md:w-[650px] py-10">
	<p class="typo-h7 text-xl">#7: อื่นๆ</p>
	<h6 class="typo-h6 font-bold">
		คุณคิดว่านอกจากปัจจัยเหล่านี้ จะมีอย่างอื่นที่ทำให้คนไทย เปลี่ยนใจไปเลือก
		ส.ส. เขต พรรคอื่นอีกไหม?
	</h6>
	<div class="w-full flex flex-col items-center mt-20">
		<div
			class="w-full flex flex-col items-center justify-between mt-1 space-y-4"
		>
			<div
				class="border border-black w-full px-4 py-2 flex items-center cursor-pointer {ans
					? 'beyondx-gradient-bg text-white'
					: ''}"
				on:click={() => input.updateQuize7(true)}
			>
				<h3 class="typo-b3 font-bold flex-1">ยังมีอีก</h3>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M18.72 6.71953L9.59999 15.8395L4.31999 10.5595L3.23999 11.6395L8.51999 16.9195L9.59999 17.9995L19.8 7.79953L18.72 6.71953Z"
						fill={ans ? '#fff' : '#161616'}
					/>
				</svg>
			</div>
			<div
				class="border border-black w-full px-4 py-2 flex items-center cursor-pointer {!ans &&
				ans !== undefined
					? 'beyondx-gradient-bg text-white'
					: ''}"
				on:click={() => input.updateQuize7(false)}
			>
				<h3 class="typo-b3 font-bold flex-1">คงไม่มี/ยังนึกไม่ออก</h3>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M18.72 6.71953L9.59999 15.8395L4.31999 10.5595L3.23999 11.6395L8.51999 16.9195L9.59999 17.9995L19.8 7.79953L18.72 6.71953Z"
						fill={!ans && ans !== undefined ? '#fff' : '#161616'}
					/>
				</svg>
			</div>
		</div>
		<div class="w-full mt-20 flex items-center justify-between space-x-5">
			<button
				class="typo-b3 px-4 py-2 border flex items-center justify-between border-black w-full"
				on:click={() => {
					contentManager.updateContent(Content.Quiz6);
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
						contentManager.updateContent(Content.Quiz8);
					}}
				>
					<b>ต่อไป</b>
					<div
						class="border-1 border-t border-r w-2 h-2 rotate-45 border-white"
					/>
				</button>
			{:else}
				<button
					class="typo-b3 beyondx-gradient-bg text-white py-2 px-4 w-full flex items-center justify-between font-bold"
					on:click={() => {
						contentManager.updateContent(Content.Calculate);
					}}
				>
					ส่งข้อมูล
				</button>
			{/if}
		</div>
	</div>
</div>
