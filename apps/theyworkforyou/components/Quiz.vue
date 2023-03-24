<template>
  <div class="quiz-container">
    <div class="header">
      <p class="typo-b7 no">{{ quiz_no }}/10</p>
      <p class="typo-h6 title">
        <b>{{ quiz_data.Title }}</b>
      </p>
      <p class="typo-b6">ชื่อเต็ม : {{ quiz_data.LegalTitle }}</p>
    </div>
    <div
      class="description-box"
      @click="collapsed = !collapsed"
      :class="collapsed ? 'collapsed' : 'expanded'"
    >
      <p class="typo-b7"><b>รายละเอียด</b></p>
      <p class="description typo-b5">
        {{ quiz_data.DescriptionTh }}
      </p>
      <p class="typo-b7 view-full">
        {{ collapsed ? '+ อ่านเพิ่มเติม' : '- ปิดรายละเอียด' }}
      </p>
    </div>
    <div class="vote-label">
      <p
        class="typo-b4"
        :class="{
          'unmatch-vote': answer_selected && mp_answer !== answer_selected,
        }"
      >
        <b>{{
          !answer_selected
            ? 'ถ้าเป็นคุณ จะโหวต..'
            : mp_answer === answer_selected
            ? 'ว้าว คุณโหวตตรงกัน !'
            : 'อุ้ย คุณโหวตต่างกัน !'
        }}</b>
      </p>
      <div
        v-if="
          !['เห็นด้วย', 'ไม่เห็นด้วย', 'งดออกเสียง'].includes(mp_answer) &&
          answer_selected
        "
        class="other-vote"
      >
        <span>เพราะ</span>
        <div class="img-wrap">
          <img :src="getMpImage" alt="" />
        </div>
        <span>{{ mp_answer }}..</span>
      </div>
    </div>
    <div class="choices-wrap">
      <AnswerChoice
        v-for="answer in answers"
        :key="answer.value"
        :text="answer.label"
        :choice_id="answer.value"
        :mp_answer="mp_answer"
        :answer_selected="answer_selected"
        :mp_image="getMpImage"
        @click.native="selectAnswer(answer.label)"
        :style="{ 'pointer-events': answer_selected === '' ? 'auto' : 'none' }"
      />
    </div>
    <div class="next-btn" @click="nextQuiz">
      <div class="arrow">
        <img :src="arrow" alt="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import { TheyWorkForUs } from '@thailand-election-2023/database'

export default {
  props: {
    quiz_no: {
      type: Number,
      default: 0,
    },
    quiz_data: {
      type: Object,
      default: {},
    },
    mp_data: {
      type: Array,
      default: () => [],
    },
    nextQuiz: {
      type: Function,
      default: () => {},
    },
    countMatchVote: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      arrow: require('~/assets/images/icons/arrow.svg'),
      answers: [
        { label: 'เห็นด้วย', value: 'approve' },
        { label: 'ไม่เห็นด้วย', value: 'disprove' },
        { label: 'งดออกเสียง', value: 'abstained' },
      ],
      mp_answer: '',
      answer_selected: '',
      collapsed: true,
      mp_data_current: {},
    }
  },
  async mounted() {
    let index = 0
    while (index <= 1) {
      const people_votes = await TheyWorkForUs.PeopleVotes.fetch({
        where: `(nc_9rqw__Votelog_id,eq,${this.quiz_data.Id})~and(nc_9rqw__People_id,eq,${this.mp_data[index].Id})`,
      })
      if (people_votes.list.length > 0) {
        this.mp_answer = people_votes.list[0].Status
        this.mp_data_current = this.mp_data[index]
        break
      }
      index++
    }
  },
  watch: {
    async quiz_no() {
      this.answer_selected = ''
      this.collapsed = true

      let index = 0
      while (index <= 1) {
        const people_votes = await TheyWorkForUs.PeopleVotes.fetch({
          where: `(nc_9rqw__Votelog_id,eq,${this.quiz_data.Id})~and(nc_9rqw__People_id,eq,${this.mp_data[index].Id})`,
        })
        if (people_votes.list.length > 0) {
          this.mp_answer = people_votes.list[0].Status
          this.mp_data_current = this.mp_data[index]
          break
        }
        index++
      }
    },
  },
  methods: {
    selectAnswer(answer) {
      this.answer_selected = answer
      if (answer === this.mp_answer) {
        this.countMatchVote()
      }
    },
  },
  computed: {
    getMpImage() {
      if (Object.keys(this.mp_data_current).length > 0) {
        return this.mp_data_current.Images[0].url
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.quiz-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 0 40px;
}
.header {
  .no,
  .title {
    margin-bottom: 5px;
  }
}
.description-box {
  background: var(--color-gray-1);
  padding: 10px;
  margin: 20px 0;
  text-align: left;
  transition: 0.5s;
  cursor: pointer;
  overflow: hidden;
  @include mobile {
    max-height: 108px;
  }
  &.expanded {
    max-height: 800px;
    .description {
      display: unset;
      -webkit-line-clamp: unset;
      -webkit-box-orient: unset;
      overflow: auto;
    }
  }
  &.collapsed {
    max-height: 108px;
    .description {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .description {
    margin: 2px 0;
  }
  .view-full {
    color: var(--color-gray-3);
    padding-top: 2px;
  }
}
.vote-label {
  margin-bottom: 20px;
  .unmatch-vote {
    color: var(--color-red);
  }
  .other-vote {
    display: flex;
    align-items: center;
    margin-top: 5px;
    .img-wrap {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 5px;
    }
  }
}
.choices-wrap {
  display: flex;
  flex-direction: column;
  gap: 13px;
  width: 100%;
}
.next-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 3px solid var(--color-black);
  border-radius: 50%;
  margin-top: 20px;
  cursor: pointer;
  .arrow {
    width: 24px;
  }
}
</style>
