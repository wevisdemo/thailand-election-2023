<script lang="ts">
	import byxMobileLogo from '../../images/byx-mobile.svg';
	import simulatorBx from '../../images/simulator_bx.png';
	import { contentManager, Content } from '../../stores/content';
</script>

<div class="flex flex-col items-center w-[312px] md:w-[650px] py-10">
	<h7 class="typo-h7">Election Simulator</h7>
	<h2 class="typo-h2 beyonx-text-gradient text-center font-bold">
		ทดลองเป็น<br class="md:hidden" />นักวิเคราะห์ #เลือกตั้ง66
	</h2>
	<div class="flex items-center mt-1 mb-5">
		<h4 class="typo-b4 mr-4">ร่วมพัฒนาโดย</h4>
		<img src={byxMobileLogo} alt="beyondx" />
	</div>
	<img src={simulatorBx} alt="beyondx" />
	<p class="typo-b4 text-center my-5">
		การเลือกตั้งปี 66 จะให้ผลเป็นอย่างไร?
		ปัจจัยอะไรบ้างที่มีผลต่อการเลือกตั้ง?ลองมาสวมบทบาทนักวิเคราะห์การเมือง
		แล้ววิเคราะห์ความเป็นไปได้ต่างๆ ของการ เลือกตั้งครั้งนี้ไปด้วยกัน
	</p>
	<button
		class="typo-b3 beyondx-gradient-bg text-white py-2 px-4 w-[160px] md:w-52 h-[50px] flex items-center justify-between font-bold"
		on:click={() => {
			contentManager.updateContent(Content.Analytics);
		}}
	>
		เริ่มเลย
		<div class="border-1 border-t border-r w-2 h-2 rotate-45" />
	</button>
</div>
