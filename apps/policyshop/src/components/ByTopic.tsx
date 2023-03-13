import React from 'react';
import Link from 'next/link';
import CircleTopicWrapper from './CircleTopicWrapper';
const ByTopic = () => {
	const mockData = [
		{
			name: 'คุณภาพชีวิต',
		},
		{
			name: 'ความมั่นคง',
		},
		{
			name: 'ต่างประเทศ',
		},
		{
			name: 'บริหารจัดการ',
		},
		{
			name: 'ศาสนาและวัฒนธรรม',
		},
	];
	return (
		<div className="container px-4 pt-10 mx-auto">
			<p className="font-bold typo-h6">แบ่งตามประเด็น</p>
			<div className="flex flex-wrap text-center ">
				{mockData.map((topic) => (
					<Link
						key={topic?.name}
						href={`/แบ่งตามประเด็น/${topic?.name}`}
						className="mt-4 mx-[8px]"
					>
						<CircleTopicWrapper topicName={topic?.name} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default ByTopic;
