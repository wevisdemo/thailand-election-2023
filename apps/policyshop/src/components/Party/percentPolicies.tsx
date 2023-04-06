import { IPolicyTopicCount } from '@/types/components';
import { Policy } from '@thailand-election-2023/database';
import React, { FC } from 'react';
import PolicyTopicCountWrapper from '../PolicyTopicCountWrapper';

interface PropsType {
	policies: Policy[];
}

const findPercent = (individualCount: number, totalCount: number): number => {
	if (totalCount === 0) {
		return 0;
	}
	return Math.ceil((individualCount / totalCount) * 100);
};

const percentPolicies: FC<PropsType> = ({ policies }) => {
	const topicCountList = (): IPolicyTopicCount[] => {
		let resultList = policies.reduce((result, currentPolicy) => {
			const topicIndex = result.findIndex(
				(itemInList) => itemInList.topic === currentPolicy.Topic
			);
			if (topicIndex != -1) {
				result[topicIndex].count++;
			} else {
				const newObject: IPolicyTopicCount = {
					topic: currentPolicy.Topic,
					count: 1,
					percent: 0,
					color: 'var(--color-black)',
				};
				result = [...result, newObject];
			}
			return result;
		}, [] as IPolicyTopicCount[]);

		resultList = resultList.map((item) => ({
			...item,
			percent: findPercent(item.count, policies.length),
		}));
		return resultList;
	};

	// TODO: map percent

	return (
		<div>
			<div className="mt-5 ">
				<p className="font-bold typo-h5">นโยบาย 66</p>
				<p className="font-bold typo-h7">แบ่งตามประเด็น</p>
			</div>
			<PolicyTopicCountWrapper items={topicCountList()} />
		</div>
	);
};

export default percentPolicies;
