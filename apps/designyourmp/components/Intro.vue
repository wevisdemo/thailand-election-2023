<!-- Please remove this file from your project -->
<template>
  <div>
    <div class="position-relative overflow-hidden">
      <div class="lottie-box">
        <lottie-animation
          ref="anim"
          :animationData="require('@/assets/lottie/desktop_cover.json')"
          :loop="true"
          :autoPlay="true"
        />
      </div>
      <div class="content-box">
        <div class="min-h-screen text-center">
          <h1 class="intro-text kondolar">
            "ผู้แทน" แบบไหน<br />ที่คุณอยากเห็น?
          </h1>
          <div class="text-white desc">
            <p class="header-8 font-weight-bold m-0">
              ร่วมออกแบบคุณสมบัติสมาชิกสภาผู้แทนราษฎร (ส.ส.)
            </p>
            <p class="header-8 m-0">"จากประชาชนผู้มีสิทธิเลือกตั้ง"</p>
          </div>

          <div class="desc desc-box" id="box1">
            <p class="header-8 m-0 text-white">
              พออายุ 18 ปี ทุกคนในประเทศนี้ก็จะมีสิทธิเลือกตั้ง
              ซึ่งตำแหน่งสำคัญที่เป็น “ผู้แทน”
              อำนาจของประชาชนและมีผลต่อการตัดสินใจกฎเกณฑ์สำคัญต่างๆ
              ที่กระทบกับชีวิตคุณ คือ
              <span class="green font-weight-bold"
                >สมาชิกสภาผู้แทนราษฎร (ส.ส.)</span
              >
            </p>
          </div>

          <div class="desc desc-box" id="box2">
            <p class="header-8 m-0 text-white">
              หลายคนอาจจะรู้สึกว่า.. บางครั้งเวลาไปเลือกตั้ง
              ผู้สมัครที่มีอาจจะยังไม่มีคุณสมบัติแบบที่คุณชอบ
              เลยจำใจต้องเลือกจากเพียงตัวเลือกที่มีอยู่
            </p>
          </div>

          <div class="desc desc-box" id="box3">
            <p class="header-6 font-weight-bold green kondolar">
              แต่ในเมื่อ ส.ส. เป็นผู้แทนของคุณ คุณควรต้องมีสิทธิบอกได้ว่า
              <span>ผู้แทนที่คุณอยากได้เป็นแบบไหน</span>
            </p>
            <p class="header-8 m-0 text-white">
              ถึงเวลาแล้ว.. ที่ผู้มีสิทธิเลือกตั้ง (voter)
              ทุกคนจะมาช่วยกันออกแบบคุณสมบัติ ของ ส.ส. ที่คุณอยากได้
            </p>
          </div>
        </div>
      </div>
      <div class="h-100vh fade-bg"></div>
    </div>
    <div
      class="
        min-h-screen
        choose-wrapper
        text-center
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
      id="choose-wrapper"
    >
      <div>
        <h5 class="header-5 font-weight-bold green">
          การตัดสินใจเลือก ส.ส. อาจมาจากหลากหลายปัจจัย
          แต่คุณอยากชวนคุณคิดถึงสิ่งเหล่านี้ดู
        </h5>
        <p class="header-11 text-white">(กดเลือกคุณสมบัติที่คุณอยากออกแบบ)</p>
      </div>
      <div class="my-5">
        <div class="d-flex justify-content-center flex-column flex-lg-row">
          <div>
            <div
              class="circle"
              id="choice-1"
              @click="showQuiz(1)"
              :class="{ faded_choose: quiz_choice != 0 && quiz_choice != 1 && quiz_choice != 3 }"
            >
              <img :src="choice_1" alt="choice_1" />
              <div class="content">
                <h5 class="header-5 font-weight-bold">คุณสมบัติพื้นฐาน</h5>
                <p class="header-11">
                  ได้แก่ อายุ ระดับการศึกษา สาขาที่ศึกษา อาชีพเดิม
                  และเครือข่ายทางการเมือง
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              class="circle"
              id="choice-2"
              @click="showQuiz(2)"
              :class="{ faded_choose: quiz_choice != 0 && quiz_choice != 2 && quiz_choice != 3}"
            >
              <img :src="choice_2" alt="choice_2" />
              <div class="content">
                <h5 class="header-5 font-weight-bold">ทักษะและลักษณะนิสัย</h5>
                <p class="header-11">
                  เป็นคุณสมบัติที่ถ้ามี จะช่วยส่งเสริมการทำงาน
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="see-ans-btn"
          @click="showQuiz(3)"
          :class="{ faded_choose: quiz_choice != 0 && quiz_choice != 3 }"
        >
          ข้ามไปดูผลลัพธ์ของคนอื่นๆ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import LottieAnimation from "lottie-web-vue";

