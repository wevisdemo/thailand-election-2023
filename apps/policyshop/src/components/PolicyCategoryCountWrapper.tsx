import { FunctionComponent } from 'react';
import PolicyCategoryCount from './PolicyCategoryCount';
import { IPolicyCategory } from '@/types/components';

interface PropsType {
	categories: IPolicyCategory[];
}

const PolicyCategoryCountWrapper: FunctionComponent<PropsType> = ({
	categories,
}) => {
	return (
		<div className="grid grid-cols-1 gap-[8px]">
			{categories.map((item, index) => (
				<PolicyCategoryCount item={item} key={`category-${index}`} />
			))}
		</div>
	);
};

export default PolicyCategoryCountWrapper;
