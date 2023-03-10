import React from 'react';
import Link from 'next/link';

const HotTopicPolicy = () => {
	const mockData = [
		{
			Topic_Name: 'คอรัปชั่น',
		},
		{
			Topic_Name: 'ความเท่าเทียม',
		},
		,
		{
			Topic_Name: 'ความมั่นคง',
		},
		{
			Topic_Name: '112',
		},
	];
	return (
		<div className="container px-4 pt-10 mx-auto">
			<p className="font-bold typo-h6">นโยบายประเด็นร้อน</p>
			<div className="flex flex-wrap text-center ">
				{mockData.map((topic) => (
					<Link
						key={topic?.Topic_Name}
						href={`/นโยบายประเด็นร้อน/${topic?.Topic_Name}`}
						className="mt-4 mx-[8px]"
					>
						<div className="w-[156px] h-[156px] border border-black rounded-[10px]" />
						<p className="mt-2 font-bold typo-b4">{topic?.Topic_Name}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default HotTopicPolicy;
