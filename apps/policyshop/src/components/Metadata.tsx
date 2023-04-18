import { FunctionComponent } from 'react';
import Head from 'next/head';
import { imgPrefix } from '@/utils/path';

const Metadata: FunctionComponent = () => {
	return (
		<Head>
			<link rel="icon" href={`${imgPrefix}/favicon.png`} />
			<title>policyshop</title>
			<meta
				name="description"
				content="เทียบนโยบายหาเสียงเลือกตั้ง 66 ของแต่ละพรรคการเมือง"
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta
				property="og:title"
				content="เลือกตั้ง 66 รอบนี้ พรรคคุณพี่ขายอะไรหรอคะ?"
			/>
			<meta
				property="og:description"
				content="เทียบนโยบายหาเสียงเลือกตั้ง 66 ของแต่ละพรรคการเมือง"
			/>
			<meta property="og:image" content={`${imgPrefix}/policy_og.jpg`} />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
	);
};

export default Metadata;
