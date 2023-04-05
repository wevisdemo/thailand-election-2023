<template>
  <div>
    <election-header></election-header>
    <div
      v-show="openPopup"
      class="popup flex flex-col justify-center items-center relative"
    >
      <div
        class="relative w-4/5 h-4/5 overflow-y-scroll scrollbar-hide"
        style="max-width: 650px; border-radius: 10px"
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
      <Tabs
        :tabs="tabs"
        @selectTab="selectTab($event)"
        :activeTab="tabSelected"
      >
        <div slot="tab1">
          <div class="tab-header">
            <div class="tab-header__summary">
              <p>
                ทั้งหมด <b>{{ getNumberPeople() }} คน</b>
              </p>
              <BadgeWithCheck :checks="1">
                <p>
                  เคยมีตำแหน่งในสภาสมัยที่แล้ว
                  <b> {{ getNumberPeoplePartyHistory() }} คน</b>
                </p>
              </BadgeWithCheck>
            </div>
            <div class="search">
              <div class="search-container">
                <div class="search-box">
                  <input
                    class="typo-b3"
                    type="text"
                    name="query"
                    v-model.trim="partyQuery"
                    placeholder="ค้นหาด้วยชื่อพรรค"
                  />
                  <IconsSearch />
                </div>
              </div>
            </div>
          </div>
          <div class="candidate-card">
            <PeopleCard
              v-for="person in filteredByQueryPeople"
              :key="person.number"
              :person="person"
            />
          </div>
        </div>
        <div slot="tab2">
          <div class="tab-header">
            <div class="tab-header__summary">
              <p>ทั้งหมด <b>{{ getNumberParties() }} พรรค</b></p>
              <BadgeWithCheck :checks="1">
                <p>อยู่ในสภาสมัยที่แล้ว <b>{{ getNumberPartiesHasPartygroup() }} พรรค</b></p>
              </BadgeWithCheck>
            </div>
            <div class="search">
              <div class="search-container">
                <div class="search-box">
                  <input
                    class="typo-b3"
                    type="text"
                    name="query"
                    v-model.trim="partyQuery"
                    placeholder="ค้นหาด้วยชื่อพรรค"
                  />
                  <IconsSearch />
                </div>
              </div>
            </div>
          </div>
          <div class="candidate-card">
            <PartyCard
              v-for="party in filteredByQueryParties"
              :key="party.number"
              :party="party"
            />
          </div>
        </div>
      </Tabs>

      <div class="bottom-container">
        <button
          class="handle-reminder"
          @click="selectTab(tabSelected === 0 ? 1 : 0)"
        >
          <div>
            <b v-if="tabSelected === 0"
              >เลือกคนที่รักได้แล้ว อย่าลืมเลือกพรรคที่ชอบ</b
            >
            <b v-else>เลือกพรรคที่ชอบได้แล้ว อย่าลืมเลือกคนที่รัก</b>
          </div>
          <div>
            <IconsArrow
              style="width: 24px; height: 24px; transform: rotate(180deg)"
            />
          </div>
        </button>
      </div>
    </div>

    <button
      @click="clickScrollToTop()"
      class="pagetop"
      @scroll="handleScroll"
      v-show="showBtnBackToTop"
    >
      <IconsBackToTop />
    </button>

    <election-bottom index-path="/yourcandidates" about-path="/yourcandidates/about"></election-bottom>
    <election-footer></election-footer>
    <election-cookie></election-cookie>
  </div>
</template>

<script>
import PeopleCard from '~/components/candidateCard/PeopleCard.vue'
import PartyCard from '~/components/candidateCard/PartyCard.vue'
import { getPeople, getParties } from '~/helpers/candidatestore'
import {
  ElectionHeader,
  ElectionBottom,
  ElectionFooter,
  ElectionCookie
} from '@thailand-election-2023/components'
import { getElectorals } from '~/helpers/search'

export default {
  beforeMount() {
    const electorate = getElectorals(
      `${this.$route.params.province}-${this.$route.params.electorate}`
    )
    if (electorate.length === 1) {
      this.electorate = electorate[0]
    }
  },
  async asyncData({ params: { province, electorate }, payload }) {
    console.log(payload)
    if (payload?.people && payload?.parties) {
      return payload;
    } else {
      const people = await getPeople(province, electorate)
      const parties = await getParties(province, electorate)
  
      return { people, parties}
    }
  },
  data() {
    return {
      province: this.$route.params.province,
      electorateNumber: this.$route.params.electorate,
      districtelectorate: {},
      openPopup: false,
      partyQuery: '',
      tabs: [
        { name: 'tab1', label: '1. เลือกคนที่รัก' },
        { name: 'tab2', label: '2. เลือกพรรคที่ชอบ' },
      ],
      showBtnBackToTop: false,
      tabSelected: 0,
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
      return this.people.length
    },
    getNumberParties() {
      return this.parties.length
    },
    getNumberPeoplePartyHistory() {
      return this.people.filter((person) => person.PeoplePartyHistory).length
    },
    getNumberPartiesHasPartygroup() {
      return this.parties.filter((party) => party.PartyGroup).length
    },
    clickScrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    handleScroll() {
      if (window.scrollY > 0) {
        this.showBtnBackToTop = true
      } else {
        this.showBtnBackToTop = false
      }
    },
    selectTab(tab) {
      this.tabSelected = tab
      this.clickScrollToTop()
    },
  },
  computed: {
    filteredByQueryPeople() {
      return this.people.filter((person) => {
        return person.Party.Name.includes(this.partyQuery)
      })
    },
    filteredByQueryParties() {
      return this.parties.filter((party) => {
        return party.Name.includes(this.partyQuery)
      })
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
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

.bottom-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  gap: 10px;
  flex: none;
  order: 3;
  flex-grow: 0;
}
.pagetop {
  position: fixed;
  left: calc(50% - 44px / 2);
  bottom: 20px;
  z-index: 30;
}

.handle-reminder {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  padding: 20px;
  gap: 10px;
  width: 100%;
  background: var(--color-highlight-3);
  border: 3px solid var(--color-black);
  border-radius: 20px;
  &:hover {
    transform: rotate(3deg);
  }
}
</style>
