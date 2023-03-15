<template>
  <div class="quiz-container">
    <div class="header">
      <p class="typo-b7 no">{{ no }}/10</p>
      <p class="typo-h6 title">
        <b>{{ data.Title }}</b>
      </p>
      <p class="typo-b6">ชื่อเต็ม : {{ data.LegalTitle }}</p>
    </div>
    <div class="detail-box">
      <p class="typo-b7"><b>รายละเอียด</b></p>
      <p class="detail typo-b5">
        {{ data.DescriptionTh }}
      </p>
      <p class="typo-b7 view-full">+ อ่านเพิ่มเติม</p>
    </div>
    <div class="vote-label">
      <p class="typo-b4">
        <b>ถ้าเป็นคุณ จะโหวต..</b>
      </p>
    </div>
    <div class="choices-wrap">
      <AnswerChoice text="เห็นด้วย" choice_id="approve" />
      <AnswerChoice text="ไม่เห็นด้วย" choice_id="disprove" />
      <AnswerChoice text="งดออกเสียง" choice_id="abstained" />
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
  },
  data() {
    return {
      arrow: require('~/assets/images/icons/arrow.svg'),
    }
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
  .no {
    margin-bottom: 5px;
  }
  .title {
    margin-bottom: 3px;
  }
}
.detail-box {
  background: var(--color-gray-1);
  padding: 10px;
  margin: 20px 0;
  text-align: left;
  .detail {
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
