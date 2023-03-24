<template>
  <div
    class="choice-btn"
    @mouseover="mouseOver"
    @mouseout="mouseOut"
    :class="{
      selected:
        answer_selected === text || (answer_selected && mp_answer === text),
      unselected: answer_selected !== text && mp_answer !== text,
    }"
    :style="{ '--color': getColor }"
  >
    <div class="choice-wrap">
      <div class="vote-icon">
        <IconsApprove v-if="choice_id === 'approve'" :color="getColor" />
        <IconsDisprove v-if="choice_id === 'disprove'" :color="getColor" />
        <IconsAbstained v-if="choice_id === 'abstained'" :color="getColor" />
      </div>
      <p class="typo-b4">
        <b>{{ text }}</b>
      </p>
    </div>
    <div class="img-wrap" :style="{ opacity: answer_selected ? 1 : 0 }">
      <div
        v-if="answer_selected === text"
        class="user-icon"
        :class="{ 'same-choice': answer_selected === mp_answer }"
      >
        <img :src="user" alt="user" />
      </div>
      <div v-if="mp_answer === text" class="mp-icon">
        <img :src="mp_image" alt="" />
      </div>
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
    choice_id: {
      type: String,
      default: '',
    },
    mp_answer: {
      type: String,
      default: '',
    },
    answer_selected: {
      type: String,
      default: '',
    },
    mp_image: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      hover: false,
      user: require('~/assets/images/user.svg'),
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
      // (this.mp_answer && this.answer_selected)
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
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 18px;
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
.choice-wrap {
  display: flex;
  align-items: center;
  .vote-icon {
    width: 20px;
    margin-right: 5px;
  }
}
.img-wrap {
  position: relative;
  display: flex;
  .user-icon,
  .mp-icon {
    width: 30px;
  }
  .user-icon {
    &.same-choice {
      position: absolute;
      top: 0;
      left: 0;
      transform: translateX(-70%);
    }
  }
  .mp-icon {
    position: relative;
    z-index: 2;
    border-radius: 50%;
    border: 1px solid var(--color-white);
    overflow: hidden;
  }
}
</style>
