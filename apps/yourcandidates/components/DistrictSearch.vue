<template>
  <div class="search-section">
    <p class="typo-b4 text-center pb-1">
      <b>ค้นหารายชื่อผู้สมัคร ส.ส. และพรรคการเมืองในตำบล/อำเภอบ้านคุณ</b>
    </p>
    <div class="search-container">
      <div class="search-box">
        <input
          v-model.trim="query"
          class="typo-b3"
          type="text"
          name="query"
          id="district-search"
          autocomplete="off"
          placeholder="ตำบล/อำเภอ หรือ เขตเลือกตั้ง"
          @input="onSearchInput"
          :rows="isMobile ? 2 : 1"
        />
        <IconsSearch v-if="menuLevel == 1" />
        <button v-if="menuLevel == 2" @click="onButtonDiscardClick">
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
            <template v-for="(r, i) in queryResultList">
              <SearchListDistrict
                v-if="r.type == 'district'"
                :key="i"
                :district="r"
                :onClick="() => onDistrictSelected(r.object)"
              />
              <SearchListElectoral
                v-if="r.type == 'electoral'"
                :key="i"
                :district="r.object"
              />
            </template>
          </div>
          <div ref="menuLevel2" :style="menuContainerStyels(2)">
            <div class="typo-b6">
              มี {{ electoralDistrics.length }} เขตเลือกตั้ง
            </div>
            <SearchListElectoral
              v-for="(r, i) in electoralDistrics"
              :index="i"
              :district="r"
              :key="i"
            />
          </div>
        </div>
      </div>
    </div>
    <p class="typo-b5 text-center" style="opacity: 50%; z-index: -1">
      ตัวอย่างเขตเลือกตั้ง เช่น ลำพูน 2
    </p>
    <p class="typo-b5 text-center">
      ถ้ายังไม่รู้ว่ามีสิทธิอยู่ในเขตเลือกตั้งไหน
      <span style="white-space: nowrap"
        >ไปตรวจสอบได้<a
          href="https://boraservices.bora.dopa.go.th/election/enqelection/"
          target="_blank"
          class="outer-link-button"
        >
          <b>ที่นี่</b>
          <IconsNewTab />
        </a>
      </span>
    </p>
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
  },
  data() {
    return {
      query: '',
      menuHeight: '0px',
      menuLevel: 1,
      selectedDistrict: {},
      showPlaceholder: true,
      queryResultList: [],
    }
  },
  computed: {
    electoralDistrics() {
      if (this.menuLevel == 2) {
        return getElectorals(this.selectedDistrict.electoralFk)
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
    getQueryResultList() {
      if (this.menuLevel == 1)
        return searchDistrict(this.query).map((r, i) => ({
          id: i,
          html: r.highlightedHtml,
          object: r,
          type: r.type,
        }))
      return []
    },
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
      this.query = district.stringMenu
    },
    onButtonDiscardClick() {
      this.query = ''
      this.menuHeight = '0px'
      this.showPlaceholder = true
      this.menuLevel = 1
    },
    onSearchInput() {
      this.changeLevel(1)
      this.showPlaceholder = this.query.length == 0
      this.queryResultList = this.getQueryResultList()
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
  gap: 10px;
}

.search-container {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
}

.search-container > .search-box {
  position: relative;
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
    }
  }
}

.search-box__placeholder {
  color: var(--color-black);
  opacity: 0.5;
  position: absolute;
  pointer-events: none;
  & span {
    white-space: nowrap;
  }
}

.query-result-container {
  position: absolute;
  display: flex;
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

.outer-link-button {
  white-space: nowrap;
  & svg {
    display: inline;
  }
}
</style>