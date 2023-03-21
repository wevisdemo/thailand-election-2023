<template>
  <div class="h-100">
    <div class="d-flex mx-1 align-items-center h-100" v-if="data.length != 0">
      <template v-for="(item, i) in color">
        <div
          class="list-box h-100"
          :key="'detail-vote-' + i"
          :style="{
            backgroundColor: item.color,
            width:
              (datalist[i] / total) * 100 > 1
                ? ((datalist[i] / total) * 100).toFixed(2) + '%'
                : '1%',
          }"
          :id="'popover-vote-list-' + id + i"
        >
          <div
            class="
              answered
              h-100
              font-weight-bold
              d-flex
              justify-content-center
              align-items-center
              overflow-hidden
            "
            v-if="userAns == item.title"
          >
            คุณ
          </div>
        </div>
        <b-popover
          :target="'popover-vote-list-' + id + i"
          triggers="hover"
          placement="top"
        >
          <p class="header-12 mr-1 mb-0">
            {{ item.title }}:
            <b>{{ ((datalist[i] / total) * 100).toFixed(2) }}%</b>
          </p>
        </b-popover>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    total: Number,
    id: Number,
    data: Object,
    color: Array,
    userAns: String,
  },
  data() {
    return {
      datalist: [],
      quiz: [
        {
          question1: [
            {
              age18_30: 0,
              age31_40: 0,
              age41_50: 0,
              age51_60: 0,
              noneedage: 0,
            },
          ],
        },
        {
          question2: [
            {
              bachelor_deg: 0,
              below_bachelor_deg: 0,
              master_deg: 0,
              no_need_deg: 0,
              phd: 0,
            },
          ],
        },
        {
          question3: [
            {
              any_faculty: 0,
              business_faculty: 0,
              education_faculty: 0,
              law_faculty: 0,
              other_faculty: 0,
              politics_faculty: 0,
              public_admin_faculty: 0,
            },
          ],
        },
        {
          question4: [
            {
              any_work: 0,
              business_work: 0,
              education_work: 0,
              law_work: 0,
              other_work: 0,
              politics_work: 0,
              public_admin_work: 0,
            },
          ],
        },
        {
          question5: [
            {
              has_connection_bloodline: 0,
              no_connection_bloodline: 0,
              no_need_connection_bloodline: 0,
            },
          ],
        },
        {
          question6: [
            {
              live_in_own_province: 0,
              no_need_live_in_own_province: 0,
              not_live_in_own_province: 0,
            },
          ],
        },
      ],
      total_all: 0,
    };
  },
  watch: {
    data(val) {
      this.datalist = [];
      Object.values(this.data).forEach((prop) => this.datalist.push(prop));
    },
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.answered {
  border: 5px solid #000;
}
</style>