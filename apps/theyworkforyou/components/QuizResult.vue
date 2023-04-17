<template>
  <div>
    <div class="header">
      <p class="typo-b4">
        <b>
          คุณและ ส.ส.
          <span
            v-for="mp in mp_data"
            :key="mp.Id"
            :class="{ 'old-mp': !mp.IsActive }"
            >{{ mp.Name.split(' ')[0] }}{{ !mp.IsActive ? '/' : '' }}</span
          >
        </b>
      </p>
      <p class="typo-h3">
        <b>ใจตรงกัน {{ match_percentage }}</b>
      </p>
    </div>
    <div class="match-img">
      <div class="user-img-wrap">
        <div class="heart">
          <img :src="heart" alt="heart" />
        </div>
        <div class="user-icon">
          <img :src="user" alt="user" />
        </div>
      </div>
      <div v-if="match_vote < 10" class="cross-wrap">
        <div v-for="i in getNumberOfCross" :key="`cross${i}`" class="cross">
          <img :src="cross" alt="cross" />
        </div>
      </div>
      <div class="mp-img-wrap">
        <div class="heart">
          <img :src="heart" alt="heart" />
        </div>
        <div
          v-for="mp in mp_data"
          :key="mp.Id"
          class="mp-icon"
          :class="mp.IsActive ? 'mp-icon-new' : 'mp-icon-old'"
        >
          <img :src="mp.Images[0].url" :alt="mp.Name" />
        </div>
      </div>
    </div>
    <div class="text-wrap">
      <p class="typo-b4 text">
        แม้ประเด็นที่เราคัดเลือกมาให้โหวต
        อาจเป็นเพียงส่วนหนึ่งของประเด็นที่ถูกผลักดันในสภาตลอด 4 ปีที่ผ่านมา
      </p>
      <p class="typo-b4 text">
        แต่ก็ชวนคิดว่า ส.ส. เขตของเรา ได้ทำหน้าที่เป็น ‘ผู้แทน’
        อย่างที่เราหวังไหม? และการเลือกตั้งครั้งต่อไป เราควรเลือก ‘ใคร’
        เพื่อทำหน้าที่นี้ให้เรา
      </p>
    </div>
    <div class="btn-wrap">
      <RoundButton
        v-for="mp in mp_data"
        :key="mp.Id"
        :text="`ดูผลโหวตมติอื่นๆ ของ${mp.Name.split(' ')[0]}`"
        :link="`https://theyworkforus.wevis.info/people/${mp.Name.replaceAll(
          ' ',
          '-'
        )}`"
        class="round-btn-wrap"
      />
      <RoundButton
        text="ดูผู้สมัครเลือกตั้ง 66"
        link="/yourcandidates"
        class="round-btn-wrap"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    match_vote: {
      type: Number,
      default: 0,
    },
    mp_data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      match_percentage: '',
      user: require('~/assets/images/user.svg'),
      heart: require('~/assets/images/heart.svg'),
      cross: require('~/assets/images/cross.svg'),
    }
  },
  mounted() {
    this.match_percentage = `${(this.match_vote / 10) * 100}%`
  },
  computed: {
    getNumberOfCross() {
      return 10 - this.match_vote
    },
  },
}
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  padding-top: 10px;
  @include mobile {
    padding-top: 5px;
  }
  .old-mp {
    color: var(--color-gray-3);
  }
  span {
    display: inline-block;
  }
}
.match-img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 45px 0 60px;
  @include mobile {
    padding: 30px 0 40px;
  }
  .user-img-wrap,
  .mp-img-wrap {
    position: relative;
    .heart {
      width: 34px;
      position: absolute;
      top: 50%;
      z-index: 1;
      @include mobile {
        width: 23px;
      }
    }
    .user-icon {
      width: 75px;
      height: 75px;
      @include mobile {
        width: 50px;
        height: 50px;
      }
    }
    .mp-icon {
      width: 75px;
      border-radius: 50px;
      overflow: hidden;
      @include mobile {
        width: 50px;
      }
      &.mp-icon-old {
        transform: translateY(20%);
        opacity: 0.4;
      }
      &.mp-icon-new {
        transform: translateY(-20%);
      }
    }
  }
  .user-img-wrap {
    .heart {
      right: 0;
      transform: translate(50%, -50%);
    }
  }
  .mp-img-wrap {
    .heart {
      left: 0;
      transform: translate(-50%, -50%);
    }
  }
  .cross-wrap {
    display: flex;
    gap: 15px;
    padding: 0 22.5px;
    @include mobile {
      gap: 10px;
      padding: 0 15px;
    }
    .cross {
      width: 7.5px;
      @include mobile {
        width: 5px;
      }
    }
  }
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
  padding-top: 10px;
  @include tablet {
    flex-direction: column;
  }
  @include mobile {
    padding-top: 0;
  }
  .round-btn-wrap {
    flex: 1;
  }
}
</style>
