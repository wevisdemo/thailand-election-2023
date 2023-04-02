import { Policy } from '@/types/components';
import { FunctionComponent, useEffect, useRef } from 'react';
import PolicyCard from '../PolicyCard';

interface PropsType {
	policyList: Policy[];
	secondList: Policy[]; // if don't want to separate list into 2 section, don not value this prop. It use for compare page.
}

const ComparePolicyCardWrapper: FunctionComponent<PropsType> = ({
	policyList,
	secondList,
}) => {
	return (
		<div className="flex">
			<div className="grid grid-cols-1 gap-[16px] w-[50%] h-fit">
				{policyList.map((item, index) => (
					<PolicyCard policyInfo={item} key={`first-card-${index}`} />
				))}
			</div>
			<div className="grid grid-cols-1 gap-[16px] w-[50%] h-fit">
				{secondList.map((item, index) => (
					<PolicyCard policyInfo={item} key={`second-card-${index}`} />
				))}
			</div>
		</div>
	);
};

export default ComparePolicyCardWrapper;
