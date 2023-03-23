<template>
	<div id="quiz-2-wrapper">
		<div
			id="quiz-2"
			class="h-100vh bg-main intro d-flex justify-content-center align-items-center"
		>
			<div class="content text-center px-3">
				<h4 class="header-4 text-white">
					บอกหน่อย.. <br />
					ส.ส. ที่ถูกใจคุณและน่าจะเลือกคนนี้ควรมี
				</h4>
				<h2 class="header-2 font-weight-bold green-2">ทักษะและลักษณะนิสัย</h2>
				<h4 class="header-4 text-white">แบบไหน?</h4>
			</div>
			<div class="text-center go_down">
				<img :src="go_down" alt="go_down" class="mx-auto" />
			</div>
		</div>
		<div
			class="min-h-screen bg-main d-flex justify-content-center align-items-center"
		>
			<div class="content px-3 mx-auto">
				<p class="header-7 font-weight-bold green-2 m-0 text-center">
					ทักษะและลักษณะนิสัยที่จะพิจารณาเป็นพิเศษ
				</p>
				<p class="header-11 text-white text-center mb-3">
					(เรียงลำดับตามความสำคัญจากมากไปน้อย)
				</p>

				<div class="d-flex" :class="{ faded_choose: $store.state.isAnsQuiz2 }">
					<div
						class="d-flex flex-column align-items-center justify-content-between"
					>
						<div>
							<img
								:src="most_important"
								alt=""
								class="img-sortby d-none d-sm-block"
							/>
							<img
								:src="most_important_mb"
								alt=""
								class="img-sortby d-block d-sm-none"
							/>
						</div>

						<div>
							<img
								:src="least_important"
								alt=""
								class="img-sortby d-none d-sm-block"
							/>
							<img
								:src="least_important_mb"
								alt=""
								class="img-sortby d-block d-sm-none"
							/>
						</div>
					</div>
					<draggable
						:list="list"
						:disabled="!enabled"
						class="list-group"
						ghost-class="ghost"
						@start="dragging = true"
						@end="dragging = false"
						:forceFallback="true"
					>
						<div
							class="list-group-item header-9 mb-2 d-flex justify-content-between"
							v-for="(element, i) in list"
							:key="element.name"
						>
							<div class="content">
								<img
									class="d-inline-block img-drag-icon"
									:src="
										require('~/assets/images/quiz_part2/icon_illus_' +
											element.id +
											'.svg')
									"
									alt=""
								/>
								{{ element.name }}
							</div>
							<div class="img-box">
								<div>
									<img :src="drag" alt="" />
								</div>
							</div>
						</div>
					</draggable>
				</div>

				<div
					class="text-center mt-3"
					:class="{ faded_choose: $store.state.isAnsQuiz2 }"
				>
					<button @click="submit" class="submit-btn header-8 font-weight-bold">
						ส่งคำตอบ
					</button>
				</div>
			</div>
		</div>
		<div class="min-h-screen bg-main p-3" v-if="showResult" id="result-quiz-2">
			<div class="result">
				<p class="header-7 font-weight-bold m-0 text-center">
					ทักษะและลักษณะนิสัยที่จะพิจารณาเป็นพิเศษ
				</p>
				<p class="header-11 text-center">
					(ผลลัพธ์จากคนออกแบบ {{ total_people }} คน)
				</p>

				<div class="result-list">
					<b-row
						no-gutters
						v-for="(item, i) in result"
						:key="i"
						class="mb-2 align-items-center"
					>
						<b-col cols="1" lg="2" class="text-right">
							<img
								class="rank-icon"
								:src="
									require(`@/assets/images/quiz_part2/icon_rank_${i + 1}.svg`)
								"
								alt=""
							/>
						</b-col>
						<b-col cols="11" lg="10">
							<div
								class="box header-8 ml-2"
								:class="[
									{ 'top-3': i < 3 },
									{ first_choice: first_choice == item.name },
								]"
							>
								<img
									class="img-result-icon d-inline-block"
									:src="
										require('~/assets/images/quiz_part2/icon_illus_' +
											item.id +
											'.svg')
									"
									alt=""
								/>
								{{ item.name }}
							</div>
							<p
								class="header-12 m-0 font-weight-bold first-choice-text"
								v-if="first_choice == item.name"
							>
								อันดับแรกของคุณ
							</p>
						</b-col>
					</b-row>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import draggable from 'vuedraggable';
