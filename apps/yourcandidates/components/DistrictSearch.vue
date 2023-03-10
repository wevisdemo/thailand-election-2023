<template>
  <div class="search-section">
    <p class="typo-b4">
      <b>ค้นหารายชื่อผู้สมัคร ส.ส. และพรรคการเมืองในเขต/อำเภอบ้านคุณ</b>
    </p>
    <div class="search-container">
      <div class="search-box">
        <input
          class="typo-b3"
          type="text"
          name="query"
          id="district-search"
          v-model="query"
          placeholder="พิมพ์ชื่อเขต/อำเภอบ้านคุณ"
        />
        <IconsSearch />
        <div class="query-result-container">
          <ul v-html="queryResultListItemHtml"></ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      query: 'test',
      amphoes: [
        { id: 0, amphoe: 'เมืองสมุทรปราการ', province: 'สมุทรปราการ' },
        { id: 1, amphoe: 'เมืองสมุทรปราการ', province: 'สมุทรปราการ' },
        { id: 2, amphoe: 'เมืองสมุทรปราการ', province: 'สมุทรปราการ' },
        { id: 3, amphoe: 'เมืองสมุทรปราการ', province: 'สมุทรปราการ' },
        { id: 4, amphoe: 'เมืองสมุทรปราการ', province: 'สมุทรปราการ' },
        { id: 5, amphoe: 'เมืองสมุทรปราการ', province: 'สมุทรปราการ' },
      ],
    }
  },
  computed: {
    queryResultListItemHtml() {
      if (this.query.trim().length == 0) {
        return '<li>No match</li>'
      }
      const out = this.query.split(/\s/g)
      return ''.concat(
        ...out.map((q) =>
          q.trim().length == 0 ? '' : "<li class='typo-b4'>" + q + '</li>'
        )
      )
    },
  },
}
</script>
<style>
.search-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 40px;
  gap: 5px;
  text-align: center;
}

.search-container {
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 100%;
}

.search-container > .search-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 15px;
  gap: 10px;

  width: 100%;
  background: var(--color-white);
  border: 3px solid var(--color-black);
  border-radius: 50px;
}

.search-container > .search-box:focus-within {
  border: 3px solid var(--color-highlight-2);
}

.search-container > .search-box > input {
  flex: none;
  color: var(--color-black);
  flex-grow: 1;
}

.search-container > .search-box > input:placeholder-shown {
  opacity: 0.5;
}

.search-container .search-box input:focus {
  outline: none;
}

.search-container .search-box input:focus ~ .query-result-container {
  display: block;
}

.query-result-container {
  position: absolute;
  display: none;
  width: 100%;
  top: 100%;
  left: 0px;
  margin-top: 12px;
  overflow-y: scroll;
  background: var(--color-highlight-1);
  padding: 15px;
  border: 3px solid var(--color-black);
  border-radius: 10px;
}

.query-result-container ul li:hover {
  background: var(--color-highlight-2);
  border-radius: 5px;
}

.query-result-container ul li {
  border-bottom: 1px solid var(--color-highlight-2);
  padding: 5px;
}
</style>