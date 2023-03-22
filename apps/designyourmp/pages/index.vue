<template>
	<div>
		<div
			class="position-fixed loading d-flex justify-content-center align-items-center"
			v-if="isLoading"
		>
			<div class="text-center loading-box">
				<b-spinner
					style="width: 3rem; height: 3rem"
					label="Large Spinner"
				></b-spinner>
			</div>
		</div>
		<!-- <WvNavbar :dark="true" title="DESIGN YOUR MP">
      <NuxtLink to="/#quiz" class="menu-link">
        <WvNavButton :dark="true"> Quiz </WvNavButton></NuxtLink
      >
      <NuxtLink to="/#result" class="menu-link">
        <WvNavButton :dark="true"> Result </WvNavButton></NuxtLink
      >
      <NuxtLink to="/about" class="menu-link">
        <WvNavButton :dark="true">About</WvNavButton>
      </NuxtLink>
    </WvNavbar> -->
		<election-header />

		<Intro />
		<template v-if="$store.state.selectedQuiz == 1">
			<Quiz1 v-if="$store.state.isShowQuiz1" />
			<ResultQuiz1 v-if="$store.state.isShowResultQuiz1" />
			<Quiz2 v-if="$store.state.isShowQuiz2" />
			<div class="bg-black text-center py-3">
				<button
					@click="editAns"
					class="submit-btn header-8 font-weight-bold"
					v-if="$store.state.isAnsQuiz1 && $store.state.isAnsQuiz2"
				>
					แก้ไขคำตอบ
				</button>
			</div>
		</template>
		<template v-if="$store.state.selectedQuiz == 2">
			<Quiz2 v-if="$store.state.isShowQuiz2" />
			<Quiz1 v-if="$store.state.isShowQuiz1" />
			<ResultQuiz1 v-if="$store.state.isShowResultQuiz1" />
			<div class="bg-black text-center py-5">
				<button
					@click="editAns"
					class="submit-btn header-8 font-weight-bold"
					v-if="$store.state.isAnsQuiz1 && $store.state.isAnsQuiz2"
				>
					แก้ไขคำตอบ
				</button>
			</div>
		</template>
		<template v-if="$store.state.selectedQuiz == 3"> <ResultQuiz1 /></template>
		<Ending
			v-if="
				($store.state.isAnsQuiz1 && $store.state.isAnsQuiz2) ||
				$store.state.selectedQuiz == 3
			"
		/>

		<election-bottom />
		<election-footer />
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	head() {
		return {
			meta: [
				{
					hid: 'og-image',
					property: 'og:image',
					content: require('~/assets/images/og_title.png'),
				},
				{
					hid: 'twitter:image',
					name: 'twitter:image:src',
					content: require('~/assets/images/og_title.png'),
				},
				{
					hid: 'og:title',
					property: 'og:title',
					content: "'ผู้แทน' แบบไหนที่คุณอยากเห็น?",
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: 'ร่วมออกแบบคุณสมบัติสมาชิกสภาผู้แทนราษฎร (ส.ส.)',
				},
				{
					hid: 'twitter:title',
					name: 'twitter:title',
					content: "'ผู้แทน' แบบไหนที่คุณอยากเห็น?",
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: 'ร่วมออกแบบคุณสมบัติสมาชิกสภาผู้แทนราษฎร (ส.ส.)',
				},
			],
		};
	},
	data() {
		return {
			cookieOptions: ['Performance'],
			isLoading: true,
		};
	},
	created() {
		if (process.client) {
			this.$store.commit('setSelectedQuiz', 0);
			document.getElementsByTagName('body')[0].style.overflow = 'hidden';
			setTimeout(() => {
				document.getElementsByTagName('body')[0].style.overflow = 'unset';
				this.isLoading = false;
				if (window.location.href.includes('result'))
					this.$store.commit('setSelectedQuiz', 3);
			}, 1000);

			setTimeout(() => {
				if (window.location.href.includes('quiz')) {
					document.getElementById('choose-wrapper').scrollIntoView();
				} else if (window.location.href.includes('result'))
					document.getElementById('quiz1-result').scrollIntoView();
			}, 1500);
		}
	},
	mounted() {
		import('@thailand-election-2023/components');
	},
	methods: {
		onCookieAccept() {
			if (option['Performance']) {
				(function (c, l, a, r, i, t, y) {
					c[a] =
						c[a] ||
						function () {
							(c[a].q = c[a].q || []).push(arguments);
						};
					t = l.createElement(r);
					t.async = 1;
					t.src = 'https://www.clarity.ms/tag/' + i;
					y = l.getElementsByTagName(r)[0];
					y.parentNode.insertBefore(t, y);
				})(window, document, 'clarity', 'script', 'fx7fiq5eoe');
			}
		},
		editAns() {
			this.$store.commit('setEditAns', true);
			this.$store.commit('setAnsweredQuiz1', false);
			this.$store.commit('setAnsweredQuiz2', false);
			this.$store.commit('setShowResultQuiz1', false);

			if (this.$store.state.selectedQuiz == 1) {
				document.getElementById('quiz-1-wrapper').scrollIntoView();
				this.$store.commit('setShowQuiz2', false);
			} else {
				document.getElementById('quiz-2-wrapper').scrollIntoView();
				this.$store.commit('setShowQuiz1', false);
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.loading {
	width: 100%;
	z-index: 9999999;
	height: 100vh;
	background: white;
}

.submit-btn {
	-webkit-appearance: none;
	border: 1px solid #000000;
	border-radius: 5px;
	padding: 8px 20px;
	color: #000000;
}
</style>
