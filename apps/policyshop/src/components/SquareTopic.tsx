import React, { FC } from 'react';
import { SquareTopicProps } from '@/types/components';

const SquareTopic: FC<SquareTopicProps> = ({ topicName }) => {
	return (
		<div>
			<div className="w-[156px] h-[156px] border border-black rounded-[10px]" />
			<p className="mt-2 font-bold typo-b4">{topicName}</p>
		</div>
	);
};

export default SquareTopic;
