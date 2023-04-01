<template>
  <div v-show="open" class="popup flex flex-col justify-center items-center">
    <div class="party-list-container w-4/5 h-4/5 max-w-650 overflow-y-scroll scrollbar-hide ">
      <div class="w-full relative">
        <slot name="close"></slot>
      </div>
      <div class="flex flex-col items-start pt-4">
        <b>บัญชีรายชื่อพรรค{{ nameParty }}</b>
      </div>
      <div class="col-name">
        <div> ลำดับ </div>
        <div> ชื่อ </div>
      </div>
      <div v-for="(item, index) in partyList" :key="index" class="party-list-box" >
        <div> {{ index }}</div>
        <div> {{ item.Name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    open: {
      type: Boolean,
      required: true
    },
    partyList: [],
    nameParty: ''
  },
}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 41;
}
.party-list-container{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px 20px;
  gap: 5px;
  isolation: isolate;
  background: var(--color-white);
  border-radius: 10px;
    
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.party-list-box {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
  border-bottom: 1px solid var(--color-gray-2);
  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;
  z-index: 3;
}

.col-name{
  color: var(--color-gray-3); 
  font-weight: 700;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  z-index: 1;
}
</style>