<template>
  <div>
    <div class="bg-main" id="quiz1-result">
      <div class="px-3">
        <div class="bg-blue intro-box text-center mx-auto">
          <h5 class="header-5 font-weight-bold">
            มาดูกันว่า… "ผู้แทน" แบบที่คุณอยากเห็น มีสัดส่วน ส.ส.
            แค่ไหนในสภานี้!
          </h5>
          <p class="m-0">
            (เลือกสำรวจข้อมูล ส.ส. ในสภาจากการเลือกตั้ง ส.ส. ในสภาชุดที่ 25
            ข้อมูลนับทั้ง ส.ส. ที่เคยดำรงตำแหน่งและยังดำรงตำแหน่งอยู่ นับตั้งแต่
            10 ก.ค. 2562 - 17 ต.ค. 2565)
          </p>
        </div>
      </div>

      <div class="mt-5 text-center">
        <p class="header-7 m-0 blue font-weight-bold">
          เปรียบเทียบสัดส่วนจริงในสภาชุดปัจจุบัน <br />
          กับการออกแบบของทุกคน
        </p>
        <p class="header-10 text-white">
          (ผลลัพธ์จากคนออกแบบทั้งหมด {{ total_all }} คน)
        </p>
      </div>

      <div class="dashboard-box">
        <b-row class="m-0">
          <b-col class="mb-3" md="6" v-for="(item, i) in dashboard" :key="'list' + i">
            <div class="list text-black">
              <div class="chart-box">
                <p class="header-6 kondolar text-center font-weight-bold">
                  {{ item.title }}
                </p>
                <div class="d-flex flex-wrap justify-content-center px-2 px-sm-0">
                  <div class="d-flex mx-1 align-items-center" v-for="(item, j) in item.list" :key="'detail' + i + j">
                    <div class="circle mr-1" :style="{ backgroundColor: item.color }"></div>
                    <p class="header-12 mr-1 mb-0">
                      {{ item.title }}
                    </p>
                  </div>
                </div>
                <b-row class="mt-3">
                  <b-col cols="4">
                    <p class="header-10 m-0 font-weight-bold">

                      <template v-if="item.id == 1">สัดส่วนของอายุ ส.ส. ในสภา</template>
                      <template v-else-if="item.id == 2">สัดส่วนของระดับการศึกษาสูงสุดของ ส.ส. ในสภา</template>
                      <template v-else-if="item.id == 3">สัดส่วนการศึกษาของ ส.ส. ในสภา<br> <span
                          class="header-13 font-weight-normal">* 1 คน อาจมีได้มากกว่า 1 การศึกษา</span></template>
                      <template v-else-if="item.id == 4">สัดส่วนการอาชีพเดิมของ ส.ส. ในสภา<br> <span
                          class="header-13 font-weight-normal">* 1 คน อาจมีได้มากกว่า 1 การอาชีพ</span></template>
                      <template v-else-if="item.id == 5">สัดส่วนเครือข่ายทางการเมืองของ ส.ส. ในสภา</template>
                      <template v-else-if="item.id == 6">สัดส่วนอาศัยอยู่ที่ที่ลงสมัครของ ส.ส. ในสภา</template>
                    </p>
                  </b-col>
                  <b-col cols="8">
                    <div class="d-flex mx-1 align-items-center h-100">
                      <template v-for="(item2, j) in item.list">
                        <div v-if="j != item.list.length - 1" class="list-box h-100" :key="'detail' + i + j" :style="{
                          backgroundColor: item2.color,
                          width:
                            item2.total * 100 > 1
                              ? (item2.total * 100).toFixed(2) + '%'
                              : '1%',
                        }" :id="'popover-list-' + i + j"></div>
                        <b-popover :target="'popover-list-' + i + j" triggers="hover" placement="top">
                          <p class="header-12 mr-1 mb-0">
                            {{ item2.title }}:
                            <b>{{ (item2.total * 100).toFixed(2) }}%</b>
                          </p>
                        </b-popover>
                      </template>
                    </div>
                  </b-col>
                </b-row>
                <b-row class="mt-3">
                  <b-col cols="4">
                    <p class="header-10 m-0 font-weight-bold">
                      สัดส่วนจากการออกแบบของทุกคน
                    </p>
                  </b-col>
                  <b-col cols="8">
                    <DashboardByVote :data="
                      rearrangeData(quiz[i]['question' + item.id], item.id)
                    " :id="item.id" :total="total_all" :color="dashboard[i].list" :userAns="userAns[i]" />
                  </b-col>
                </b-row>
              </div>
            </div>
            <div class="desc-box">
              <b-row class="align-items-center">
                <b-col cols="2" class="detail-header-box text-right">
                  <img :src="details_text" alt="" /></b-col>
                <b-col cols="10">
                  <ul class="header-11 pl-3 m-0">
                    <template v-if="item.title == 'อายุของ ส.ส. ในสภา'">
                      <li><b>โดยเฉลี่ย ส.ส. ในสภาชุดที่ 25 มีอายุ 57 ปี</b></li>
                      <li>
                        <b>ส.ส. ที่มีอายุมากที่สุด 95 ปี</b><br />นายชัย ชิดชอบ
                        พรรคภูมิใจไทย
                      </li>
                      <li>
                        <b>ส.ส. ที่มีอายุน้อยที่สุด 30 ปี</b><br />นางสาวเพชรชมพู กิจบูรณะ พรรครวมพลังประชาชาติไทย
                      </li>
                    </template>
                    <template v-else-if="item.title == 'ระดับการศึกษาของ ส.ส. ในสภา'">
                      <li>
                        <b>ส.ส.ในสภาส่วนใหญ่มีระดับการศึกษา ระดับปริญญาโท
                          (59.1%)</b>
                      </li>
                    </template>
                    <template v-else-if="item.title == 'การศึกษา ส.ส. ในสภา'">
                      <li>
                        <b>ส่วนใหญ่เรียนมาเกี่ยวกับการเมืองการปกครอง
                          การบริหารงานภาครัฐ และกฎหมาย</b>
                      </li>
                    </template>
                    <template v-else-if="item.title == 'อาชีพเดิมของ ส.ส. ในสภา'">
                      <li>
                        <b>ในประสบการณ์อาชีพเดิมส่วนใหญ่ เป็น ส.ส.
                          มาก่อนอยู่แล้ว
                          รองลงมาเป็นนักธุรกิจและทำงานราชการต่างๆ</b>
                      </li>
                    </template>
                    <template v-else-if="
                      item.title == 'เครือข่ายทางการเมืองของ ส.ส. ในสภา'
                    ">
                      <li>
                        <b>จากข้อมูลพบว่าส.ส.ในสภามีเครือข่ายทางการเมืองผ่านตระกูลถึง
                          38.4 %</b>
                      </li>
                    </template>
                    <template v-else-if="
                      item.title ==
                      'ส.ส. เขต ควรจะต้องอาศัยอยู่ที่ลงสมัครไหม?'
                    ">
                      <li>
                        <b>ส.ส.เขต
                          ถูกกำหนดคุณสมบัติให้อย่างน้อยต้องมีชื่ออยู่ในทะเบียนบ้านในจังหวัดที่สมัคร
                          เกิด ศึกษา หรือทำงานในจังหวัดที่ลงสมัคร
                          อย่างใดอย่างหนึ่ง</b>
                      </li>
                    </template>
                  </ul>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

