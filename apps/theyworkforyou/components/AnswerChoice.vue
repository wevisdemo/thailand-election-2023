<template>
  <div class="choice-btn" @mouseover="mouseOver" @mouseout="mouseOut">
    <div class="vote-icon">
      <IconsApprove v-if="choice_id === 'approve'" :hover="hover" />
      <IconsDisprove v-if="choice_id === 'disprove'" :hover="hover" />
      <IconsAbstained v-if="choice_id === 'abstained'" :hover="hover" />
    </div>
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
    choice_id: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    mouseOver() {
      this.hover = true
    },
    mouseOut() {
      this.hover = false
    },
  },
}
</script>

<style lang="scss" scoped>
.choice-btn {
  display: flex;
  align-items: center;
  padding: 13px 18px;
  background: var(--color-white);
  border: 3px solid var(--color-black);
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    color: var(--color-highlight-2);
    border-color: var(--color-highlight-2);
  }
}
.vote-icon {
  width: 20px;
  margin-right: 5px;
}
</style>
