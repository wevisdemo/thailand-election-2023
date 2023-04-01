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
	const refx = useRef<HTMLDivElement>(null);

	useEffect(() => {
		console.log(refx.current?.offsetWidth);
	}, []);

	return (
		<div className="flex">
			<div className="grid grid-cols-1 gap-[16px] w-[50%] h-fit">
				{policyList.map((item, index) => (
					<div className="mx-auto" key={`first-card-${index}`}>
						<PolicyCard policyInfo={item} />
					</div>
				))}
			</div>
			<div className="grid grid-cols-1 gap-[16px] w-[50%] h-fit">
				{secondList.map((item, index) => (
					<div className="mx-auto" key={`second-card-${index}`}>
						<PolicyCard policyInfo={item} />
					</div>
				))}
			</div>
		</div>
	);
};

export default ComparePolicyCardWrapper;
