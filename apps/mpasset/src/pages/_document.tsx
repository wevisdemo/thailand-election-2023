import { Html, Main, Head, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          defer
          data-domain={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`}
          src="https://analytics.punchup.world/js/plausible.js"
        ></script>
        <link rel="icon" href={`${process.env.SECURE_HOST}${process.env.BASE_PATH}/design_assets/sns/favicon.png`} />
        <meta property="og:url" content={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mp Asset" />
        <meta property="og:description" content="นักการเมืองเกี่ยวข้องกับธุรกิจแค่ไหน?" />
        <meta property="og:image" content={`${process.env.SECURE_HOST}/design_assets/sns/og.jpg`} />
        {/* twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${process.env.SECURE_HOST}${process.env.BASE_PATH}`} />
        <meta name="twitter:title" content="Mp Asset" />
        <meta name="twitter:description" content="นักการเมืองเกี่ยวข้องกับธุรกิจแค่ไหน?" />
        <meta name="twitter:image" content={`${process.env.SECURE_HOST}/design_assets/sns/og.jpg`} />
      </Head>
      <title>นักการเมืองเกี่ยวข้องกับธุรกิจแค่ไหน?</title>
      <body className="scroll-smooth">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
