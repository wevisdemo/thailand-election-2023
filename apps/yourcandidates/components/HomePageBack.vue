<template>
  <div style="display: flex;">
      <nuxt-link to="/" class="button">
        <IconsArrow />
        <span class="detail" target="_blank"> กลับไปหน้าค้นหา </span>
      </nuxt-link>
    </div>
</template>

<style scoped>
.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  gap: 4px;
  flex: none;
  order: 1;
  flex-grow: 0;
}

.button > .detail {
  flex: none;
  order: 1;
  flex-grow: 0;
}
</style>