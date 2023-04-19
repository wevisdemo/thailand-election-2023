<script lang="ts">
	import type { RepresentativeRecord } from '../../stores/representatives';
	import type { Party } from '../../stores/party';
	import GovernmentChartLabel from './government-chart-label.svelte';

	export let representativeRecord: RepresentativeRecord[];
	export let governmentParties: RepresentativeRecord[];
	export let oppositionParties: RepresentativeRecord[];
	export let governmentPoints: number;
	export let toggleSide: (party?: string) => void;
	export let toggleIsShare: () => void;

	$: totalPoints = representativeRecord.reduce(
		(acc, cur) => acc + cur.total,
		0
	);

	let hoveredPartyName: Party | null = null;
	let isExpand = false;
	const toggleIsExpand = () => (isExpand = !isExpand);
</script>

<div
	class="w-100 h-28 bg-black pt-5 flex flex-col items-center text-white {isExpand
		? 'fixed h-full w-full inset-0 mt-1'
		: 'sticky bottom-0'}"
>
	<div
		class="flex flex-col px-6 w-full max-w-[650px] relative {isExpand
			? 'mt-10'
			: ''}"
	>
		{#if isExpand}
			<button on:click={toggleIsExpand} class="absolute -top-10 right-6">
				<svg
					width="32"
					height="33"
					viewBox="0 0 32 33"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M9.4 8.99668L8 10.3969L14.6 16.9978L8 23.5987L9.4 24.9989L16 18.398L22.6 24.9989L24 23.5987L17.4 16.9978L24 10.3969L22.6 8.99668L16 15.5976L9.4 8.99668Z"
						fill="#fff"
					/>
				</svg>
			</button>
		{:else}
			<button
				class="w-12 h-12 rounded-full beyondx-gradient-bg absolute flex justify-center items-center -top-10 right-6"
				on:click={toggleIsExpand}
			>
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M15.3598 10.8802L24.9598 20.4802L23.6158 21.8242L15.3598 13.5682L7.10377 21.8242L5.75977 20.4802L15.3598 10.8802Z"
						fill="white"
					/>
				</svg>
			</button>
		{/if}

		<p class="{isExpand ? 'typo-h6' : 'typo-b3'} text-white font-bold">
			จัดตั้งรัฐบาล
		</p>

		<div class="flex flex-row h-6 relative {isExpand ? 'mt-[30px]' : ''}">
			{#each [...governmentParties, ...oppositionParties] as { party, total }}
				<div
					class="flex justify-center"
					style="width: {(total / totalPoints) *
						100}%; background-color: {party.Color};"
					on:mouseenter={() => (hoveredPartyName = party)}
					on:mouseleave={() => (hoveredPartyName = null)}
				>
					{#if hoveredPartyName === party}
						<div class="relative h-0 z-10">
							<div
								class="absolute bottom-1 rounded bg-black py-2 px-4 text-white whitespace-nowrap transform -translate-x-1/2"
							>
								<p class="font-bold">
									<span
										class="w-3 h-3 mr-2 rounded-full inline-block"
										style="background: {party.Color}"
									/>{party.Name}
								</p>
								<p>{total} ที่นั่ง</p>
							</div>
						</div>
					{/if}
				</div>
			{/each}
			<div
				class="absolute top-0 bottom-0 right-0 stripe-white"
				style="left: {(governmentPoints / totalPoints) *
					100}%; pointer-events: none; border-left: 1px solid white;"
			/>

			<GovernmentChartLabel label="ตั้งรัฐบาล" style="right: 50%;" />
		</div>

		<div class="flex items-center justify-between text-white typo-b6 mt-2">
			<div class="flex space-x-1 items-center">
				<div class="w-4 h-4 mr-2" style="background-color: #CCCCCC;" />
				รัฐบาล ({governmentPoints})
			</div>
			<div class="flex space-x-1 items-center">
				<div class="w-4 h-4 mr-2" style="background-color: #CCCCCC;">
					<div class="stripe-white w-full h-full" />
				</div>
				ฝ่ายค้าน ({totalPoints - governmentPoints})
			</div>
		</div>

		{#if isExpand}
			{#if totalPoints / 2 > governmentPoints}
				<div class="typo-b6 font-bold text-center mt-4" style="color: #FF6161;">
					มีฝ่ายค้านเกินครึ่งของ ส.ส.!
				</div>
			{/if}
			<div class="w-full h-[1px] bg-white opacity-40 mt-4" />
			<span
				class="flex items-center justify-center mt-4 cursor-pointer"
				on:click={() => toggleSide()}
			>
				<h4 class="typo-b4 underline">สลับรัฐบาล/ฝ่ายค้าน</h4>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="ml-1"
				>
					<g clip-path="url(#clip0_1694_52664)">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M13.7539 2.84551L14.5999 1.99951L18.9999 6.39951L14.5999 10.7995L13.7539 9.95351L16.7019 6.99951L7.5999 6.99951V5.79951L16.7019 5.79951L13.7539 2.84551ZM5.6459 17.1534L4.7999 17.9994L0.399902 13.5994L4.7999 9.19935L5.6459 10.0454L2.6979 12.9994L11.7999 12.9994L11.7999 14.1994L2.6979 14.1994L5.6459 17.1534Z"
							fill="white"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1694_52664">
							<rect
								width="19.2"
								height="19.2"
								fill="white"
								transform="translate(0.399902 0.399902)"
							/>
						</clipPath>
					</defs>
				</svg>
			</span>
			<div
				class="w-full py-3 px-5 flex items-center my-5"
				style="background-color: #3D3D3D;"
			>
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
				<h5 class="typo-b4 font-bold">122+</h5>
			</div>
			<div class="flex items-start w-full">
				<div class="w-1/2 flex flex-col">
					<div class="flex flex-wrap md:flex-nowrap">
						<h7 class="typo-h7 font-bold w-full">ฝ่ายรัฐบาล </h7>
						<div class="flex typo-h7 md:ml-1">
							<p class="hidden md:block">(</p>
							{governmentPoints}
							<p class="hidden md:block">)</p>
						</div>
					</div>
					{#each governmentParties.sort((a, b) => b.total - a.total) as { party, total }}
						<div
							class="flex flex-wrap items-center border-b border-opacity-40 pb-[10px] mt-[10px]"
							style="border-color: rgba(255, 255, 255, 0.4);"
						>
							<span
								class="typo-b5 w-full flex items-center md:w-1/2 mb-2 md:mb-0"
							>
								<span
									class="w-4 h-4 mr-2 inline-block"
									style="background: {party.Color} url(/party-icons/{party.Name}.svg) center/50% no-repeat;"
								/>
								{party.Name}
							</span>
							<h5 class="typo-b5 opacity-70 flex-1 w-2/12 ml-6 md:ml-0">
								{total}
							</h5>
							<span
								class="typo-b5 w-4/12 flex justify-end items-center cursor-pointer"
								on:click={() => toggleSide(party.Name)}
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="mr-1"
								>
									<g clip-path="url(#clip0_1694_52664)">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M13.7539 2.84551L14.5999 1.99951L18.9999 6.39951L14.5999 10.7995L13.7539 9.95351L16.7019 6.99951L7.5999 6.99951V5.79951L16.7019 5.79951L13.7539 2.84551ZM5.6459 17.1534L4.7999 17.9994L0.399902 13.5994L4.7999 9.19935L5.6459 10.0454L2.6979 12.9994L11.7999 12.9994L11.7999 14.1994L2.6979 14.1994L5.6459 17.1534Z"
											fill="white"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1694_52664">
											<rect
												width="19.2"
												height="19.2"
												fill="white"
												transform="translate(0.399902 0.399902)"
											/>
										</clipPath>
									</defs>
								</svg>
								<p class="hidden md:block">เปลี่ยนขั้ว</p>
							</span>
						</div>
					{/each}
				</div>
				<div class="w-1/2 flex flex-col text-right ml-10">
					<div class="flex justify-end flex-wrap-reverse md:flex-nowrap">
						<div class="flex typo-h7">
							<p class="hidden md:block">(</p>
							{totalPoints - governmentPoints}
							<p class="hidden md:block">)</p>
						</div>
						<h7 class="typo-h7 font-bold ml-1 w-full md:w-auto">ฝ่ายค้าน </h7>
					</div>
					{#each oppositionParties.sort((a, b) => b.total - a.total) as { party, total }}
						<div
							class="flex items-center border-b border-opacity-40 pb-[10px] mt-[10px] flex-wrap-reverse"
							style="border-color: rgba(255, 255, 255, 0.4);"
						>
							<span
								class="typo-b5 w-4/12 flex items-center cursor-pointer flex-1"
								on:click={() => toggleSide(party.Name)}
							>
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="mr-1"
								>
									<g clip-path="url(#clip0_1694_52664)">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M13.7539 2.84551L14.5999 1.99951L18.9999 6.39951L14.5999 10.7995L13.7539 9.95351L16.7019 6.99951L7.5999 6.99951V5.79951L16.7019 5.79951L13.7539 2.84551ZM5.6459 17.1534L4.7999 17.9994L0.399902 13.5994L4.7999 9.19935L5.6459 10.0454L2.6979 12.9994L11.7999 12.9994L11.7999 14.1994L2.6979 14.1994L5.6459 17.1534Z"
											fill="white"
										/>
									</g>
									<defs>
										<clipPath id="clip0_1694_52664">
											<rect
												width="19.2"
												height="19.2"
												fill="white"
												transform="translate(0.399902 0.399902)"
											/>
										</clipPath>
									</defs>
								</svg>
								<p class="hidden md:block">เปลี่ยนขั้ว</p>
							</span>
							<h5 class="typo-b5 opacity-70 w-2/12 mr-6 md:mr-0">{total}</h5>
							<span
								class="typo-b5 w-full md:w-1/2 flex justify-end mb-2 md:mb-0"
							>
								{party.Name}
								<span
									class="w-4 h-4 ml-2 inline-block"
									style="background: {party.Color} url(/party-icons/{party.Name}.svg) center/50% no-repeat;"
								/>
							</span>
						</div>
					{/each}
				</div>
			</div>
			<a
				on:click={toggleIsShare}
				class="typo-b3 beyondx-gradient-bg text-white py-2 px-4 w-full md:w-52 h-[50px] flex items-center justify-between font-bold m-auto mt-2 md:mt-20 cursor-pointer"
			>
				สรุปผล
				<div class="border-1 border-t border-r w-2 h-2 rotate-45" />
			</a>
		{/if}
	</div>
</div>
