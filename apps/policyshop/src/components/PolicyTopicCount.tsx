import { IPolicyTopicCount } from '@/types/components';
import { imgPrefix } from '@/utils/path';
import { FunctionComponent } from 'react';

interface PropsType {
	item: IPolicyTopicCount;
}

const PolicyCategoryCount: FunctionComponent<PropsType> = ({ item }) => {
	return (
		<div className="flex justify-between w-full">
			<div className="flex items-center">
				<img
					src={`${imgPrefix}/plus.svg`}
					alt="plus-icon"
					className="mr-[4px] w-[24px] h-[24px]"
				/>
				<p className="typo-b6">
					{item.topic} ({item.count})
				</p>
			</div>
			<div className="flex items-center ml-[14px]">
				<div className="relative h-[14px] w-[95px] bg-[#d9d9d9]">
					<div
						className={`absolute h-[14px]`}
						style={{ backgroundColor: item.color, width: `${item.percent}%` }}
					/>
				</div>
				<p className="ml-[12px] typo-b6 w-[40px] text-right">{item.percent}%</p>
			</div>
		</div>
	);
};

export default PolicyCategoryCount;
