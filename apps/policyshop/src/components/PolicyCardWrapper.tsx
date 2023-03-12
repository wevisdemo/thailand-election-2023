import { IPolicyCard } from '@/types/components';
import { FunctionComponent } from 'react';
import PolicyCard from './PolicyCard';

interface PropsType {
	policyList: IPolicyCard[];
	secondList?: IPolicyCard[]; // if don't want to separate list into 2 section, don not value this prop. It use for compare page.
}

const PolicyCardWrapper: FunctionComponent<PropsType> = ({
	policyList,
	secondList,
}) => {
	return (
		<div
			className={`grid ${
				secondList ? 'grid-cols-2 gap-[16px]' : 'grid-cols-1'
			}`}
		>
			<div
				className={`grid ${
					secondList ? 'grid-cols-1' : 'grid-cols-2 gap-[16px]'
				}`}
			>
				{policyList.map((item, index) => (
					<PolicyCard key={`first-card-${index}`} policyInfo={item} />
				))}
			</div>
			{secondList && (
				<div className="grid-cols-1">
					{secondList.map((item, index) => (
						<PolicyCard key={`second-card-${index}`} policyInfo={item} />
					))}
				</div>
			)}
		</div>
	);
};

export default PolicyCardWrapper;
