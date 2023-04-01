<template>
  <div>
    <election-header></election-header>
    <div
      v-show="openPopup"
      class="popup flex flex-col justify-center items-center relative"
    >
      <div
        class="relative w-4/5 h-4/5 max-w-650 overflow-y-scroll scrollbar-hide"
        style="border-radius: 10px"
      >
        <VoteInstruction />
        <div class="absolute top-4 right-8">
          <button class="fixed" @click="closePopup()"><IconsClose /></button>
        </div>
      </div>
    </div>

    <nuxt-link to="/" class="tab-back">
      <IconsArrow />
      <span class="detail" target="_blank"> กลับไปหน้าค้นหา </span>
    </nuxt-link>

    <div class="main-container">
      <div class="head-section">
        <div class="electorate-description">
          <div class="typo-h3">
            <b> รายชื่อผู้สมัคร </b>
          </div>
          <div class="typo-h7">
            <b> {{ province }} เขตเลือกตั้งที่ {{ electorateNumber }} </b>
          </div>
          <div
            v-for="(district, i) in electorate.district_list"
            :key="i"
            style="padding-left: 8px"
          >
            <li>{{ district }}</li>
          </div>
        </div>

        <button
          class="vode-instruction-section"
          @click="popupVoteInstruction()"
        >
          <div class="detail">
            <IconsInformation />
            <b>รอบนี้มีบัตร 2 ใบนะ รู้ยัง?</b>
          </div>
          <IconsPlus />
        </button>
      </div>

      <!-- tab -->
      <Tabs :tabs="tabs">
        <div slot="tab1">
          <div class="tab-header">
            <div class="tab-header__summary">
              <p>ทั้งหมด <b>{{ getNumberPeople() }} คน</b></p>
              <BadgeWithCheck :checks="1">
                <p>เคยมีตำแหน่งในสภาสมัยที่แล้ว <b> {{ getNumberPeoplePartyHistory() }} คน</b></p>
              </BadgeWithCheck>
            </div>
            <div class="search">
              <PartySearch placeholder="ค้นหาด้วยชื่อพรรค" />
            </div>
          </div>
          <div class="candidate-card">
            <PeopleCard
              v-for="people in peoples"
              :key="people.number"
              :people="{ ...people }"
            />
          </div>
        </div>
        <div slot="tab2">
          <div class="tab-header">
            <div class="tab-header__summary">
              <p>ทั้งหมด {{ getNumberParties() }}</p>
              <BadgeWithCheck :checks="1">
                <p>อยู่ในสภาสมัยที่แล้ว <b>10 พรรค</b></p>
              </BadgeWithCheck>
            </div>
            <div class="search">
              <PartySearch placeholder="ค้นหาด้วยชื่อพรรค" />
            </div>
          </div>
          <div class="candidate-card">
            <PartyCard
              v-for="party in parties"
              :key="party.number"
              :party="{ ...party }"
            />
          </div>
        </div>
      </Tabs>
    </div>

    <button @click="clickScrollToTop()" class="pagetop" @scroll="handleScroll" v-show="showBtnBackToTop">
      <IconsBackToTop/>
    </button>

    <election-bottom></election-bottom>
    <election-footer></election-footer>
  </div>
</template>
  
<script>
import PeopleCard from '@/components/candidateCard/PeopleCard.vue'
import PartyCard from '@/components/candidateCard/PartyCard.vue'
import {getPeople, getParties} from '@/helpers/candidatestore'
import {
  ElectionHeader,
  ElectionBottom,
  ElectionFooter,
} from '@thailand-election-2023/components'
import { getElectorals } from '@/helpers/search'
export default {
  beforeMount() {
    const electorate = getElectorals(
      `${this.$route.params.province}-${this.$route.params.electorate}`
    )
    console.log(electorate)
    if (electorate.length === 1) this.electorate = electorate[0]
  },
  async asyncData( { params: { province, electorate }, payload }) {
    const peoples = await getPeople(province, electorate)
    const parties = await getParties(province, electorate)
    console.log(peoples)
    return { peoples, parties }
  },
  data() {
    return {
      province: this.$route.params.province,
      electorateNumber: this.$route.params.electorate,
      districtelectorate: {},
      openPopup: false,
      tabs: [
        { name: 'tab1', label: '1. เลือกคนที่รัก' },
        { name: 'tab2', label: '2. เลือกพรรคที่ชอบ' },
      ],
      showBtnBackToTop: false,
    }
  },
  components: {
    PeopleCard,
    PartyCard,
    ElectionHeader,
    ElectionBottom,
    ElectionFooter,
  },
  methods: {
    popupVoteInstruction() {
      this.openPopup = true
    },
    closePopup() {
      this.openPopup = false
    },
    getNumberPeople() {
      return this.peoples.length
    },
    getNumberParties() {
      return this.parties.length
    },
    getNumberPeoplePartyHistory() {
      return (this.peoples.filter((people) => people.PeoplePartyHistory)).length
    },
    clickScrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
    },
    handleScroll(){
      if(window.scrollY > 0){
        this.showBtnBackToTop = true;
      }
      else{
        this.showBtnBackToTop = false;
      }
    },
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss" scoped>
.tab-back {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 4px;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.tab-back > .detail {
  flex: none;
  order: 1;
  flex-grow: 0;
}

.head-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: none;
  order: 0;
  flex-grow: 0;
  padding-bottom: 20px;
}

.electorate-description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.vode-instruction-section {
  background: var(--color-gray-1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  gap: 5px;
  border-radius: 2px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}

.vode-instruction-section > .detail {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 41;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.candidate-card {
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 10px;
  z-index: 0;
}

.tab-header {
  padding: 20px;
  &__summary {
    width: fit-content;
    margin: auto;
    text-align: center;
    align-items: center;
    padding-bottom: 8px;
  }
}

.pagetop {
  position: fixed;
  left: calc(50% - 44px/2);
  bottom: 20px;
  z-index: 30;
}
</style>