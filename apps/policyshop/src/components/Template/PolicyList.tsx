import { Party, Policy } from '@/types/components';
import { FunctionComponent } from 'react';
import PolicyCardWrapper from '../PolicyCardWrapper';

interface PropsType {
	policyList: Policy[];
	partyList: Party[];
	children?: React.ReactNode;
}

const TemplatePolicyList: FunctionComponent<PropsType> = ({
	policyList,
	children,
	partyList,
}) => {
	return (
		<div>
			<div className="grid gap-[8px]">{children}</div>
			<div className="mt-[16px]">
				<PolicyCardWrapper policyList={policyList} partyList={partyList} />
			</div>
		</div>
	);
};

export default TemplatePolicyList;
