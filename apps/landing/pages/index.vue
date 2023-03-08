<template>
  <div>
    <div class="cover-container">
      <div class="logo-wrap">
        <img :src="logo" alt="" />
      </div>
      <p class="typo-h6 head">เปิดข้อมูลที่ต้องรู้ ก่อนเปิดคูหา</p>
      <p class="typo-b4 subhead">
        รวมข้อมูลการเมืองและการเลือกตั้ง โดยประชาชนผู้มีหวังในประชาธิปไตย
      </p>
      <div class="img-wrap">
        <div class="three-people">
          <img :src="three_people" alt="" />
        </div>
        <div class="star-label">
          <img :src="star_label" alt="" />
          <div class="countdown-numbers-wrap">
            <p class="typo-b7"><b>เหลืออีก</b></p>
            <p class="number">000</p>
            <p class="typo-b6"><b>วัน</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      logo: require('~/assets/images/wevis_election_66_logo.svg'),
      star_label: require('~/assets/images/star_label.svg'),
      three_people: require('~/assets/images/three_people.png'),
    }
  },
}
</script>

<style lang="scss" scoped>
.cover-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
</style>
