<template>
  <div>
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 3.5C16 4 15.7443 4.65187 15.4397 4.93957C14.5 6.5 13.2519 8.35554 12.5 9C10.5 12 9.67552 12.5773 7 15.2529L3 10"
        :stroke="color"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#090909',
    },
  },
}
</script>

<style lang="scss" scoped></style>
