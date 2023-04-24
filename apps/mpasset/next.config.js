/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: '/mpasset',
	assetPrefix: '/mpasset',
	env: {
		BASE_PATH: '/mpasset',
		HOST:
			process.env.NODE_ENV === 'production'
				? 'http://election66.wevis.info'
				: 'https://staging.election66.wevis.info',
		SECURE_HOST:
			process.env.NODE_ENV === 'production'
				? 'https://election66.wevis.info'
				: 'https://staging.election66.wevis.info',
	},
};

module.exports = nextConfig;
