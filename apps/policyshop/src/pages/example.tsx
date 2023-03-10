import { IDropdownOption } from '@/types/components';
import { useState } from 'react';
import Dropdown from '../components/Dropdown';

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

	const [currentOption, setCurrentOption] =
		useState<IDropdownOption<string> | null>(null);

	return (
		<div>
			<h1>drop down</h1>
			<div className="w-[500px]">
				<Dropdown
					options={mockOptions}
					currentOption={currentOption}
					onSelect={setCurrentOption}
				/>
			</div>
		</div>
	);
}
