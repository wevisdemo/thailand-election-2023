import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Topic = () => {
	const router = useRouter();
	const { title, topic } = router.query;

	return (
		<div className="container px-4 mx-auto py-14 ">
			<div className="flex">
				<Link href="/">back</Link>
				<p className="ml-3 font-bold typo-h6">{title}</p>
			</div>
			{topic}
		</div>
	);
};

export default Topic;
