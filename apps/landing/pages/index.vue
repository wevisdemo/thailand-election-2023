<template>
  <div class="main-container">
    <div class="cover-section">
      <div class="container">
        <div class="logo-wrap">
          <img :src="logo" alt="wevis election 66 logo" />
        </div>
        <p class="typo-h6 head">เปิดข้อมูลที่ต้องรู้ ก่อนเปิดคูหา</p>
        <p class="typo-b4 subhead">
          รวมข้อมูลการเมืองและการเลือกตั้ง โดยประชาชนผู้มีหวังในประชาธิปไตย
        </p>
        <div class="img-wrap">
          <div id="landing-lottie" />
          <StarLabel :election_day="election_day" />
        </div>
      </div>
    </div>
    <div class="projects-section">
      <div class="container">
        <p class="typo-h5 head">
          <b> เตรียมความพร้อม ก่อนไปเลือก </b>
        </p>
        <p class="typo-b4 subhead">
          เลือกดูโปรเจกต์ของ WeVis ที่รวบรวมข้อมูล มาตอบคำถามที่คุณคาใจ
          ให้พร้อมเลือกตั้ง
        </p>
        <div class="filters-wrap">
          <div
            v-for="filter in filter_buttons"
            :key="filter"
            class="filter-btn"
            :class="{ 'active-filter-btn': active_filter === filter }"
            @click="active_filter = filter"
          >
            <p class="typo-b5">
              <b>{{ filter }}</b>
            </p>
          </div>
        </div>
        <div class="project-cards">
          <ProjectCard
            v-for="project in getProjectData"
            :key="project['Path']"
            :data="project"
            :is_coming_soon="project.ComingSoon"
          />
        </div>
      </div>
    </div>
    <div class="articles-section">
      <div class="container">
        <p class="typo-h5 head">
          <b> Bite Sized </b>
        </p>
        <p class="typo-b4 subhead">ติดตามเรื่องราวการเลือกตั้ง’66</p>
        <div class="article-cards">
          <ArticleCard
            v-for="post in lastest_three_posts"
            :key="`election-posts-${post.id}`"
            :data="post"
          />
        </div>
        <a
          href="https://wevis.info/tag/เลือกตั้ง-66"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SquareButton text="ดูบทความทั้งหมด" color="white" />
        </a>
      </div>
    </div>
    <div class="partners-section">
      <div class="container">
        <p class="typo-h5 head"><b>พวกคนมีหวัง ที่มาร่วมสมคบคิด</b></p>
        <p class="typo-b4 subhead">
          โปรเจกต์เหล่านี้จะเกิดขึ้นไม่ได้เลย ถ้าขาดกลุ่มคน(ที่ยัง)มีหวัง
          <span class="word">มาร่วม</span>ผลักดันให้เกิดงานเหล่านี้
        </p>
        <div class="logo-partners">
          <div v-for="logo in 6" :key="`logo-${logo}`" class="logo-wrap">
            <!-- <img src="" alt=""> -->
          </div>
        </div>
      </div>
    </div>
    <div class="about-section">
      <div class="container">
        <p class="typo-h5 head">
          <b>เกี่ยวกับ WeVis</b>
        </p>
        <div class="content-wrap">
          <p class="typo-b5">
            WeVis เป็นกลุ่มเทคโนโลยีภาคประชาชนที่เชื่อว่าข้อมูลเปิดและเทคโนโลยี
            สามารถทำให้พวกเรามีส่วนร่วมในการเมือง การเลือกตั้ง และประชาธิปไตยได้
            พวกเราจึงรวมตัวกันขึ้นมาเพื่อทำโปรเจกต์เหล่านี้
            หวังให้ผู้มีสิทธิเลือกตั้งทุกคนและสื่อมวลชน
            สามารถค้นหาข้อมูลได้สะดวกขึ้น
            <br /><br />
            ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
            และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
            Attribution-NonCommercial License (CC-BY-NC) โปรดให้เครดิตกับทีม
            WeVis เพื่อเป็นกำลังใจให้พวกเราสร้างสรรค์งานต่อไป
          </p>
        </div>
        <a href="https://wevis.info/" target="_blank" rel="noopener noreferrer">
          <SquareButton text="WeVis.info" color="black" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import projectMetadata from '@thailand-election-2023/metadata/dist/projects.json'
