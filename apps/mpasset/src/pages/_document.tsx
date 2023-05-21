import { Html, Main, Head, NextScript } from 'next/document';

const TITLE = 'นักการเมืองเกี่ยวข้องกับธุรกิจแค่ไหน?';
const DESCRIPTION =
	'ลองสืบ! คน(จะ)เป็นผู้แทนฯ มีธุรกิจอะไร เกี่ยวข้องกับโครงการรัฐไหนบ้าง';

export default function Document() {
	return (
		<Html>
			<Head>
				<script
					defer
					data-domain={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`}
					src="https://analytics.punchup.world/js/plausible.js"
				></script>
				<link
					rel="icon"
					href={`${process.env.SECURE_HOST}${process.env.BASE_PATH}/design_assets/sns/favicon.png`}
				/>
				<meta
					property="og:url"
					content={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`}
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content={TITLE} />
				<meta property="og:description" content={DESCRIPTION} />
				<meta
					property="og:image"
					content={`${process.env.SECURE_HOST}${process.env.BASE_PATH}/design_assets/sns/og.jpg`}
				/>
				{/* twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:url"
					content={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`}
				/>
				<meta name="twitter:title" content={TITLE} />
				<meta name="twitter:description" content={DESCRIPTION} />
				<meta
					name="twitter:image"
					content={`${process.env.SECURE_HOST}/design_assets/sns/og.jpg`}
				/>
			</Head>
			<title>{TITLE}</title>
			<body className="scroll-smooth">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
