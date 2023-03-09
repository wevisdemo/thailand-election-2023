<template>
  <div class="card" :class="{ 'coming-soon-card': is_coming_soon }">
    <div class="text-wrap">
      <p class="project-name" :class="is_coming_soon ? 'typo-h6' : 'typo-h5'">
        <b>ที่สัญญากันไว้ ทำได้แค่ไหน?</b>
      </p>
      <div class="en-name-and-partner">
        <p class="typo-b5">
          <b>Promise Tracker</b>
        </p>
        <p class="partner typo-b7">by iLaw & Wevis</p>
      </div>
      <p v-if="!is_coming_soon" class="detail typo-b6">
        ประชาชนทั้งหลาย.. มาติดตามและทวงถามสัญญาที่พรรค
      </p>
    </div>
    <div v-if="!is_coming_soon" class="img-wrap">
      <img :src="mockup_image" alt="" />
    </div>
    <div class="coming-soon-label">
      <b> Coming Soon! </b>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    is_coming_soon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      mockup_image: require('~/assets/images/mockup_image.png'),
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  background: var(--color-white);
  border: 3px solid var(--color-black);
  border-radius: 20px;
  padding: 24px;
  height: 400px;
  overflow: hidden;
  cursor: pointer;
  @include mobile {
    max-width: 350px;
  }
  &.coming-soon-card {
    background: var(--color-gray-2);
    border-color: var(--color-gray-3);
    color: var(--color-gray-3);
    pointer-events: none;
    @include mobile {
      height: 186px;
    }
  }
}
.text-wrap {
  position: relative;
  text-align: left;
  z-index: 2;
  .en-name-and-partner {
    margin: 8px 0 16px;
    .partner {
      opacity: 0.6;
    }
  }
  .detail {
    width: 160px;
  }
}
.img-wrap {
  position: absolute;
  width: 220px;
  right: 10px;
  bottom: 10px;
  z-index: 1;
}
.coming-soon-label {
  position: absolute;
  right: 24px;
  bottom: 24px;
  background: var(--color-gray-3);
  border-radius: 24px;
  padding: 6px 12px;
  color: white;
  width: fit-content;
}

.typo-h5 {
  font-size: 28px;
}
.typo-h6 {
  font-size: 24px;
}
.typo-b5 {
  font-size: 14px;
}
.typo-b6 {
  font-size: 12px;
}
.typo-b7 {
  font-size: 10px;
}
</style>
