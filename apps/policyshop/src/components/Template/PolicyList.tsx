import { Party, Policy } from '@/types/components';
import { FunctionComponent, useEffect, useState } from 'react';
import PolicyCardWrapper from '../PolicyCardWrapper';
import Loading from '../Loading';

interface PropsType {
	policyList: Policy[];
	partyList: Party[];
	children?: React.ReactNode;
	page?: string;
	setIsReady?: (arg: boolean) => void;
}

const TemplatePolicyList: FunctionComponent<PropsType> = ({
	policyList,
	children,
	partyList,
	page,
	setIsReady,
}) => {
	useEffect(() => {
		if (setIsReady) {
			setIsReady(true);
		}
	}, []);

	return (
		<div>
			<div className="grid gap-[8px]">{children}</div>
			<div className="mt-[16px]">
				<PolicyCardWrapper
					policyList={policyList}
					partyList={partyList}
					page={page}
				/>
			</div>
		</div>
	);
};

export default TemplatePolicyList;
