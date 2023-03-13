<template>
  <div
    :id="elementId"
    class="search-list-item typo-b4"
    tabindex="0"
    v-html="district.html"
    @keypress.enter="onClickHandler"
    @click="onClickHandler"
  ></div>
</template>

<script>
export default {
  props: ['selected', 'district', 'onClick'],
  data() {
    return {
      test: 'THIS IS TEST',
    }
  },
  methods: {
    onClickHandler(e) {
      if (this.onClick) {
        this.onClick(e)
      }
    },
  },
  computed: {
    elementId() {
      return `district-menu-${this.district.id}`
    },
  },
}
</script>

<style lang="scss">
</style>