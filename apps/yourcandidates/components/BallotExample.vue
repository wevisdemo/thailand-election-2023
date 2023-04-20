<template>
  <div class="ballot-container">
    <div
      :class="isGood == 'true' ? 'label ballot-good' : 'label ballot-spoiled'"
    >
      <p class="typo-b7">
        <b>{{ type }}</b>
      </p>
    </div>
    <img :src="imageSource" alt="" />
  </div>
</template>

<script>
export default {
  props: ['isGood'],
  data() {
    return {
      type: this.isGood == 'true' ? 'บัตรดี' : 'บัตรเสีย',
      imageSource:
        this.isGood == 'true'
          ? require('~/assets/images/good-ballots.webp')
          : require('~/assets/images/spoiled-ballots.webp'),
    }
  },
}
</script>

<style>
.ballot-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 3px;
}
.ballot-container > .label {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 0px 0px 0px;
  gap: 10px;
  border-radius: 100px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}
.ballot-container > img {
  border: 1px solid var(--color-highlight-2);
  border-radius: 2px;
  width: 64px;
}
.ballot-good {
  background: var(--color-highlight-2);
}
.ballot-spoiled {
  background: var(--color-red);
}
</style>