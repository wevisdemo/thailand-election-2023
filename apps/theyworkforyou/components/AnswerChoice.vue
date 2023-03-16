<template>
  <div
    class="choice-btn"
    @mouseover="mouseOver"
    @mouseout="mouseOut"
    :class="{
      selected: answer_selected === text,
      unselected: answer_selected !== text,
    }"
    :style="{ '--color': getColor }"
  >
    <div class="vote-icon">
      <IconsApprove v-if="choice_id === 'approve'" :color="getColor" />
      <IconsDisprove v-if="choice_id === 'disprove'" :color="getColor" />
      <IconsAbstained v-if="choice_id === 'abstained'" :color="getColor" />
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
    answer_selected: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hover: false,
    }
  },
  computed: {
    getColor() {
      if (this.hover) {
        return '#00EAA4' // green
      } else if (this.answer_selected) {
        return this.answer_selected === this.text ? '#FFFFFF' : '#DFDAD1' // grey
      } else {
        return '#090909' // black
      }
    },
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
  &.selected {
    background: var(--color-black);
    color: var(--color);
  }
  &.unselected {
    color: var(--color);
    border-color: var(--color);
  }
}
.vote-icon {
  width: 20px;
  margin-right: 5px;
}
</style>
