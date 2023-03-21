<template>
  <div v-if="show_star_label" class="star-label-wrap">
    <div class="countdown-days-label">
      <img :src="yellow_star_label" alt="yellow star label" />
      <div class="countdown-numbers-wrap">
        <p class="typo-b7"><b>เหลืออีก</b></p>
        <p class="number">{{ countdown_timer }}</p>
        <p class="typo-b6">
          <b>{{ countdown_unit }}</b>
        </p>
      </div>
    </div>
    <div class="election-day-label">
      <img :src="black_star_label" alt="black star label" />
      <div class="date-wrap">
        <p class="typo-b7"><b>เลือกตั้ง</b></p>
        <p class="typo-h6 date"><b>14</b></p>
        <p class="typo-b7 month">
          <b>พ.ค. 66</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  props: {
    election_day: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      yellow_star_label: require('~/assets/images/yellow_star_label.svg'),
      black_star_label: require('~/assets/images/black_star_label.svg'),
      show_star_label: true,
      countdown_timer: 0,
      countdown_unit: 'วัน',
    }
  },
  mounted() {
    this.getCountdownTimer()
    this.getInterval()
  },
  methods: {
    getInterval() {
      setInterval(() => {
        this.getCountdownTimer()
      }, 1000)
    },
    getCountdownTimer() {
      const election_day = dayjs(this.election_day)
      const current_time = dayjs(dayjs().format('YYYY-MM-DD HH:mm:s'))

      let seconds = election_day.diff(current_time, 'second')
      let minutes = Math.floor(seconds / 60)
      let hours = Math.floor(minutes / 60)
      const days = Math.floor(hours / 24)

      this.countdown_timer = days
      this.countdown_unit = 'วัน'

      if (days <= 0) {
        this.countdown_timer = hours
        this.countdown_unit = 'ชั่วโมง'
        if (hours <= 0) {
          this.countdown_timer = minutes
          this.countdown_unit = 'นาที'
          if (minutes <= 0) {
            this.countdown_timer = seconds
            this.countdown_unit = 'วินาที'
            if (seconds <= 0) {
              this.show_star_label = false
            }
          }
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.star-label-wrap {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 128px;
  transform: rotate(15deg) translate(0%, -80%);
  @include mobile {
    right: 22px;
    transform: rotate(15deg) translate(0%, -30%);
  }
}
.countdown-days-label {
  position: relative;
  z-index: 1;
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
.election-day-label {
  position: absolute;
  bottom: 10px;
  right: -18px;
  transform: translate(50%, 50%);
  .date-wrap {
    position: absolute;
    top: calc(50% + 3px);
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: var(--color-highlight-3);
    .date {
      line-height: 1.2;
    }
    .month {
      transform: translateY(-35%);
    }
  }
}

.typo-b7 {
  font-size: 12px;
}
.typo-b6 {
  font-size: 14px;
}
.typo-h6 {
  font-size: 32px;
}
</style>
