<template>
  <div class="main-container">
    <div class="cover-section">
      <div class="header-text">
        <h6 class="typo-h7">Look Up Your Candidates</h6>
        <h2 class="typo-h2">เลือกตั้งรอบนี้มีอะไรให้เลือกบ้าง?</h2>
      </div>
      <div class="image">
        <img :src="heroMedia" alt="a person look into a hole" />
      </div>
    </div>
    <div class="search">
      <DistrictSearch></DistrictSearch>
    </div>
    <div>
      <VoteInstruction />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      heroMedia: require('~/assets/images/candidate-look-up.png'),
    }
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

.cover-section > .image > img {
  margin: auto;
}
</style>
