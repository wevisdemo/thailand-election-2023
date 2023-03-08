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
  </div>
</template>

<script>
export default {
  data() {
    return {
      two_people: require('~/assets/images/two_people.png'),
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
</style>
