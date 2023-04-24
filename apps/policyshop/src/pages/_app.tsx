import '@/styles/globals.css';
import '@thailand-election-2023/styles/dist/index.css';
import type { AppProps } from 'next/app';
import SafeHydrate from '../components/SafeHydrate';
import Metadata from '@/components/Metadata';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		// @ts-ignore
		import('@thailand-election-2023/components');
	});
	return (
		<>
			<Metadata />
			<SafeHydrate>
				<Component {...pageProps} />
			</SafeHydrate>
			{process.env.NODE_ENV !== 'development' && (
				<election-cookie></election-cookie>
			)}
		</>
	);
}
