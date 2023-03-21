import React, { FC } from 'react';
import { CircleTopicWrapper } from '@/types/components';

const CircleTopicWrapper: FC<CircleTopicWrapper> = ({
	children,
	name,
	totalTopic,
}) => {
	return (
		<div>
			<div className="w-[70px] h-[70px] bg-white border border-black rounded-full overflow-hidden object-cover p-2">
				{children}
			</div>
			<p className="mt-2  typo-b6 w-[70px] md:w-[75px] text-center">{name}</p>
			{totalTopic && (
				<p className="mt-1  typo-b6 w-[70px] text-center">({totalTopic})</p>
			)}
		</div>
	);
};

export default CircleTopicWrapper;
