/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('@thailand-election-2023/styles/tailwind.config.js')],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	corePlugins: {
		preflight: false,
	},
	theme: {
		extend: {
			colors: {
				'byx-red': 'var(--color-byx-red)',
				'byx-blue': 'var(--color-byx-blue)',
			},
		},
	},
};
