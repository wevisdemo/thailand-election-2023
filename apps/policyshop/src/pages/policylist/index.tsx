import Layout from '@/components/Layout';
import TemplatePolicyList from '@/components/Template/PolicyList';
import { IDropdownOption } from '@/types/components';
import { imgPrefix } from '@/utils/path';
import { useState } from 'react';

const mockPolicyCardList = [
	{
		party_name: 'ก้าวไกล',
		party_logo_src: `${imgPrefix}/logo/party/example.svg`,
		background_color: '#FF711E',
		text_image: 'ค่าแรงขั้นต่ำ 600 บาท/วัน',
		description:
			'- บัตรประชาชนใบ เดียว\n- สัญญาจ้างเป็นธรรม ทำงานไม่เกิน 40 ช.ม./สัปดาห์',
		category_icon_src: `${imgPrefix}/icon/category/economic.svg`,
		category_text: 'เศรษฐกิจ',
	},
	{
		party_name: 'ก้าวไกล',
		party_logo_src: `${imgPrefix}/logo/party/example.svg`,
		background_color: '#FF711E',
		text_image: 'ค่าแรงขั้นต่ำ 600 บาท/วัน',
		description:
			'- บัตรประชาชนใบ เดียว\n- สัญญาจ้างเป็นธรรม ทำงานไม่เกิน 40 ช.ม./สัปดาห์',
		category_icon_src: `${imgPrefix}/icon/category/economic.svg`,
		category_text: 'เศรษฐกิจ',
	},
];

export default function PolicyListPage() {
	const [category1, setCategory1] = useState<IDropdownOption<string> | null>(
		null
	);
	const [category2, setCategory2] = useState<IDropdownOption<string> | null>(
		null
	);

	return (
		<Layout title="นโยบายตามประเด็น">
			{/* <TemplatePolicyList
				category1={category1}
				setCategory1={setCategory1}
				category2={category2}
				setCategory2={setCategory2}
				policyList={mockPolicyCardList}
			></TemplatePolicyList> */}
		</Layout>
	);
}
