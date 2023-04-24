/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	basePath: '/mpasset',
	assetPrefix: '/mpasset',
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
	},
};

module.exports = nextConfig;
