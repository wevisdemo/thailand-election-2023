<template>
  <div>
    <election-header />
    <div class="main-container">
      <div class="cover-section">
        <div class="header-text">
          <h6 class="typo-h7">Look Up Your Candidates</h6>
          <h2 class="typo-h2">เลือกตั้งรอบนี้มีอะไรให้เลือกบ้าง?</h2>
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
      <election-bottom></election-bottom>
    </div>
    <election-footer></election-footer>
  </div>
</template>

<script>
import {
  ElectionHeader,
  ElectionBottom,
  ElectionFooter,
} from '@thailand-election-2023/components'
import lottie from 'lottie-web'

export default {
  name: 'IndexPage',
  data() {
    return {
      heroMedia: require('~/assets/images/candidate-look-up.png'),
    }
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
