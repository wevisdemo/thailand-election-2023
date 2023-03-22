const array = [];

for (var i = 0; i <= 501; i++) {
	array.push('/ogimage/' + i);
}

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	ssr: true,
	target: 'static',
	head: {
		title: '"ผู้แทน" แบบไหนที่คุณอยากเห็น?',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'ร่วมออกแบบคุณสมบัติสมาชิกสภาผู้แทนราษฎร (ส.ส.)',
			},
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
	},

	router: {
		base: '/designyourmp/',
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/styles/main.scss',
		'vue-slick-carousel/dist/vue-slick-carousel.css',
		'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: './plugins/vue-slick-carousel.js' },
		{ src: './plugins/lottie.js' },
		{ src: './plugins/vue-social-sharing.js' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/style-resources',
		'@nuxtjs/axios',
		[
			'@nuxtjs/firebase',
			{
				config: {
					apiKey: 'AIzaSyBA1NwM1_ksCjLQy3DrQGA7Xyw3BxvzMFk',
					authDomain: 'design-your-mp.firebaseapp.com',
					databaseURL:
						'https://design-your-mp-default-rtdb.asia-southeast1.firebasedatabase.app',
					projectId: 'design-your-mp',
					storageBucket: 'design-your-mp.appspot.com',
					messagingSenderId: '962874743822',
					appId: '1:962874743822:web:292433cca137deebc2f05f',
				},
				services: {
					database: true,
				},
			},
		],
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'vue-plausible',
		'bootstrap-vue/nuxt',
	],

	styleResources: {
		scss: ['~/assets/styles/variables.scss'],
	},

	generate: {
		routes: array,
	},

	vue: {
		config: {
			ignoredElements: [/election-\w*/],
		},
	},
};
