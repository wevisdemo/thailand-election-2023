import React from 'react';
import Link from 'next/link';
import SquareTopic from './SquareTopic';

const HotTopicPolicy = () => {
	const mockData = [
		{
			topic_name: 'คอรัปชั่น',
		},
		{
			topic_name: 'ความเท่าเทียม',
		},
		,
		{
			topic_name: 'ความมั่นคง',
		},
		{
			topic_name: '112',
		},
	];
	return (
		<div className="container px-4 pt-10 mx-auto">
			<p className="font-bold typo-h6">นโยบายประเด็นร้อน</p>
			<div className="flex flex-wrap text-center ">
				{mockData.map((topic) => (
					<Link
						key={topic?.topic_name}
						href={`/นโยบายประเด็นร้อน/${topic?.topic_name}`}
						className="mt-4 mx-[8px]"
					>
						<SquareTopic topicName={topic?.topic_name} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default HotTopicPolicy;
