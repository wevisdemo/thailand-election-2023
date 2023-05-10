import { Party, Policy } from '@/types/components';
import { FunctionComponent, useState } from 'react';
import PolicyCardWrapper from '../PolicyCardWrapper';
import Loading from '../Loading';

interface PropsType {
	policyList: Policy[];
	partyList: Party[];
	children?: React.ReactNode;
	page?: string;
}

const TemplatePolicyList: FunctionComponent<PropsType> = ({
	policyList,
	children,
	partyList,
	page,
}) => {
	const [isReady, setIsReady] = useState<boolean>(false);
	return (
		<div>
			<div className="grid gap-[8px]">{children}</div>
			<div
				className="mt-[16px]"
				style={{ display: isReady ? 'unset' : 'none' }}
			>
				<PolicyCardWrapper
					policyList={policyList}
					partyList={partyList}
					page={page}
					setIsReady={setIsReady}
				/>
			</div>
			<div
				className="mt-[16px]"
				style={{ display: isReady ? 'none' : 'unset' }}
			>
				<Loading />
			</div>
		</div>
	);
};

export default TemplatePolicyList;
