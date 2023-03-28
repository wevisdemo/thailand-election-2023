<template>
  <div class="main-container">
    <election-header></election-header>
    <div
      v-if="active_quiz_no > 0"
      class="prev-btn"
      @click="active_quiz_no > 10 ? reset() : prevQuiz()"
    >
      <div class="arrow">
        <img :src="arrow_left" alt="arrow" />
      </div>
      <p class="typo-b6">
        {{ active_quiz_no > 10 ? 'กลับไปหน้าแรก' : 'ย้อนกลับ' }}
      </p>
    </div>
    <div
      class="page-container"
      :class="{
        'set-min-height-to-quiz': active_quiz_no > 0 && active_quiz_no <= 10,
        'set-min-height-to-result-quiz': active_quiz_no > 10,
      }"
    >
      <div v-if="active_quiz_no === 0">
        <div class="cover-section">
          <p class="typo-h7 title">They Work for You?</p>
          <p class="typo-h2 head">
            <b>
              ส.ส. เขตบ้าน <br />
              ทำงานตรงกับใจคุณแค่ไหน
            </b>
          </p>
          <div class="lottie-wrap">
            <div id="theyworkforyou-lottie" />
          </div>
          <div class="intro-wrap">
            <p class="typo-b4 intro">
              หน้าที่สำคัญอย่างหนึ่งของ ส.ส. เขต
              คือการเป็นผู้แทนคนในพื้นที่ไปส่งเสียงในสภา ผ่านการโหวตประเด็นต่างๆ
            </p>
            <p class="typo-b4 intro">
              ก่อนการ#เลือกตั้ง66ที่จะถึงนี้ี้
              เราจึงอยากชวนทุกคนมาตรวจการบ้านในช่วง 4 ปีที่ผ่านมากันหน่อย ว่า
              ส.ส. เขตบ้านคุณทำหน้าที่นี้ได้ตรงใจแค่ไหน
            </p>
          </div>
        </div>
        <div class="search-section" id="mp-card">
          <p class="typo-b4 question">
            <b> ก่อนอื่น คุณอยู่เขต/อำเภออะไร </b>
          </p>
          <div class="search-box-container">
            <div class="search-box-wrap">
              <el-select
                v-model="value"
                filterable
                default-first-option
                :reserve-keyword="false"
                placeholder="พิมพ์ชื่อเขต/อำเภอบ้านคุณ"
                popper-class="search-box"
                @change="updateFilter"
              >
                <el-option
                  v-for="(item, index) in locations"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  class="dropdown-item"
                >
                  <div v-if="index > 0" class="line" />
                  <span>{{ item.label }}</span>
                </el-option>
              </el-select>
              <div class="search-icon">
                <img :src="search_icon" alt="" />
              </div>
            </div>
            <div v-if="value !== ''" class="mp-result-wrap">
              <p class="title typo-b3">
                <b>ส.ส. ในเขตของคุณ คือ</b>
              </p>
              <MpCard
                v-if="Object.keys(mp_data).length > 0"
                @click.native="start"
                :mp_data="mp_data"
                :district="district"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="active_quiz_no <= 10">
        <Quiz
          v-if="Object.keys(mp_data).length > 0"
          :quiz_no="active_quiz_no"
          :quiz_data="getVoteLog"
          :mp_data="mp_data"
          :nextQuiz="nextQuiz"
          :countMatchVote="countMatchVote"
          :user_voting_results="user_voting_results"
          :saveVoteResult="saveVoteResult"
        />
      </div>
      <div v-else>
        <div v-if="result_processing" class="result-processing-container">
          <p class="typo-b5">ขอประมวลผลสักครู่</p>
          <div class="processing-lottie-wrap">
            <div id="processing-lottie" />
          </div>
        </div>
        <QuizResult :match_vote="match_vote" :mp_data="mp_data" />
      </div>
    </div>
    <election-bottom
      v-if="active_quiz_no === 0 || active_quiz_no > 10"
      index-path="/theyworkforyou"
      about-path="/theyworkforyou/about"
    ></election-bottom>

    <election-footer></election-footer>
  </div>
</template>

<script>
import { TheyWorkForUs } from '@thailand-election-2023/database'
import location_data from '~/static/data/locations.json'
import zone_data from '~/static/data/zones.json'
import lottie from 'lottie-web'

