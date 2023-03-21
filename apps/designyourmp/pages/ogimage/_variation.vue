<template>
  <div>
    <!-- <div style="height: 630px; overflow: auto" class="d-">
      <div
        class="ogimage text-center position-relative"
        :id="'test-' + (i + 1)"
        v-for="(item, i) in 1"
        key="i"
      >
        <h1
          class="wv-font-kondolar header green font-weight-bold m-0"
          style="padding-top: 116px"
        >
          ส.ส. ที่อยากได้มีคุณสมบัติ <br />
          คล้ายกับ ส.ส. ในสภา
        </h1>

        <h1
          class="
            wv-font-kondolar
            count
            green
            font-weight-bold
            m-0
            position-relative
            test
          "
        >
          500 คนขึ้นไป
        </h1>

        <div class="test2 position-relative">
          <img :src="testtest" alt="" width="723" />
        </div>
      </div>
    </div>
    <hr />
    <button @click="test">IMG</button>
    <button @click="test2">Download</button>
    <div id="result"></div> -->
  </div>
</template>

<script>
import { saveAs } from "file-saver";
import html2canvas from "html2canvas";

export default {
  head() {
    return {
      meta: [
        {
          hid: "og-image",
          property: "og:image",
          content:
            this.$route.params.variation > 500
              ? require("~/assets/images/ogimage/og_501.png")
              : require("~/assets/images/ogimage/og_" +
                  this.$route.params.variation +
                  ".png"),
        },
        {
          hid: "twitter:image",
          name: "twitter:image:src",
          content:
            this.$route.params.variation > 500
              ? require("~/assets/images/ogimage/og_501.png")
              : require("~/assets/images/ogimage/og_" +
                  this.$route.params.variation +
                  ".png"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content:
            "ส.ส. ที่อยากได้มีคุณสมบัติคล้ายกับ ส.ส. ในสภา " +
            this.$route.params.variation +
            " คน",
        },
        {
          hid: "og:description",
          property: "og:description",
          content: "ร่วมออกแบบคุณสมบัติสมาชิกสภาผู้แทนราษฎร (ส.ส.)",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content:
            "ส.ส. ที่อยากได้มีคุณสมบัติคล้ายกับ ส.ส. ในสภา " +
            this.$route.params.variation +
            " คน",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "ร่วมออกแบบคุณสมบัติสมาชิกสภาผู้แทนราษฎร (ส.ส.)",
        },
      ],
    };
  },
  data() {
    return {
      img: [],
      testtest: require("~/assets/images/test.svg"),
    };
  },
  mounted() {
    // setTimeout(() => {
    //   this.test();
    // }, 1000);
    window.location.href =
      "https://wevisdemo.github.io/qualification-of-representative/";
  },
  methods: {
    test() {
      for (let i = 1; i <= 100; ++i) {
        html2canvas(document.querySelector("#test-" + i)).then((canvas) => {
          var dataURL = canvas.toDataURL("image/png");
          dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

          var img = document.createElement("img");
          img.src = dataURL;
          img.id = "og_" + (i + 400);
          document.getElementById("result").appendChild(img);
        });
      }
    },
    test2() {
      var JSZip = require("jszip");
      var zip = new JSZip();
      zip.folder("images");

      document.querySelectorAll("img").forEach((element, i) => {
        var img = zip.folder("images");
        img.file(
          element.id.replace("result-", "") + ".png",
          element.src.replace(/^data:image\/(png|jpg);base64,/, ""),
          {
            base64: true,
          }
        );
      });

      zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "og-wv-9.zip");
      });
    },
    myFunction(e) {
      e.target.src = require("~/assets/images/sample.svg");
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100px;
  height: 100px;
  background: url(http://goo.gl/vyAs27) no-repeat scroll 0 0;
}
.ogimage {
  background-image: url("@/assets/images/og_301-500.png");
  width: 1200px;
  height: 630px;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
}

.header {
  font-size: 80px;
}

.count {
  font-size: 200px;
}

.desc-1 {
  font-size: 30px;
}

.desc-2 {
  font-size: 25px;
}

.desc {
  width: fit-content;
  margin: auto;
  background: rgba($color: #000000, $alpha: 0.9);
  box-shadow: 20px 5px 40px #000, 0px 5px 40px #000, -20px -10px 40px #000,
    0 -10px 55px #000;
}

.test {
  line-height: 1.2 !important;
}

.test2 {
  bottom: 50px;
}
</style>