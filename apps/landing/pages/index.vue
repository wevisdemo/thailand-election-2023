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
          <div class="star-label">
            <img :src="star_label" alt="star label" />
            <div class="countdown-numbers-wrap">
              <p class="typo-b7"><b>เหลืออีก</b></p>
              <p class="number">000</p>
              <p class="typo-b6"><b>วัน</b></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="projects-section">
      <div class="container">
        <p class="typo-h5 head">
          <b> เตรียมความพร้อม ก่อนไปเลือก </b>
        </p>
        <p class="typo-b4 subhead">
          เลือกดูโปรเจ็คของ WeVis ที่รวบรวมข้อมูล มาตอบคำถามที่คุณคาใจ
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
            v-for="project in project_data"
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
          <div class="view-all-articles-btn">
            <p class="typo-b4"><b>ดูบทความทั้งหมด</b></p>
          </div>
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

export default {
  data() {
    return {
      logo: require('~/assets/images/wevis_election_66_logo.svg'),
      star_label: require('~/assets/images/star_label.svg'),
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
    this.project_data = orderBy(projectMetadata, ['OrderLanuch'])
    this.lastest_three_posts = await fetchWeVisElectionPosts({ limit: 3 })

    lottie.loadAnimation({
      name: 'landing-lottie',
      container: document.getElementById('landing-lottie'),
      renderer: 'svg',
      animationData: require('~/assets/lotties/landing.json'),
    })
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
    .star-label {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 128px;
      transform: rotate(15deg) translate(50%, -50%);
      @include mobile {
        transform: rotate(15deg) translate(0%, -20%);
      }
      .countdown-numbers-wrap {
        position: absolute;
        top: calc(50% + 3px);
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        .number {
          font-family: 'Kondolar Thai';
          font-size: 44px;
          font-weight: 700;
          line-height: 1;
          transform: translateY(3px);
        }
      }
    }
  }
}
.projects-section,
.articles-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 0;
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
    max-width: 920px;
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
      cursor: pointer;
      &.active-filter-btn {
        background: var(--color-black);
        color: var(--color-white);
      }
    }
  }
}
.articles-section {
  .article-cards {
    margin: 24px 0;
  }
  .view-all-articles-btn {
    border: 3px solid var(--color-black);
    border-radius: 10px;
    padding: 12px 20px;
    cursor: pointer;
  }
}
</style>
