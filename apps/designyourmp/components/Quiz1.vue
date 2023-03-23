<template>
	<div id="quiz-1-wrapper">
		<div
			id="quiz-1"
			class="h-100vh bg-main intro d-flex justify-content-center align-items-center px-3"
		>
			<div class="content text-center">
				<h4 class="header-4 text-white">
					บอกหน่อย.. <br />
					ส.ส. ที่ถูกใจคุณและน่าจะเลือกคนนี้ควรมี
				</h4>
				<h2 class="header-2 font-weight-bold blue">คุณสมบัติพื้นฐาน</h2>
				<h4 class="header-4 text-white">แบบไหน?</h4>
			</div>
			<div class="text-center go_down">
				<img :src="go_down" alt="go_down" class="mx-auto" />
			</div>
		</div>
		<div class="min-h-screen position-relative text-center">
			<div
				class="d-flex menu-box justify-content-center flex-wrap"
				:class="{ faded_choose: $store.state.isAnsQuiz1 }"
			>
				<div
					v-for="(item, i) in menu"
					:key="i"
					class="menu"
					:class="[
						{ active: menu_active == item, 'noclick faded': isShowConfirm },
					]"
					@click="selectMenu(item, i)"
				>
					<p class="header-11 m-0">{{ item }}</p>
				</div>
			</div>
			<div class="popup-confirm" v-if="isShowConfirm">
				<p class="header-7 font-weight-bold">
					ยืนยันคำตอบ <br />
					เพื่อเอาข้อมูลไปคำนวณ
				</p>
				<div class="choice header-8 mb-2" @click="showResult">ยืนยัน</div>
				<div class="choice header-8" @click="isShowConfirm = false">
					เดี๋ยวก่อน
				</div>
			</div>
			<b-row class="min-h-screen bg-black-2" no-gutters>
				<b-col
					:class="{ faded: isShowConfirm }"
					lg="6"
					class="bg-black-2 d-flex justify-content-center align-items-center text-white position-relative"
				>
					<div class="popup" v-if="data.length == 0">
						<b-row class="align-items-center" no-gutters>
							<b-col cols="4"><img :src="alert_icon" alt="" /></b-col>
							<b-col cols="8" class="text-left">
								<p class="header-11 font-weight-bold m-0">เสียใจด้วย!</p>
								<p class="header-11 m-0">
									ส.ส. ในสภาชุดที่ 25 ไม่มีที่ ตรงกับใจของคุณ แต่เราอยาก
									ให้คุณออกแบบต่อว่า ส.ส. แบบไหนที่คุณอยากเห็น!
								</p>
							</b-col>
						</b-row>
					</div>
					<div>
						<p class="header-10">ส.ส. ในสภา<br />ที่ตรงกับความต้องการ</p>
						<div class="people-box d-flex flex-wrap my-3 my-lg-5">
							<div v-for="item in data" class="people"></div>
							<div
								v-for="item in fade_ppl"
								class="people faded"
								v-if="fade_ppl != 0"
							></div>
						</div>

						<p class="header-11">
							ส.ส. ในสภาชุดที่ 25 ตั้งแต่ 10 ก.ค. 2562 - 17 ตุลาคม 2565
						</p>
					</div>
				</b-col>
				<b-col
					:class="{ faded: isShowConfirm }"
					lg="6"
					class="bg-black d-flex justify-content-center align-items-center"
				>
					<div class="question-box">
						<p class="header-10 text-white mb-3">
							ออกแบบ ส.ส. ตามที่คุณต้องการ
						</p>
						<template v-if="current_quiz != null">
							<p class="header-7 font-weight-bold blue">
								{{ current_quiz.question }}
							</p>

							<div :class="{ faded_choose: $store.state.isAnsQuiz1 }">
								<div
									v-for="(item, i) in current_quiz.ans"
									class="choice mb-2"
									@click="answer(item, i)"
									:class="[
										{
											'bg-blue': current_quiz.current_ans == item,
											noclick: isShowConfirm,
										},
									]"
								>
									<p class="header-8 m-0">{{ item }}</p>
									<p class="header-10 m-0" v-if="item == 'สายกฎหมาย'">
										(เช่น ทนายความ, อัยการ, ผู้พิพากษา, นิติกร,
										ที่ปรึกษาทางกฎหมาย)
									</p>
									<p class="header-10 m-0" v-else-if="item == 'สายการเมือง'">
										(เช่น ส.ส., นายกอปท., สภาอปท. , รัฐมนตรี)
									</p>
									<p
										class="header-10 m-0"
										v-else-if="item == 'สายบริหารงานภาครัฐ'"
									>
										(เช่น ผู้ว่าราชการจังหวัด, นายอำเภอ, ปลัดอำเภอ,
										ข้าราชการพลเรือนสามัญ)
									</p>
								</div>
							</div>
						</template>
					</div>
				</b-col>
			</b-row>
		</div>
		<div class="h-100vh1 bg-main result" v-if="isShowResult" id="result-quiz-1">
			<div
				class="result-box text-center min-h-screen d-flex justify-content-center align-items-center"
			>
				<div>
					<h4 class="header-5 font-weight-bold kondolar">
						คุณสมบัติที่คุณเลือก{{
							result_list.length != 0
								? 'ใกล้เคียงกับ ส.ส. ที่มีอยู่ ' +
								  result_list.length +
								  ' คน ดังนี้'
								: 'ไม่ใกล้เคียงกับ ส.ส. คนไหนในสภานี้เลย'
						}}
					</h4>
					<h5 class="header-6 font-weight-bold kondolar">
						แต่ในอนาคตอาจมีตัวเลือกอื่นๆ
						ที่ใกล้เคียงกับคุณสมบัติของคุณกว่านี้ก็ได้
					</h5>
					<p class="header-11 mb-3">
						*ข้อมูลนำมาวิเคราะห์คือ ส.ส. ในสภาชุดที่ 25 และในอนาคตอาจมีหรือไม่มี
						ตัวเลือกอื่นๆ ที่ใกล้เคียงกับคุณสมบัติของคุณกว่านี้ก็ได้
					</p>
					<b-row class="result-box-content">
						<b-col lg="6">
							<div
								class="d-flex flex-wrap people-box-result-wrapper"
								v-if="result_list.length != 0"
							>
								<div v-for="item in result_list" class="people-box-result p-1">
									<img
										:src="getImgUrl(`${item.Firstname}-${item.Lastname}`)"
										:alt="`${item.Firstname}-${item.Lastname}`"
										:id="'person-' + item.Index"
										class="politician-img"
									/>
									<b-popover
										:target="'person-' + item.Index"
										triggers="hover"
										placement="top"
									>
										<p class="header-9 m-0 font-weight-bold">
											{{ item.Firstname }} {{ item.Lastname }}
										</p>
										<p class="header-11 m-0">พรรค {{ item.Party }}</p>
										<p class="header-11 m-0">ประเภท ส.ส. {{ item.Position }}</p>

										<a
											:href="
												'https://theyworkforus.wevis.info/people/' +
												item.Firstname +
												'-' +
												item.Lastname
											"
											target="_blank"
											rel="noopener noreferrer"
											class="header-11"
											>ผลงาน</a
										>
									</b-popover>
								</div>
							</div>
							<div
								class="d-flex justify-content-center align-items-center h-100"
								v-else
							>
								<div>
									<img :src="illus_cry" alt="" />
								</div>
							</div>
						</b-col>
						<b-col lg="6" class="text-center header-9">
							<p class="font-weight-bold">คุณสมบัติที่คุณอยากเห็น</p>
							<div class="ans-choice">
								<span v-if="quiz[0].current_ans != 'ไม่กำหนดอายุ'"
									>อายุของ ส.ส. ควรอยู่ในช่วง
									<b>{{ quiz[0].current_ans }}</b> ปี</span
								>
								<span v-else>ไม่กำหนดอายุของ ส.ส.</span>
							</div>
							<div class="ans-choice">
								<span v-if="quiz[1].current_ans != 'ไม่กำหนด'"
									>ระดับการศึกษาของ ส.ส. ควรอยู่ในช่วง<b>{{
										quiz[1].current_ans
									}}</b></span
								>
								<span v-else>ไม่กำหนดระดับการศึกษา</span>
							</div>
							<div class="ans-choice">
								<span v-if="quiz[2].current_ans != 'จบสาขาใดมาก็ได้'"
									>จบการศึกษา<b>{{ quiz[2].current_ans }}</b></span
								>
								<span v-else>จบสาขาใดมาก็ได้</span>
							</div>
							<div class="ans-choice">
								<span v-if="quiz[3].current_ans != 'สายใดมาก็ได้'"
									>อาชีพเดิมต้องทำงาน<b>{{ quiz[3].current_ans }}</b></span
								>
								<span v-else>สายใดมาก็ได้</span>
							</div>
							<div class="ans-choice">
								<b v-if="quiz[4].current_ans == 'ไม่มี'">ไม่</b>
								<b v-if="quiz[4].current_ans == 'ไม่จำเป็น'">ไม่จำเป็น</b
								>ต้องมีเครือข่ายทางการเมือง
							</div>
							<div class="ans-choice">
								<b v-if="quiz[5].current_ans == 'ไม่มี'">ไม่</b>
								<b v-if="quiz[5].current_ans == 'ไม่จำเป็น'">ไม่จำเป็น</b
								>ต้องอาศัยอยู่ในจังหวัดที่ลงสมัคร
							</div>
						</b-col>
					</b-row>
					<hr class="mx-auto my-3 my-sm-5" />
					<p class="header-11 my-3">แชร์ไปให้เพื่อนของคุณเล่น</p>
					<div class="share-box text-center">
						<div class="d-flex justify-content-center align-items-center">
							<p class="header-11 m-0">Share</p>

							<ShareNetwork
								network="facebook"
								title=""
								:url="
									result_list.length > 500
										? 'https://election66.wevis.info/designyourmp/ogimage/501'
										: 'https://election66.wevis.info/designyourmp/ogimage/' +
										  result_list.length
								"
								class="share-btn pointer text-1 mx-2"
							>
								<img :src="facebook" alt="facebook" />
							</ShareNetwork>

							<ShareNetwork
								network="twitter"
								title=""
								:url="
									result_list.length > 500
										? 'https://election66.wevis.info/designyourmp/ogimage/501'
										: 'https://election66.wevis.info/designyourmp/ogimage/' +
										  result_list.length
								"
								class="share-btn pointer text-1 mx-2"
							>
								<img :src="twitter" alt="twitter" />
							</ShareNetwork>
							<ShareNetwork
								network="line"
								title=""
								:url="
									result_list.length > 500
										? 'https://election66.wevis.info/designyourmp/ogimage/501'
										: 'https://election66.wevis.info/designyourmp/ogimage/' +
										  result_list.length
								"
								class="share-btn pointer text-1 mx-2"
							>
								<img :src="line" alt="line" />
							</ShareNetwork>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const quiz_result =
	'https://sheets.wevis.info/api/v1/db/data/v1/Design-Your-MP/Mp-Checklist-New';

