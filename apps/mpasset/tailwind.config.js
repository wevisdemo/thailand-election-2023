/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('@thailand-election-2023/styles/tailwind.config.js')],
	corePlugins: {
		preflight: false,
	},
	content: [
		'./app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				/* Color styles */
				'party-01': '#FFEC3F',
				'party-02': '#94A86B',
				'party-03': '#FF8A00',
				'party-04': '#676DFF',
				'action-positive': '#60C1AF',
				'action-negative': '#F92D46',
				'action-neutral': '#888888',
				'action-soft-positive': '#D2FFF7',
				'action-soft-negative': '#FFCAD0',
				'neutral-super-black': '#000000',
				'neutral-gray-1': '#555555',
				'neutral-gray-2': '#AAAAAA',
				'neutral-gray-3': '#EEEEEE',
				'neutral-super-white': '#FFFFFF',
				'transparent-party-01': '#FFEC3F',
				'transparent-party-02': '#94A86B',
				'transparent-party-03': '#FF8A00',
				'transparent-party-04': '#676DFF',
				'transparent-positive': '#60C1AF',
				'transparent-negative': '#F92D46',
				'transparent-white-50': '#FFFFFF',
				'transparent-white-20': '#FFFFFF',
			},
			boxShadow: {
				/* Effect styles */
				'small-shadow': '0px 2px 4px rgba(0, 0, 0, 0.08)',
				'regular-shadow': '0px 8px 16px rgba(0, 0, 0, 0.15)',
				'large-shadow': '0px 16px 48px rgba(0, 0, 0, 0.18)',
			},
			height: {
				header: 'calc(100vh - 58px)',
			},
		},
	},
	plugins: [],
};