import firebase from 'firebase';
import { mapState } from 'vuex';
const quiz_result =
	'https://sheets.wevis.info/api/v1/db/data/v1/Design-Your-MP/Quiz2-Result';

let config = {
	headers: {
		'xc-auth':
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhpQHB1bmNodXAud29ybGQiLCJmaXJzdG5hbWUiOm51bGwsImxhc3RuYW1lIjpudWxsLCJpZCI6IjEiLCJyb2xlcyI6InVzZXIiLCJ0b2tlbl92ZXJzaW9uIjoiMTdkOTNmYTZhYjc1ZjVmZWYyODU5ZDRjZTA2ZmJlNGYxOTU2YTA4OWU4NzRlODliODI0ZjMyZTFjNDZkNzY0N2YxNmMxZDkxZjI4MjJlNzAiLCJpYXQiOjE2NzU4MDU2MDAsImV4cCI6MTY3NTg0MTYwMH0.q5FiqVZ02HxDzEAoxxkmmEAq-yRr63hHmPwSTx4k3hI',
		'Content-Type': 'application/json',
	},
};

export default {
	name: 'Quiz1',
	components: {
		draggable,
	},
	data() {
		return {
			choice_2: require('~/assets/images/choice_2.svg'),
			go_down: require('~/assets/images/go_down.svg'),
			drag: require('~/assets/images/drag.svg'),
			most_important: require('~/assets/images/most_important.svg'),
			most_important_mb: require('~/assets/images/most_important_mb.svg'),
			least_important: require('~/assets/images/least_important.svg'),
			least_important_mb: require('~/assets/images/least_important_mb.svg'),
			enabled: true,
			showResult: false,
			list: [
				{ name: 'มีภาวะผู้นำ', id: 1, total: 0 },
				{ name: 'มีทักษะการสื่อสารที่ดี', id: 2, total: 0 },
				{ name: 'มีมนุษยสัมพันธ์ดี', id: 3, total: 0 },
				{ name: 'มีความซื่อสัตย์ ไม่โกง', id: 4, total: 0 },
				{ name: 'มีความรับผิดชอบต่อประชาชน', id: 5, total: 0 },
				{ name: 'พูดจริง ทำจริง', id: 6, total: 0 },
				{ name: 'ความคิดทันต่อการเปลี่ยนแปลง', id: 7, total: 0 },
				{ name: 'พูดภาษาต่างประเทศได้', id: 8, total: 0 },
				{ name: 'การคิดเชิงวิเคราะห์และเลือกตัดสินใจ', id: 9, total: 0 },
				{ name: 'ความคิดสร้างสรรค์', id: 10, total: 0 },
			],
			dragging: false,
			result: [],
			total_people: 0,
			first_choice: '',
		};
	},
	computed: {
		...mapState(['isEditAns']),
	},
	watch: {
		isEditAns(val) {
			if (val) this.showResult = false;
		},
	},
	created() {
		this.setData();
	},
	methods: {
		async setData(choice) {
			const ref = this.$fire.database.ref('quizzes/quiz2');
			try {
				const snapshots = await ref.once('value');
				this.list.forEach((element, i) => {
					element.total = snapshots.val()['choice' + element.id];
				});
				this.total_people = snapshots.val()['total_people'];
			} catch (e) {
				alert(e);
			}
		},
		async submit() {
			this.first_choice = this.list[0].name;

			this.list.forEach((element, i) => {
				const ref = this.$fire.database.ref(
					'quizzes/quiz2/choice' + element.id
				);
				ref.set(firebase.database.ServerValue.increment(10 - i));
				element.total += 10 - i;
			});

			const reftotal = this.$fire.database.ref('quizzes/quiz2/total_people');
			reftotal.set(firebase.database.ServerValue.increment(1));
			this.total_people += 1;

			// await this.$axios
			//   .$post(
			//     quiz_result,
			//     {
			//       ans_1: this.list[0].name,
			//       ans_2: this.list[1].name,
			//       ans_3: this.list[2].name,
			//       ans_4: this.list[3].name,
			//       ans_5: this.list[4].name,
			//       ans_6: this.list[5].name,
			//       ans_7: this.list[6].name,
			//       ans_8: this.list[7].name,
			//       ans_9: this.list[8].name,
			//       ans_10: this.list[9].name,
			//     },
			//     config
			//   )
			//   .then((response) => {
			//     console.log("send!");
			//   })
			//   .catch((error) => {
			//     console.log(error);
			//   });

			this.$store.commit('setAnsweredQuiz2', true);

			this.result = [];

			this.list.forEach((element) => {
				this.result.push(element);
			});

			this.showResult = true;
			setTimeout(() => {
				document.getElementById('result-quiz-2').scrollIntoView();

				this.result.sort(function (a, b) {
					return b.total - a.total;
				});
			}, 500);

			if (this.$store.state.selectedQuiz == 2)
				this.$store.commit('setShowQuiz1', true);
		},
	},
};
</script>

