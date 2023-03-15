<template>
  <div v-if="countdown_timer > 0" class="star-label">
    <img :src="star_label" alt="star label" />
    <div class="countdown-numbers-wrap">
      <p class="typo-b7"><b>เหลืออีก</b></p>
      <p class="number">{{ countdown_timer }}</p>
      <p class="typo-b6">
        <b>{{ countdown_unit }}</b>
      </p>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
  data() {
    return {
      star_label: require('~/assets/images/star_label.svg'),
      countdown_timer: 0,
      countdown_unit: 'วัน',
    }
  },
  mounted() {
    this.setRealtime()
  },
  methods: {
    setRealtime() {
      const current_date = dayjs().format('YYYY-MM-DD')
      const election_date = '2023-05-07'
      const election_time = '00:00'
      const diff_day = dayjs(election_date).diff(dayjs(current_date), 'day')

      this.countdown_timer = diff_day
      this.countdown_unit = 'วัน'
      if (diff_day === 0) {
        const diff_time = this.getInterval(
          dayjs().format('HH:mm'),
          election_time
        )
        function RemoveLeadingZero(value) {
          return value.charAt(0) === '0' ? parseInt(value.slice(1)) : value
        }
        this.countdown_timer =
          diff_time.split(':')[0] === '00'
            ? RemoveLeadingZero(diff_time.split(':')[1])
            : RemoveLeadingZero(diff_time.split(':')[0])
        this.countdown_unit =
          diff_time.split(':')[0] === '00' ? 'นาที' : 'ชั่วโมง'

        setInterval(() => {
          const diff_realtime = this.getInterval(
            dayjs().format('HH:mm'),
            election_time
          )
          this.countdown_timer =
            diff_realtime.split(':')[0] === '00'
              ? RemoveLeadingZero(diff_realtime.split(':')[1])
              : RemoveLeadingZero(diff_realtime.split(':')[0])
          this.countdown_unit =
            diff_realtime.split(':')[0] === '00' ? 'นาที' : 'ชั่วโมง'
        }, 1000 * 60)
      }
    },
    getInterval(from, to) {
      function formatInterval(minutes) {
        let interval = [
          Math.floor(minutes / 60).toString(),
          (minutes % 60).toString(),
        ]
        return interval[0].padStart(2, '0') + ':' + interval[1].padStart(2, '0')
      }

      let [hoursA, minutesA] = from.split(':')
      let [hoursB, minutesB] = to.split(':')
      let timeA = dayjs().hour(hoursA).minute(minutesA)
      let timeB = dayjs().hour(hoursB).minute(minutesB)
      let interval = timeB.diff(timeA, 'minutes')

      return formatInterval(interval)
    },
  },
}
</script>

<style lang="scss" scoped>
.star-label {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 128px;
  transform: rotate(15deg) translate(50%, -50%);
  @include mobile {
    transform: rotate(15deg) translate(0%, -20%);
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
</style>
