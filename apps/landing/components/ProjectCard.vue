<template>
  <div class="card">
    <div class="text-wrap">
      <p class="project-name typo-h5">
        <b>ที่สัญญากันไว้ ทำได้แค่ไหน?</b>
      </p>
      <div class="en-name-and-partner">
        <p class="b5">
          <b>Promise Tracker</b>
        </p>
        <p>by iLaw & Wevis</p>
      </div>
      <p class="detail typo-b6">
        ประชาชนทั้งหลาย.. มาติดตามและทวงถามสัญญาที่พรรค
      </p>
    </div>
    <div class="img-wrap">
      <img :src="mockup_image" alt="" />
    </div>
  </div>
</template>

<script>
export default {
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
  max-width: 350px;
  height: 400px;
  overflow: hidden;
}
.text-wrap {
  position: relative;
  text-align: left;
  z-index: 2;
  .en-name-and-partner {
    margin: 14px 0 16px;
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
</style>