let config = {
	headers: {
		'xc-token': 'dzDdGV8Ounbk5KIrhhsoGnYEj4VsqWPD6MsvSz8k',
		'Content-Type': 'application/json',
	},
};

import firebase from 'firebase';
import { mapState } from 'vuex';

export default {
	name: 'Quiz1',
	data() {
		return {
			choice_1: require('~/assets/images/choice_1.svg'),
			go_down: require('~/assets/images/go_down.svg'),
			facebook: require('~/assets/images/facebook.svg'),
			line: require('~/assets/images/line.svg'),
			twitter: require('~/assets/images/twitter.svg'),
			alert_icon: require('~/assets/images/alert_icon.svg'),
			illus_cry: require('~/assets/images/illus_cry.png'),
			menu: [
				'อายุ',
				'การศึกษา',
				'สาขาที่จบ',
				'อาชีพเดิม',
				'เครือข่าย',
				'ยึดโยงพื้นที่',
			],
			menu_active: 'อายุ',
			current_quiz: null,
			quiz: [
				{
					id: 1,
					question: 'อายุของ ส.ส. ควรอยู่ช่วงไหน?',
					ans: [
						'อายุ 18-30',
						'อายุ 31-40',
						'อายุ 41-50',
						'อายุ 51-60 ขึ้นไป',
						'ไม่กำหนดอายุ',
					],
					current_ans: '',
					filter: '',
					filterFb: '',
				},
				{
					id: 2,
					question: 'ต้องมีระดับการศึกษาควรอยู่ในระดับไหน?',
					ans: [
						'ต่ำกว่าปริญญาตรี',
						'ปริญญาตรี',
						'ปริญญาโท',
						'ปริญญาเอก',
						'ไม่กำหนด',
					],
					current_ans: '',
					filter: '',
					filterFb: '',
				},
				{
					id: 3,
					question: 'จบการศึกษาอะไร?',
					ans: [
						'สาขากฎหมาย',
						'สาขาการเมือง',
						'สาขาบริหารงานภาครัฐ',
						'สาขาการบริหารธุรกิจ',
						'สาขาการศึกษา',
						'สาขาอื่นๆ',
						'จบสาขาใดมาก็ได้',
					],
					current_ans: '',
					filter: '',
					filterFb: '',
				},
				{
					id: 4,
					question: 'อาชีพเดิมต้องทำงานแนวไหนมา?',
					ans: [
						'สายกฎหมาย',
						'สายการเมือง',
						'สายบริหารงานภาครัฐ',
						'นักธุรกิจ',
						'นักวิชาการ',
						'สายอื่นๆ',
						'สายใดมาก็ได้',
					],
					current_ans: '',
					filter: '',
					filterFb: '',
				},
				{
					id: 5,
					question: 'ควรจะต้องมีเครือข่ายทางการเมืองไหม?',
					ans: ['มี', 'ไม่มี', 'ไม่จำเป็น'],
					current_ans: '',
					filter: '',
					filterFb: '',
				},
				{
					id: 6,
					question:
						'ส.ส. เขต ควรจะต้องเรียน หรืออาศัยอยู่หรือทำงาน ในจังหวัดที่ลงสมัครไหม?',
					ans: ['อยู่', 'ไม่อยู่', 'ไม่จำเป็น'],
					current_ans: '',
					filter: '',
					filterFb: '',
				},
			],
			data: [],
			fade_ppl: 0,
			isShowConfirm: false,
			isShowResult: false,
			result_list: [],
			noco_data: [],
			slickOptions: {
				dots: true,
				focusOnSelect: true,
				infinite: true,
				speed: 500,
				slidesToShow: 3,
				slidesToScroll: 3,
				touchThreshold: 5,
				// Any other options that can be got from plugin documentation
			},
		};
	},
	computed: {
		...mapState(['isEditAns']),
	},
	watch: {
		isEditAns(val) {
			if (val) this.isShowResult = false;
		},
	},
	mounted() {
		this.current_quiz = this.quiz[0];
		// this.result_list = this.noco_data;
		this.getDataFromNocodb();
	},
	methods: {
		async getDataFromNocodb() {
			await this.$axios
				.$get(quiz_result + '?sort=Firstname', config)
				.then((response) => {
					this.setData(response);
				})
				.catch((error) => {
					console.log(error);
				});
		},
		async setData(data) {
			var pageinfo = data.pageInfo;
			for (let i = 0; i < pageinfo.totalRows; i++) {
				if (i * 100 < pageinfo.totalRows) {
					await this.$axios
						.$get(
							quiz_result +
								'?sort=Firstname&limit=100&shuffle=0&offset=' +
								i * 100,
							config
						)
						.then((response) => {
							response.list.forEach((element) => {
								this.noco_data.push(element);
								this.data.push(element);
							});
						})
						.catch((error) => {
							console.log(error);
						});
				} else break;
			}
		},
		selectMenu(menu, index) {
			this.menu_active = menu;
			this.current_quiz = this.quiz[index];
		},
		answer(ans, i) {
			if (this.menu_active == 'อายุ') this.onCheckQuestion1(ans);
			else if (this.menu_active == 'การศึกษา') this.onCheckQuestion2(ans);
			else if (this.menu_active == 'สาขาที่จบ') this.onCheckQuestion3(ans);
			else if (this.menu_active == 'อาชีพเดิม') this.onCheckQuestion4(ans);
			else if (this.menu_active == 'เครือข่าย') this.onCheckQuestion5(ans);
			else this.onCheckQuestion6(ans);

			this.filterData();

			var a = this.menu.indexOf(this.menu_active);

			if (this.menu_active != 'ยึดโยงพื้นที่') {
				this.selectMenu(this.menu[a + 1], a + 1);
			}
		},
		async showResult() {
			var x = this.quiz.map((num) => num.filterFb);

			x.forEach((element, i) => {
				const ref = this.$fire.database.ref(
					'quizzes/quiz1/question' + (i + 1) + '/' + element
				);
				ref.set(firebase.database.ServerValue.increment(1));
			});

			const reftotal = this.$fire.database.ref('quizzes/quiz1/total_people');
			reftotal.set(firebase.database.ServerValue.increment(1));

			var x = this.quiz.map((num) => num.current_ans);

			localStorage.setItem('isAnsQuiz1', true);
			localStorage.setItem('ans_1', x[0]);
			localStorage.setItem('ans_2', x[1]);
			localStorage.setItem('ans_3', x[2]);
			localStorage.setItem('ans_4', x[3]);
			localStorage.setItem('ans_5', x[4]);
			localStorage.setItem('ans_6', x[5]);

			// await this.$axios
			//   .$post(
			//     quiz_result,
			//     {
			//       ans_1: x[0],
			//       ans_2: x[1],
			//       ans_3: x[2],
			//       ans_4: x[3],
			//       ans_5: x[4],
			//       ans_6: x[5],
			//     },
			//     config
			//   )
			//   .then((response) => {
			//     console.log("send!");
			//   })
			//   .catch((error) => {
			//     console.log(error);
			//   });

			this.result_list = this.data;

			setTimeout(() => {
				this.isShowResult = true;
				this.isShowConfirm = false;
				if (this.$store.state.selectedQuiz == 1) {
					this.$store.commit('setShowQuiz2', true);
				}
				this.$store.commit('setShowResultQuiz1', true);
			}, 1000);

			setTimeout(() => {
				document.getElementById('result-quiz-1').scrollIntoView();
				this.$store.commit('setAnsweredQuiz1', true);
			}, 2000);
		},
		filterData() {
			var x = this.quiz.map((num) => num.filter);
			var y = this.quiz.map((num) => num.current_ans);
			var a = 0;
			this.data = this.noco_data;

			x.forEach((element, i) => {
				if (element != '') {
					if (i == 0) this.data = this.data.filter((x) => x['Age'] == element);
					else if (i == 1)
						this.data = this.data.filter((x) => x['EducationLevel'] == element);
					else if (i == 2)
						this.data = this.data.filter((x) => x['EducationField'] == element);
					else if (i == 3)
						this.data = this.data.filter((x) => x['Work'] == element);
					else if (i == 4)
						this.data = this.data.filter(
							(x) => x['BloodlineConnection'] == element
						);
					else if (i == 5)
						this.data = this.data.filter(
							(x) => x['LiveInOwnProvince'] == element
						);
				}
			});

			y.forEach((element, i) => {
				if (element != '') a++;
			});

			if (a == 6) this.isShowConfirm = true;
			else this.isShowConfirm = false;

			this.fade_ppl = this.noco_data.length - this.data.length;
		},
		onCheckQuestion1(ans) {
			if (ans == 'อายุ 18-30') {
				this.quiz[0].filter = '18-30';
				this.quiz[0].filterFb = 'age18_30';
			} else if (ans == 'อายุ 31-40') {
				this.quiz[0].filter = '31-40';
				this.quiz[0].filterFb = 'age31_40';
			} else if (ans == 'อายุ 41-50') {
				this.quiz[0].filter = '41-50';
				this.quiz[0].filterFb = 'age41_50';
			} else if (ans == 'อายุ 51-60 ขึ้นไป') {
				this.quiz[0].filter = '51-60';
				this.quiz[0].filterFb = 'age51_60';
			} else {
				this.quiz[0].filter = '';
				this.quiz[0].filterFb = 'noneedage';
			}

			this.quiz[0].current_ans = ans;
		},
		onCheckQuestion2(ans) {
			if (ans == 'ต่ำกว่าปริญญาตรี') {
				this.quiz[1].filter = 'below_bachelor';
				this.quiz[1].filterFb = 'below_bachelor_deg';
			} else if (ans == 'ปริญญาตรี') {
				this.quiz[1].filter = 'bachelor';
				this.quiz[1].filterFb = 'bachelor_deg';
			} else if (ans == 'ปริญญาโท') {
				this.quiz[1].filter = 'master';
				this.quiz[1].filterFb = 'master_deg';
			} else if (ans == 'ปริญญาเอก') {
				this.quiz[1].filter = 'phd';
				this.quiz[1].filterFb = 'phd';
			} else {
				this.quiz[1].filter = '';
				this.quiz[1].filterFb = 'no_need_deg';
			}

			this.quiz[1].current_ans = ans;
		},
		onCheckQuestion3(ans) {
			if (ans == 'สาขากฎหมาย') {
				this.quiz[2].filter = 'law';
				this.quiz[2].filterFb = 'law_faculty';
			} else if (ans == 'สาขาการเมือง') {
				this.quiz[2].filter = 'politics';
				this.quiz[2].filterFb = 'politics_faculty';
			} else if (ans == 'สาขาบริหารงานภาครัฐ') {
				this.quiz[2].filter = 'public_admin';
				this.quiz[2].filterFb = 'public_admin_faculty';
			} else if (ans == 'สาขาการบริหารธุรกิจ') {
				this.quiz[2].filter = 'business';
				this.quiz[2].filterFb = 'business_faculty';
			} else if (ans == 'สาขาการศึกษา') {
				this.quiz[2].filter = 'education';
				this.quiz[2].filterFb = 'education_faculty';
			} else if (ans == 'อื่นๆ') {
				this.quiz[2].filter = 'other';
				this.quiz[2].filterFb = 'other_faculty';
			} else {
				this.quiz[2].filter = '';
				this.quiz[2].filterFb = 'any_faculty';
			}

			this.quiz[2].current_ans = ans;
		},
		onCheckQuestion4(ans) {
			if (ans == 'สายกฎหมาย') {
				this.quiz[3].filter = 'law';
				this.quiz[3].filterFb = 'law_work';
			} else if (ans == 'สายการเมือง') {
				this.quiz[3].filter = 'politics';
				this.quiz[3].filterFb = 'politics_work';
			} else if (ans == 'สายบริหารงานภาครัฐ') {
				this.quiz[3].filter = 'public_admin';
				this.quiz[3].filterFb = 'public_admin_work';
			} else if (ans == 'นักธุรกิจ') {
				this.quiz[3].filter = 'business';
				this.quiz[3].filterFb = 'business_work';
			} else if (ans == 'นักวิชาการ') {
				this.quiz[3].filter = 'education';
				this.quiz[3].filterFb = 'education_work';
			} else if (ans == 'ทำงานสาขาอื่นๆ') {
				this.quiz[3].filter = 'other';
				this.quiz[3].filterFb = 'other_work';
			} else {
				this.quiz[3].filter = '';
				this.quiz[3].filterFb = 'any_work';
			}

			this.quiz[3].current_ans = ans;
		},
		onCheckQuestion5(ans) {
			if (ans == 'มี') {
				this.quiz[4].filter = 'yes';
				this.quiz[4].filterFb = 'has_connection_bloodline';
			} else if (ans == 'ไม่มี') {
				this.quiz[4].filter = 'no';
				this.quiz[4].filterFb = 'no_connection_bloodline';
			} else {
				this.quiz[4].filter = '';
				this.quiz[4].filterFb = 'no_need_connection_bloodline';
			}

			this.quiz[4].current_ans = ans;
		},
		onCheckQuestion6(ans) {
			if (ans == 'อยู่') {
				this.quiz[5].filter = true;
				this.quiz[5].filterFb = 'live_in_own_province';
			} else if (ans == 'ไม่อยู่') {
				this.quiz[5].filter = false;
				this.quiz[5].filterFb = 'not_live_in_own_province';
			} else {
				this.quiz[5].filter = '';
				this.quiz[5].filterFb = 'no_need_live_in_own_province';
			}

			this.quiz[5].current_ans = ans;
		},
		getImgUrl(filename) {
			try {
				return require('~/assets/images/politician_photos_crop/' +
					filename +
					'.jpg');
			} catch (_) {
				return require('~/assets/images/sample.svg');
			}
		},
	},
};
</script>

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
	max-width: 790px;
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
	background-image: url('../assets/images/choice_1.svg');
	background-size: 850px;
	background-position: center;
	background-repeat: no-repeat;

	@media #{$mq-mini-mobile} {
		background-size: 300px;
	}
}

