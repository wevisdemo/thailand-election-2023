<template>
  <div>
    <election-header />
    <div class="main-container">
      <div class="cover-section">
        <div class="header-text">
          <h6 class="typo-h7">Look Up Your Candidates</h6>
          <h2 class="typo-h2"><b>เลือกตั้งรอบนี้มีอะไรให้เลือกบ้าง?</b></h2>
        </div>
        <div class="hero-image">
          <div class="lottie" id="hero-media" />
        </div>
      </div>
      <div class="search">
        <DistrictSearch></DistrictSearch>
      </div>
      <div>
        <VoteInstruction />
      </div>
      <election-bottom
        index-path="/yourcandidates"
        about-path="/yourcandidates/about"
      ></election-bottom>
    </div>
    <election-footer></election-footer>
    <election-cookie></election-cookie>
  </div>
</template>

<script>
import {
  ElectionHeader,
  ElectionBottom,
  ElectionFooter,
  ElectionCookie,
} from '@thailand-election-2023/components'
import lottie from 'lottie-web'

export default {
  name: 'IndexPage',
  data() {
    return {}
  },
  mounted() {
    lottie.loadAnimation({
      name: 'Hero Media',
      container: document.getElementById('hero-media'),
      renderer: 'svg',
      animationData: require(`~/assets/images/candidate.json`),
    })
  },
  components: {
    ElectionHeader,
    ElectionBottom,
    ElectionFooter,
    ElectionCookie,
  },
}
</script>

<style>
.cover-section {
  padding: 40px 0px 20px;
}

.cover-section .header-text {
  text-align: center;
}

.cover-section > .hero-image {
  margin: auto;
  width: 288px;
  height: 150px;
}
</style>
