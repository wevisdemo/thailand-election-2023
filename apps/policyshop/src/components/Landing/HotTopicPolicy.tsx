import React, { FC } from 'react';
import Link from 'next/link';
import SquareTopicWrapper from '../SquareTopicWarpper';
import { ByTopicProps } from '@/types/components';

const HotTopicPolicy: FC<ByTopicProps> = ({ topics }) => {
	const hotTopics = Object.keys(topics).slice(0, 6);
	return (
		<div className="container pt-10 mx-auto">
			<p className="font-bold typo-h6">นโยบายประเด็นร้อน</p>
			<div className="flex flex-wrap text-center ">
				{hotTopics.map((topic) => (
					<Link
						key={topic}
						href={`/นโยบายประเด็นร้อน/${topic}`}
						className="mt-4 mx-[8px]"
					>
						<SquareTopicWrapper topicName={topic} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default HotTopicPolicy;
