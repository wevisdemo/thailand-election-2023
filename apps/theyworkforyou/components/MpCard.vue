<template>
  <div class="mp-card-container">
    <div class="header-container">
      <p class="typo-b5"><b> สมุทรปราการ เขตเลือกตั้งที่ 4</b></p>
      <p class="typo-b6">เขตบางบอน • เขตหนองแขม เฉพาะ แขวงหนองแขม</p>
    </div>
    <div class="mp-info-container">
      <div class="mp-info-wrap">
        <div class="mp-info">
          <div class="img-wrap">
            <!-- <img src="" alt=""> -->
          </div>
          <p class="name typo-h7"><b>นาง กรณิศ งามสุคนธ์รัตนา</b></p>
          <p class="party typo-b5">พรรคพลังประชารัฐ</p>
        </div>
        <p v-if="false" class="retire typo-b6"><b>พ้นจากตำแหน่ง</b></p>
      </div>
      <div v-if="false" class="mp-info-wrap">
        <div class="mp-info">
          <div class="img-wrap">
            <!-- <img src="" alt=""> -->
          </div>
          <p class="name typo-h7"><b>นาง กรณิศ งามสุคนธ์รัตนา</b></p>
          <p class="party typo-b5">พรรคพลังประชารัฐ</p>
        </div>
      </div>
    </div>
    <div class="start-btn-container">
      <p class="typo-b5 start"><b>เริ่มเล่น</b></p>
      <div class="arrow">
        <img :src="arrow" alt="right arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrow: require('~/assets/images/icons/arrow.svg'),
    }
  },
}
</script>

<style lang="scss" scoped>
.mp-card-container {
  background: var(--color-white);
  border: 3px solid var(--color-black);
  border-radius: 20px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: rotate(3deg);
    box-shadow: 4px 12px 0px var(--color-gray-2);
  }
}
.header-container {
  background: var(--color-gray-1);
  padding: 15px;
}
.mp-info-container {
  display: flex;
  margin: 20px 10px;
  .mp-info-wrap {
    flex: 1;
    padding: 0 5px;
    &:nth-child(2) {
      border-left: 1px solid var(--color-gray-2);
    }
    .mp-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.fade {
        opacity: 0.4;
      }
    }
    .img-wrap {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 1px solid var(--color-black);
      margin-bottom: 10px;
    }
    .retire {
      color: var(--color-red);
      margin-top: 10px;
    }
  }
}
.start-btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11.5px;
  background: var(--color-highlight-3);
  .start {
    margin-right: 5px;
  }
  .arrow {
    width: 24px;
  }
}
</style>
