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
      <li v-for="(dist, i) in district.districts" :key="i">
        {{ getDistrictListItemString(dist) }}
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
      this.$router.push(this.aHref)
    },
    getDistrictListItemString(district) {
      if (district.belongsToOneElecDist)
        return `${this.districtPrefix}${district.name} (ทุก${this.subdistrictPrefix})`
      else
        return `${this.districtPrefix}${district.name} (${district.subDistricts.length} ${this.subdistrictPrefix})`
    },
  },
  computed: {
    aHref() {
      return `/${this.district.province}/${this.district.electoralDistrictNumber}`
    },
    elementId() {
      return `electoral-menu-${this.index}`
    },
    districtPrefix() {
      if (this.district.province == 'กรุงเทพมหานคร') {
        return 'เขต'
      } else {
        return 'อำเภอ'
      }
    },
    subdistrictPrefix() {
      if (this.district.province == 'กรุงเทพมหานคร') {
        return 'แขวง'
      } else {
        return 'ตำบล'
      }
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