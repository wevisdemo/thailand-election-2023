import '@/styles/globals.css';
import '@thailand-election-2023/styles/dist/index.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
