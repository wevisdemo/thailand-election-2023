<template>
  <div>
    <div class="header">
      <p class="typo-b4"><b>คุณและ ส.ส. กรณิศ</b></p>
      <p class="typo-h3">
        <b>ใจตรงกัน 50%</b>
      </p>
    </div>
    <div class="match-img"></div>
    <div class="text-wrap">
      <p class="typo-b4 text">
        แม้ประเด็นที่เราคัดเลือกมาให้โหวต
        อาจเป็นเพียงส่วนหนึ่งของประเด็นที่ถูกผลักดันในสภาตลอด 4 ปีที่ผ่านมา
      </p>
      <p class="typo-b4 text">
        แต่ก็ชวนคิดว่า ส.ส. เขตของเรา ได้ทำหน้าที่เป็น 'ผู้แทน'
        อย่างที่เราหวังไหม? และการเลือกตั้งครั้งต่อไป เราควรเลือก 'ใคร'
        เพื่อทำหน้าที่นี้ให้เรา
      </p>
    </div>
    <div class="btn-wrap">
      <RoundButton text="ดูผลโหวตมติอื่นๆ ของ ส.ส. คนนี้" />
      <RoundButton text="ดูผู้สมัครทั้งหมดในพื้นที่ของคุณ" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  padding-top: 60px;
}
.match-img {
  height: 90px;
  padding: 20px 0;
  margin: 20px 0;
}
.text-wrap {
  text-align: center;
  .text {
    margin-bottom: 15px;
    padding: 0 5px;
  }
}
.btn-wrap {
  display: flex;
  gap: 15px;
  @include tablet {
    flex-direction: column;
  }
}
</style>