const quiz_result =
  "https://sheets.wevis.info/api/v1/db/data/v1/Design-Your-MP/Mp-Checklist-New";

let config = {
  headers: {
    "xc-token":
      "dzDdGV8Ounbk5KIrhhsoGnYEj4VsqWPD6MsvSz8k",
    "Content-Type": "application/json",
  },
};

export default {
  data() {
    return {
      quiz: [
        {
          question1: [
            {
              age18_30: 0,
              age31_40: 0,
              age41_50: 0,
              age51_60: 0,
              noneedage: 0,
            },
          ],
        },
        {
          question2: [
            {
              bachelor_deg: 0,
              below_bachelor_deg: 0,
              master_deg: 0,
              no_need_deg: 0,
              phd: 0,
            },
          ],
        },
        {
          question3: [
            {
              any_faculty: 0,
              business_faculty: 0,
              education_faculty: 0,
              law_faculty: 0,
              other_faculty: 0,
              politics_faculty: 0,
              public_admin_faculty: 0,
            },
          ],
        },
        {
          question4: [
            {
              any_work: 0,
              business_work: 0,
              education_work: 0,
              law_work: 0,
              other_work: 0,
              politics_work: 0,
              public_admin_work: 0,
            },
          ],
        },
        {
          question5: [
            {
              has_connection_bloodline: 0,
              no_connection_bloodline: 0,
              no_need_connection_bloodline: 0,
            },
          ],
        },
        {
          question6: [
            {
              live_in_own_province: 0,
              no_need_live_in_own_province: 0,
              not_live_in_own_province: 0,
            },
          ],
        },
      ],
      dashboard: [
        {
          id: 1,
          title: "อายุของ ส.ส. ในสภา",
          list: [
            {
              title: "อายุ 18-30",
              color: "#FFA9DB",
              filter: "18-30",
              header: "Age",
              total: 0,
            },
            {
              title: "อายุ 31-40",
              color: "#FF8CCD",
              filter: "31-40",
              header: "Age",
              total: 0,
            },
            {
              title: "อายุ 41-50",
              color: "#FF71BF",
              filter: "41-50",
              header: "Age",
              total: 0,
            },
            {
              title: "อายุ 51-60 ขึ้นไป",
              color: "#FF58B1",
              filter: "51-60",
              header: "Age",
              total: 0,
            },
            {
              title: "ไม่กำหนดอายุ",
              color: "#D0DDD4",
              total: 0,
            },
          ],
        },
        {
          id: 2,
          title: "ระดับการศึกษาของ ส.ส. ในสภา",
          list: [
            {
              title: "ต่ำกว่าปริญญาตรี",
              color: "#FFCE87",
              filter: "below_bachelor",
              header: "EducationLevel",
              total: 0,
            },
            {
              title: "ปริญญาตรี",
              color: "#FFBA5A",
              filter: "bachelor",
              header: "EducationLevel",
              total: 0,
            },
            {
              title: "ปริญญาโท",
              color: "#FFA62D",
              filter: "master",
              header: "EducationLevel",
              total: 0,
            },
            {
              title: "ปริญญาเอก",
              color: "#FF9201",
              filter: "phd",
              header: "EducationLevel",
              total: 0,
            },
            {
              title: "ไม่กำหนด",
              color: "#D0DDD4",
              total: 0,
            },
          ],
        },
        {
          id: 3,
          title: "การศึกษา ส.ส. ในสภา",
          list: [
            {
              title: "สาขากฎหมาย",
              color: "#FF8CCD",
              filter: "law",
              header: "EducationField",
              total: 0,
            },
            {
              title: "สาขาการเมือง",
              color: "#51B4FA",
              filter: "politics",
              header: "EducationField",
              total: 0,
            },
            {
              title: "สาขาบริหารงานภาครัฐ",
              color: "#6CDB5A",
              filter: "public_admin",
              header: "EducationField",
              total: 0,
            },
            {
              title: "สาขาการบริหารธุรกิจ",
              color: "#FF6C2D",
              filter: "business",
              header: "EducationField",
              total: 0,
            },
            {
              title: "สาขาการศึกษา",
              color: "#FFA62D",
              filter: "education",
              header: "EducationField",
              total: 0,
            },
            {
              title: "สาขาอื่นๆ",
              color: "#9DAAA1",
              filter: "other",
              header: "EducationField",
              total: 0,
            },
            {
              title: "จบสาขาใดมาก็ได้",
              color: "#D0DDD4",
              total: 0,
            },
          ],
        },
        {
          id: 4,
          title: "อาชีพเดิมของ ส.ส. ในสภา",
          list: [
            {
              title: "สายกฎหมาย",
              color: "#FF8CCD",
              filter: "law",
              header: "Work",
              total: 0,
            },
            {
              title: "สายการเมือง",
              color: "#51B4FA",
              filter: "politics",
              header: "Work",
              total: 0,
            },
            {
              title: "สายบริหารงานภาครัฐ",
              color: "#6CDB5A",
              filter: "public_admin",
              header: "Work",
              total: 0,
            },
            {
              title: "นักธุรกิจ",
              color: "#FF6C2D",
              filter: "business",
              header: "Work",
              total: 0,
            },
            {
              title: "นักวิชาการ",
              color: "#FFA62D",
              filter: "education",
              header: "Work",
              total: 0,
            },
            {
              title: "สายอื่นๆ",
              color: "#9DAAA1",
              filter: "other",
              header: "Work",
              total: 0,
            },
            {
              title: "สายใดมาก็ได้",
              color: "#D0DDD4",
              total: 0,
            },
          ],
        },
        {
          id: 5,
          title: "เครือข่ายทางการเมืองของ ส.ส. ในสภา",
          list: [
            {
              title: "มี",
              color: "#6CDB5A",
              filter: "yes",
              header: "BloodlineConnection",
              total: 0,
            },
            {
              title: "ไม่มี",
              color: "#FF6C2D",
              filter: "no",
              header: "BloodlineConnection",
              total: 0,
            },
            {
              title: "ไม่จำเป็น",
              color: "#D0DDD4",
              total: 0,
            },
          ],
        },
        {
          id: 6,
          title: "ส.ส. เขต ควรจะต้องอาศัยอยู่ที่ลงสมัครไหม?",
          list: [
            {
              title: "อยู่",
              color: "#6CDB5A",
              filter: true,
              header: "LiveInOwnProvince",
              total: 0,
            },
            {
              title: "ไม่อยู่",
              color: "#FF6C2D",
              filter: false,
              header: "LiveInOwnProvince",
              total: 0,
            },
            {
              title: "ไม่จำเป็น",
              color: "#D0DDD4",
              total: 0,
            },
          ],
        },
      ],
      total_list: [],
      total_all: 0,
      details_text: require("~/assets/images/details_text.svg"),
      userAns: [],
      noco_data: [],
    };
  },
  mounted() {
    this.setData();
    this.getDataFromNocodb();
    this.onCheckAnswerQuiz1();
  },
  methods: {
    async getDataFromNocodb() {
      await this.$axios
        .$get(quiz_result + "?sort=Firstname", config)
        .then((response) => {
          this.setDataFromNocodb(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async setDataFromNocodb(data) {
      var pageinfo = data.pageInfo;
      for (let i = 0; i < pageinfo.totalRows; i++) {
        if (i * 100 < pageinfo.totalRows) {
          await this.$axios
            .$get(
              quiz_result +
              "?sort=Firstname&limit=100&shuffle=0&offset=" +
              i * 100,
              config
            )
            .then((response) => {
              response.list.forEach((element) => {
                this.noco_data.push(element);
              });
            })
            .catch((error) => {
              console.log(error);
            });
        } else break;
      }
      var test = this.dashboard.map((num) => num.list);

      test.forEach((element, i) => {
        // console.log(element);
        element.forEach((el2, j) => {
          if (
            el2.title != "ไม่กำหนดอายุ" ||
            el2.title != "ไม่กำหนด" ||
            el2.title != "จบสาขาใดมาก็ได้" ||
            el2.title != "สายใดมาก็ได้" ||
            el2.title != "ไม่จำเป็น"
          ) {
            if (el2.header == "EducationField" || el2.header == "Work") {
              var filter_list = ['law', 'politics', 'public_admin', 'business', 'education', 'other']
              var field = "";
              var total = 0;

              filter_list.forEach((element, i) => {
                total += this.noco_data.filter(
                  (o) =>
                    o[el2.header] != null && o[el2.header].includes(filter_list[i])
                ).length
              });

              el2.total =
                this.noco_data.filter(
                  (o) =>
                    o[el2.header] != null && o[el2.header].includes(el2.filter)
                ).length / total;
            } else {
              el2.total =
                this.noco_data.filter((x) => x[el2.header] == el2.filter)
                  .length / this.noco_data.length;
            }
          }
        });
      });
    },
    async setData() {
      const ref = this.$fire.database.ref("quizzes/quiz1");
      try {
        const snapshots = await ref.once("value");

        this.quiz.forEach((element, i) => {
          element["question" + (i + 1)][0] =
            snapshots.val()["question" + (i + 1)];
        });

        this.total_all = snapshots.val().total_people;
      } catch (e) {
        alert(e);
      }
    },
    rearrangeData(data, id) {
      var sortOrder = {};

      if (id == 2) {
        sortOrder = {
          below_bachelor_deg: 1,
          bachelor_deg: 2,
          master_deg: 3,
          phd: 4,
          no_need_deg: 5,
        };
      } else if (id == 3) {
        sortOrder = {
          law_faculty: 1,
          politics_faculty: 2,
          public_admin_faculty: 3,
          business_faculty: 4,
          education_faculty: 5,
          other_faculty: 6,
          any_faculty: 7,
        };
      } else if (id == 4) {
        sortOrder = {
          law_work: 1,
          politics_work: 2,
          public_admin_work: 3,
          business_work: 4,
          education_work: 5,
          other_work: 6,
          any_work: 7,
        };
      } else if (id == 6) {
        sortOrder = {
          live_in_own_province: 1,
          not_live_in_own_province: 2,
          no_need_live_in_own_province: 3,
        };
      }

      if (id != 1 && id != 5) {
        const res = data.map((o) =>
          Object.assign(
            {},
            ...Object.keys(o)
              .sort((a, b) => sortOrder[a] - sortOrder[b])
              .map((x) => {
                return { [x]: o[x] };
              })
          )
        );

        return res[0];
      } else return data[0];
    },
    onCheckAnswerQuiz1() {
      const ans = localStorage.getItem("isAnsQuiz1");

      if (ans)
        for (var i = 0; i < 6; i++) {
          const x = localStorage.getItem("ans_" + (i + 1));
          this.userAns.push(x);
        }
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-main {
  background: #000000;
  padding: 100px 0;
}

.intro-box {
  max-width: 620px;
  border-radius: 5px;
  padding: 20px;

  p {
    font-size: 14px;
    opacity: 0.5;
  }
}

.dashboard-box {
  max-width: 950px;
  margin: auto;

  .list {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px 5px 0px 0px;
  }

  .circle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  .chart-box {
    padding: 23px;
  }

  .desc-box {
    padding: 17px;
    background: #ececec;
    border-radius: 0px 0px 5px 5px;

    .detail-header-box {
      border-right: 1px solid #000000;
    }
  }
}
</style>