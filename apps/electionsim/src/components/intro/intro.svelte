<script lang="ts">
	import byxMobileLogo from '../../images/byx-mobile.svg';
	import simulatorBx from '../../images/simulator_bx.png';
	import fbLogo from '../../images/facebook.png';
	import twLogo from '../../images/twitter.png';
	import lineLogo from '../../images/line.png';
</script>

<div class="flex flex-col items-center w-[650px] py-10">
	<h7 class="typo-h7">Election Simulator</h7>
	<h2 class="typo-h2 beyonx-text-gradient bold text-center">
		ทดลองเป็นนัก วิเคราะห์ #เลือกตั้ง66
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
		class="beyondx-gradient-bg text-white py-2 px-4 w-52 flex items-center justify-between"
	>
		เริ่มเลย
		<div class="border-1 border-t border-r w-2 h-2 rotate-45" />
	</button>
</div>

<div class="flex flex-row items-center">
	<span class="typo-b6">Share</span>
	<img class="mx-1" src={fbLogo} alt="facebook" />
	<img class="mx-1" src={twLogo} alt="twitter" />
	<img class="mx-1" src={lineLogo} alt="line" />
</div>
<h3 class="typo-b3 my-2">#WeVisElection66</h3>
<button
	class="py-2 px-4 border border-[3px] hover:border-highlight-2 rounded-full bold"
	>เกี่ยวกับโครงการ</button
>
