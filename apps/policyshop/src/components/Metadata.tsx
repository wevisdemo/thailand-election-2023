import { FunctionComponent } from 'react';
import Head from 'next/head';
import { imgPrefix } from '@/utils/path';

const Metadata: FunctionComponent = () => {
	const title = 'เลือกตั้ง 66 รอบนี้ พรรคคุณพี่ขายอะไรหรอคะ?';
	const desc = 'เทียบนโยบายหาเสียงเลือกตั้ง 66 ของแต่ละพรรคการเมือง';
	const web_url = 'https://staging.election66.wevis.info/policyshop/';
	const og_img = '/policy_og.png';
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={desc}></meta>
			<link rel="icon" type="image/x-icon" href={`${imgPrefix}/favicon.png`} />

			<meta property="og:title" content={title} />

			<meta property="og:description" content={desc} />

			<meta property="og:type" content="website" />

			<meta property="og:image" content={web_url + og_img} />

			<meta property="og:url" content={web_url} />

			<meta name="twitter:title" content={title} />

			<meta name="twitter:description" content={desc} />

			<meta name="twitter:card" content="summary_large_image" />

			<meta name="twitter:image:src" content={web_url + og_img} />

			<meta property="twitter:url" content={web_url} />
		</Head>
	);
};

export default Metadata;
