<template>
    <div>

        <div v-show="openPopup" class="popup flex flex-row justify-center items-center absolute scrollbar-hid">
            <div class="relative w-4/5 h-4/5 max-w-650 overflow-y-scroll rounded-xl scrollbar-hide">
                <button class="absolute right-4 top-2" @click="closePopup()"> <IconsClose/> </button>
                <div>
                    <VoteInstruction />
                </div>
            </div>
        </div>

        <div class="tab-back">
            <nuxt-link to="/">
                <span class="icon-arrow"> &#8592 </span>
                <span class="detail" target="_blank"> 
                    กลับไปหน้าค้นหา 
                </span>
            </nuxt-link>
        </div>
        
        <div class="main-container">
            <div class="head-section">
                <div class="electorate-description">
                    <div class="typo-h3">
                        <b> รายชื่อผู้สมัคร </b>
                    </div>
                    <div class="typo-h7">
                        <b> {{province}} เขตเลือกตั้งที่ {{electorateNumber}} </b>
                    </div>
                    <div v-for="electorate in electorates" style="padding-left: 8px;">
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
        </div>
        
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            province: this.$route.params.province,
            electorateNumber: this.$route.params.electorate,
            electorates: ["เขตบางบอน", "เขตหนองแขม เฉพาะ แขวงหนองแขม"],
            openPopup: false
        }
    },

    methods: {
        popupVoteInstruction(){
            this.openPopup = true
        },
        closePopup() {
            this.openPopup = false
        }
    }
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
    z-index: 1;
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
  z-index: 0;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}

.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

</style>