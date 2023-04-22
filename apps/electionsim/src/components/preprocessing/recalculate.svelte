<script lang="ts">
	import { Content, contentManager } from '../../stores/content';
</script>

<div
	class="grow justify-between flex flex-col items-center w-full max-w-[698px] px-6 py-0 md:py-10"
>
	<div class="grow flex flex-col items-center justify-center">
		<h4 class="typo-h4 beyonx-text-gradient text-center">
			<b>
				ปรับฐานการคำนวณแล้ว
				<br class="hidden md:block" /> มาเริ่มวิเคราะห์กัน
			</b>
		</h4>
		<div class="mt-5">
			<p class="typo-b4 text-center">
				เราจะให้คุณ <b>ลองตอบคำถาม 7 ข้อ</b> เพื่อนำข้อมูลมาคำนวณเป็นแบบจำลองหนึ่งของผลการเลือกตั้ง
				66
			</p>
			<p class="typo-b4 text-center mt-5">
				ถ้าไม่แน่ใจข้อไหน ไม่เป็นไร ลองเดาได้ สามารถกลับมาแก้ไขคำตอบภายหลังได้
			</p>
		</div>
	</div>
	<div class="flex flex-col items-center mt-10">
		<div class="w-full bg-gray-4">
			<p class="typo-b6 py-2 px-4">
				<b>Disclaimer</b>: ผลการวิเคราะห์นี้เป็นเพียงการทดลองประมาณการแบบคร่าวๆ
				บนฐานข้อมูลผลการเลือกตั้งเดิมบนกติกาเลือกตั้งใหม่และข้อสันนิษฐานที่กำหนดไว้เท่านั้น
				อาจมีปัจจัยอื่นที่ส่งผลต่อผลลัพธ์ในการเลือกตั้ง
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
			class="typo-b3 py-2 px-4 w-[312px] flex items-center justify-center font-bold mt-5 text-byx-blue"
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
</div>
