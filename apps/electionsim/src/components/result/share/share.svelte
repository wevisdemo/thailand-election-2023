<script lang="ts">
	import { base } from '$app/paths';
	import type { RepresentativeRecord } from '../../../stores/representatives';
	import byxMobileLogo from '../../../images/byx-mobile.svg';

	export let representativeRecord: RepresentativeRecord[];
	export let governmentParties: RepresentativeRecord[];
	export let oppositionParties: RepresentativeRecord[];
	export let governmentPoints: number;

	$: totalPoints = representativeRecord.reduce(
		(acc, cur) => acc + cur.total,
		0
	);
</script>

<div class="flex flex-col items-center w-[312px] md:w-[650px] py-10">
	<a
		href="{base}/result"
		class="flex self-start items-center typo-b5 text-byx-blue mb-5 cursor-pointer"
	>
		<svg
			width="25"
			height="25"
			viewBox="0 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8.16098 12.98L15.362 5.77999L16.3701 6.78799L10.1773 12.98L16.3701 19.172L15.362 20.18L8.16098 12.98Z"
				fill="#0000FF"
			/>
		</svg>
		ย้อนกลับ
	</a>
	<h4 class="typo-h4 font-bold beyonx-text-gradient text-center">
		โฉมหน้า #สภา66 <br class="hidden md:inline" />จากการวิเคราะห์ของคุณ
	</h4>
	<div class="flex w-full justify-center mt-10 mb-[10px]">
		<h6 class="typo-h6 font-bold">ฝ่ายรัฐบาล</h6>
		<h6 class="typo-h6">({governmentPoints})</h6>
	</div>
	<div class="flex justify-center flex-wrap gap-x-6">
		{#each governmentParties as { party, total }}
			<div class="flex flex-col items-center">
				<div class="w-16 h-16" style="background-color: {party.Color};" />
				<h6 class="typo-b6 mt-1">{party.Name}</h6>
				<h6 class="typo-b6">{total}</h6>
			</div>
		{/each}
	</div>
	<div class="flex w-full justify-center mt-5 mb-[10px]">
		<h6 class="typo-h7 font-bold">ฝ่ายค้าน</h6>
		<h6 class="typo-h7">({totalPoints - governmentPoints})</h6>
	</div>
	<div class="flex justify-center flex-wrap gap-x-6">
		{#each oppositionParties as { party, total }}
			<div class="flex flex-col items-center">
				<div class="w-8 h-8" style="background-color: {party.Color};" />
				<h6 class="typo-b6 mt-1">{party.Name}</h6>
				<h6 class="typo-b6">{total}</h6>
			</div>
		{/each}
	</div>
	<div class="py-3 px-5 flex items-center my-5 bg-gray-4">
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="mr-[10px]"
		>
			<rect width="24" height="24" rx="12" fill="#D09D03" />
			<path
				d="M11.5778 13.42L10.9198 9.444V6.728H13.1038V9.444L12.4598 13.42H11.5778ZM11.9978 16.668C11.5498 16.668 11.2278 16.5653 11.0318 16.36C10.8451 16.1547 10.7518 15.9027 10.7518 15.604V15.268C10.7518 14.9693 10.8451 14.7173 11.0318 14.512C11.2278 14.3067 11.5498 14.204 11.9978 14.204C12.4458 14.204 12.7631 14.3067 12.9498 14.512C13.1458 14.7173 13.2438 14.9693 13.2438 15.268V15.604C13.2438 15.9027 13.1458 16.1547 12.9498 16.36C12.7631 16.5653 12.4458 16.668 11.9978 16.668Z"
				fill="#231F20"
			/>
		</svg>
		<h5 class="typo-b5 flex-1">
			ต้องการเสียงสนับสนุนจาก ส.ว. เพื่อเลือกนายกฯ อีก
		</h5>
		<h5 class="typo-b4 font-bold ml-2">122+</h5>
	</div>
	<h4 class="typo-b4 text-center">
		ไม่ว่าคุณจะชอบผลวิเคราะห์ที่ออกมา หรือไม่ ก็<span
			class="beyonx-text-gradient font-bold">ต้องไม่ลืมออกไปเลือกตั้ง</span
		>
		<br />
		กำหนดชะตาประเทศไทย XX พ.ค. 66 นี้
	</h4>
	<div class="flex items-center mt-10 mb-5">
		<h4 class="typo-b4 mr-4">ร่วมพัฒนาโดย</h4>
		<img src={byxMobileLogo} alt="beyondx" />
	</div>
	<div class="w-full bg-gray-4">
		<p class="typo-b6 py-2 px-4">
			<b>Disclaimer</b>: ผลการวิเคราะห์นี้เป็นเพียงการ ทดลองประมาณการแบบคร่าวๆ
			บนฐานข้อมูลผลการ
			เลือกตั้งเดิมบนกติกาเลือกตั้งใหม่และข้อสันนิษฐานที่กำหนดไว้เท่านั้น
			อาจมีปัจจัยอื่นที่ส่งผลต่อ ผลลัพธ์ในการเลือกตั้ง
			และไม่ได้มีเจตนาในการชี้นำผลการเลือกตั้งแต่อย่างใด
		</p>
	</div>
</div>
