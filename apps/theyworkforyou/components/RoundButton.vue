<template>
  <div class="button">
    <p class="typo-b5">
      <b> {{ text }} </b>
    </p>
    <div class="arrow">
      <img :src="up_right_arrow" alt="up right arrow" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      up_right_arrow: require('~/assets/images/icons/up_right_arrow.svg'),
    }
  },
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding: 10px 15px;
  border: 3px solid var(--color-black);
  border-radius: 100px;
  cursor: pointer;
}
.arrow {
  width: 12px;
}
</style>
