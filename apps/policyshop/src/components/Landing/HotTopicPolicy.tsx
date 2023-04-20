import React, { FC } from 'react';
import Link from 'next/link';
import SquareTopicWrapper from '../SquareTopicWarpper';
import { ByTopicProps } from '@/types/components';

const HotTopicPolicy: FC<ByTopicProps> = ({ topics }) => {
	const hotTopics = Object.keys(topics);
	return (
		<div className="container pt-20 mx-auto" id="HotTopicPolicy">
			<p className="pb-10 font-bold text-center typo-h4">
				นโยบายหาเสียง <br className=" md:hidden" />
				เลือกตั้ง ปี 2566
			</p>
			<p className="px-4 py-2 font-bold typo-h6 bg-highlight-2">
				นโยบายประเด็นร้อน
			</p>
			<div className="grid grid-cols-2 gap-1 mx-auto text-center md:grid-cols-3 w-fit ">
				{hotTopics.map((topic) => (
					<Link
						key={topic}
						href={`/list?topic=${topic}&hot=true`}
						className="mt-4 mx-[8px]"
					>
						<SquareTopicWrapper topicName={topic} />
						<p className="typo-b6">({topics[topic].length})</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default HotTopicPolicy;