<style lang="scss">
.list-group {
	max-width: 450px;
	margin: auto;
}

.list-group-item {
	border-radius: inherit !important;
	cursor: move;
	padding: 0;
	border: 1px solid #000000;

	.content {
		padding: 10px;
	}

	.img-box {
		padding: 10px 5px;
		border-left: 1px solid #000000;
	}

	@media #{$mq-mini-mobile} {
		background-size: 300px;

		.content,
		.img-box {
			padding: 5px 7px;
		}
		font-size: 14px !important;
	}

	img {
		width: 34px;

		@media #{$mq-mini-mobile} {
			width: 22px;
		}
	}
}
</style>

<style lang="scss" scoped>
.bg-main {
	background: #000;
}

.intro {
	background: #000;
	position: relative;
}

.content {
	position: relative;
	max-width: 810px;
}

.intro:before {
	content: ' ';
	display: block;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	opacity: 0.3;
	background-image: url('../assets/images/choice_2.svg');
	background-size: 850px;
	background-position: center;
	background-repeat: no-repeat;

	@media #{$mq-mini-mobile} {
		background-size: 300px;
	}
}

.go_down {
	position: absolute;
	bottom: 60px;
	width: 100%;
}

.submit-btn {
	-webkit-appearance: none;
	border: 1px solid #000000;
	border-radius: 5px;
	padding: 8px 20px;
	color: #000000;
	background: white;
}

.result {
	background: #ffffff;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
	border-radius: 30px;
	max-width: 900px;
	padding: 50px;
	margin: auto;

	@media #{$mq-mini-mobile} {
		padding: 20px;
	}
}

.top-3 {
	background: #6cdb5a;
	font-weight: bold;
	padding: 20px 30px;
	font-size: 28px;

	@media #{$mq-mini-mobile} {
		font-size: 21px;
	}
}

.result-list {
	max-width: 680px;
	margin: auto;

	.box {
		border: 1px solid #000000;
		padding: 10px 30px;
		border-radius: 10px;

		@media #{$mq-mini-mobile} {
			padding: 5px 7px;
			max-width: 230px;
		}

		@media #{$mq-se} {
			padding: 5px 7px;
			max-width: 200px;
		}
	}
}

.first_choice {
	border: 6px solid #000000 !important;
}

.first-choice-text {
	position: absolute;
	right: -70px;
	max-width: 60px;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;

	@media #{$mq-lg} {
		right: -57px;
		max-width: 55px;
	}

	@media #{$mq-mini-mobile} {
		right: -16px;
		max-width: 45px;
	}

	@media #{$mq-se} {
		max-width: 30px;
	}
}

.img-result-icon {
	@media #{$mq-mini-mobile} {
		width: 22px;
	}
}

.rank-icon {
	@media #{$mq-mini-mobile} {
		width: 30px;
	}
}

.img-drag-icon {
	width: 34px;
}
</style>
