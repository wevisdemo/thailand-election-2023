import { IDropdownOption } from '@/types/components';
import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react';
import Dropdown from '../Dropdown';

const mockParties: IDropdownOption<string>[] = [
	{ label: 'ก้าวไกล', value: 'ก้าวไกล' },
	{ label: 'เพื่อไทย', value: 'เพื่อไทย' },
	{ label: 'ประชาธิปัตย์', value: 'ประชาธิปัตย์' },
];

const mockPolicies: IDropdownOption<string>[] = [
	{ label: 'คุณภาพชีวิต', value: 'คุณภาพชีวิต' },
	{ label: 'ความมั่นคง', value: 'ความมั่นคง' },
	{ label: 'ต่างประเทศ', value: 'ต่างประเทศ' },
];

interface PropsType {
	party1: IDropdownOption<string> | null;
	party2: IDropdownOption<string> | null;
	policy1: IDropdownOption<string> | null;
	policy2: IDropdownOption<string> | null;
	setParty1: Dispatch<SetStateAction<IDropdownOption<string> | null>>;
	setParty2: Dispatch<SetStateAction<IDropdownOption<string> | null>>;
	setPolicy1: Dispatch<SetStateAction<IDropdownOption<string> | null>>;
	setPolicy2: Dispatch<SetStateAction<IDropdownOption<string> | null>>;
}

const CompareFilter: FunctionComponent<PropsType> = (props) => {
	return (
		<div className="grid grid-cols-2 gap-[24px]">
			<Dropdown
				options={mockParties}
				currentOption={props.party1}
				onSelect={props.setParty1}
				outline
				placeholder="เลือกพรรค"
			/>
			<Dropdown
				options={mockParties}
				currentOption={props.party2}
				onSelect={props.setParty2}
				outline
				placeholder="เลือกพรรค"
			/>
			<Dropdown
				options={mockPolicies}
				currentOption={props.policy1}
				onSelect={props.setPolicy1}
				outline
				placeholder="เลือกนโยบาย"
			/>
			<Dropdown
				options={mockPolicies}
				currentOption={props.policy2}
				onSelect={props.setPolicy2}
				outline
				placeholder="เลือกนโยบาย"
			/>
		</div>
	);
};

export default CompareFilter;
