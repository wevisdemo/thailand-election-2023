<template>
  <div class="article-card">
    <div class="img-wrap">
      <img :src="data.image" alt="" />
    </div>
    <div class="text-wrap">
      <p class="title typo-h7" v-html="data.title"></p>
      <p class="date typo-b6">{{ data.date }}</p>
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
  overflow: hidden;
}
.text-wrap {
  padding: 16px;
  .title {
    margin-bottom: 4px;
    font-weight: bold;
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
