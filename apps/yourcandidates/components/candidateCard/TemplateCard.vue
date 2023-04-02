<template>
<div class="card">
    <div class="number-candidate ">
      <p class="text-white typo-h3" style="font-weight: 700;">
        {{ candidate.Number }}
      </p>
    </div>
    <div class="detail">
      <div class="header">
        <div class="flex relative">
          <IconsProfile v-if="candidate.Image === '' || !candidate.Image"/>
          <img v-else="candidate.Image" class="image-candidate" 
            :src="candidate.Image" alt="">
          <img v-if="candidate.Party && candidate.Party.Image" class="image-party"
            :src="candidate.Party.Images[0].url" alt="">
        </div>

        <div class="">
          <div class="name typo-h5">
            {{ candidate.Name }}
          </div>
          <div v-if="candidate.PeoplePartyHistory && partyGroup !== ''" class="inline-block">
            <BadgeWithCheck :checks="partyGroup === 'ทั้งฝ่ายรัฐบาลและฝ่ายค้าน'? 2 : 1">
              <p> อดีต ส.ส. {{ partyGroup }}</p>
            </BadgeWithCheck>
          </div>
        </div>
      </div>

      <div class="main">
        <slot name="infomation"></slot>
        <slot name="linkList"></slot>
      </div>

    </div>

</div>
</template>

<script>
import CheckMark from '~/components/icons/CheckMark.vue';

export default{
  props: {
    candidate: {},
  },
  data() {
    return {
      partyGroup:''
    }
  },
  mounted() {
    this.partyGroup = this.setPartyGroup()
  },
  methods: {
    async setPartyGroup() {
      let history = Object.assign([], await this.candidate.PeoplePartyHistory)
      let group = new Set()
      for(let i=0; i < history.length; i++){
        if(history[i].Party === null){
          this.partyGroup = ''
          return
        }
        await group.add(history[i].Party.PartyGroup)
      }
      if(group.size === 2){
        this.partyGroup = 'ทั้งฝ่ายรัฐบาลและฝ่ายค้าน'
      }
      else if(group.has('ฝ่ายค้าน')){
        this.partyGroup = 'ฝ่ายค้าน'
      }
      else if(group.has('ร่วมรัฐบาล')){
        this.partyGroup = 'ร่วมรัฐบาล'
      }
      else{
        this.partyGroup = ''
      }
    }
  },
  components: { CheckMark }
}
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  border-top: 1px dashed var(--color-black);
}

.number-candidate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  width: 80px;
  height: 50px;
  background-color: var(--color-black);
  border-radius: 0px 0px 5px 0px;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.card > .detail > .header {
  display: flex;
  flex-direction: column;
}

.card > .detail > .main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
}


@media (min-width: 770px) {
  .number-candidate {
    width: 100px;
    height: 70px;
  }
  .card > .detail > .header {
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 35px;
  }

  .card > .detail > .main {
    display: grid;
    grid-template-columns: 50% 50% 50%;
    padding: 0px;
    gap: 10px;
  }
}

.card > .detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 18px 25px;
  gap: 10px;
  flex: none;
  align-self: stretch;
  flex-grow: 0;
}
.image-candidate {
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  margin-left: 0px;
  margin-top: 0px;
  border: 1px solid var(--color-black);
  border-radius: 50px;
  flex: none;
  order: 0;
  flex-grow: 0;
  background: var(--color-gray-2);
}

.image-party {
  box-sizing: border-box;
  position: absolute;
  width: 30px;
  height: 30px;
  margin-left: 40px;
  margin-top: 20px;
  border: 1px solid var(--color-gray-2);
  border-radius: 50px;
  background: var(--color-white);
}

.name {
  font-weight: 700;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.history {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 5px;
  background: var(--color-highlight-1);
  gap: 4px;
  border-radius: 5px;
  flex: none;
  order: 2;
  flex-grow: 0;
}

</style>