<template>
  <div class="page-container">
    <div class="cover-container">
      <p class="typo-h7 title">They Work for You?</p>
      <p class="typo-h2 head">
        <b>
          ส.ส. เขตบ้าน <br />
          ใจตรงกับคุณแค่ไหน?
        </b>
      </p>
      <div class="img-wrap">
        <img :src="two_people" alt="" />
      </div>
      <div class="intro-wrap">
        <p class="typo-b4 intro">
          หน้าที่สำคัญอย่างหนึ่งของ ส.ส. เขต
          คือการเป็นผู้แทนคนในพื้นที่ไปส่งเสียงในสภา ผ่านการโหวตประเด็นต่างๆ
        </p>
        <p class="typo-b4 intro">
          ก่อนการ#เลือกตั้ง66ที่จะถึงนี้ี้ เราจึงอยากชวนทุกคนมาตรวจการบ้านในช่วง
          4 ปีที่ผ่านมากันหน่อย ว่า ส.ส. เขตบ้านคุณทำหน้าที่นี้ได้ตรงใจแค่ไหน
        </p>
      </div>
    </div>
    <div class="search-section">
      <p class="typo-b4 question">
        <b> ก่อนอื่น คุณอยู่เขต/อำเภออะไร </b>
      </p>

      <div class="search-box-wrap">
        <el-select
          v-model="value"
          filterable
          default-first-option
          :reserve-keyword="false"
          placeholder="พิมพ์ชื่อเขต/อำเภอบ้านคุณ"
          popper-class="search-box"
        >
          <el-option
            v-for="(item, index) in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            class="dropdown-item"
          >
            <div v-if="index > 0" class="line" />
            <span>{{ item.label }}</span>
          </el-option>
        </el-select>
        <div class="search-icon">
          <img :src="search_icon" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      two_people: require('~/assets/images/two_people.png'),
      search_icon: require('~/assets/images/icons/search.svg'),
      value: '',
      options: [
        {
          label: 'อ. เมืองสมุทรปราการ, จ. สมุทรปราการ',
          value: 'สมุทรปราการ เมืองสมุทรปราการ',
        },
        {
          label: 'อ.ปลายพระยา จ.กระบี่',
          value: 'กระบี่ ปลายพระยา',
        },
        {
          label: 'อ.อ่าวลึก จ.กระบี่',
          value: 'กระบี่ อ่าวลึก',
        },
        {
          label: 'อ.เขาพนม จ.กระบี่',
          value: 'กระบี่ เขาพนม',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  margin: 0 auto;
  @include tablet {
    width: 80vw;
    max-width: 650px;
  }
}
.cover-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px 0 20px;
  @include tablet {
    padding: 80px 0px 0px;
    min-height: unset;
    justify-content: flex-start;
  }
  .title {
    margin-bottom: 5px;
  }
  .head {
    text-align: center;
  }
  .img-wrap {
    width: 160px;
    margin: 30px 0;
    @include tablet {
      margin: 27px 0;
    }
  }
  .intro-wrap {
    max-width: 650px;
    .intro {
      text-align: center;
      margin-bottom: 20px;
    }
  }
}
.search-section {
  padding: 40px 0 80px;
  text-align: center;
  .question {
    margin-bottom: 10px;
  }
  .search-box-wrap {
    position: relative;
    width: 650px;
    margin: 0 auto;
    @include mobile {
      width: 288px;
    }
    .el-select {
      width: 100%;
      ::v-deep(.el-input__inner) {
        height: 52px !important;
        border: 3px solid var(--color-black);
        border-radius: 50px;
        font-family: 'IBM Plex Sans Thai Looped';
        font-weight: 400;
        font-size: 21px;
        transition: 0.3s;
        padding-right: 50px;
        @include mobile {
          height: 47px !important;
          font-size: 18px;
        }
      }
      ::v-deep(.el-input.is-focus .el-input__inner) {
        border-color: var(--color-highlight-2);
      }
    }
    .search-icon {
      position: absolute;
      top: 50%;
      right: 5px;
      transform: translate(-100%, -50%);
      width: 18px;
    }
  }
}
</style>

<style lang="scss">
.search-box {
  background: var(--color-highlight-1);
  border: 3px solid var(--color-black);
  border-radius: 10px;
  width: 650px;
  @include mobile {
    width: 288px;
  }
}
.popper__arrow {
  display: none !important;
}
.el-input__suffix {
  display: none;
}
.el-select-dropdown__list {
  padding: 15px;
}
.dropdown-item {
  position: relative;
  font-size: 18px;
  padding: 5px;
  color: var(--color-black);
  height: unset;
  line-height: 24px;
  white-space: normal;
  text-overflow: clip;
  .line {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background: var(--color-highlight-2);
  }
  @include mobile {
    font-size: 16px;
  }
}
.dropdown-item.hover {
  background: var(--color-highlight-2);
  border-radius: 5px;
  & + .dropdown-item .line {
    opacity: 0;
  }
}
.dropdown-item.selected {
  color: var(--color-black);
}
</style>
