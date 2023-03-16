<template>
  <div class="quiz-container">
    <div class="header">
      <p class="typo-b7 no">{{ no }}/10</p>
      <p class="typo-h6 title">
        <b>{{ data.Title }}</b>
      </p>
      <p class="typo-b6">ชื่อเต็ม : {{ data.LegalTitle }}</p>
    </div>
    <div
      class="description-box"
      @click="collapsed = !collapsed"
      :class="collapsed ? 'collapsed' : 'expanded'"
    >
      <p class="typo-b7"><b>รายละเอียด</b></p>
      <p class="description typo-b5">
        {{ data.DescriptionTh }}
      </p>
      <p class="typo-b7 view-full">
        {{ collapsed ? '+ อ่านเพิ่มเติม' : '- ปิดรายละเอียด' }}
      </p>
    </div>
    <div class="vote-label">
      <p class="typo-b4">
        <b>ถ้าเป็นคุณ จะโหวต..</b>
      </p>
    </div>
    <div class="choices-wrap">
      <AnswerChoice
        v-for="answer in answers"
        :key="answer.value"
        :text="answer.label"
        :choice_id="answer.value"
        :answer_selected="answer_selected"
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
export default {
  props: {
    no: {
      type: Number,
      default: 0,
    },
    data: {
      type: Object,
      default: {},
    },
    nextQuiz: {
      type: Function,
      default: () => {},
    },
    saveAnswer: {
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
      answer_selected: '',
      collapsed: true,
    }
  },
  watch: {
    no() {
      this.answer_selected = ''
      this.collapsed = true
    },
  },
  methods: {
    selectAnswer(answer) {
      this.answer_selected = answer
      this.saveAnswer({
        no: this.no,
        your_answer: answer,
        mp_answer: 'เห็นด้วย',
      })
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
