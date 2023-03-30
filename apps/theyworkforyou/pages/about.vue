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

      <div class="btn-container">
        <div v-for="button in buttons" :key="button.text" class="btn-wrap">
          <a :href="button.link" target="_blank" rel="noopener noreferrer">
            <div class="btn">
              <div class="icon">
                <img :src="button.icon" alt="" />
              </div>
              <p class="typo-b6">
                <b>{{ button.text }}</b>
              </p>
            </div>
          </a>
        </div>
      </div>
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
      buttons: [
        {
          text: 'ดาวน์โหลดข้อมูล',
          icon: require('~/assets/images/icons/download.svg'),
          link: 'https://sheets.wevis.info/dashboard/#/base/5e439277-692a-43d3-9b17-7d6c683835f6',
        },
        {
          text: 'Feedback',
          icon: require('~/assets/images/icons/letter.svg'),
          link: 'https://airtable.com/shryu4errnlj1LWsM',
        },
        {
          text: 'View on Github',
          icon: require('~/assets/images/icons/github.svg'),
          link: 'https://github.com/wevisdemo/thailand-election-2023',
        },
      ],
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
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  @include mobile {
    flex-direction: column;
  }
  .btn-wrap {
    a {
      text-decoration: none;
    }
    &:nth-child(2) {
      margin: 0 20px;
      @include mobile {
        margin: 10px 0;
      }
    }
    .btn {
      width: 180px;
      height: 42px;
      flex: none;
      display: flex;
      align-items: center;
      border: 3px solid var(--color-black);
      border-radius: 100px;
      padding: 0 20px;
      &:hover {
        border-color: var(--color-highlight-2);
      }
      .typo-b6 {
        white-space: nowrap;
      }
      .icon {
        width: 20px;
        margin-right: 8px;
      }
    }
  }
}
</style>
