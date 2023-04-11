<template>
  <div v-show="open" class="popup flex flex-col justify-center items-center" @click.self="closePopup">
    <div style="max-width: 450px;" class="party-list-container w-4/5 h-4/5 overflow-y-scroll scrollbar-hide ">
      <div class="w-full relative">
        <slot name="close"></slot>
      </div>
      <div class="flex flex-col items-start pt-4">
        <b>บัญชีรายชื่อพรรค{{ nameParty }}</b>
      </div>
      <table class="w-full">
        <tr class="col-name">
          <th style="table-layout: fixed; width: 1%;"> ลำดับ </th>
          <th style="padding-left: 14px;"> ชื่อ </th>
        </tr>
        <tr v-for="(item, index) in partyList" :key="index" class="party-list-box">
          <td> {{ index }} </td>
          <td style="padding-left: 14px;"> {{ item.Name }} </td>
        </tr>
      </table>
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
  methods: {
    closePopup() {
      this.$emit("closePopup")
    }
  }
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
  text-align: start;
  border-bottom: 1px solid var(--color-gray-2);
}

.col-name{
  color: var(--color-gray-3); 
  font-weight: 700;
  text-align: start;
}
</style>