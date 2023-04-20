import React, { FC } from 'react';
import { SquareTopicProps } from '@/types/components';
import { HotTopicType, getBigTopicIconUrl } from '@/utils/data';

const SquareTopicWrapper: FC<SquareTopicProps> = ({ topicName }) => {
	return (
		<div className="grid justify-center">
			<div className="w-[156px] h-[156px] border border-black rounded-[10px] mx-auto">
				{getBigTopicIconUrl(topicName as HotTopicType) && (
					<img
						src={getBigTopicIconUrl(topicName as HotTopicType)}
						alt={`topic-icon-${topicName}`}
					/>
				)}
			</div>
			<p className="mt-2 font-bold typo-b4">{topicName}</p>
		</div>
	);
};

export default SquareTopicWrapper;
