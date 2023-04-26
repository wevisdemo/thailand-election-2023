<script lang="ts">
	import { base } from '$app/paths';
	import { onDestroy, onMount } from 'svelte';
	import lottie from 'lottie-web';
	import byxMobileLogo from '../../images/byx-mobile.svg';
	import { contentManager } from '../../stores/content';

	const DISABLE_PERIOD = ['2023-05-07 GMT+7', '2023-05-14 17:30 GMT+7'];

	let lottieContainer: HTMLDivElement;
	let isDisabled = false;
	let disableCheckInterval: NodeJS.Timer;

	onMount(() => {
		checkDisablePeriod();
		disableCheckInterval = setInterval(checkDisablePeriod, 60000);

		lottie.loadAnimation({
			container: lottieContainer,
			path: `${base}/lottie-hero.json`,
		});
	});

	function checkDisablePeriod() {
		const currentMs = new Date().getTime();

		isDisabled =
			currentMs >= new Date(DISABLE_PERIOD[0]).getTime() &&
			currentMs < new Date(DISABLE_PERIOD[1]).getTime();
	}

	onDestroy(() => clearInterval(disableCheckInterval));
</script>

<div class="flex flex-col items-center w-full max-w-[698px] px-6 py-10">
	<h7 class="typo-h7">Election Simulator</h7>
	<h2 class="typo-h2 beyonx-text-gradient text-center font-bold">
		ทดลองเป็น<br class="md:hidden" />นักวิเคราะห์ #เลือกตั้ง66
	</h2>
	<div class="flex items-center mt-1 mb-10">
		<h4 class="typo-b4 mr-4">ร่วมพัฒนาโดย</h4>
		<img src={byxMobileLogo} alt="Beyond X" />
	</div>
	<div bind:this={lottieContainer} class="w-full max-w-[400px]" />
	<p class="typo-b4 text-center my-10">
		การเลือกตั้งปี 66 จะให้ผลเป็นอย่างไร? ปัจจัยอะไรบ้างที่มีผลต่อการเลือกตั้ง?
		ลองมาสวมบทบาทนักวิเคราะห์การเมือง แล้ววิเคราะห์ความเป็นไปได้ต่างๆ
		ของการเลือกตั้งครั้งนี้ไปด้วยกัน
	</p>
	<a
		href="{base}/quiz"
		class="typo-b3 beyondx-gradient-bg text-white py-2 px-4 w-[160px] md:w-52 h-[50px] flex items-center justify-between font-bold {isDisabled
			? 'opacity-30 pointer-events-none'
			: ''}"
		on:click={() => contentManager.startQuiz()}
	>
		เริ่มเลย
		<div class="border-1 border-t border-r w-2 h-2 rotate-45" />
	</a>
	{#if isDisabled}
		<p class="typo-b5 text-center mt-5 italic">
			เพื่อปฏิบัติตามกฎหมายการเลือกตั้งเกี่ยวกับการห้ามเผยแพร่ผลสำรวจความคิดเห็นของประชาชนเกี่ยวกับการเลือกตั้ง
			เราจะปิดระบบนี้ตั้งแต่วันที่ 7 พ.ค. 66
			แล้วมาพบกันใหม่หลังปิดหีบเลือกตั้งในวันที่ 14 พ.ค. 66
		</p>
	{/if}
</div>
