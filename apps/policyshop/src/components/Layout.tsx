import { ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { imgPrefix } from '@/utils/path';
// import '@thailand-election-2023/components';

interface PropsType {
	title: string | string[] | undefined;
	children: ReactNode;
}

export default function Layout({ title, children }: PropsType) {
	useEffect(() => {
		// @ts-ignore
		import('@thailand-election-2023/components');
	});
	return (
		<div className="main-component">
			<election-header></election-header>
			<div className="max-w-[420px] md:container m-auto p-[16px]">
				{title != 'landing' && (
					<Link href="/" className="flex mt-[16px]">
						<img src={`${imgPrefix}/arrow.svg`} alt="arrow" />
						<p className="ml-[8px] typo-b2 font-kondolar font-bold">{title}</p>
					</Link>
				)}
				<div className="mt-[24px]">{children}</div>
			</div>
		</div>
	);
}
