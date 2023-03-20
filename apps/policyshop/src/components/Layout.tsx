import { imgPrefix } from '@/utils/path';
import { ReactNode, useEffect } from 'react';
// import '@thailand-election-2023/components';

interface PropsType {
	title: string;
	children: ReactNode;
}

export default function Layout({ title, children }: PropsType) {
	useEffect(() => {
		import('@thailand-election-2023/components');
	});
	return (
		<div className="main-component">
			<election-header></election-header>
			<div className="max-w-[420px] m-auto p-[16px]">
				<div className="flex mt-[16px]">
					<img src={`${imgPrefix}/arrow.svg`} alt="arrow" />
					<p className="ml-[8px] typo-b2 font-kondolar font-bold">{title}</p>
				</div>
				<div className="mt-[24px]"></div>
				{children}
			</div>
		</div>
	);
}
