import { IDropdownOption } from '@/types/components';
import { Policy } from '@thailand-election-2023/database';
import {
	Dispatch,
	FunctionComponent,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import Dropdown from '../Dropdown';

interface PropsType {
	setDisplayPolicies1: Dispatch<SetStateAction<Policy[]>>;
	setDisplayPolicies2: Dispatch<SetStateAction<Policy[]>>;
	policies: Policy[];
}

interface ICurrentFilter {
	party1: IDropdownOption<string> | null;
	party2: IDropdownOption<string> | null;
	topic1: IDropdownOption<string> | null;
	topic2: IDropdownOption<string> | null;
}

interface IFilterOptions {
	party1: IDropdownOption<string>[];
	party2: IDropdownOption<string>[];
	topic1: IDropdownOption<string>[];
	topic2: IDropdownOption<string>[];
}

const CompareFilter: FunctionComponent<PropsType> = ({
	policies,
	setDisplayPolicies1,
	setDisplayPolicies2,
}) => {
	// unduplicate party options
	const partyOptionsDefault: IDropdownOption<string>[] = policies.reduce(
		(pre, curr) => {
			const partyIsExist = pre.find(
				(option) => option.label === curr.Party.Name
			);
			if (!partyIsExist) {
				pre = [...pre, { label: curr.Party.Name, value: curr.Party.Name }];
			}
			return pre;
		},
		[] as IDropdownOption<string>[]
	);

	// unduplicate topic options
	const topicOptionsDefault: IDropdownOption<string>[] = policies.reduce(
		(pre, curr) => {
			const topicIsExist = pre.find((option) => option.label === curr.Topic);
			if (!topicIsExist) {
				pre = [...pre, { label: curr.Topic, value: curr.Topic }];
			}
			return pre;
		},
		[] as IDropdownOption<string>[]
	);

	const filterObjectDefault: ICurrentFilter = {
		party1: null,
		party2: null,
		topic1: null,
		topic2: null,
	};

	const filterOptionsDefault: IFilterOptions = {
		party1: partyOptionsDefault,
		party2: partyOptionsDefault,
		topic1: topicOptionsDefault,
		topic2: topicOptionsDefault,
	};

	const [filterOptions, setFilterOptions] =
		useState<IFilterOptions>(filterOptionsDefault);

	const [filterObject, setFilterObject] =
		useState<ICurrentFilter>(filterObjectDefault);

	const choosePoliciesByFilter = (
		policies: Policy[],
		partyName: string,
		topic: string
	): Policy[] => {
		return policies.filter(
			(policy) => policy.Party.Name === partyName && policy.Topic === topic
		);
	};

	useEffect(() => {
		const party1 = filterObject.party1;
		const party2 = filterObject.party2;
		const topic1 = filterObject.topic1;
		const topic2 = filterObject.topic2;
		if (party1) {
			// filter party1 out from party2 options
			setFilterOptions((curr) => {
				const newParty2 = partyOptionsDefault.filter(
					(option) => option.label != party1.label
				);
				return { ...curr, party2: newParty2 };
			});
		}
		if (party2) {
			// filter party2 out from party1 options
			setFilterOptions((curr) => {
				const newParty1 = partyOptionsDefault.filter(
					(option) => option.label != party2.label
				);
				return { ...curr, party1: newParty1 };
			});
		}
		if (topic1) {
			setDisplayPolicies1(
				choosePoliciesByFilter(
					policies,
					party1?.value || '',
					topic1.value || ''
				)
			);
		}
		if (topic2) {
			setDisplayPolicies2(
				choosePoliciesByFilter(
					policies,
					party2?.value || '',
					topic2.value || ''
				)
			);
		}
	}, [filterObject]);

	return (
		<div className="grid grid-cols-2 gap-[24px]">
			<Dropdown
				options={filterOptions.party1}
				currentOption={filterObject.party1}
				onSelect={(item) => {
					setFilterObject((curr) => ({ ...curr, party1: item }));
				}}
				outline
				placeholder="เลือกพรรค"
			/>
			<Dropdown
				options={filterOptions.party2}
				currentOption={filterObject.party2}
				onSelect={(item) => {
					setFilterObject((curr) => ({ ...curr, party2: item }));
				}}
				outline
				placeholder="เลือกพรรค"
			/>
			<Dropdown
				options={filterOptions.topic1}
				currentOption={filterObject.topic1}
				onSelect={(item) => {
					setFilterObject((curr) => ({ ...curr, topic1: item }));
				}}
				disabled={!filterObject.party1}
				outline
				placeholder="เลือกนโยบาย"
			/>
			<Dropdown
				options={filterOptions.topic2}
				currentOption={filterObject.topic2}
				onSelect={(item) => {
					setFilterObject((curr) => ({ ...curr, topic2: item }));
				}}
				disabled={!filterObject.party2}
				outline
				placeholder="เลือกนโยบาย"
			/>
		</div>
	);
};

export default CompareFilter;
