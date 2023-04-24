/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	trailingSlash: true,
	basePath: '/mpasset',
	assetPrefix: '/mpasset/',
	// basePath: "/mpasset",
	// assetPrefix: "/mpasset/",
	images: {
		unoptimized: true,
	},
	env: {
		BASE_PATH: '/mpasset',
		HOST:
			process.env.NODE_ENV !== 'development'
				? 'http://wevisdemo.github.io'
				: '',
		SECURE_HOST:
			process.env.NODE_ENV !== 'development'
				? 'https://wevisdemo.github.io'
				: '',
		NETLIFY_NEXT_PLUGIN_SKIP: true,
	},
};

module.exports = nextConfig;