.result {
	background-image: url('../assets/images/papershoot.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	padding: 5%;

	@media #{$mq-lg} {
		padding: 10px;
		background-image: unset;
	}
}

.go_down {
	position: absolute;
	bottom: 60px;
	width: 100%;
}

.menu-box {
	position: absolute;
	z-index: 1;
	width: 100%;
	color: #ffffff;
	top: 60px;

	@media #{$mq-lg} {
		position: unset;
		background-color: #151515;
	}

	.menu {
		cursor: pointer;
		padding: 5px;

		p {
			opacity: 0.7;
		}
	}
}

.active {
	border-bottom: 3px solid #ffffff;
}

.people-box {
	max-width: 320px;
	margin: auto;

	@media #{$mq-mini-mobile} {
		max-width: 230px;
	}
}

.people {
	width: 12px;
	height: 12px;
	background: #51b4fa;
	border-radius: 50%;
	margin: 2px;

	@media #{$mq-mini-mobile} {
		width: 5px;
		height: 5px;
	}
}

.choice,
.ans-choice {
	// max-width: 216px;
	width: 100%;
	margin: auto 0;
	margin-bottom: 10px;
	background: #ffffff;
	border: 1px solid #000000;
	border-radius: 5px;
	padding: 4px 10px;
	cursor: pointer;
	transition: 0.3s;
}

