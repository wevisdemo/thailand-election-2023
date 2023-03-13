<template>
  <div
    class="button"
    :class="color === 'white' ? 'white-color' : 'black-color'"
  >
    <p class="typo-b4">
      <b>{{ text }}</b>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.button {
  border: 3px solid;
  border-radius: 10px;
  padding: 12px 20px;
  transition: color 0.3s, background 0.3s, border 0.2s;
  cursor: pointer;
  &.white-color {
    border-color: var(--color-black);
  }
  &.black-color {
    border-color: var(--color-white);
  }
  &:hover {
    background: var(--color-highlight-2);
    border-color: var(--color-highlight-2);
    color: var(--color-black);
  }
}
</style>
