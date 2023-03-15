/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('@thailand-election-2023/styles/tailwind.config.js')],
	corePlugins: {
		preflight: false,
	},
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
	],
};
