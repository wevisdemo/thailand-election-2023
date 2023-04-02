import React, { FC } from 'react';
import Link from 'next/link';
import { ByTopicProps } from '@/types/components';
import CircleTopicWrapper from '../CircleTopicWrapper';
import SearchBar from '../SearchBar';

const ByTopic: FC<ByTopicProps> = ({ topics }) => {
	return (
		<div className="container relative pt-10 mx-auto">
			<p className="px-4 py-2 font-bold typo-h6 bg-highlight-2">
				นโยบายตามประเด็นต่าง ๆ
			</p>
			<SearchBar />
			<div className="flex flex-wrap justify-center ">
				{Object.keys(topics).map((key) => (
					<Link
						key={key}
						href={`/แบ่งตามประเด็น/${key}`}
						className="mt-4 mx-[8px] md:mx-[10px]"
					>
						<CircleTopicWrapper name={key} totalTopic={topics[key].length} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default ByTopic;
