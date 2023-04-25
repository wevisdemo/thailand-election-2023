<script lang="ts">
	import electMap from '../../images/elect-map.svg';
	import compareChart from '../../images/compare-chart.svg';
	import { Content, contentManager } from '../../stores/content';
	import { slide } from 'svelte/transition';

	let isInfor1Open = false;
	let isInfor2Open = false;
	let isInfor3Open = false;
</script>

<div class="text-left flex flex-col w-full max-w-[698px] px-6 py-0 md:py-10">
	<img src={electMap} alt="" class="m-auto max-w-[400px] w-full" />
	<h2 class="typo-h4 text-left mt-5">
		<b>
			ย้อนดูผล <span class="beyonx-text-gradient">#เลือกตั้ง62</span>
			แล้วปรับฐานให้พร้อมวิเคราะห์
			<span class="beyonx-text-gradient">#เลือกตั้ง66</span>
		</b>
	</h2>
	<p class="typo-b4 text-left mt-10">
		ในการทดลองนี้ <b>เราจะใช้ผลการเลือกตั้ง ปี 62 เป็นตัวตั้ง</b>
		และคำนวณปัจจัยต่างๆ ที่ส่งผลกับการเลือกตั้งให้คุณได้มีส่วนร่วมเพื่อวิเคราะห์ฉากทัศน์ต่างๆ
		ที่เป็นไปได้ในการเลือกตั้งปี 66 ครั้งนี้
		<br />
		<br />
		แต่ก่อนจะเริ่มคำนวณปัจจัยต่างๆ จะ<b>ต้องปรับฐานของการคำนวณ</b>
		เพื่อให้สามารถนำข้อมูลมาเปรียบเทียบกันได้เสียก่อน
		<br />
		<br />
		เราใช้สมมติฐานต่อไปนี้
	</p>

	<hr class="my-10" />

	<h7 class="typo-h7">
		<b>
			1. จาก <span class="beyonx-text-gradient">จัดสรรปันส่วนผสม</span> กลับสู่
			<span class="beyonx-text-gradient">เลือกคนที่รัก เลือกพรรคที่ชอบ</span>
		</b>
	</h7>
	<button
		class="flex items-center space-x-1 cursor-pointer"
		on:click={() => {
			isInfor1Open = !isInfor1Open;
		}}
	>
		{#if isInfor1Open}
			<span class="typo-b4 text-blue underline text-byx-blue">ปิดส่วนนี้</span>
			<svg
				width="16"
				height="17"
				viewBox="0 0 16 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class={isInfor1Open ? 'rotate-180' : ''}
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.32 11.36L3.52 6.55997L4.192 5.88797L8.32 10.016L12.448 5.88797L13.12 6.55997L8.32 11.36Z"
					fill="#0000FF"
				/>
			</svg>
		{:else}
			<span class="typo-b4 text-blue underline text-byx-blue"
				>อ่านเพิ่มเติม</span
			>
			<svg
				width="16"
				height="17"
				viewBox="0 0 16 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.32 11.36L3.52 6.55997L4.192 5.88797L8.32 10.016L12.448 5.88797L13.12 6.55997L8.32 11.36Z"
					fill="#0000FF"
				/>
			</svg>
		{/if}
	</button>
	{#if isInfor1Open}
		<div transition:slide>
			<p class="typo-b4 mt-5">
				การเลือกตั้ง 66 มีการเปลี่ยนแปลงกติกาหลักๆ จากปี 62 คือการ <b
					>กลับไปใช้ระบบบัตร 2 ใบ</b
				>
				แบบ “เลือกคนที่รัก เลือกพรรคที่ชอบ” คล้ายกติกาปี 40 ที่มีโควตาสำหรับจำนวน
				ส.ส. เขตและ ส.ส. บัญชีรายชื่อแยกจากกันชัดเจน
			</p>
			<p class="typo-b4 mt-5">
				ในการปรับฐานนี้ เราจะเรานำกติกาของการเลือกตั้งปี 66
				ไปลองใช้กับข้อมูลคะแนนเสียงจากปี 62 โดย<b>
					สมมติว่าทุกคนกาบัตรเลือกตั้งทั้งสองใบเหมือนกับที่กาบัตรใบเดียวเมื่อปี
					62
				</b> และลองคำนวณผลใหม่ตามกติกาการเลือกตั้งปี 66
			</p>
		</div>
	{/if}

	<hr class="my-10" />

	<h7 class="typo-h7">
		<b>
			2. แบ่งเขตเลือกตั้งใหม่
			<span class="beyonx-text-gradient">จากเดิม 350 เขต</span> เป็น
			<span class="beyonx-text-gradient">400 เขต </span>
		</b>
	</h7>
	<button
		class="flex items-center space-x-1 cursor-pointer"
		on:click={() => {
			isInfor2Open = !isInfor2Open;
		}}
	>
		{#if isInfor2Open}
			<span class="typo-b4 text-blue underline text-byx-blue">ปิดส่วนนี้</span>
			<svg
				width="16"
				height="17"
				viewBox="0 0 16 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class={isInfor2Open ? 'rotate-180' : ''}
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.32 11.36L3.52 6.55997L4.192 5.88797L8.32 10.016L12.448 5.88797L13.12 6.55997L8.32 11.36Z"
					fill="#0000FF"
				/>
			</svg>
		{:else}
			<span class="typo-b4 text-blue underline text-byx-blue"
				>อ่านเพิ่มเติม</span
			>
			<svg
				width="16"
				height="17"
				viewBox="0 0 16 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.32 11.36L3.52 6.55997L4.192 5.88797L8.32 10.016L12.448 5.88797L13.12 6.55997L8.32 11.36Z"
					fill="#0000FF"
				/>
			</svg>
		{/if}
	</button>
	{#if isInfor2Open}
		<div transition:slide>
			<p class="typo-b4 mt-5">
				ความเปลี่ยนแปลงอีกอย่างในการเลือกตั้ง 66 ปีนี้คือจำนวน ส.ส. เขต
				ที่เพิ่มจำนวน<b>จาก 350 คน เป็น 400 คน</b>
				ทำให้ต้องมีการแบ่งเขตเลือกตั้งใหม่
			</p>
			<p class="typo-b4 mt-5">
				ในแบบจำลองนี้ เราจะนำผลการเลือกตั้งปี 62
				มาประมาณเป็นฐานการคำนวณใหม่สำหรับแบบจำลองผลเลือกตั้งปี 66 ด้วยวิธีดังนี้
			</p>
			<ol class="pl-5 list-decimal mt-5">
				<li>ดูผลคะแนนการเลือกตั้งจากปี 62 ย่อยลงไปในระดับตำบล</li>
				<li>นำคะแนนของแต่ละตำบลมารวมกันตามเขตเลือกตั้งใหม่</li>
				<li>คะแนนรวมที่ได้ให้เป็นผลจำลองคะแนนของเขตเลือกตั้งนั้น</li>
			</ol>
			<p class="typo-b4 mt-5">
				ซึ่งวิธีนี้ อาจพบความคลาดเคลื่อนจากการแบ่งเขตเลือกตั้งปี 66
				ที่มีการแบ่งบางตำบลออกเป็นหลายส่วน เนื่องจากตำบลเหล่านี้จะถูกนับซ้ำ
			</p>
		</div>
	{/if}

	<hr class="my-10" />

	<h7 class="typo-h7">
		<b>
			3. ถ้า<span class="beyonx-text-gradient">พรรคเพื่อไทย</span>ส่งผู้สมัคร
			ครบทุกเขตเมื่อปี 62?
		</b>
	</h7>
	<button
		class="flex items-center space-x-1 cursor-pointer"
		on:click={() => {
			isInfor3Open = !isInfor3Open;
		}}
	>
		{#if isInfor3Open}
			<span class="typo-b4 text-blue underline text-byx-blue">ปิดส่วนนี้</span>
			<svg
				width="16"
				height="17"
				viewBox="0 0 16 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class={isInfor3Open ? 'rotate-180' : ''}
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.32 11.36L3.52 6.55997L4.192 5.88797L8.32 10.016L12.448 5.88797L13.12 6.55997L8.32 11.36Z"
					fill="#0000FF"
				/>
			</svg>
		{:else}
			<span class="typo-b4 text-blue underline text-byx-blue"
				>อ่านเพิ่มเติม</span
			>
			<svg
				width="16"
				height="17"
				viewBox="0 0 16 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M8.32 11.36L3.52 6.55997L4.192 5.88797L8.32 10.016L12.448 5.88797L13.12 6.55997L8.32 11.36Z"
					fill="#0000FF"
				/>
			</svg>
		{/if}
	</button>
	{#if isInfor3Open}
		<div transition:slide>
			<p class="typo-b4 mt-5">
				ในการเลือกตั้งปี 62 พรรคไทยรักษาชาติ แยกตัวออกมาจากพรรคเพื่อไทย ทำให้
				<b
					>พรรคเพื่อไทยส่งผู้สมัครรับเลือกตั้ง ส.ส. เขต เพียง 258 เขต จาก 350
					เขต</b
				>
			</p>
			<p class="typo-b4 mt-5">
				เพื่อสร้างแบบจำลองผลเลือกตั้ง 66 ที่แม่นยำขึ้น
				เราจึงต้องประมาณการผลเลือกตั้ง 62 โดย<b
					>สมมติว่าพรรคเพื่อไทยส่งผู้สมัครครบทุกเขตเลือกตั้ง</b
				> โดยใช้วิธีประมาณคะแนนของพรรคเพื่อไทยในเขตที่ไม่ได้ลงสมัครจากเขตเลือกตั้งรอบข้างที่มีพรรคเพื่อไทยลงสมัครรับเลือกตั้ง
			</p>
		</div>
	{/if}

	<hr class="my-10" />

	<h7 class="typo-h7">
		<b> หลังปรับฐานแล้ว จะได้คะแนนเสียงตั้งต้นใหม่ดังนี้ </b>
	</h7>

	<img
		src={compareChart}
		alt="beyondx"
		class="my-10 w-full max-w-[350px] mx-auto"
	/>

	<p class="typo-b4">และนี่คือคะแนนตั้งต้นที่เราจะนำไปใช้คำนวณแบบจำลองต่อไป</p>

	<div class="w-full mt-10 flex items-center justify-between space-x-5">
		<button
			class="typo-b3 px-4 py-2 border border flex items-center justify-between border-black w-full"
			on:click={() => {
				contentManager.updateContent(Content.Analytics);
			}}
		>
			<div class="border-1 border-t border-l w-2 h-2 -rotate-45 border-black" />
			<b>ย้อนกลับ</b>
		</button>
		<button
			class="typo-b3 px-4 py-2 border border flex items-center justify-between border-black w-full text-white bg-black"
			on:click={() => {
				contentManager.updateContent(Content.ReCalculate);
			}}
		>
			<b>ต่อไป</b>
			<div class="border-1 border-t border-r w-2 h-2 rotate-45 border-white" />
		</button>
	</div>
</div>
