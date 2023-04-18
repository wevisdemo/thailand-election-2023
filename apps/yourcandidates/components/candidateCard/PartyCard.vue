<template>
  <div>
    <partyList
      @closePopup="closePopup()"
      :partyList="party.PartyList"
      :open="openPopupPartyList"
      :nameParty="party.Name"
    >
      <template v-slot:close>
        <div class="absolute right-4 top-0">
          <button class="fixed z-30" @click="closePopup()">
            <IconsClose />
          </button>
        </div>
      </template>
    </partyList>

    <TemplateCard
      :key="party.Number"
      :candidate="party"
      :partyGroup="partyGroup"
    >
      <template v-slot:infomation>
        <div class="info">
          <div class="candidate-section">
            <p style="color: var(--color-gray-3)">
              {{
                party.Candidate.length > 0
                  ? 'แคนดิเดตนายก'
                  : 'ไม่มีแคนดิเดตนายก'
              }}
            </p>
            <div
              class="candidate-list"
              v-for="candidate in party.Candidate"
              :key="candidate.Name"
            >
              <IconsProfile
                v-if="candidate.Image === '' || !candidate.Image"
                style="width: 30px; height: 30px"
              />
              <img
                v-else
                class="image-prime-candidate"
                :src="candidate.Image"
                alt=""
              />
              <p>{{ candidate.Name }}</p>
            </div>
          </div>
          <button class="party-list-button" @click="popupPartylist()">
            <IconsPlus />
            <p>ดูบัญชีรายชื่อ</p>
          </button>
        </div>
      </template>

      <template v-slot:linkList>
        <Link
          v-for="i in linkInfo"
          v-if="party[i] && party[i] !== ''"
          :type="i"
          :link="party[i]"
          :key="i"
        />
      </template>
    </TemplateCard>
  </div>
</template>

<script>
import TemplateCard from '~/components/candidateCard/TemplateCard.vue'
import Link from '~/components/candidateCard/Link.vue'
import PartyList from '~/components/candidateCard/PartyList.vue'
export default {
  props: {
    party: {
      type: Object,
      default: {},
    },
  },
  setup() {
    const linkInfo = ['Policy', 'Promise', 'Law', 'Others', 'Website']
    return { linkInfo }
  },
  data() {
    return {
      openPopupPartyList: false,
    }
  },
  methods: {
    popupPartylist() {
      this.openPopupPartyList = true
    },
    closePopup() {
      this.openPopupPartyList = false
    },
  },
  computed: {
    partyGroup() {
      if (this.party.PastGovernment && this.party.PastOpposition) {
        return 'ทั้งฝ่ายรัฐบาลและฝ่ายค้าน'
      } else if (this.party.PastOpposition) {
        return 'ฝ่ายค้าน'
      } else if (this.party.PastGovernment) {
        return 'ร่วมรัฐบาล'
      }
      return ''
    },
  },
  components: {
    TemplateCard,
    Link,
    PartyList,
  },
}
</script>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  flex: none;
  order: 0;
  flex-grow: 1;
}
.candidate-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.candidate-list {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 5px;
}

.image-prime-candidate {
  box-sizing: border-box;
  background: var(--color-gray-2);
  border: 1px solid var(--color-black);
  border-radius: 50px;
  width: 30px;
  height: 30px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.party-list-button {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px 10px;
  gap: 5px;
  background: var(--color-gray-2);
  border: 1px solid var(--color-gray-2);
  border-radius: 100px;
}
</style>