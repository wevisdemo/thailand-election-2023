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
	class="text-left flex flex-col w-full max-w-[698px] px-6 pb-10 mt-10 relative bg-white h-full"
>
	<svg
		class="absolute right-0 md:-right-[100px] -top-6 cursor-pointer"
		width="32"
		height="33"
		viewBox="0 0 32 33"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		on:click={toggleModal}
	>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M9.4 8.99668L8 10.3969L14.6 16.9978L8 23.5987L9.4 24.9989L16 18.398L22.6 24.9989L24 23.5987L17.4 16.9978L24 10.3969L22.6 8.99668L16 15.5976L9.4 8.99668Z"
			fill="#231F20"
		/>
	</svg>
	<h4 class="typo-h7 text-xl">ปัจจัยต่อผลการเลือกตั้ง</h4>
	<h6 class="font-bold typo-h6 mt-1 mb-5">
		การก่อตั้งพรรคใหม่ โดยกลุ่ม ขั้วอำนาจที่เคยร่วมพรรค เมื่อปี 62
		ส่งผลอย่างไรต่อการ เลือกตั้ง?
	</h6>
	<h4 class="typo-ibmplex typo-b4">
		ในช่วงเวลาหลังการเลือกตั้ง 62 มาจนถึง ปีนี้ มีผู้มีอิทธิพลในพรรคการเมือง
		แยกตัว ออกมาก่อตั้งพรรคการเมืองใหม่จำนวนไม่น้อย จึงมีข้อสันนิษฐานที่ว่า
		คนที่เคยเลือก พรรคการเมืองเดิมเพราะบุคคลเหล่านั้น
		จะยังคงเป็นฐานเสียงที่เหนียวแน่นมาจนถึงการเลือกตั้งในปี 66 นี้
		<br />
		<br />
		ดังนั้น ในการคำนวณบนเว็บไซต์นี้ จึงต้อง ประเมินข้อสันนิษฐานนี้เพื่อดูว่าเมื่อมีการ
		กระจายขั้วอำนาจผ่านการตั้งพรรคใหม่ คะแนนเดิมกระจายไปอยู่ที่พรรคไหน ในสัดส่วนเท่าไหร่บ้าง
	</h4>
	<h6 class="typo-h6 font-bold my-5">ความเห็นจากผู้เชี่ยวชาญ</h6>
	<div class="flex flex-col gap-y-5 pb-10">
		{#each comments as comment}
			<CommentCard
				name={comment.name}
				position={comment.position}
				content={comment.content}
			/>
		{/each}
	</div>
</div>
