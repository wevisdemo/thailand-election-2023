<template>
  <div>
    <div
      class="
        min-h-screen
        text-center
        d-flex
        justify-content-center
        align-items-center
        px-3
        py-5
      "
    >
      <div>
        <h2 class="header-2 font-weight-bold kondolar">
          ทำไมถึงชวนมาออกแบบ ส.ส.?
        </h2>
        <div class="part3_illus_01">
          <lottie-animation
            ref="anim"
            :animationData="require('@/assets/lottie/part3_illus_01.json')"
            :loop="true"
            :autoPlay="true"
          />

          <p class="header-7 my-3 kondolar">
            การออกแบบ ส.ส. ที่คุณอยากได้
            เป็นการเปิดโอกาสให้ประชาชนผู้มีสิทธิเลือกตั้งทุกคนทบทวนการตัดสินใจของตัวเอง
            รวมทั้งแลกเปลี่ยนความคิดระหว่างกันว่า
            <b> "ผู้แทนราษฎร" ที่คุณอยากได้นั้นเป็นแบบไหน</b>
          </p>
          <p class="header-10">
            และยังช่วยให้ผู้ที่คิดจะเสนอตัวมาเป็น ส.ส. ได้เรียนรู้ความต้องการ<br />
            ของประชาชนผู้มีสิทธิเลือกตั้ง ในการตัดสินใจเลือกผู้แทนในอนาคต
          </p>
        </div>
      </div>
    </div>
    <div class="min-h-screen text-center">
      <div class="ending-wrapper">
        <h5 class="header-5 font-weight-bold kondolar">
          หลังจากออกแบบแล้ว<br />
          คุณยังทำอะไรได้อีก?
        </h5>

        <b-row class="my-5 mx-0">
          <b-col lg="6" class="order-1 order-lg-0">
            <lottie-animation
              ref="anim"
              :animationData="require('@/assets/lottie/part3_illus_02.json')"
              :loop="true"
              :autoPlay="true"
          /></b-col>
          <b-col lg="6" class="order-0 order-lg-1">
            <div class="circle bg-neon">
              <h6 class="header-6 font-weight-bold m-0">
                ใช้อำนาจในมือที่คุณมีอย่าง “คะแนนเสียง” ของประชาชน
                ผู้มีสิทธิเลือกตั้ง เลือก ส.ส. ที่ต้องการเข้าไปทำหน้าที่
                "ผู้แทนราษฎร"
              </h6>
            </div>
          </b-col>
        </b-row>

        <b-row class="my-5 mx-0">
          <b-col lg="6">
            <div class="circle bg-neon">
              <div>
                <h6 class="header-8 m-0">
                  <b>
                    ติดตามและตรวจสอบคุณสมบัติของ ส.ส.
                    ที่เข้ามาทำงานในสภาอย่างสม่ำเสมอ</b
                  >
                  ผ่านข่าวสาร และการลงมติในกฎหมายต่างๆ
                  จะได้ตัดสินใจเลือกในครั้งต่อไปได้ถูก
                </h6>

                <p class="header-11 mb-0 mt-4">
                  สามารถตรวจลงมติของ ส.ส. <br />
                  ได้ที่
                  <a
                    href="https://theyworkforus.wevis.info/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >WeVis - They Work For Us</a
                  >
                </p>
              </div>
            </div>
          </b-col>
          <b-col
            lg="6"
            class="d-flex justify-content-center align-items-center"
          >
            <div class="prayut">
              <lottie-animation
                ref="anim"
                :animationData="require('@/assets/lottie/part3_illus_03.json')"
                :loop="true"
                :autoPlay="true"
              /></div
          ></b-col>
        </b-row>
      </div>
    </div>
    <div class="min-h-screen text-center bg-neon sharing">
      <div class="content">
        <p class="header-8">
          เราอาจคิดว่าตัวเราไม่สามารถเปลี่ยนแปลงอะไรได้
          แต่ความจริงเรามีอำนาจในมือที่สำคัญ คือ
          <b>“คะแนนเสียง”</b> ของประชาชนผู้มีสิทธิเลือกตั้งทุกคน
        </p>

        <lottie-animation
          ref="anim"
          :animationData="require('@/assets/lottie/part3_illus_04.json')"
          :loop="true"
          :autoPlay="true"
        />

        <p class="header-8 mt-3">
          <b>“ผู้แทน”</b>
          แบบไหนที่คุณอยากเห็น ?
        </p>
        <h5 class="header-5 font-weight-bold kondolar">
          ในการเลือกตั้งครั้งถัดไป
          อย่าลืมใช้คะแนนเสียงของคุณเพื่อเลือกคนที่คุณต้องการ!
        </h5>

        <hr class="my-5" />

        <p class="header-8 mt-3">
          พร้อมแชร์ชวนเพื่อน มาออกแบบ"ผู้แทน" แบบที่อยากเห็นกัน
        </p>
        <p class="header-7 font-weight-bold mt-3">
          เพื่อนจะออกแบบเหมือนคุณหรือต่าง?
        </p>
        <div class="share-box text-center">
          <div class="d-flex justify-content-center align-items-center">
            <p class="header-11 m-0">Share</p>

            <ShareNetwork
              network="facebook"
              title=""
              url="https://wevisdemo.github.io/qualification-of-representative/"
              class="share-btn pointer text-1 mx-2"
            >
              <img :src="facebook" alt="facebook" />
            </ShareNetwork>

            <ShareNetwork
              network="twitter"
              title=""
              url="https://wevisdemo.github.io/qualification-of-representative/"
              class="share-btn pointer text-1 mx-2"
            >
              <img :src="twitter" alt="twitter" />
            </ShareNetwork>
            <ShareNetwork
              network="line"
              title=""
              url="https://wevisdemo.github.io/qualification-of-representative/"
              class="share-btn pointer text-1 mx-2"
            >
              <img :src="line" alt="line" />
            </ShareNetwork>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LottieAnimation from "lottie-web-vue";

export default {
  name: "Ending",
  components: {
    LottieAnimation,
  },
  data() {
    return {
      choice_1: require("~/assets/images/choice_1.svg"),
      choice_2: require("~/assets/images/choice_2.svg"),
      go_down: require("~/assets/images/go_down.svg"),
      facebook: require("~/assets/images/facebook.svg"),
      line: require("~/assets/images/line.svg"),
      twitter: require("~/assets/images/twitter.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.part3_illus_01 {
  max-width: 600px;
  margin: auto;
}

.ending-wrapper {
  max-width: 1000px;
  margin: auto;
}

hr {
  max-width: 555px;
  border-top: 1px solid #000000;
}

.sharing {
  padding: 100px 10px;

  .content {
    max-width: 750px;
    margin: auto;
  }
}

.circle {
  border-radius: 50%;
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  padding: 50px;
  margin: auto;

  @media #{$mq-mini-mobile} {
    width: 300px;
    height: 300px;
    padding: 25px;
  }
}

.prayut {
  transform: rotate(-3deg);
}
</style>