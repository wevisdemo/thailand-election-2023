module.exports = (ctx) => ({
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
		cssnano: ctx.env === 'production' ? {} : false,
	},
});
