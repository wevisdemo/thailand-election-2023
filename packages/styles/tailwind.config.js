/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	theme: {
		extend: {
			colors: {
				black: 'var(--color-black)',
				white: 'var(--color-white)',
				'gray-1': 'var(--color-gray-1)',
				'gray-2': 'var(--color-gray-2)',
				'gray-3': 'var(--color-gray-3)',
				'gray-4': 'var(--color-gray-4)',
				'highlight-1': 'var(--color-highlight-1)',
				'highlight-2': 'var(--color-highlight-2)',
				'highlight-3': 'var(--color-highlight-3)',
			},
			fontFamily: {
				heading:
					'"Kondolar Thai", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
				body: '"IBM Plex Sans Thai Looped", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			},
			fontWeight: {
				bold: 700,
				black: 900,
			},
		},
	},
	plugins: [],
};
