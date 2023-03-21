import React, { FC } from 'react';
import Link from 'next/link';
import CircleTopicWrapper from '../CircleTopicWrapper';

const ByTopic: FC = () => {
	const mockData = [
		{
			name: 'คุณภาพชีวิต',
			total: 20,
		},
		{
			name: 'ความมั่นคง',
			total: 21,
		},
		{
			name: 'ต่างประเทศ',
			total: 30,
		},
		{
			name: 'บริหารจัดการ',
			total: 40,
		},
		{
			name: 'ศาสนาและวัฒนธรรม',
			total: 62,
		},
	];
	return (
		<div className="container pt-10 mx-auto">
			<p className="font-bold typo-h6">แบ่งตามประเด็น</p>
			<div className="flex flex-wrap text-center ">
				{mockData.map((topic) => (
					<Link
						key={topic?.name}
						href={`/แบ่งตามประเด็น/${topic?.name}`}
						className="mt-4 mx-[8px] md:mx-[10px]"
					>
						<CircleTopicWrapper name={topic.name} totalTopic={topic.total} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default ByTopic;