.ans-choice {
	cursor: default;
}

.choice:hover {
	background: #51b4fa;
}

.result-box {
	background: #ffffff;
	border-radius: 30px;
	width: 100%;
	height: 100%;
	padding: 36px;

	@media #{$mq-lg} {
		// min-height: 100vh;
	}

	.result-box-content {
		max-width: 950px;
		margin: auto;
	}

	hr {
		max-width: 615px;
		border-top: 1px dashed #000000;
	}
}

.question-box {
	max-width: 385px;
}

.faded {
	opacity: 0.2;
}

.popup {
	background: rgba(255, 255, 255, 0.9);
	border-radius: 5px;
	max-width: 300px;
	margin: auto;
	position: absolute;
	padding: 10px;
	color: #000000;
	z-index: 1;
}

.popup-confirm {
	background: rgba(81, 180, 250, 0.9);
	border-radius: 5px;
	max-width: 500px;
	margin: auto;
	position: absolute;
	color: #000000;
	z-index: 2;
	padding: 56px 109px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	height: fit-content;
}

.noclick {
	pointer-events: none;
}

.people-box-result {
	width: 19%;

	img {
		width: 100%;
	}

	@media #{$mq-mini-mobile} {
		//   img {
		//   width: 20%;
		// }
	}
}

.people-box-result-wrapper {
	overflow-y: scroll;
	max-height: 365px;
}

.people-box-result-wrapper::-webkit-scrollbar {
	background: rgba(19, 18, 18, 0.2);
	width: 5px;
}

.people-box-result-wrapper::-webkit-scrollbar-thumb {
	background: rgb(19, 18, 18);
	border-radius: 10px;
}

.politician-img {
	border-radius: 50%;
}
</style>
