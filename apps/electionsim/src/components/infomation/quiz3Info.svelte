<script lang="ts">
	import CommentCard from './commentCard.svelte';

	export let toggleModal: () => void;

	const comments = [
		{
			id: 0,
			name: 'ชื่อผู้ นามสกุลเชี่ยวชาญ',
			position: 'ตำแหน่ง/affiliation ของผู้เชี่ยวชาญ',
			content:
				'ความเห็นของผู้เชี่ยวชาญให้ความว่า บลาบลาบลาบลาบลานาน่า คนไทยน่าจะลงคะแนนแบบนั้น แบบนี้ สมมติว่าคนนี้พูดไว้ ประมาณนี้ๆๆ',
		},
		{
			id: 0,
			name: 'ชื่อผู้ นามสกุลเชี่ยวชาญ',
			position: 'ตำแหน่ง/affiliation ของผู้เชี่ยวชาญ',
			content:
				'ความเห็นของผู้เชี่ยวชาญให้ความว่า บลาบลาบลาบลาบลานาน่า คนไทยน่าจะลงคะแนนแบบนั้น แบบนี้ สมมติว่าคนนี้พูดไว้ ประมาณนี้ๆๆ',
		},
	];
</script>

<div
	class="text-left flex flex-col w-full px-6 pb-16 mt-12 relative bg-white h-full items-center"
>
	<button on:click={toggleModal} class="absolute right-6 -top-6" type="button">
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
				fill="#231F20"
			/>
		</svg>
	</button>
	<div class="w-full max-w-[650px]">
		<h4 class="typo-h7 text-xl">ปัจจัยต่อผลการเลือกตั้ง</h4>
		<h6 class="font-bold typo-h6 mt-1 mb-5">
			การโหวตเชิงยุทธศาสตร์ (Strategic Voting) ส่งผลอย่างไรต่อการเลือกตั้ง?
		</h6>
		<p class="typo-ibmplex typo-b4">
			‘ไม่เลือกเรา เขามาแน่’
			เป็นหนึ่งในวลีที่เคยส่งผลต่อการเลือกตั้งในประเทศไทยมาแล้วในอดีต
			เพราะบางครั้ง คนไม่ได้โหวต เลือกพรรคหรือตัวบุคคลที่ตัวเองชอบที่สุด
			แต่ตัดสินใจเลือกเพื่อให้การเลือกของตัวเองส่งผลไปยังผลลัพธ์ของการเลือกตั้งให้ได้มากที่สุด
			<br />
			<br />
			ในการเลือกตั้งรอบนี้ พรรคเพื่อไทยได้มี แนวทางการหาเสียงที่มีใจความรณรงค์ให้เลือกแบบเชิงยุทธศาสตร์
			(Strategic voting) เพื่อช่วยให้พรรคการเมืองที่เรียกตัวเองว่า "ฝ่ายประชาธิปไตย"
			ชนะได้ ขณะที่พรรคก้าวไกลก็ออกมาประกาศแนวทางที่คล้ายคลึงกัน
			<br />
			<br />
			ดังนั้น การคำนวณบนเว็บไซต์นี้จึงนำข้อสันนิษฐานเรื่องการโหวตเชิงยุทธศาสตร์ (Strategic
			Voting) มาให้คุณประเมินเพื่อประกอบการคำนวณว่าแนวทางการรณรงค์แบบนี้ จะมีอิทธิพลต่อการตัดสินใจของประชาชนผู้ที่กำลังจะออกไปเลือกตั้งหรือไม่
		</p>
		<!-- <h6 class="typo-h6 font-bold my-5">ความเห็นจากผู้เชี่ยวชาญ</h6>
	<div class="flex flex-col gap-y-5 pb-10">
		{#each comments as comment}
			<CommentCard
				name={comment.name}
				position={comment.position}
				content={comment.content}
			/>
		{/each}
	</div> -->
	</div>
</div>
