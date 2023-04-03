<template>
  <div class="mp-card-container">
    <div class="header-container">
      <p class="typo-b5">
        <b>
          {{ mp_data[0].MpProvince }} เขตเลือกตั้งที่ {{ mp_data[0].MpZone }}</b
        >
      </p>
      <p class="typo-b6">เขต {{ district }}</p>
    </div>
    <div class="mp-info-container">
      <div v-for="mp in mp_data" :key="mp.name" class="mp-info-wrap">
        <div class="mp-info" :class="{ fade: !mp.IsActive }">
          <div class="img-wrap">
            <img :src="mp.Images[0].url" :alt="mp.Images[0].title" />
          </div>
          <p class="name typo-h7">
            <b>{{ mp.Title }} {{ mp.Name }}</b>
          </p>
          <p class="party typo-b5">
            พรรค{{ mp.PeoplePartyHistory[0].Party.Name }}
          </p>
        </div>
        <p v-if="!mp.IsActive" class="retire typo-b6">
          <b>พ้นจากตำแหน่ง</b>
        </p>
      </div>
    </div>
    <div class="start-btn-container">
      <p class="typo-b5 start"><b>เริ่มเล่น</b></p>
      <div class="arrow">
        <img :src="arrow_right" alt="right arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mp_data: {
      type: Array,
      default: () => [],
    },
    district: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      arrow_right: require('~/assets/images/icons/arrow_right.svg'),
    }
  },
}
</script>

<style lang="scss" scoped>
.mp-card-container {
  background: var(--color-white);
  border: 3px solid var(--color-black);
  border-radius: 20px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: rotate(3deg);
    box-shadow: 4px 12px 0px var(--color-gray-2);
  }
  margin-top: 15px;
}
.header-container {
  background: var(--color-gray-1);
  padding: 15px;
}
.mp-info-container {
  display: flex;
  margin: 20px 10px;
  .mp-info-wrap {
    flex: 1;
    padding: 0 5px;
    &:nth-child(2) {
      border-left: 1px solid var(--color-gray-2);
    }
    .mp-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.fade {
        opacity: 0.4;
      }
    }
    .img-wrap {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid var(--color-black);
      margin-bottom: 10px;
      overflow: hidden;
    }
    .retire {
      color: var(--color-red);
      margin-top: 10px;
    }
  }
}
.start-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11.5px;
  background: var(--color-highlight-3);
  .start {
    margin-right: 5px;
  }
  .arrow {
    width: 24px;
  }
}
</style>
