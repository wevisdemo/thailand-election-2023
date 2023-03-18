<template>
    <div>
        <div v-show="openPopup" class="popup flex flex-col justify-center items-center relative scrollbar-hid">
            <div class="relative w-4/5 h-4/5 max-w-650 overflow-y-scroll scrollbar-hide" style="border-radius: 10px;">
                <VoteInstruction />
                <div class="absolute top-4 right-8">
                    <button class="fixed" @click="closePopup()"> <IconsClose/> </button>
                </div>
            </div>
        </div>

        <nuxt-link to="/">
            <div class="tab-back">
                <span> <IconsArrow/> </span>
                <span class="detail" target="_blank"> 
                    กลับไปหน้าค้นหา
                </span>
            </div>
        </nuxt-link>
        
        <div class="main-container">
            <div class="head-section">
                <div class="electorate-description">
                    <div class="typo-h3">
                        <b> รายชื่อผู้สมัคร </b>
                    </div>
                    <div class="typo-h7">
                        <b> {{province}} เขตเลือกตั้งที่ {{electorateNumber}} </b>
                    </div>
                    <div v-for="(electorate, i) in electorates" :key="i" style="padding-left: 8px;">
                        <li>{{electorate}}</li>
                    </div>
                </div>       
                
                <button class="vode-instruction-section" @click="popupVoteInstruction()">
                    <div class="detail">
                        <IconsInformation/>
                        <p><b>รอบนี้มีบัตร 2 ใบนะ รู้ยัง?</b></p> 
                    </div>
                    <IconsPlus/>
                </button>
            </div>

            <!-- tab -->
            <div class="">
                <div class="filter">

                </div>
                <div class="search">

                </div>
                <div class="candidate-card">
                    <CandidateCard
                    v-for="candidate in candidates"
                    :key="candidate.Number"
                    :candidate="candidate"
                    />
                </div>
                
            </div>

        </div>
        
    </div>
</template>
  
<script>
import CandidateCard from '~/components/CandidateCard.vue';
import { TheyWorkForUs } from '@thailand-election-2023/database';

export default {
    async asyncData({params: {province, electorateNumber}}) {
        // const candidates = (await TheyWorkForUs.People.fetch()).list;
        const candidates = [
            {
                'number': '1',
                'imageCandidate' : 'https://sheets.wevis.info/download/noco/They-Work-For-Us/Parties/Images/ชาติไทยพัฒนา.jpg',
                'imageParty': 'https://sheets.wevis.info/download/noco/They-Work-For-Us/Parties/Images/ชาติไทยพัฒนา.jpg',
                'name': 'พิรสุต จันทรานุวัฒน์',
                'partyGroup': 'อดีต ส.ส. ทั้งฝ่ายรัฐบาลและฝ่ายค้าน',
                'party': 'รวมไทยสร้างชาติ',
                'age': '50',
                'education': 'ปริญญาตรี',
                'occupation': 'พนักงานบริษัทเอกชน',
            },
            {
                'number': '1',
                'imageCandidate' : 'https://sheets.wevis.info/download/noco/They-Work-For-Us/Parties/Images/ชาติไทยพัฒนา.jpg',
                'imageParty': 'https://sheets.wevis.info/download/noco/They-Work-For-Us/Parties/Images/ชาติไทยพัฒนา.jpg',
                'name': 'พิรสุต จันทรานุวัฒน์',
                'partyGroup': 'อดีต ส.ส. ทั้งฝ่ายรัฐบาลและฝ่ายค้าน',
                'party': 'รวมไทยสร้างชาติ',
                'age': '50',
                'education': 'ปริญญาตรี',
                'occupation': 'พนักงานบริษัทเอกชน',
            }
        ]
        return {candidates}
    },
    data() {
        return {
            province: this.$route.params.province,
            electorateNumber: this.$route.params.electorate,
            electorates: ["เขตบางบอน", "เขตหนองแขม เฉพาะ แขวงหนองแขม"],
            openPopup: false,
        };
    },
    methods: {
        popupVoteInstruction() {
            this.openPopup = true;
        },
        closePopup() {
            this.openPopup = false;
        }
    },
    components: { CandidateCard }
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
  z-index: 1;
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