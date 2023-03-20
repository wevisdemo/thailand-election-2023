import { IDropdownOption, IPolicyCard } from '@/types/components';
import { imgPrefix } from '@/utils/path';
import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import Dropdown from '../Dropdown';
import PolicyCardWrapper from '../PolicyCardWrapper';
import RandomButton from '../RandomButton';

const mockOptions: IDropdownOption<string>[] = [
	{ label: 'เศรษฐกิจ (100)', value: 'economy' },
	{ label: 'ค่าแรงขั้นต่ำ (99)', value: 'minimum_wage ' },
	{ label: 'ค่าแรงขั้นต่ำ (99)', value: 'minimum_wage ' },
	{ label: 'ค่าแรงขั้นต่ำ (99)', value: 'minimum_wage ' },
	{ label: 'ค่าแรงขั้นต่ำ (99)', value: 'minimum_wage ' },
	{ label: 'ค่าแรงขั้นต่ำ (99)', value: 'minimum_wage ' },
	{ label: 'ค่าแรงขั้นต่ำ (99)', value: 'minimum_wage ' },
	{ label: 'ค่าแรงขั้นต่ำ (99)', value: 'minimum_wage ' },
	{ label: 'ค่าแรงขั้นต่ำ (99)', value: 'minimum_wage ' },
	{ label: 'ค่าแรงขั้นต่ำ (99)', value: 'minimum_wage ' },
];

// const mockPolicyCardList: IPolicyCard[] = [
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

interface PropsType {
	category1: IDropdownOption<string> | null;
	category2: IDropdownOption<string> | null;
	setCategory1: Dispatch<SetStateAction<IDropdownOption<string> | null>>;
	setCategory2: Dispatch<SetStateAction<IDropdownOption<string> | null>>;
	policyList: IPolicyCard[];
}

const TemplatePolicyList: FunctionComponent<PropsType> = ({
	category1,
	category2,
	setCategory1,
	setCategory2,
	policyList,
}) => {
	return (
		<div>
			<div className="grid gap-[8px]">
				<Dropdown
					options={mockOptions}
					currentOption={category1}
					onSelect={setCategory1}
				/>
				<Dropdown
					options={mockOptions}
					currentOption={category2}
					onSelect={setCategory2}
				/>
			</div>
			<div className="flex justify-between items-center mt-[32px]">
				<p>เรียงตาม</p>
				<RandomButton onClick={() => {}} />
			</div>
			<p className="mt-[16px] px-[16px]">
				ส่งข้อมูลให้ทีมงานเพื่ออัปเดตเพิ่มเติมที่ team@punchup.world
			</p>
			<div className="mt-[16px]">
				<PolicyCardWrapper policyList={policyList} />
			</div>
		</div>
	);
};

export default TemplatePolicyList;
