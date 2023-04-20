<script lang="ts">
	import { base } from '$app/paths';
	import { Content, contentManager } from '../../stores/content';
	import { input } from '../../stores/input';
	import {
		quiz1ToWord,
		quiz2ToWord,
		quiz3ToWord,
		quiz4ToWord,
		quiz5ToWord,
		quiz6ToWord,
		quiz7ToWord,
		quiz8ToWord,
	} from '../../utils/mapInputToWord';

	$: choices = [
		{
			question:
				'คุณคิดว่า คนไทยทุกๆ 10 คนจะเลือก ส.ส. เขตจากตัวบุคคลหรือพรรคอย่างละกี่คน?',
			answer: quiz1ToWord($input.input.quiz1).join(' '),
			page: Content.Quiz1,
		},
		{
			question:
				'คุณคิดว่า คนเคยเลือกพรรคพลังประชารัฐ ทุกๆ 10 คน จะเปลี่ยนใจไปเลือก ส.ส. เขตพรรครวมไทยสร้างชาติกี่คน?',
			answer: quiz2ToWord($input.input.quiz2).join(' '),
			page: Content.Quiz2,
		},
		{
			question:
				'จากกระแส Strategic Voting ระหว่างพรรคเพื่อไทยและพรรคก้าวไกล คุณคิดว่าผลโหวตจะถูกเทไปทางใด?',
			answer: quiz3ToWord($input.input.quiz3).join(' '),
			page: Content.Quiz3,
		},
		{
			question:
				'ในทางกลับกัน คุณคิดว่าในกลุ่มคนเลือกพรรคฝั่งรัฐบาลเดิม ผลโหวตจะเทเข้าหรือออกจากพรรคพลังประชารัฐ/รวมไทยสร้างชาติ?',
			answer: quiz4ToWord($input.input.quiz4).join(' '),
			page: Content.Quiz4,
		},
		{
			question:
				'คุณคิดว่า เมื่อเทียบกับการเลือกตั้งปี 62 ความนิยมต่อ ส.ส. ของคนไทยเบนไปจากเดิมหรือไม่? ไปทางฝ่ายใด?',
			answer: quiz5ToWord($input.input.quiz5).join(' '),
			page: Content.Quiz5,
		},
		{
			question:
				'คุณคิดว่าโพลสำนักไหนจะคาดการณ์คะแนนนิยมของพรรคได้แม่นยำที่สุด?',
			answer: quiz6ToWord($input.input.quiz6),
			page: Content.Quiz6,
		},
		{
			question:
				'คุณคิดว่านอกจากปัจจัยเหล่านี้จะมีอย่างอื่นที่ทำให้คนไทยเปลี่ยนใจไปเลือก ส.ส. เขตพรรคอื่นอีกไหม?',
			answer: quiz7ToWord($input.input.quiz7),
			page: Content.Quiz7,
		},
		{
			question: 'ปัจจัยที่ว่า จะทำให้คนเปลี่ยนใจจากพรรคไหน ไปเลือกพรรคไหนแทน?',
			answer: quiz8ToWord($input.input.quiz8?.percent).join(' '),
			page: Content.Quiz8,
		},
	];
</script>

<div class="text-left flex flex-col w-full max-w-[698px] px-6 py-10 relative">
	<a href="{base}/result">
		<svg
			width="32"
			height="33"
			viewBox="0 0 32 33"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class="absolute top-0 right-0 cursor-pointer"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M9.4 8.99668L8 10.3969L14.6 16.9978L8 23.5987L9.4 24.9989L16 18.398L22.6 24.9989L24 23.5987L17.4 16.9978L24 10.3969L22.6 8.99668L16 15.5976L9.4 8.99668Z"
				fill="#231F20"
			/>
		</svg>
	</a>
	<h6 class="typo-h6 font-bold mb-5">แก้ไขคำตอบ</h6>
	<div class="flex flex-col w-100">
		<div class="flex w-100 pb-4 border-b border-[#231F2020]">
			<div class="w-4/6 typo-b5 font-bold">คำถาม</div>
			<div class="w-2/6 typo-b5 font-bold text-right">คำตอบของคุณ</div>
		</div>
		{#each choices as choice}
			<div class="flex w-100 py-4 border-b border-[#231F2020] gap-x-2">
				<div class="w-4/6 typo-b5">
					{choice.question}
				</div>
				<div class="w-2/6 flex text-right justify-end">
					<h5 class="typo-b5 font-bold">{choice.answer}</h5>
					<div class="ml-[10px] cursor-pointer">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							on:click={() => {
								contentManager.updateContent(choice.page);
							}}
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1.91992 19.2H22.0799V20.64H1.91992V19.2ZM19.2551 6.47992C19.5255 6.20982 19.6775 5.8433 19.6775 5.46112C19.6775 5.07893 19.5255 4.71241 19.2551 4.44232L16.6775 1.86472C16.4074 1.59432 16.0409 1.44238 15.6587 1.44238C15.2765 1.44238 14.91 1.59432 14.6399 1.86472L3.83992 12.6647V17.2799H8.45512L19.2551 6.47992ZM15.6552 2.88004L18.24 5.46484L16.08 7.62484L13.4952 5.04004L15.6552 2.88004ZM5.27992 15.8397V13.2549L12.4799 6.05488L15.0647 8.63968L7.86472 15.8397H5.27992Z"
								fill="#0000FF"
							/>
						</svg>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
