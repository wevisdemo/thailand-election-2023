<template>
  <div>
    <election-header />
    <a href="/theyworkforyou">
      <div class="back-btn">
        <div class="arrow">
          <img :src="arrow_left" alt="arrow" />
        </div>
        <p class="typo-b6">กลับไปหน้าแรก</p>
      </div>
    </a>

    <div class="section-about">
      <h1>เกี่ยวกับโครงการ</h1>

      <h2>เป้าหมาย</h2>
      <p>
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the
        leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>

      <h2>อาสาสมัครร่วมพัฒนา</h2>
      <h3>เขียนโปรแกรม</h3>
      <p>
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley
      </p>
      <h3>ออกแบบ</h3>
      <p>
        dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an
        unknown printer took a galley
      </p>

      <h2>ดาวน์โหลดข้อมูล</h2>
      <ul>
        <li><a href="#">data 1 (link)</a></li>
        <li><a href="#">data 2 (link)</a></li>
      </ul>

      <a
        href="https://airtable.com/shryu4errnlj1LWsM"
        target="_blank"
        rel="noopener noreferrer"
        class="feedback-btn-wrap"
      >
        <div class="feedback-btn">
          <div class="letter-icon">
            <img :src="letter" alt="" />
          </div>
          <p class="typo-b6">
            <b>Feedback</b>
          </p>
        </div>
      </a>
    </div>

    <election-bottom index-path="/theyworkforyou" />
    <election-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrow_left: require('~/assets/images/icons/arrow_left.svg'),
      letter: require('~/assets/images/icons/letter.svg'),
    }
  },
  mounted() {
    import('@thailand-election-2023/components')
  },
}
</script>

<style lang="scss" scoped>
.back-btn {
  display: flex;
  width: fit-content;
  padding: 10px;
  cursor: pointer;
  .arrow {
    width: 12px;
    margin-right: 4px;
  }
}
.feedback-btn-wrap {
  text-decoration: none;
  .feedback-btn {
    display: flex;
    align-items: center;
    padding: 8px 20px;
    border: 3px solid var(--color-black);
    border-radius: 100px;
    margin: 50px auto;
    width: fit-content;
    @include mobile {
      margin: 35px auto;
    }
    .letter-icon {
      margin-right: 10px;
    }
  }
}
</style>
