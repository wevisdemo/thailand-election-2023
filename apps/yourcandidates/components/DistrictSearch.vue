<template>
  <div class="search-section">
    <p class="typo-b4">
      <b>ค้นหารายชื่อผู้สมัคร ส.ส. และพรรคการเมืองในเขต/อำเภอบ้านคุณ</b>
    </p>
    <div class="search-container">
      <div class="search-box">
        <input
          class="typo-b3"
          type="text"
          name="query"
          id="district-search"
          v-model.trim="query"
          @input="() => changeLevel(1)"
          placeholder="พิมพ์ชื่อเขต/อำเภอบ้านคุณ"
        />
        <IconsSearch v-if="menuLevel == 1" />
        <button
          v-if="menuLevel == 2"
          @click="
            () => {
              query = ''
              menuLevel = 1
            }
          "
        >
          <IconsClose />
        </button>
        <div
          class="query-result-container"
          :style="{
            display: query.length == 0 ? 'none' : 'block',
            height: menuHeight,
            background: noresult
              ? 'var(--color-gray-2)'
              : `var(--color-highlight-1)`,
          }"
        >
          <div ref="menuLevel1" :style="menuContainerStyels(1)">
            <p class="typo-b4" v-if="noresult">ไม่มีชื่อเขต/อำเภอนี้</p>
            <SearchListDistrict
              v-for="(r, i) in queryResultList"
              :key="i"
              :district="r"
              :onClick="() => onDistrictSelected(r.district)"
            />
          </div>
          <div ref="menuLevel2" :style="menuContainerStyels(2)">
            <div class="typo-b6">
              มี {{ electoralDistrics.length }} เขตเลือกตั้ง
            </div>
            <SearchListElectoral
              :index="i"
              :district="r"
              v-for="(r, i) in electoralDistrics"
              :key="i"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { searchDistrict, getElectorals } from '~/helpers/search'

export default {
  mounted() {
    this.menuHeight = this.getMenuHeight()
  },
  updated() {
    this.menuHeight = this.getMenuHeight()
    console.log(document.getElementById)
  },
  data() {
    return {
      query: '',
      menuHeight: '0px',
      menuLevel: 1,
      selectedDistrict: {},
    }
  },
  computed: {
    queryResultList() {
      if (this.menuLevel == 1)
        return searchDistrict(this.query).map((r, i) => ({
          id: i,
          html: `อ. ${r.district} จ. ${r.province}`,
          district: r.obj,
        }))
      return []
    },
    electoralDistrics() {
      if (this.menuLevel == 2) {
        return getElectorals(this.selectedDistrict.electoral.map((v) => v.fk))
      }
      return []
    },
    noresult() {
      return (
        this.queryResultList.length == 0 &&
        this.query.length !== 0 &&
        this.menuLevel == 1
      )
    },
  },
  methods: {
    getMenuHeight() {
      if (this.menuLevel == 1) {
        return Math.min(this.$refs.menuLevel1.clientHeight + 6, 360) + 'px' // 6px for border
      } else if (this.menuLevel == 2)
        return Math.min(this.$refs.menuLevel2.clientHeight + 6, 360) + 'px' // 6px for border
    },
    changeLevel(to) {
      if (to <= 2 && 0 < to) this.menuLevel = to
    },
    menuContainerStyels(level) {
      return {
        transform:
          this.menuLevel == level
            ? ''
            : `translate(calc(${level == 1 ? '-' : ''}10% + 15px), 0px)`,
        opacity: this.menuLevel == level ? 1 : 0,
        display: this.menuLevel == level ? 'block' : 'none',
      }
    },
    onDistrictSelected(district) {
      this.changeLevel(2)
      this.selectedDistrict = district
      this.query = `อ. ${district.district} จ. ${district.province}`
    },
  },
}
</script>

<style lang="scss">
.search-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 40px;
  gap: 5px;
}

.search-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.search-container > .search-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;
  width: 100%;
  background: var(--color-white);
  border: 3px solid var(--color-black);
  border-radius: 50px;

  &:empty {
    display: none;
  }

  &:focus-within {
    border: 3px solid var(--color-highlight-2);
  }

  & > input {
    flex: none;
    color: var(--color-black);
    flex-grow: 1;

    &:placeholder-shown {
      opacity: 0.5;
    }

    &:focus {
      outline: none;

      & ~ .query-result-container {
        display: flex;
      }
    }
  }
}

.query-result-container {
  position: absolute;
  // display: none;
  width: 100%;
  height: 200px;
  top: 100%;
  left: 0px;
  margin-top: 12px;
  overflow-y: scroll;
  overflow-x: hidden;
  background: var(--color-highlight-1);
  border: 3px solid var(--color-black);
  border-radius: 10px;
  transition-duration: 200ms;

  & > div {
    position: absolute;
    width: 100%;
    left: 0px;
    top: 0px;
    padding: 15px 15px;
    transition: 200ms ease-in-out;
  }
}
</style>