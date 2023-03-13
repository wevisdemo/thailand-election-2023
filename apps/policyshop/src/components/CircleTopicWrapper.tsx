import React, { FC } from 'react';
import { CircleTopicWrapper } from '@/types/components';

const CircleTopicWrapper: FC<CircleTopicWrapper> = ({ topicName }) => {
	return (
		<div>
			<div className="w-[70px] h-[70px] border border-black rounded-full" />
			<p className="mt-2 font-bold typo-b4 w-[70px] text-center">{topicName}</p>
		</div>
	);
};

export default CircleTopicWrapper;
