<script lang="ts">
	import { base } from '$app/paths';
	import type { RepresentativeRecord } from '../../../stores/representatives';
	import byxMobileLogo from '../../../images/byx-mobile.svg';
	import type { Party } from '../../../stores/party';
	import { fade, fly } from 'svelte/transition';

	export let representativeRecord: RepresentativeRecord[];
	export let governmentParties: RepresentativeRecord[];
	export let oppositionParties: RepresentativeRecord[];
	export let governmentPoints: number;
	export let toggleIsShare: () => void;

	const PRIME_MISTER_POINT = 376;

	const OTHER_PARTY_POINTS_THRESHOLD = 5;
	const otherParty = {
		Name: 'อื่นๆ',
		Color: '#CCCCCC',
	} as Party;

	$: totalPoints = representativeRecord.reduce(
		(acc, cur) => acc + cur.total,
		0
	);

	$: governmentOtherParties = governmentParties.reduce<RepresentativeRecord>(
		(acc, { fromDistrict, fromPartylist, total }) => {
			if (total <= OTHER_PARTY_POINTS_THRESHOLD) {
				acc.fromDistrict += fromDistrict;
				acc.fromPartylist += fromPartylist;
				acc.total += total;
			}
			return acc;
		},
		{
			party: otherParty,
			fromDistrict: 0,
			fromPartylist: 0,
			total: 0,
		} as RepresentativeRecord
	);

	$: oppositionOtherParties = oppositionParties.reduce<RepresentativeRecord>(
		(acc, { fromDistrict, fromPartylist, total }) => {
			if (total <= OTHER_PARTY_POINTS_THRESHOLD) {
				acc.fromDistrict += fromDistrict;
				acc.fromPartylist += fromPartylist;
				acc.total += total;
			}
			return acc;
		},
		{
			party: otherParty,
			fromDistrict: 0,
			fromPartylist: 0,
			total: 0,
		} as RepresentativeRecord
	);

	$: governmentRecord = [
		...governmentParties
			.sort((a, b) => b.total - a.total)
			.filter((p) => p.total > OTHER_PARTY_POINTS_THRESHOLD),
		governmentOtherParties,
	].filter((p) => p.total > 0);

	$: oppositionRecord = [
		...oppositionParties
			.sort((a, b) => b.total - a.total)
			.filter((p) => p.total > OTHER_PARTY_POINTS_THRESHOLD),
		oppositionOtherParties,
	].filter((p) => p.total > 0);
</script>

<div
	class="flex flex-col items-center w-full max-w-[698px] px-6 py-10"
	transition:fly={{ x: 400 }}
