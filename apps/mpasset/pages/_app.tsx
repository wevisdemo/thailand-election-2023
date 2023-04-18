import '@thailand-election-2023/styles/dist/index.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import React from 'react';


import 'dayjs/locale/th'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import dayjs from 'dayjs';

dayjs.extend(customParseFormat)
dayjs.extend(buddhistEra)
dayjs().locale('th')

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
        <election-cookie></election-cookie>
      }
    </div>
  );
}

export default MyApp;
