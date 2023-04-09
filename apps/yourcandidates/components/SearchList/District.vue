<template>
  <div
    :id="elementId"
    class="search-list-item typo-b4"
    tabindex="0"
    style="display: flex; justify-content: space-between"
    @keypress.enter="onClickHandler"
    @click="onClickHandler"
  >
    <div v-html="district.html"></div>
    <div class="search-list-item__arrow">
      <IconsArrowRight />
    </div>
  </div>
</template>

<script>
export default {
  props: ['selected', 'district', 'onClick'],
  data() {
    return {}
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