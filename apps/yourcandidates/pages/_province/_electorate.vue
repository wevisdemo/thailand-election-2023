<template>
  <div>
    <election-header></election-header>
    <div
      v-show="openPopup"
      class="popup flex flex-col justify-center items-center relative scrollbar-hid"
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
            v-for="(electorate, i) in electorates"
            :key="i"
            style="padding-left: 8px"
          >
            <li>{{ electorate }}</li>
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
            <div>
                ทั้งหมด 2 คนมั้ง
            </div>
            <div class="search">
              <input type="text" />
            </div>
            <div class="candidate-card">
                <PeopleCard
                v-for="people in peoples"
                :key="people.number"
                :people="{...people}"
                />        
            </div>
        </div>
        <div slot="tab2">
            <div>
                ทั้งหมด 1 พรรคมั้ง
            </div>
            <div class="search">
              <input type="text" />
            </div>
            <div class="candidate-card">
                    <PartyCard
                    v-for="party in parties"
                    :key="party.number"
                    :party="{...party}"
                    />
                </div>
        </div>
      </Tabs>
    </div>

    <election-bottom></election-bottom>
    <election-footer></election-footer>
  </div>
</template>
  
<script>
import PeopleCard from '@/components/candidateCard/PeopleCard.vue';
import PartyCard from '@/components/candidateCard/PartyCard.vue';
import { TheyWorkForUs } from '@thailand-election-2023/database'
import {
  ElectionHeader,
  ElectionBottom,
  ElectionFooter,
} from '@thailand-election-2023/components'

export default {
    async asyncData({params: {province, electorateNumber}}) {
        // const candidates = (await TheyWorkForUs.People.fetch()).list;
        const peoples = [
            {
                number: '1',
                imageCandidate : '',
                imageParty: '',
                name: 'พิรสุต จันทรานุวัฒน์',
                numberPartyGroup: '2',
                partyGroup: 'อดีต ส.ส. ทั้งฝ่ายรัฐบาลและฝ่ายค้าน',
                party: 'รวมไทยสร้างชาติ',
                age: '50',
                education: 'ปริญญาตรี',
                occupation: 'พนักงานบริษัทเอกชน',
            },
            {
                number: '2',
                imageCandidate : '',
                imageParty: '',
                name: 'พิรสุต จันทรานุวัฒน์',
                numberPartyGroup: '1',
                partyGroup: 'อดีต ส.ส. ฝ่ายค้าน',
                party: 'รวมไทยสร้างชาติ',
                age: '50',
                education: 'ปริญญาตรี',
                occupation: 'พนักงานบริษัทเอกชน',
            },
            {
                number: '3',
                imageCandidate : '',
                imageParty: '',
                name: 'พิรสุต จันทรานุวัฒน์',
                numberPartyGroup: '0',
                partyGroup: '',
                party: 'รวมไทยสร้างชาติ',
                age: '50',
                education: 'ปริญญาตรี',
                occupation: 'พนักงานบริษัทเอกชน',
            },
        ]

        const parties = [
            {
                number: '1',
                imageCandidate : '',
                name: 'พลังประชารัฐ',
                numberPartyGroup: '1',
                partyGroup: 'อดีต ส.ส. ฝ่ายรัฐบาล',
                partyList: [
                    {
                        name: 'ประวิตร วงษ์สุวรรณ1',
                        image: ''
                    },
                    {
                        name: 'ประวิตร วงษ์สุวรรณ2',
                        image: ''
                    },
                    {
                        name: 'ประวิตร วงษ์สุวรรณ3',
                        image: ''
                    }
                ],
                policy : 'url compare policy'
            }
        ]

        return {peoples, parties}
    },
  data() {
    return {
      province: this.$route.params.province,
      electorateNumber: this.$route.params.electorate,
      electorates: ['เขตบางบอน', 'เขตหนองแขม เฉพาะ แขวงหนองแขม'],
      openPopup: false,
      tabs: [
        { name: 'tab1', label: '1. เลือกคนที่รัก' },
        { name: 'tab2', label: '2. เลือกพรรคที่ชอบ' },
      ],
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
  },
}
</script>

<style scoped>
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
</style>