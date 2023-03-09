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

<style>
.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 40px;
  gap: 5px;
  text-align: center;
}

.search-container > .search-box {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 10px 15px;
  gap: 10px;

  width: 100%;
  background: var(--color-white);
  border: 3px solid var(--color-black);
  border-radius: 50px;

  flex: none;
  order: 1;
  flex-grow: 0;
}

.search-box > input {
  flex: none;
  color: var(--color-black);
  flex-grow: 1;
}
.search-box > input:placeholder-shown {
  opacity: 0.5;
}
</style>