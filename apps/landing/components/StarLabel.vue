<template>
  <div class="star-label">
    <img :src="star_label" alt="star label" />
    <div class="countdown-numbers-wrap">
      <p class="typo-b7"><b>เหลืออีก</b></p>
      <p class="number">000</p>
      <p class="typo-b6"><b>วัน</b></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      star_label: require('~/assets/images/star_label.svg'),
    }
  },
}
</script>

<style lang="scss" scoped>
.star-label {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 128px;
  transform: rotate(15deg) translate(50%, -50%);
  @include mobile {
    transform: rotate(15deg) translate(0%, -20%);
  }
  .countdown-numbers-wrap {
    position: absolute;
    top: calc(50% + 3px);
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    .number {
      font-family: 'Kondolar Thai';
      font-size: 44px;
      font-weight: 700;
      line-height: 1;
      transform: translateY(3px);
    }
  }
}
</style>