import { fetchWeVisElectionPosts } from '@thailand-election-2023/wordpress'
import { orderBy } from 'lodash'
import lottie from 'lottie-web'
import dayjs from 'dayjs'

export default {
  data() {
    return {
      election_day: '2023-05-07 08:00:00',
      logo: require('~/assets/images/wevis_election_66_logo.svg'),
      filter_buttons: [
        'ทั้งหมด',
        'เตรียมตัวเลือกตั้ง',
        'ผลงานที่ผ่านมา',
        'เครื่องมืออื่นๆ',
      ],
      active_filter: 'ทั้งหมด',
      project_data: [],
      lastest_three_posts: [],
    }
  },
  async mounted() {
    const election_day = dayjs(this.election_day)
    const current_time = dayjs(dayjs().format('YYYY-MM-DD HH:mm:s'))
    const diff_days = election_day.diff(current_time, 'day')

    const order_value = diff_days > 10 ? 'OrderLaunch' : 'OrderPre'
    this.project_data = orderBy(projectMetadata, [order_value])
    this.lastest_three_posts = await fetchWeVisElectionPosts({ limit: 3 })

    lottie.loadAnimation({
      name: 'landing-lottie',
      container: document.getElementById('landing-lottie'),
      renderer: 'svg',
      animationData: require('~/assets/lotties/landing.json'),
    })
  },
  computed: {
    getProjectData() {
      if (this.active_filter !== 'ทั้งหมด') {
        return this.project_data.filter(
          (project) => project.Tag === this.active_filter
        )
      }
      return this.project_data
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @include small-mobile {
    padding: 0 20px;
  }
}
.cover-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0 40px;
  overflow-x: hidden;
  .logo-wrap {
    width: 500px;
    @include mobile {
      width: 270px;
    }
  }
  .head {
    margin: 18.5px 0 16px;
    text-align: center;
    @include small-mobile {
      width: 200px;
    }
  }
  .subhead {
    color: var(--color-black);
    opacity: 0.6;
    text-align: center;
    @include tablet {
      width: 300px;
    }
    @include mobile {
      width: 270px;
    }
  }
  .img-wrap {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin-top: 16px;
  }
}
.projects-section,
.articles-section,
.partners-section,
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
  @include mobile {
    padding: 40px 0;
  }
  .head {
    text-align: center;
    margin-bottom: 8px;
    @include mobile {
      width: 260px;
    }
  }
  .subhead {
    text-align: center;
    opacity: 0.6;
    @include mobile {
      max-width: 308px;
    }
  }
  .project-cards,
  .article-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    flex-wrap: wrap;
    gap: 40px;
    max-width: 912px;
    @include tablet {
      gap: 24px;
    }
    @include mobile {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
.projects-section {
  background: var(--color-gray-1);
  .filters-wrap {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px;
    margin: 24px 0;
    @include mobile {
      width: 280px;
    }
    .filter-btn {
      padding: 12px 16px;
      border-radius: 24px;
      background: white;
      border: 3px solid var(--color-black);
      width: fit-content;
      transition: background 0.3s, border 0.2s;
      cursor: pointer;
      &.active-filter-btn {
        background: var(--color-black);
        color: var(--color-white);
        &:hover {
          background: var(--color-black);
          color: var(--color-white);
          border-color: var(--color-black);
        }
      }
      &:hover {
        background: var(--color-highlight-2);
        border-color: var(--color-highlight-2);
      }
    }
  }
}
.articles-section {
  .article-cards {
    margin: 24px 0;
  }
}
.partners-section {
  background: var(--color-gray-2);
  .head {
    width: 600px;
    @include mobile {
      width: 200px;
    }
  }
  .subhead {
    @include tablet {
      width: 475px;
    }
    @include mobile {
      width: 230px;
    }
  }
  .logo-partners {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 72px 192px;
    margin: 48px 0 25px;
    @include tablet {
      gap: 72px 125px;
    }
    @include mobile {
      grid-template-columns: repeat(1, 1fr);
      margin: 48px 0 40px;
    }
    .logo-wrap {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      mix-blend-mode: multiply;
      background: var(--color-gray-3);
      @include mobile {
        width: 80px;
        height: 80px;
      }
    }
  }
}
.about-section {
  background: var(--color-black);
  color: var(--color-white);
  .head {
    margin-bottom: 0;
  }
  .content-wrap {
    max-width: 592px;
    padding: 30px 0 40px;
    @include mobile {
      padding: 20px 0 25px;
    }
  }
}
</style>
