import { FunctionComponent, ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { imgPrefix } from '@/utils/path';
// import '@thailand-election-2023/components';

interface PropsType {
	title: string | string[] | undefined;
	children: ReactNode;
}

const Layout: FunctionComponent<PropsType> = ({ title, children }) => {
	useEffect(() => {
		// @ts-ignore
		import('@thailand-election-2023/components');
	});
	return (
		<div className="main-component">
			<election-header></election-header>
			<div className="max-w-[420px] md:max-w-none m-auto ">
				{title != 'landing' && (
					<Link href="/" className="flex mt-[16px]">
						<img src={`${imgPrefix}/arrow.svg`} alt="arrow" />
						<p className="ml-[8px] typo-b2 font-kondolar font-bold">{title}</p>
					</Link>
				)}
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
