<template>
  <div class="main-container">
    <election-header></election-header>

    <Transition name="fade">
      <div v-if="loading" class="loading-container">
        <div class="heart">
          <img :src="heart" alt="heart" />
        </div>
      </div>
    </Transition>

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
              <vue-simple-suggest
                ref="suggestComponent"
                v-model="chosen"
                mode="select"
                display-attribute="label"
                value-attribute="value"
                :list="locations"
                :filter-by-query="true"
                :max-suggestions="0"
                @select="onSuggestSelect"
              >
                <input
                  class="search-box"
                  placeholder="พิมพ์ชื่อเขต/อำเภอบ้านคุณ"
                />
                <div
                  slot="suggestion-item"
                  slot-scope="scope"
                  class="list-item"
                >
                  <span v-html="boldenSuggestion(scope)"></span>
                </div>
                <template slot="misc-item-above" slot-scope="{ suggestions }">
                  <div class="misc-item" v-if="suggestions.length === 0">
                    <span class="typo-b4">ไม่มีชื่อเขต/อำเภอนี้ </span>
                  </div>
                </template>
              </vue-simple-suggest>
              <div class="search-icon">
                <img :src="search_icon" alt="search icon" />
              </div>
            </div>
            <div v-if="chosen" class="mp-result-wrap">
              <p class="title typo-b3">
                <b>ส.ส. ในเขตของคุณ คือ</b>
              </p>
              <MpCard
                v-for="{ zone, people } in mp_data"
                :key="zone"
                @click.native="() => start(people)"
                :mp_data="people"
                :district="district"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="active_quiz_no <= 10">
        <Quiz
          v-if="people_in_selected_zone.length > 0"
          :quiz_no="active_quiz_no"
          :quiz_data="getVoteLog"
          :mp_data="people_in_selected_zone"
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
        <QuizResult
          :match_vote="match_vote"
          :mp_data="people_in_selected_zone"
        />
      </div>
    </div>

    <election-bottom
      v-if="active_quiz_no === 0 || active_quiz_no > 10"
      index-path="/theyworkforyou"
      about-path="/theyworkforyou/about"
    ></election-bottom>

    <election-footer></election-footer>
    <election-cookie></election-cookie>
  </div>
</template>

<script>
import { TheyWorkForUs } from '@thailand-election-2023/database'
import location_data from '~/static/data/locations.json'
import zone_data from '~/static/data/zones.json'
import lottie from 'lottie-web'
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css'
import { shuffle } from 'lodash'

export default {
  components: {
    VueSimpleSuggest,
  },
  data() {
    return {
      loading: true,
      heart: require('~/assets/images/heart.svg'),
      search_icon: require('~/assets/images/icons/search.svg'),
      arrow_left: require('~/assets/images/icons/arrow_left.svg'),
      chosen: {},
      vote_log: [],
      active_quiz_no: 0,
      locations: [],
      mp_data: [],
      district: '',
      user_voting_results: [],
      match_vote: 0,
      result_processing: false,
      people_in_selected_zone: [],
    }
  },
  async mounted() {
    import('@thailand-election-2023/components')

    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      this.loading = false
      document.body.style.overflow = 'unset'
    }, 1000)

    const vote_id_selected = [45, 54, 88, 137, 168, 184, 185, 186, 221, 262]
    const vote_log = await TheyWorkForUs.VoteLog.fetchAll()
    this.vote_log = vote_log.filter((element) =>
      vote_id_selected.includes(element.Id)
    )
    this.vote_log = shuffle(this.vote_log)

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
    boldenSuggestion(scope) {
      if (!scope) return scope

      const { suggestion, query } = scope

      let result = this.$refs.suggestComponent.displayProperty(suggestion)

      if (!query) return result

      const texts = query.split(/[\s-_/\\|\.]/gm).filter((t) => !!t) || ['']
      return result.replace(
        new RegExp('(.*?)(' + texts.join('|') + ')(.*?)', 'gi'),
        '$1<b>$2</b>$3'
      )
    },
    onSuggestSelect() {
      if (this.chosen) {
        setTimeout(() => {
          this.updateFilter()
          this.$refs.suggestComponent.hideList()
        }, 0)
      }
    },
    async updateFilter() {
      const [province, district] = this.chosen.value.split(' ')
      const zones = zone_data
        .filter((z) => z.province === province && z.areas.includes(district))
        .map(({ zone }) => zone)

      this.district = district

      const people = await TheyWorkForUs.People.fetchAll({
        where: `(MpProvince,eq,${province})~and(MpZone,in,${zones.join(',')})`,
      })

      this.mp_data = zones.map((zone) => ({
        zone,
        people: people.filter(({ MpZone }) => +MpZone === zone),
      }))

      const element = document.getElementById('mp-card')

      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
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
    start(people) {
      setTimeout(() => {
        this.active_quiz_no = 1
        this.people_in_selected_zone = people
        this.scrollToTop()
      }, 0)
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
      this.chosen = {}
      this.mp_data = []
      this.match_vote = 0
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
.loading-container {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: var(--color-white);
  .heart {
    width: 20px;
    animation: blink 1s ease-out infinite;
    @include mobile {
      width: 15px;
    }
    @keyframes blink {
      0% {
        transform: scale(1.5);
      }
      50% {
        transform: scale(2);
      }
      100% {
        transform: scale(1.5);
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
    min-height: calc(
      100vh - 58px - 41px - 70px
    ); //100vh - header - prev btn - footer
    @include mobile {
      min-height: calc(100vh - 42px - 38px - 46px);
    }
  }
  &.set-min-height-to-result-quiz {
    min-height: calc(
      100vh - 58px - 41px - 250.5px - 70px
    ); //100vh - header - prev btn - bottom - footer
    @include mobile {
      min-height: calc(100vh - 42px - 38px - 185px - 46px);
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
    .search-box {
      background: var(--color-highlight-1);
      border: 3px solid !important;
      border-color: var(--color-black);
      border-radius: 50px;
      padding: 10px 15px;
      max-width: 655px;
      &:focus {
        border: 3px solid var(--color-highlight-2) !important;
      }
    }
    .search-icon {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translate(-100%, -50%);
      width: 18px;
    }
    .misc-item {
      background: var(--color-gray-2);
      text-align: left;
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
.suggestions {
  background: var(--color-highlight-1) !important;
  border: 3px solid var(--color-black) !important;
  padding: 10px !important;
  border-radius: 10px !important;
  top: calc(100% + 10px) !important;
  text-align: left;
  overflow-y: auto;
  max-height: 250px;
  &::-webkit-scrollbar {
    background: var(--color-highlight-1);
    width: 6px;
    border: 3px solid transparent;
    background-clip: padding-box;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-highlight-2);
    border-radius: 10px;
    margin-right: 5px;
  }
  &:has(> li > .misc-item) {
    background: var(--color-gray-2) !important;
  }
}
.suggest-item {
  padding: 5px !important;
  &:not(:nth-child(2)) {
    border-top: 1px solid var(--color-highlight-2);
  }
  &.selected {
    color: var(--color-black) !important;
    background: var(--color-highlight-2) !important;
    border-radius: 5px;
  }
}
.vue-simple-suggest.designed .suggestions .suggest-item.hover {
  background-color: var(--color-highlight-2) !important;
  color: var(--color-black) !important;
  border-radius: 5px;
  & + .suggest-item {
    border-top: 1px solid transparent;
  }
}
</style>
