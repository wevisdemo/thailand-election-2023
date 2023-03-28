import CompareFilter from '@/components/Compare/Filter';
import Layout from '@/components/Layout';
import PolicyCardWrapper from '@/components/PolicyCardWrapper';
import RandomButton from '@/components/RandomButton';
import { IDropdownOption, Policy } from '@/types/components';
import { imgPrefix } from '@/utils/path';
import { useState } from 'react';

// const mockPolicyCardList: Policy[] = [
// 	{
// 		Name: 'ก้าวไกล',
// 		party_logo_src: `${imgPrefix}/logo/party/example.svg`,
// 		background_color: '#FF711E',
// 		text_image: 'ค่าแรงขั้นต่ำ 600 บาท/วัน',
// 		description:
// 			'- บัตรประชาชนใบ เดียว\n- สัญญาจ้างเป็นธรรม ทำงานไม่เกิน 40 ช.ม./สัปดาห์',
// 		category_icon_src: `${imgPrefix}/icon/category/economic.svg`,
// 		category_text: 'เศรษฐกิจ',
// 	},
// 	{
// 		party_name: 'ก้าวไกล',
// 		party_logo_src: `${imgPrefix}/logo/party/example.svg`,
// 		background_color: '#FF711E',
// 		text_image: 'ค่าแรงขั้นต่ำ 600 บาท/วัน',
// 		description:
// 			'- บัตรประชาชนใบ เดียว\n- สัญญาจ้างเป็นธรรม ทำงานไม่เกิน 40 ช.ม./สัปดาห์',
// 		category_icon_src: `${imgPrefix}/icon/category/economic.svg`,
// 		category_text: 'เศรษฐกิจ',
// 	},
// ];

export default function ComparePage() {
	const [party1, setParty1] = useState<IDropdownOption<string> | null>(null);
	const [party2, setParty2] = useState<IDropdownOption<string> | null>(null);
	const [policy1, setPolicy1] = useState<IDropdownOption<string> | null>(null);
	const [policy2, setPolicy2] = useState<IDropdownOption<string> | null>(null);

	return (
		<Layout title="เปรียบเทียบนโยบาย">
			<>
				<CompareFilter
					party1={party1}
					party2={party2}
					policy1={policy1}
					policy2={policy2}
					setParty1={setParty1}
					setParty2={setParty2}
					setPolicy1={setPolicy1}
					setPolicy2={setPolicy2}
				/>
				<div className="flex justify-between items-center mt-[24px]">
					<p>เรียงตาม</p>
					<RandomButton onClick={() => {}} />
				</div>
				<div className="mt-[16px]">
					{/* <PolicyCardWrapper policyList={mockPolicyCardList} /> */}
				</div>
			</>
		</Layout>
	);
}
