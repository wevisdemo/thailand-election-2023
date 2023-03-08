<template>
  <div class="search-container">
    <p class="typo-b4">
      <b>ค้นหารายชื่อผู้สมัคร ส.ส. และพรรคการเมืองในเขต/อำเภอบ้านคุณ</b>
    </p>
    <div class="search-box">
      <input
        class="typo-b3"
        type="text"
        name="query"
        id="district-search"
        placeholder="พิมพ์ชื่อเขต/อำเภอบ้านคุณ"
      />
      <IconsSearch></IconsSearch>
    </div>
  </div>
</template>

<style scoped>
.search-container {
  padding: 20px 0px 40px;
  gap: 5px;
  text-align: center;
}

.search-box {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 10px 15px;
  gap: 10px;
  border: 3px solid #090909;
  border-radius: 50px;
}
</style>