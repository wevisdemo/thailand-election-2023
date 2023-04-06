import { FunctionComponent } from 'react';
import PolicyCategoryCount from './PolicyTopicCount';
import { IPolicyTopicCount } from '@/types/components';

interface PropsType {
	items: IPolicyTopicCount[];
}

const PolicyTopicCountWrapper: FunctionComponent<PropsType> = ({ items }) => {
	return (
		<div className="grid grid-cols-1 gap-[8px]">
			{items.map((item, index) => (
				<PolicyCategoryCount item={item} key={`category-${index}`} />
			))}
		</div>
	);
};

export default PolicyTopicCountWrapper;
