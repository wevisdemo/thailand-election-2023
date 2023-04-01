<template>
  <div class="search-container">
    <div class="search-box">
      <input
        class="typo-b3"
        type="text"
        name="query"
        v-model.trim="queryData"
        :placeholder="placeholder"
      />
      <IconsSearch />
    </div>
  </div>
</template>

<script >
export default {
  props: {
    query: String,
    placeholder: String,
  },
  data() {
    return {
      queryData: this.query,
    }
  },
}
</script>