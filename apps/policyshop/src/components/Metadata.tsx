import { FunctionComponent } from 'react';
import Head from 'next/head';
import config from '../../tsconfig.json';

const Metadata: FunctionComponent = () => {
	return (
		<Head>
			<title>{config.title}</title>
			<meta name="description" content={config.desc}></meta>
			<link rel="icon" type="image/x-icon" href={`/policyshop/favicon.png`} />

			<meta property="og:title" content={config.title} />

			<meta property="og:description" content={config.desc} />

			<meta property="og:type" content="website" />

			<meta property="og:image" content={config.web_url + config.og_img} />

			<meta property="og:url" content={config.web_url} />

			<meta name="twitter:title" content={config.title} />

			<meta name="twitter:description" content={config.desc} />

			<meta name="twitter:card" content="summary_large_image" />

			<meta name="twitter:image:src" content={config.web_url + config.og_img} />

			<meta property="twitter:url" content={config.web_url} />
		</Head>
	);
};

export default Metadata;
