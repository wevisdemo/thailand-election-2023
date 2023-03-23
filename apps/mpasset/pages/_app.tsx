import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@thailand-election-2023/styles/dist/index.css';
const WvCookieConsent = dynamic(() => import('@wevisdemo/ui/react/cookie-consent'), { ssr: false });
import { initClarity } from '../utils/clarity';
import dynamic from 'next/dynamic';

import React from 'react';

function onCookieAccept(options: Record<string, boolean>) {
  if (options['Analytics']) {
    initClarity();
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    // @ts-ignore
    import('@thailand-election-2023/components');
  });
  return (
    <div className='relative'>
      <election-header />
      <Component {...pageProps} />
      {process.env.NODE_ENV !== "development" &&
        <WvCookieConsent
          policyUrl="https://wevis.info/cookies_1-3"
          cookieOptions={['Analytics']}
          onAccept={onCookieAccept}
        />}
    </div>
  );
}

export default MyApp;
