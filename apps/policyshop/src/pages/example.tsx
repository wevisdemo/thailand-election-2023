import { IDropdownOption, IPolicyCard } from '@/types/components';
import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import PolicyCard from '@/components/PolicyCard';
import { imgPrefix } from '@/utils/path';
import PolicyCardWrapper from '@/components/PolicyCardWrapper';
import RandomButton from '@/components/RandomButton';

export default function Example() {
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

	const mockPolicyCardList: IPolicyCard[] = [
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

	const mockSecondPolicyCardList: IPolicyCard[] = [
		{
			party_name: 'ก้าวไกล',
			party_logo_src: `${imgPrefix}/logo/party/example.svg`,
			background_color: 'var(--color-red)',
			text_image: 'ค่าแรงขั้นต่ำ 600 บาท/วัน',
			description:
				'- บัตรประชาชนใบ เดียว\n- สัญญาจ้างเป็นธรรม ทำงานไม่เกิน 40 ช.ม./สัปดาห์',
			category_icon_src: `${imgPrefix}/icon/category/economic.svg`,
			category_text: 'เศรษฐกิจ',
		},
		{
			party_name: 'ก้าวไกล',
			party_logo_src: `${imgPrefix}/logo/party/example.svg`,
			background_color: 'var(--color-red)',
			text_image: 'ค่าแรงขั้นต่ำ 600 บาท/วัน',
			description:
				'- บัตรประชาชนใบ เดียว\n- สัญญาจ้างเป็นธรรม ทำงานไม่เกิน 40 ช.ม./สัปดาห์',
			category_icon_src: `${imgPrefix}/icon/category/economic.svg`,
			category_text: 'เศรษฐกิจ',
		},
	];

	const [currentOption, setCurrentOption] =
		useState<IDropdownOption<string> | null>(null);

	return (
		<div>
			<h1>random button</h1>
			{/* <div className="w-[100px]"> */}
			<RandomButton onClick={() => {}} />
			{/* </div> */}
			<h1>drop down</h1>
			<div className="w-[500px]">
				<Dropdown
					options={mockOptions}
					currentOption={currentOption}
					onSelect={setCurrentOption}
				/>
				<Dropdown
					outline
					options={mockOptions}
					currentOption={currentOption}
					onSelect={setCurrentOption}
				/>
			</div>
			<div className="w-[155px]">
				<PolicyCard policyInfo={mockPolicyCardList[0]}></PolicyCard>
			</div>
			<div className="w-[400px]">
				<PolicyCardWrapper policyList={mockPolicyCardList} />
			</div>
			<div className="w-[400px]">
				<PolicyCardWrapper
					policyList={mockPolicyCardList}
					secondList={mockSecondPolicyCardList}
				/>
			</div>
		</div>
	);
}
