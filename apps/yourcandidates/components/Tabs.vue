<template>
  <div class="tabs">
    <div class="tabs-nav">
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: activeTab === index }"
          @click="activeTab = index"
        >
          {{ tab.label }}
        </li>
      </ul>
    </div>
    <div class="tabs-content">
      <slot :name="tabs[activeTab].name"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      activeTab: 0,
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: stretch;
}

.tabs-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.tabs-nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.tabs-nav li {
  font-weight: 700;
  padding: 10px;
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-width: 0px 0px 3px 0px;
    border-color: transparent transparent var(--color-black) transparent;
    border-radius: 0px;
  }
}

.tabs-nav li.active {
  &::before {
    border-width: 3px 3px 0px 3px;
    border-style: solid;
    border-color: var(--color-black);
    border-radius: 10px 10px 0px 0px;
  }
}

.tabs-content {
  flex: 1;
  border-width: 0px 3px 3px 3px;
  border-style: solid;
  border-color: var(--color-black);
}
</style>