export default {
  name: "NuxtTutorial",
  components: {
    LottieAnimation,
  },
  data() {
    return {
      choice_1: require("~/assets/images/choice_1.svg"),
      choice_2: require("~/assets/images/choice_2.svg"),
      go_down: require("~/assets/images/go_down.svg"),
      quiz_choice: 0,
    };
  },
  methods: {
    showQuiz(choice) {
      this.quiz_choice = choice;
      this.$store.commit("setSelectedQuiz", choice);

      if (choice == 1) {
        this.$store.commit("setShowQuiz1", true);
        this.$store.commit("setShowQuiz2", false);
      } else {
        this.$store.commit("setShowQuiz2", true);
        this.$store.commit("setShowQuiz1", false);
      }

      if (choice != 3)
        setTimeout(() => {
          document.getElementById("quiz-" + choice).scrollIntoView();
        }, 500);
      else
        setTimeout(() => {
          document.getElementById("quiz1-result").scrollIntoView();
        }, 500);
    },
  },
};
</script>


<style lang="scss" scoped>
.lottie-box,
.choose-wrapper {
  background: #000;
}

.lottie-box {
  @media #{$mq-mini-mobile} {
    min-height: 200vh;
    width: 250vw;
  }
}

.choose-wrapper {
  padding: 26px;

  h5 {
    max-width: 500px;
    margin: auto;
  }

  .circle {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    margin: 0 25px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: 0.3s;

    @media #{$mq-lg} {
      margin-bottom: 20px;
    }

    @media #{$mq-mini-mobile} {
      width: 270px;
      height: 270px;
      margin-bottom: 10px;
    }

    img {
      width: 90%;
      opacity: 0.5;
    }

    .content {
      position: absolute;
      width: 50%;
      height: 50%;
      bottom: 0;
      margin: auto;
      top: 0;
    }
  }
}

#choice-1:hover {
  background: rgba($color: #72c5ff, $alpha: 0.9);

  img {
    opacity: 1;
  }
}

#choice-2:hover {
  background: rgba($color: #89e67b, $alpha: 0.9);

  img {
    opacity: 1;
  }
}

.intro-text {
  color: #defe6c;
  text-shadow: 2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000,
    -1px -1px #000, 1px -1px #000, -1px 1px #000;
  font-weight: 900;
  font-size: 149px;
  line-height: 117%;
  margin-top: 7%;

  @media #{$mq-lg} {
    font-size: 59px;
  }
}

.content-box {
  position: absolute;
  top: 52px;
  width: 100%;
  z-index: 1;

  #box1 {
    margin-top: 15%;
  }

  #box2 {
    margin-top: 30%;

    @media #{$mq-lg} {
      margin-top: 15%;
    }
  }

  #box3 {
    margin-top: 20%;
  }
}

.desc {
  background: rgba($color: #000000, $alpha: 0.9);
  box-shadow: 0px 0px 30px 30px rgba(0, 0, 0, 0.9);
  width: fit-content;
  padding: 10px;
  margin: auto;
  border-radius: 25px;
}

.fade-bg {
  position: absolute;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
}

.desc-box {
  max-width: 500px;
  margin: auto;

  @media #{$mq-mini-mobile} {
    max-width: 300px;
  }
}

.see-ans-btn {
  border: 1px solid #d0ddd4;
  border-radius: 5px;
  background: #000000;
  -webkit-appearance: none;
  color: #d0ddd4;
  padding: 4px 10px;
  transition: 0.3s;
}

.see-ans-btn:hover {
  background: #fff;
  color: #000;
}

.go_down {
  position: absolute;
  bottom: 60px;
  width: 100%;
}

span {
  white-space: nowrap;
}
</style>