>
	<div class="flex w-full">
		<a
			on:click={toggleIsShare}
			class="flex items-center typo-b5 text-byx-blue mb-5 cursor-pointer mr-5"
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
		<a
			href="{base}/"
			class="flex items-center typo-b5 text-byx-blue mb-5 cursor-pointer"
		>
			<svg
				width="21"
				height="21"
				viewBox="0 0 21 21"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="mr-1"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M10.3847 1.88124C10.1575 1.70174 9.83682 1.70174 9.60967 1.88124L0.628418 8.88749L1.40342 9.87499L2.50342 9.01249V16.75C2.50342 17.4403 3.06306 18 3.75342 18H16.2534C16.9438 18 17.5034 17.4403 17.5034 16.75V9.01874L18.6034 9.87499L19.3784 8.89374L10.3847 1.88124ZM11.2534 16.75H8.75342V11.75H11.2534V16.75ZM12.5034 16.75V11.75C12.5034 11.0596 11.9438 10.5 11.2534 10.5H8.75342C8.06306 10.5 7.50342 11.0596 7.50342 11.75V16.75H3.75342V8.03749L10.0034 3.16874L16.2534 8.04374V16.75H12.5034Z"
					fill="#0000FF"
				/>
			</svg>
			หน้าแรก
		</a>
	</div>
	<h4 class="typo-h4 font-bold beyonx-text-gradient text-center">
		โฉมหน้า #สภา66 <br class="hidden md:inline" />จากการวิเคราะห์ของคุณ
	</h4>
	<div class="flex w-full justify-center mt-5 mb-3">
		<h6 class="typo-h6 font-bold">ฝ่ายรัฐบาล</h6>
		<h6 class="typo-h6">({governmentPoints})</h6>
	</div>
	<div class="flex justify-center flex-wrap gap-x-10">
		{#each governmentRecord as { party, total }}
			<div class="flex flex-col items-center mb-2 w-16 overflow-visible">
				<div
					class="w-16 h-16 flex items-center justify-center gap-x-1"
					style="background-color: {party.Color};"
				>
					{#if party.Images}
						<img
							class="w-16 h-16"
							src={party.Images[0].url}
							alt={party.Images[0].title}
						/>
					{:else}
						<div class="w-1 h-1 bg-white rounded-full" />
						<div class="w-1 h-1 bg-white rounded-full" />
						<div class="w-1 h-1 bg-white rounded-full" />
					{/if}
				</div>
				<h6 class="typo-b6 mt-1 text-center whitespace-nowrap">{party.Name}</h6>
				<h6 class="typo-b6">{total}</h6>
			</div>
		{/each}
	</div>
	<div class="flex w-full justify-center mt-3 mb-3">
		<h6 class="typo-h7 font-bold">ฝ่ายค้าน</h6>
		<h6 class="typo-h7">({totalPoints - governmentPoints})</h6>
	</div>
	<div class="flex justify-center flex-wrap gap-x-10">
		{#each oppositionRecord as { party, total }}
			<div class="flex flex-col items-center mb-2 w-16 overflow-visible">
				<div
					class="w-16 h-16 flex items-center justify-center gap-x-1"
					style="background-color: {party.Color};"
				>
					{#if party.Images}
						<img
							class="w-16 h-16"
							src={party.Images[0].url}
							alt={party.Images[0].title}
						/>
					{:else}
						<div class="w-1 h-1 bg-white rounded-full" />
						<div class="w-1 h-1 bg-white rounded-full" />
						<div class="w-1 h-1 bg-white rounded-full" />
					{/if}
				</div>
				<h6 class="typo-b6 mt-1 text-center whitespace-nowrap">{party.Name}</h6>
				<h6 class="typo-b6">{total}</h6>
			</div>
		{/each}
	</div>
	{#if governmentPoints <= PRIME_MISTER_POINT}
		<div class="py-3 px-5 flex items-center my-10 bg-gray-4">
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
			<h5 class="typo-b4 font-bold ml-2">
				{PRIME_MISTER_POINT - governmentPoints}+
			</h5>
		</div>
	{/if}
	<h4 class="typo-b4 text-center">
		ไม่ว่าคุณจะชอบผลวิเคราะห์ที่ออกมา หรือไม่ ก็<span
			class="beyonx-text-gradient font-bold">ต้องไม่ลืมออกไปเลือกตั้ง</span
		>
		<br />
		กำหนดชะตาประเทศไทย 14 พ.ค. 66 นี้
	</h4>
	<div class="flex items-center my-10">
		<h4 class="typo-b4 mr-4">ร่วมพัฒนาโดย</h4>
		<img src={byxMobileLogo} alt="beyondx" />
	</div>
	<div class="w-full bg-gray-4">
		<p class="typo-b6 py-2 px-4">
			<b>Disclaimer</b>: ผลการวิเคราะห์นี้เป็นเพียงการทดลองประมาณการแบบคร่าวๆ
			บนฐานข้อมูลผลการเลือกตั้งเดิมบนกติกาเลือกตั้งใหม่และข้อสันนิษฐานที่กำหนดไว้เท่านั้น
			อาจมีปัจจัยอื่นที่ส่งผลต่อผลลัพธ์ในการเลือกตั้ง
			และไม่ได้มีเจตนาในการชี้นำผลการเลือกตั้งแต่อย่างใด
		</p>
	</div>
</div>
