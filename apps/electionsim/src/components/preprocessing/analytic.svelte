<script lang="ts">
	import { base } from '$app/paths';
	import { Content, contentManager } from '../../stores/content';
</script>

<div
	class="grow justify-between flex flex-col items-center w-full max-w-[698px] px-6 py-0 md:py-10"
>
	<h4 class="typo-h4 beyonx-text-gradient text-center">
		<b>
			วิเคราะห์ผลเลือกตั้ง <br />ต้องดูจากอะไรบ้าง?
		</b>
	</h4>
	<p class="typo-b4 text-center my-5">
		4 ปีนับจาก #เลือกตั้ง62 ปัจจัยหลายอย่างในการเมืองไทยเปลี่ยนไป
		ทั้งกติกาเลือกตั้ง กลยุทธ์ของพรรคต่างๆ และกระแสความนิยมของประชาชน
		<b>ปัจจัยเหล่านี้ล้วนมีผลต่อผลการเลือกตั้ง 66 ที่กำลังจะเกิดขึ้น</b>
		<br />
		<br />
		WeVis และ Beyond X ได้ลองนำปัจจัยเบื้องต้นเหล่านี้มาเป็นข้อสันนิษฐานใน
		<b>เครื่องมือทดลองวิเคราะห์ผล #เลือกตั้ง66</b> ชิ้นนี้ เพื่อให้ทุกคนค่อยๆ ทำความเข้าใจไปด้วยกัน
	</p>
	<div class="w-full bg-gray-4">
		<p class="typo-b6 py-2 px-4">
			<b>Disclaimer</b>: ผลการวิเคราะห์นี้เป็นเพียงการทดลองประมาณการแบบคร่าวๆ
			บนฐานข้อมูลผลการเลือกตั้งเดิมบนกติกาเลือกตั้งใหม่และข้อสันนิษฐานที่กำหนดไว้เท่านั้น
			อาจมีปัจจัยอื่นที่ส่งผลต่อผลลัพธ์ในการเลือกตั้ง
			และไม่ได้มีเจตนาในการชี้นำผลการเลือกตั้งแต่อย่างใด
		</p>
	</div>
	<div class="w-full mt-10 flex items-center justify-between space-x-5">
		<a
			class="typo-b3 px-4 py-2 border flex items-center justify-between border-black w-full"
			href={base}
		>
			<div class="border-1 border-t border-l w-2 h-2 -rotate-45 border-black" />
			<b>ย้อนกลับ</b>
		</a>
		<button
			class="typo-b3 px-4 py-2 border flex items-center justify-between border-black w-full text-white bg-black"
			on:click={() => {
				contentManager.updateContent(Content.Election62);
			}}
		>
			<b>ต่อไป</b>
			<div class="border-1 border-t border-r w-2 h-2 rotate-45 border-white" />
		</button>
	</div>
</div>
