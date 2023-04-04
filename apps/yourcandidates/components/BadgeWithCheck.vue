<template>
  <div class="badge-with-checks__container">
    <span>
      <IconsCheckMark v-for="i in checks" :key="i" />
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    checks: Number,
    description: String,
  },
}
</script>

<style lang="scss">
.badge-with-checks__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  gap: 4px;
  background: var(--color-highlight-1);
  border-radius: 5px;
  width: fit-content;
  padding: 0 5px;
  & span {
    display: flex;
  }
}
</style>