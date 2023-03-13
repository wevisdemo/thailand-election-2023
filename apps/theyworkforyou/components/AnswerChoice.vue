<template>
  <div class="choice-btn">
    <div class="vote-icon">
      <img :src="getVoteIcon" :alt="choice_id" />
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
  computed: {
    getVoteIcon() {
      return require(`~/assets/images/icons/${this.choice_id}.svg`)
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
}
.vote-icon {
  width: 20px;
  margin-right: 5px;
}
</style>
