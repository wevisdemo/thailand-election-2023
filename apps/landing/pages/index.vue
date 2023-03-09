<template>
  <div class="main-container">
    <div class="cover-section">
      <div class="container">
        <div class="logo-wrap">
          <img :src="logo" alt="wevis election 66 logo" />
        </div>
        <p class="typo-h6 head">เปิดข้อมูลที่ต้องรู้ ก่อนเปิดคูหา</p>
        <p class="typo-b4 subhead">
          รวมข้อมูลการเมืองและการเลือกตั้ง โดยประชาชนผู้มีหวังในประชาธิปไตย
        </p>
        <div class="img-wrap">
          <div class="three-people">
            <img :src="three_people" alt="three people" />
          </div>
          <div class="star-label">
            <img :src="star_label" alt="star label" />
            <div class="countdown-numbers-wrap">
              <p class="typo-b7"><b>เหลืออีก</b></p>
              <p class="number">000</p>
              <p class="typo-b6"><b>วัน</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="projects-section">
      <div class="container">
        <p class="typo-h5 head">
          <b> เตรียมความพร้อม ก่อนไปเลือก </b>
        </p>
        <p class="typo-b4 subhead">
          เลือกดูโปรเจ็คของ WeVis ที่รวบรวมข้อมูล มาตอบคำถามที่คุณคาใจ
          ให้พร้อมเลือกตั้ง
        </p>
        <div class="filters-wrap">
          <div
            v-for="filter in filter_buttons"
            :key="filter"
            class="filter-btn"
            :class="{ 'active-filter-btn': active_filter === filter }"
            @click="active_filter = filter"
          >
            <p class="typo-b5">
              <b>{{ filter }}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require('~/assets/images/wevis_election_66_logo.svg'),
      star_label: require('~/assets/images/star_label.svg'),
      three_people: require('~/assets/images/three_people.png'),
      filter_buttons: [
        'ทั้งหมด',
        'เตรียมตัวเลือกตั้ง',
        'ผลงานที่ผ่านมา',
        'เครื่องมืออื่นๆ',
      ],
      active_filter: 'ทั้งหมด',
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include small-mobile {
    padding: 0 20px;
  }
}
.cover-section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 0;
  overflow-x: hidden;
  .logo-wrap {
    width: 500px;
    @include mobile {
      width: 270px;
    }
  }
  .head {
    margin: 18.5px 0 16px;
    text-align: center;
  }
  .subhead {
    color: var(--color-black);
    opacity: 0.6;
    text-align: center;
    @include tablet {
      width: 300px;
    }
    @include mobile {
      width: 270px;
    }
  }
  .img-wrap {
    position: relative;
    .three-people {
      width: 256px;
      margin-top: 16px;
    }
    .star-label {
      position: absolute;
      top: 50%;
      right: 0;
      width: 128px;
      transform: rotate(15deg) translate(100%, -75%);
      @include tablet {
        transform: rotate(15deg) translate(80%, -75%);
      }
      @include mobile {
        transform: rotate(15deg) translate(25%, -30%);
      }
      @include small-mobile {
        transform: rotate(15deg) translate(15%, -25%);
      }
      .countdown-numbers-wrap {
        position: absolute;
        top: calc(50% + 3px);
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        .number {
          font-family: 'Kondolar Thai';
          font-size: 44px;
          font-weight: 700;
          line-height: 1;
          transform: translateY(3px);
        }
      }
    }
  }
}
.projects-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 64px 0;
  background: var(--color-gray-1);
  .head {
    margin-bottom: 8px;
    @include mobile {
      width: 260px;
    }
  }
  .subhead {
    opacity: 0.6;
    @include mobile {
      max-width: 308px;
    }
  }
  .filters-wrap {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    margin: 24px 0;
    @include mobile {
      width: 280px;
    }
    .filter-btn {
      padding: 12px 16px;
      border-radius: 24px;
      background: white;
      border: 3px solid var(--color-black);
      width: fit-content;
      cursor: pointer;
      &.active-filter-btn {
        background: var(--color-black);
        color: var(--color-white);
      }
    }
  }
}
</style>
