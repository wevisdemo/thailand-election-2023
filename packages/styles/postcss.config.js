module.exports = (ctx) => ({
	plugins: {
		'postcss-import': {},
		tailwindcss: {},
		autoprefixer: {},
		cssnano: ctx.env === 'production' ? {} : false,
	},
});
