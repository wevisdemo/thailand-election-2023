<template>
  <div
    v-show="open"
    class="popup flex flex-col justify-center items-center"
    @click.self="closePopup"
  >
    <div
      style="max-width: 450px"
      class="party-list-container w-4/5 h-4/5 overflow-y-scroll scrollbar"
    >
      <div class="w-full relative">
        <slot name="close"></slot>
      </div>
      <div class="flex items-start pt-4">
        <b>บัญชีรายชื่อพรรค{{ nameParty }}</b>
      </div>
      <div>
        <p style="display: inline-flex; background-color: var(--color-highlight-1); border-radius: 5px; padding: 0px 5px;">ไฮไลท์</p>
        &nbsp;= เคยมีตำแหน่งในสภาสมัยที่แล้ว
      </div>
      <table class="w-full">
        <tr class="col-name">
          <th style="table-layout: fixed; width: 1%;">ลำดับ</th>
          <th style="padding: 5px 0px 5px 14px">ชื่อ</th>
        </tr>
        <tr
          v-for="(item, index) in partyList"
          :key="index"
          class="party-list-box"
          :class="item.PastMP? 'bg-[color:var(--color-highlight-1)]':''"
          @click="clickItem(item)"
        >
          <td style="padding: 5px 0px 5px 5px;">{{ index+1 }}</td>
          <td style="padding: 5px 0px 5px 14px">{{ item.Name }}</td>
          <td>
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.21061 6.80589C3.29779 5.35632 4.611 4.10436 5.9807 2.91998C6.04948 2.8605 7.69138 1.38616 7.63699 1.31002C7.56381 1.20757 6.74274 1.25395 6.69592 1.2521C5.8436 1.21859 4.96897 0.813484 4.11591 0.806034C3.27541 0.798693 2.44614 0.832917 1.60831 0.855259C1.53779 0.85714 1.26643 0.919996 1.4809 0.90738C2.51756 0.8464 3.61071 0.806034 4.64788 0.806034C5.14788 0.806034 6.04594 0.807319 6.69592 0.7351C7.25299 0.600634 8.1166 0.636099 8.67361 0.505036C8.91922 0.447247 8.69063 0.903584 8.67362 1.01466C8.4982 2.16005 8.31618 3.2541 8.03079 4.37936C7.80477 5.27055 7.52696 6.09503 7.52696 7.01437" stroke="#9A948C" stroke-linecap="round"/>
            </svg>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
    partyList: [],
    nameParty: '',
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    },
    clickItem(item){
      const path = item.PastMP?'https://theyworkforus.wevis.info/people/' + item.Name.replaceAll(' ', '-') :'https://www.google.com/search?q=' + item.Name
      window.open(path, '_blank');
    }
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
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 41;
}
.party-list-container {
  overflow-y: overlay;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px 20px;
  gap: 5px;
  isolation: isolate;
  background: var(--color-white);
  border-radius: 10px;
}

.party-list-box {
  box-sizing: border-box;
  text-align: start;
  border-bottom: 1px solid var(--color-gray-2);
  cursor: pointer;
}
.scrollbar::-webkit-scrollbar {
  width: 5px;
}

.scrollbar::-webkit-scrollbar-button {
  height: 5px;
}

.scrollbar::-webkit-scrollbar-track {
  position: absolute;
  background: transparent;
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: var(--color-gray-2);
  border-radius: 10px;
}

.col-name {
  color: var(--color-gray-3);
  font-weight: 700;
  text-align: start;
}
</style>
