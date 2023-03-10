<template>
  <div class="intruction-container">
    <div class="header">
      <IconsInformation />
      <p class="typo-b4"><b>รอบนี้มีบัตร 2 ใบนะ รู้ยัง?</b></p>
    </div>
    <div class="body">
      <p>เมื่อเข้าคูหา ประชาชนจะได้รับบัตรเลือกตั้งสองใบ ที่มีสีที่ต่างกัน</p>
      <div class="ballot-type-container">
        <div>
          <div class="img-80-80"></div>
          <p>
            <b>บัตรใบแรก</b> เราจะต้องเลือกผู้สมัคร ส.ส. เขต 1
            คนให้เป็นผู้แทนเขตเลือกตั้งของตนเอง
          </p>
        </div>
        <span class="vline"></span>
        <div>
          <div class="img-80-80"></div>
          <p>
            <b>บัตรใบที่สอง</b> เราจะต้องเลือกพรรคการเมือง
            โดยคะแนนที่แต่ละพรรคได้รับ จะนำไปถูกคิดคำนวณเพื่อจัดสรรที่นั่ง ส.ส.
            บัญชีรายชื่อตามสัดส่วนต่อไป
          </p>
        </div>
      </div>
      <div class="ballot-mark-example-container">
        <div class="ballot-example-container">
          <BallotExample isGood="true" />
          <BallotExample isGood="false" />
        </div>
        <p>
          บัตรทั้งสองใบ ต้องเลือกผ่านการทำ<b>เครื่องหมายกากบาทเท่านั้น</b>
          หากพบเครื่องหมายอื่นจะถือว่าเป็นบัตรเสียโดยทันที
        </p>
      </div>
      <p>
        <b>อ่านเพิ่ม</b>
        <a href="https://ilaw.or.th/node/6294" target="_blank"
          >https://ilaw.or.th/node/6294</a
        >
      </p>
    </div>
  </div>
</template>

<style>
.intruction-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  background: var(--color-gray-1);
  border: 1px solid var(--color-gray-2);
  border-radius: 10px;
  text-align: center;
}

.intruction-container > .body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 10px;
}

.intruction-container > .body > .ballot-type-container > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 10px;
}

.ballot-mark-example-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.intruction-container > .body > .ballot-type-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.intruction-container > .body > .ballot-type-container > .vline {
  display: none;
}

.intruction-container
  > .body
  > .ballot-mark-example-container
  > .ballot-example-container {
  order: 1;
}

.intruction-container > .body > .ballot-mark-example-container > p {
  order: 2;
}

@media (min-width: 560px) {
  .intruction-container > .body > .ballot-type-container {
    flex-direction: row;
    gap: 20px;
  }

  .intruction-container > .body > .ballot-type-container > .vline {
    border: 1px dashed var(--color-gray-3);
    display: block;
  }

  .intruction-container > .body > .ballot-mark-example-container > p {
    order: 1;
  }

  .intruction-container
    > .body
    > .ballot-mark-example-container
    > .ballot-example-container {
    order: 2;
  }
}

.intruction-container > .header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 5px;
}
.img-80-80 {
  width: 80px;
  height: 80px;
  background: var(--color-gray-2);
}
.image-container {
  margin: auto;
}

.ballot-example-container {
  display: flex;
  align-items: flex-start;
  padding: 0px;
  gap: 14px;
}
</style>