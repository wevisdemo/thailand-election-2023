<script lang="ts">
	import electMap from '../../images/elect-map.png';
	import compareChart from '../../images/compare-chart.png';
	import { Content, contentManager } from '../../stores/content';
</script>

<div class="text-left flex flex-col w-[312px] md:w-[650px] py-10">
	<img src={electMap} alt="beyondx" />
	<h2 class="typo-h4 text-left">
		<b>
			ย้อนดูผล <span class="beyonx-text-gradient">#เลือกตั้ง62</span>
			แล้วปรับฐานให้พร้อม วิเคราะห์
			<span class="beyonx-text-gradient">#เลือกตั้ง66</span>
		</b>
	</h2>
	<p class="typo-b4 text-left my-5">
		ในการทดลองนี้ <b>เราจะใช้ผลการเลือกตั้ง ปี 62 เป็นตัวตั้ง</b>
		และคำนวณปัจจัยต่างๆ ที่ส่งผลกับการเลือกตั้งให้คุณได้มีส่วนร่วมเพื่อวิเคราะห์ฉากทัศน์ต่างๆ
		ที่เป็นไปได้ ในการเลือกตั้งปี 66 ครั้งนี้
		<br />
		<br />
		แต่ก่อนจะเริ่มคำนวณปัจจัยต่างๆ จะ<b>ต้องปรับฐานของการคำนวณ</b>ให้สามารถนำ
		ข้อมูลมาเปรียบเทียบกันได้เสียก่อน
		<br />
		<br />
		เราใช้สมมติฐานต่อไปนี้
	</p>

	<h7 class="typo-h7">
		<b>
			1. ถ้า<span class="beyonx-text-gradient">พรรคเพื่อไทย</span>ส่งผู้สมัคร
			ครบทุกเขตเมื่อปี 62?
		</b>
	</h7>
	<span class="flex items-center space-x-2">
		<h4 class="typo-b4 text-blue underline text-byx-blue">อ่านเพิ่มเติม</h4>
		<div class="border-1 border-b border-r w-2 h-2 rotate-45 border-byx-blue" />
	</span>
	<h4 class="typo-b4 mt-4">
		ในการเลือกตั้งปี 62 พรรคไทยรักษาชาติ แยกตัวออกมาจากพรรคเพื่อไทย ทำให้
		<b>พรรคเพื่อไทยส่งผู้สมัครรับเลือกตั้ง ส.ส. เขต เพียง xx เขต จาก 350 เขต</b>
		<br />
		<br />
		เพื่อสร้างแบบจำลองผลเลือกตั้ง 66 ที่แม่นยำขึ้น เราจึงต้องประมาณการผล เลือกตั้ง
		62 โดย<b>สมมติว่าพรรคเพื่อไทย ส่งผู้สมัคร ครบทุกเขตเลือกตั้ง</b> โดยใช้วิธี ประมาณคะแนนของพรรคเพื่อไทยในเขตที่ไม่ได้ลงสมัครจากเขตเลือกตั้งรอบข้าง
		ที่มีพรรคเพื่อไทยลงสมัครรับเลือกตั้ง
	</h4>

	<hr class="my-4" />

	<h7 class="typo-h7">
		<b>
			2. จาก <span class="beyonx-text-gradient">จัดสรรปันส่วนผสม</span> กลับสู่
			เลือกคนที่รัก
			<span class="beyonx-text-gradient">เลือกพรรคที่ชอบ</span>
		</b>
	</h7>
	<span class="flex items-center space-x-2">
		<h4 class="typo-b4 text-blue underline text-byx-blue">อ่านเพิ่มเติม</h4>
		<div class="border-1 border-b border-r w-2 h-2 rotate-45 border-black" />
	</span>
	<h4 class="typo-b4 my-4">
		การเลือกตั้ง 66 มีการเปลี่ยนแปลงกติกา หลักๆ จากปี 62 คือ
		<br />
		<br />
		<ul>
			<li>
				<b>กลับไปใช้ระบบบัตร 2 ใบ</b> แบบ “เลือกคนที่รัก เลือกพรรคที่ชอบ” คล้ายกติกาปี
				40
			</li>
			<li>
				<b>เพิ่มจำนวน ส.ส. เขต</b>จาก 350 เป็น 400 คน
			</li>
		</ul>
		<br />
		<br /> ในการปรับฐานนี้ เราจะเรานำกติกาของ การเลือกตั้งปี 66
		ไปลองใช้กับข้อมูล คะแนนเสียงจากปี 62 โดย
		<b>
			สมมติว่าทุกคนกาบัตรเลือกตั้งทั้งสองใบเหมือนกับที่กาบัตรใบเดียวเมื่อปี 62
		</b>
	</h4>

	<hr class="my-4" />

	<h7 class="typo-h7">
		<b> หลังปรับฐานแล้ว จะได้คะแนนเสียงตั้งต้นใหม่ดังนี้ </b>
	</h7>

	<img src={compareChart} alt="beyondx" class="my-5" />

	<h4 class="typo-b4">
		และนี่คือคะแนนตั้งต้นที่เราจะนำไปใช้ คำนวณแบบจำลองต่อไป
	</h4>

	<div class="w-full mt-4 flex items-center justify-between space-x-5">
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
