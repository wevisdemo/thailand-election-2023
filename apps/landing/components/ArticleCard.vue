<template>
  <div class="article-card">
    <div class="img-wrap">
      <!-- <img src="" alt="" /> -->
    </div>
    <div class="text-wrap">
      <p class="title typo-h7">
        <b
          >ส่องปัญหา ‘ข้อมูลเปิด’ กับการเลือกตั้ง: ไม่ใช่แค่ ‘เลขไทย’ โจทย์หิน
          ทำอย่างไรให้ข้อมูลใช้ ‘ง่าย’ กว่านี้?</b
        >
      </p>
      <p class="date typo-b6">24 มิถุนายน 2565</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
}
</script>

<style lang="scss" scoped>
.article-card {
  cursor: pointer;
  @include mobile {
    max-width: 320px;
  }
}
.img-wrap {
  height: 160px;
  border: 4px solid var(--color-black);
  border-radius: 20px;
}
.text-wrap {
  padding: 16px;
  .title {
    margin-bottom: 4px;
  }
  .date {
    opacity: 0.6;
  }
}

.typo-h7 {
  font-size: 21px;
}
.typo-b6 {
  font-size: 12px;
}
</style>
