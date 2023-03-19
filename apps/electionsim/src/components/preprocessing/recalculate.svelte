<script lang="ts">
	import { Content, contentManager } from '../../stores/content';
</script>

<div class="flex flex-col items-center w-[312px] md:w-[650px] py-10">
	<h4 class="typo-h4 beyonx-text-gradient text-center">
		<b>
			ปรับฐานการคำนวณแล้ว
			<br class="hidden md:block" /> มาเริ่มวิเคราะห์กัน
		</b>
	</h4>
	<p class="typo-b4 text-center mt-5">
		ต่อไปนี้ เราจะให้คุณ <b>ลองตอบคำถาม X ข้อ</b> เพื่อนำข้อมูลมาคำนวณเป็นแบบ จำลองหนึ่ง
		ของผลการเลือกตั้ง 66
	</p>
	<p class="typo-b4 text-center mt-5">
		ถ้าไม่แน่ใจข้อไหน ไม่เป็นไร ลองเดาได้ สามารถกลับมาแก้ไขคำตอบภายหลังได้
	</p>
	<div class="w-full bg-gray-4 mt-5">
		<p class="typo-b6 py-2 px-4">
			<b>Disclaimer</b>: ผลการวิเคราะห์นี้เป็นเพียงการ ทดลองประมาณการแบบคร่าวๆ
			บนฐานข้อมูลผลการ
			เลือกตั้งเดิมบนกติกาเลือกตั้งใหม่และข้อสันนิษฐานที่กำหนดไว้เท่านั้น
			อาจมีปัจจัยอื่นที่ส่งผลต่อ ผลลัพธ์ในการเลือกตั้ง
			และไม่ได้มีเจตนาในการชี้นำผลการเลือกตั้งแต่อย่างใด
		</p>
	</div>
	<button
		class="typo-b3 beyondx-gradient-bg text-white py-2 px-4 w-[160px] md:w-52 h-[50px] flex items-center justify-between font-bold mt-5"
		on:click={() => {
			contentManager.updateContent(Content.Quiz1);
		}}
	>
		เริ่มวิเคราะห์
		<div class="border-1 border-t border-r w-2 h-2 rotate-45" />
	</button>
	<button
		class="typo-b3 py-2 px-4 w-[312px] flex items-center justify-center font-bold mt-2 text-byx-blue"
		on:click={() => {
			contentManager.updateContent(Content.Election62);
		}}
	>
		<div
			class="border-1 border-t border-l w-2 h-2 -rotate-45 border-byx-blue mr-2"
		/>
		ย้อนกลับ
	</button>
</div>