export default {
  data() {
    return {
      search_icon: require('~/assets/images/icons/search.svg'),
      arrow_left: require('~/assets/images/icons/arrow_left.svg'),
      value: '',
      vote_log: [],
      active_quiz_no: 0,
      locations: [],
      mp_data: [],
      district: '',
      user_voting_results: [],
      match_vote: 0,
      result_processing: false,
    }
  },
  async mounted() {
    import('@thailand-election-2023/components')

    const vote_id_selected = [45, 54, 88, 137, 168, 184, 185, 186, 221, 262]
    const vote_log = await TheyWorkForUs.VoteLog.fetchAll()
    this.vote_log = vote_log.filter((element) =>
      vote_id_selected.includes(element.Id)
    )

    this.locations = location_data
    this.loadCoverAnimation()
  },
  watch: {
    active_quiz_no() {
      if (this.active_quiz_no === 0) {
        this.loadCoverAnimation()
        this.user_voting_results = []
      }
    },
  },
  computed: {
    getVoteLog() {
      return this.vote_log[this.active_quiz_no - 1]
    },
  },
  methods: {
    async updateFilter() {
      const split = this.value.split(' ')
      const district = split[1]
      const province = split[0]
      const zone = zone_data.find(
        (z) => z.province === province && z.areas.includes(district)
      ).zone
      this.district = district

      const people = await TheyWorkForUs.People.fetch({
        where: `(MpProvince,eq,${province})~and(MpZone,eq,${zone})`,
      })
      this.mp_data = people.list

      const element = document.getElementById('mp-card')
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'end',
        })
      }, 100)
    },
    loadCoverAnimation() {
      setTimeout(() => {
        lottie.loadAnimation({
          name: 'theyworkforyou-lottie',
          container: document.getElementById('theyworkforyou-lottie'),
          renderer: 'svg',
          animationData: require('~/assets/lotties/theywork_quiz.json'),
        })
      }, 0)
    },
    start() {
      this.scrollToTop()
      this.active_quiz_no = 1
    },
    nextQuiz() {
      this.scrollToTop()
      this.active_quiz_no = this.active_quiz_no + 1
      if (this.active_quiz_no === 11) {
        this.result_processing = true
        setTimeout(() => {
          lottie.loadAnimation({
            name: 'processing-lottie',
            container: document.getElementById('processing-lottie'),
            renderer: 'svg',
            animationData: require('~/assets/lotties/theywork_quiz_loading.json'),
          })
        }, 0)

        setTimeout(() => {
          this.result_processing = false
        }, 3000)
      }
    },
    reset() {
      this.active_quiz_no = 0
      this.value = ''
      this.mp_data = []
    },
    prevQuiz() {
      this.scrollToTop()
      this.active_quiz_no = this.active_quiz_no - 1
    },
    scrollToTop() {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    },
    countMatchVote() {
      this.match_vote = this.match_vote + 1
    },
    saveVoteResult(value) {
      this.user_voting_results.push(value)
    },
  },
}
</script>

<style lang="scss" scoped>
.prev-btn {
  display: flex;
  width: fit-content;
  padding: 10px;
  cursor: pointer;
  .arrow {
    width: 12px;
    margin-right: 4px;
  }
}
.page-container {
  max-width: 655px;
  margin: 0 auto;
  @include tablet {
    width: 80vw;
  }
  @include small-mobile {
    width: 90vw;
  }
  &.set-min-height-to-quiz {
    min-height: calc(100vh - 58px - 70px); //100vh - header - footer
    @include mobile {
      min-height: calc(100vh - 42px - 46px);
    }
  }
  &.set-min-height-to-result-quiz {
    min-height: calc(
      100vh - 58px - 250.5px - 70px
    ); //100vh - header - bottom - footer
    @include mobile {
      min-height: unset;
    }
  }
}
.cover-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 20px;
  @include mobile {
    padding: 30px 0px 0px;
  }
  .title {
    margin-bottom: 5px;
  }
  .head {
    text-align: center;
  }
  .lottie-wrap {
    width: 300px;
    height: 300px;
    margin: 30px 0;
    @include tablet {
      margin: 27px 0;
    }
    @include mobile {
      width: 250px;
      height: 250px;
    }
  }
  .intro-wrap {
    .intro {
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
.search-section {
  padding: 40px 0 80px;
  text-align: center;
  .question {
    margin-bottom: 10px;
  }
  .search-box-wrap {
    position: relative;
    margin: 0 auto;
    .el-select {
      width: 100%;
      ::v-deep(.el-input__inner) {
        height: 52px !important;
        border: 3px solid var(--color-black);
        border-radius: 50px;
        font-family: 'IBM Plex Sans Thai Looped';
        font-weight: 400;
        font-size: 21px;
        transition: 0.3s;
        padding-right: 50px;
        @include mobile {
          height: 47px !important;
          font-size: 18px;
        }
      }
      ::v-deep(.el-input.is-focus .el-input__inner) {
        border-color: var(--color-highlight-2);
      }
    }
    .search-icon {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translate(-100%, -50%);
      width: 18px;
    }
  }
  .mp-result-wrap {
    .title {
      margin: 20px 0 15px;
      text-align: center;
    }
  }
}
.result-processing-container {
  position: fixed;
  inset: 0;
  background: var(--color-white);
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .processing-lottie-wrap {
    margin-top: 10px;
    width: 250px;
    @include mobile {
      width: 200px;
    }
  }
}
</style>

<style lang="scss">
.search-box {
  background: var(--color-highlight-1);
  border: 3px solid var(--color-black);
  border-radius: 10px;
  width: 655px;
  @include mobile {
    width: 288px;
  }
}
.popper__arrow {
  display: none !important;
}
.el-input__suffix {
  display: none;
}
.el-select-dropdown__list {
  padding: 15px;
}
.dropdown-item {
  position: relative;
  font-size: 18px;
  padding: 5px;
  color: var(--color-black);
  height: unset;
  line-height: 24px;
  white-space: normal;
  text-overflow: clip;
  .line {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: var(--color-highlight-2);
  }
  @include mobile {
    font-size: 16px;
  }
}
.dropdown-item.hover {
  background: var(--color-highlight-2);
  border-radius: 5px;
  & + .dropdown-item .line {
    opacity: 0;
  }
}
.dropdown-item.selected {
  color: var(--color-black);
}
</style>
