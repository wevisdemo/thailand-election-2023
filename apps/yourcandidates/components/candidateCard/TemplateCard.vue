<template>
  <div class="card">
    <div class="number-candidate">
      <p class="text-white typo-h3">
        <b>{{ candidate.Number }}</b>
      </p>
    </div>
    <div class="detail">
      <div class="header">
        <div class="flex relative">
          <IconsProfile v-if="candidate.Image === '' || !candidate.Image" />
          <img v-else class="image-candidate" :src="candidate.Image" alt="" />
          <img
            v-if="candidate.Party && candidate.Party.Image"
            class="image-party"
            :src="candidate.Party.Image"
            alt=""
          />
        </div>

        <div class="">
          <div class="typo-h5">
            <b> {{ candidate.Name }} </b>
          </div>
          <div v-if="partyGroup !== ''" class="inline-block">
            <BadgeWithCheck
              :checks="partyGroup === 'ทั้งฝ่ายรัฐบาลและฝ่ายค้าน' ? 2 : 1"
            >
              <p>อดีต ส.ส. {{ partyGroup }}</p>
            </BadgeWithCheck>
          </div>
        </div>
      </div>

      <div class="main">
        <div class="info">
          <slot name="infomation"></slot>
        </div>
        <div class="link">
          <slot name="linkList"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckMark from '~/components/icons/CheckMark.vue'

export default {
  props: {
    candidate: {},
    partyGroup: '',
  },
  components: { CheckMark },
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

.link {
  width: 100%;
}

.info {
  width: 100%;
}

@media (min-width: 768px) {
  .number-candidate {
    width: 100px;
    height: 70px;
  }
  .card > .detail > .header {
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 30px;
  }

  .card > .detail > .main {
    display: flex;
    flex-direction: row;
  }

  .card > .detail > .main > .info {
    flex: 50%;
  }

  .card > .detail > .main > .link {
    font-size: 16px;
    flex: 50%;
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
  object-fit: cover;
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
  object-fit: cover;
  margin-left: 40px;
  margin-top: 20px;
  border: 1px solid var(--color-gray-2);
  border-radius: 50px;
  background: var(--color-white);
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

.main > .link {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: none;
  order: 1;
  flex-grow: 1;
}
</style>