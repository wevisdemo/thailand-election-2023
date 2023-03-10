<template>
  <a
    :href="data.URL"
    target="_blank"
    rel="noopener noreferrer"
    :class="{ disable: is_coming_soon }"
  >
    <div class="project-card" :class="{ 'coming-soon-card': is_coming_soon }">
      <div class="text-wrap">
        <p class="project-name typo-h6">
          <b>{{ data.ThName }}</b>
        </p>
        <div class="en-name-and-partner">
          <p class="typo-b5">
            <b>{{ data.EnName }}</b>
          </p>
          <p class="partner typo-b7">{{ data.Partner }}</p>
        </div>
        <p v-if="!is_coming_soon" class="detail typo-b6">
          {{ data.Subtitle }}
        </p>
      </div>
      <div v-if="!is_coming_soon" class="lottie-wrap">
        <div class="lottie" :id="data.Path" />
      </div>
      <div v-else class="coming-soon-label">
        <b> Coming Soon! </b>
      </div>
    </div>
  </a>
</template>

<script>
import lottie from 'lottie-web'

export default {
  props: {
    data: {
      type: Object,
      default: {},
    },
    is_coming_soon: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    if (!this.is_coming_soon) {
      lottie.loadAnimation({
        name: this.data.Path,
        container: document.getElementById(this.data.Path),
        renderer: 'svg',
        animationData: require(`~/assets/lotties/${this.data.Path}.json`),
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.disable {
  pointer-events: none;
}
.project-card {
  position: relative;
  background: var(--color-white);
  border: 3px solid var(--color-black);
  border-radius: 20px;
  padding: 24px;
  height: 400px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    transform: rotate(3deg);
    background: var(--color-highlight-1);
    box-shadow: 4px 12px 0px var(--color-gray-2);
  }
  @include mobile {
    max-width: 320px;
  }
  &.coming-soon-card {
    background: var(--color-gray-2);
    border-color: var(--color-gray-3);
    color: var(--color-gray-3);
    pointer-events: none;
    @include mobile {
      height: 186px;
    }
  }
}
.text-wrap {
  position: relative;
  text-align: left;
  z-index: 2;
  .en-name-and-partner {
    margin: 8px 0 16px;
    .partner {
      opacity: 0.6;
    }
  }
  .detail {
    width: 160px;
  }
}
.lottie-wrap {
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 220px;
  height: 220px;
  right: 10px;
  bottom: 10px;
  z-index: 1;
}
.coming-soon-label {
  position: absolute;
  right: 24px;
  bottom: 24px;
  background: var(--color-gray-3);
  border-radius: 24px;
  padding: 6px 12px;
  color: white;
  width: fit-content;
}

.typo-h5 {
  font-size: 28px;
}
.typo-h6 {
  font-size: 24px;
}
.typo-b5 {
  font-size: 14px;
}
.typo-b6 {
  font-size: 12px;
}
.typo-b7 {
  font-size: 10px;
}
</style>
