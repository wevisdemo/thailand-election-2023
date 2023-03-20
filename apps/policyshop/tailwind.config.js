/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require('@thailand-election-2023/styles/tailwind.config.js')],
	corePlugins: {
		preflight: false,
	},
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				kondolar: '"Kondolar Thai"',
				heading:
					'"Kondolar Thai", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
				body: '"IBM Plex Sans Thai Looped", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			},
		},
	},
	plugins: [],
};
