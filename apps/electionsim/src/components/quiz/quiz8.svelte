<script lang="ts">
	import { Content, contentManager } from '../../stores/content';
	import { ScaleAns, input } from '../../stores/input';

	$: ans = $input.input.quiz8;
</script>

<div class="text-left flex flex-col w-[312px] md:w-[650px] py-10">
	<p class="typo-h7 text-xl">#8: อื่นๆ</p>
	<h6 class="typo-h6 font-bold">
		ปัจจัยที่ว่า จะทำให้คน เปลี่ยนใจจากพรรคไหน ไปเลือกพรรคไหนแทน?
	</h6>
	<div class="w-full flex flex-col items-center mt-20">
		<div
			class="w-full flex flex-col items-start justify-between mt-1 space-y-4"
		>
			<div class="w-full">
				<h4 class="typo-b4 font-bold">เปลี่ยนใจจากเลือก...</h4>
				<div
					class="border border-black mt-2 w-full px-4 py-2 flex items-center"
				>
					<h3 class="typo-b3 font-bold flex-1 opacity-30">เลือกพรรค</h3>
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
							fill="#161616"
						/>
					</svg>
				</div>
			</div>
			<div class="w-full">
				<h4 class="typo-b4 font-bold">ไปเลือก...</h4>
				<div
					class="border border-black mt-2 w-full px-4 py-2 flex items-center"
				>
					<h3 class="typo-b3 font-bold flex-1 opacity-30">เลือกพรรค</h3>
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
							fill="#161616"
						/>
					</svg>
				</div>
			</div>
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
		</div>
		<div class="w-full mt-20 flex items-center justify-between space-x-5">
			<button
				class="typo-b3 px-4 py-2 border flex items-center justify-between border-black w-full"
				on:click={() => {
					contentManager.updateContent(Content.Quiz7);
				}}
			>
				<div
					class="border-1 border-t border-l w-2 h-2 -rotate-45 border-black"
				/>
				<b>ย้อนกลับ</b>
			</button>
			<button
				class="typo-b3 beyondx-gradient-bg text-white py-2 px-4 w-full flex items-center justify-between font-bold"
				on:click={() => {
					contentManager.updateContent(Content.Calculate);
				}}
			>
				ส่งข้อมูล
			</button>
		</div>
	</div>
</div>
