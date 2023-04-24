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
import AutoComplete from './AutoComplete';

interface PropsType {
	setDisplayPolicies1: Dispatch<SetStateAction<Policy[]>>;
	setDisplayPolicies2: Dispatch<SetStateAction<Policy[]>>;
	policies: Policy[];
}

interface ICurrentFilter {
	party1: IDropdownOption<string> | null;
	party2: IDropdownOption<string> | null;
	topic: IDropdownOption<string> | null;
}

interface IFilterOptions {
	party1: IDropdownOption<string>[];
	party2: IDropdownOption<string>[];
	topic: IDropdownOption<string>[];
}

const CompareFilter: FunctionComponent<PropsType> = ({
	policies,
	setDisplayPolicies1,
	setDisplayPolicies2,
}) => {
	// unduplicate party options
	const partyOptionsDefault: IDropdownOption<string>[] = policies
		.reduce((pre, curr) => {
			const partyIsExist = pre.find(
				(option) => option.label === curr.Party.Name
			);
			if (!partyIsExist) {
				pre = [...pre, { label: curr.Party.Name, value: curr.Party.Name }];
			}
			return pre;
		}, [] as IDropdownOption<string>[])
		.sort((i, j) => (i.label < j.label ? -1 : 1));

	// unduplicate topic options
	const topicOptionsDefault: IDropdownOption<string>[] = policies
		.reduce((pre, curr) => {
			const topicIsExist = pre.find((option) => option.label === curr.Topic);
			if (!topicIsExist) {
				pre = [...pre, { label: curr.Topic, value: curr.Topic }];
			}
			return pre;
		}, [] as IDropdownOption<string>[])
		.sort((i, j) => (i.label < j.label ? -1 : 1));

	const filterObjectDefault: ICurrentFilter = {
		party1: null,
		party2: null,
		topic: null,
	};

	const filterOptionsDefault: IFilterOptions = {
		party1: partyOptionsDefault,
		party2: partyOptionsDefault,
		topic: topicOptionsDefault,
	};

	const [filterOptions, setFilterOptions] =
		useState<IFilterOptions>(filterOptionsDefault);

	const [filterObject, setFilterObject] =
		useState<ICurrentFilter>(filterObjectDefault);

	const choosePoliciesByFilter = (
		policies: Policy[],
		partyName: string,
		topic?: string
	): Policy[] => {
		if (topic) {
			return policies.filter(
				(policy) => policy.Party.Name === partyName && policy.Topic === topic
			);
		}
		return policies.filter((policy) => policy.Party.Name === partyName);
	};

	useEffect(() => {
		const party1 = filterObject.party1;
		const party2 = filterObject.party2;
		const topic = filterObject.topic;
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
		if (topic) {
			setDisplayPolicies1(
				choosePoliciesByFilter(policies, party1?.value || '', topic.value || '')
			);
			setDisplayPolicies2(
				choosePoliciesByFilter(policies, party2?.value || '', topic.value || '')
			);
		} else {
			setDisplayPolicies1(
				choosePoliciesByFilter(policies, party1?.value || '')
			);
			setDisplayPolicies2(
				choosePoliciesByFilter(policies, party2?.value || '')
			);
		}
	}, [filterObject]);

	return (
		<div className="flex flex-col w-full">
			<div className="flex gap-[16px]">
				<AutoComplete
					options={filterOptions.party1}
					currentOption={filterObject.party1}
					onSelect={(item) => {
						setFilterObject((curr) => ({ ...curr, party1: item }));
					}}
					placeholder="เลือกพรรคที่1"
				/>
				<AutoComplete
					options={filterOptions.party2}
					currentOption={filterObject.party2}
					onSelect={(item) => {
						setFilterObject((curr) => ({ ...curr, party2: item }));
					}}
					placeholder="เลือกพรรคที่2"
				/>
			</div>
			<div className="mt-[24px]">
				<Dropdown
					options={filterOptions.topic}
					currentOption={filterObject.topic}
					onSelect={(item) => {
						setFilterObject((curr) => ({ ...curr, topic: item }));
					}}
					disabled={!filterObject.party1 && !filterObject.party2}
					placeholder="เลือกนโยบาย"
				/>
			</div>
		</div>
	);
};

export default CompareFilter;
