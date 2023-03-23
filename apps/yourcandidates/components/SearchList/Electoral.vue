<template>
  <div
    class="typo-b3 search-list-item"
    tabindex="0"
    :id="elementId"
    @keypress.enter="onClickHandler"
    @click="onClickHandler"
  >
    <b
      >{{ district.province }}
      <span>เขตเลือกตั้งที่ {{ district.electoralDistrictNumber }}</span></b
    >
    <ul>
      <li v-for="(d, i) in district.district_list" :key="i">
        {{ d }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['selected', 'district', 'onClick', 'index'],
  mounted() {
    if (this.index == 0) {
      document.getElementById(this.elementId).focus()
    }
  },
  data() {
    return {}
  },
  methods: {
    onClickHandler(e) {
      this.$router.push(this.ahref)
    },
  },
  computed: {
    ahref() {
      return `/${this.district.province}/${this.district.electoralDistrictNumber}`
    },
    elementId() {
      return `electoral-menu-${this.index}`
    },
  },
}
</script>

<style lang="scss">
.search-list-item > ul {
  list-style: disc;
  list-style-position: inside;
  margin: 0 0 0 10px;
}
</style>