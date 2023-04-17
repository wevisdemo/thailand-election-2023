<template>
  <div>
    <election-header />
    <HomePageBack />

    <div class="section-about">
      <h1>เกี่ยวกับโครงการ</h1>

      <h2>เป้าหมาย</h2>
      <p>
        การเลือกตั้ง คือกลไกตามระบอบประชาธิปไตย
        ที่เปิดโอกาสให้ประชาชนซึ่งเป็นเจ้าของอำนาจ เลือก ‘ผู้แทน’
        เข้าไปทำหน้าที่แทนตัวเอง ทุกๆ การเข้าคูหาและทุกๆ กากบาท
        จึงเป็นการตัดสินใจครั้งสำคัญ ว่าเราจะใช้อำนาจของเรา
        เพื่อเปลี่ยนแปลงสังคมและประเทศที่เราอยู่ไปในทิศทางไหน
      </p>
      <br />
      <p>
        โปรเจกต์ ‘เลือกตั้งรอบนี้มีอะไรให้เลือกบ้าง?’ นี้ พวกเรา WeVis
        จึงพยายามรวบรวมข้อมูลผู้สมัคร ทั้ง ส.ส. เขต (บัตรเลือกคน) และ ส.ส.
        บัญชีรายชื่อ (บัตรเลือกพรรค)
        มาให้ประชาชนผู้มีสิทธิเลือกตั้งอย่างพวกเราค้นหาได้ง่ายๆ
        และสามารถลิงก์ไปดูข้อมูลที่เกี่ยวข้องของแต่ละคน แต่ละพรรคได้อย่างสะดวก
      </p>
      <br />

      <p>
        ก่อนเข้าคูหา #เลือกตั้ง66 นี้
        พวกเราเลยออยากชวนทุกคนมาลองศึกษาข้อมูลให้ดี เพื่อตัดสินใจมอบอำนาจให้กับ
        ‘ผู้แทน’ ที่จะเข้าไปในรัฐสภาเพื่อใช้สิทธิและเสียงแทนเราอย่างแท้จริง
      </p>

      <h2>ที่มาของข้อมูล</h2>
      <ul>
        <li>
          ข้อมูลเบื้องต้นจากเว็บไซต์/โซเชียลมีเดียหลักของแต่ละพรรคการเมือง
        </li>
      </ul>

      <h2>นโยบายการนำข้อมูลไปใช้ต่อ</h2>
      <p>
        ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source
        และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons
        Attribution-NonCommercial License (CC-BY-NC)
        คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา
        แต่ห้ามนำไปใช้เพื่อการค้า สามารถดูรายละเอียดเพิ่มเติมได้ที่
        <a
          href="wevis.info/terms-of-use"
          target="_blank"
          rel="noopener noreferrer"
          >wevis.info/terms-of-use</a
        >
        <br /><br />
        หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม
        ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง
        หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team [at] punchup.world
      </p>

      <h2>ทีมงานร่วมพัฒนา</h2>
      <div v-for="(group, i) in collaborators" :key="i">
        <h3>{{ group.role }}</h3>
        <div class="collaborators-list">
          <span
            v-for="(member, j) in group.members"
            :key="i * collaborators.length + j"
          >
            <a :href="member.url" target="_blank" rel="noopener noreferrer">{{
              member.name
            }}</a>
            <span v-if="j < group.members.length - 1">, </span>
          </span>
        </div>
      </div>

      <h2>หมายเหตุ</h2>
      <p>
        <a
          href="https://punchup.world/"
          target="_blank"
          rel="noopener noreferrer"
          >Punch Up</a
        >
        และ
        <a href="https://wevis.info/" target="_blank" rel="noopener noreferrer"
          >WeVis</a
        >
        ได้รับการสนับสนุนทุนในการดำเนินงานจาก
        <a href="https://www.ned.org/" target="_blank" rel="noopener noreferrer"
          >National Endowment for Democracy (NED)</a
        >
        ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์ ประสานงาน
        บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
      </p>

      <div class="button-list-section">
        <a
          class="button-rounded--black link-text"
          href="https://docs.google.com/spreadsheets/d/1ooBHq0DWCbpH2KhHRmC2kwn4nV6gQO40PEYlDL8woCY"
        >
          <div class="icon">
            <IconsDownload />
          </div>
          ดาวน์โหลดข้อมูล
        </a>
        <a
          class="button-rounded--black link-text"
          href="https://airtable.com/shryu4errnlj1LWsM"
          target="_blank"
        >
          <div class="icon">
            <IconsMail />
          </div>
          Feedback
        </a>
        <a
          class="button-rounded--black link-text"
          target="_blank"
          href="https://github.com/wevisdemo/thailand-election-2023/tree/main/apps/yourcandidates"
        >
          <div class="icon">
            <IconsGithub />
          </div>
          View on Github
        </a>
      </div>
    </div>

    <election-bottom index-path="/yourcandidates" />
    <election-footer />
  </div>
</template>

<script>
import {
  ElectionHeader,
  ElectionBottom,
  ElectionFooter,
} from '@thailand-election-2023/components'
export default {
  data() {
    return {
      collaborators: [
        {
          role: 'เขียนโปรแกรม',
          members: [
            {
              name: 'napatswift',
              url: 'https://github.com/napatswift',
            },
            {
              name: 'JaeAiKay',
              url: 'https://github.com/JaeAiKay',
            },
          ],
        },
        {
          role: 'ออกแบบ',
          members: [
            {
              name: 'Namsai Supavong',
              url: 'https://www.instagram.com/namsaisupavong/',
            },
          ],
        },
        {
          role: 'สืบค้นและรวบรวมข้อมูล',
          members: [
            {
              name: 'Thanisara GG',
              url: 'https://www.linkedin.com/in/thanisara-r/',
            },
            {
              name: 'Fhy Pantira',
              url: 'https://www.linkedin.com/in/pantira-monsumrith-b42018224/',
            },
          ],
        },
        {
          role: 'บรรณาธิการ',
          members: [
            {
              name: 'Thanisara GG',
              url: 'https://www.linkedin.com/in/thanisara-r/',
            },
          ],
        },
        {
          role: 'ประสานงานและจัดการอื่นๆ',
          members: [
            {
              name: 'Phy pantira',
              url: 'https://www.linkedin.com/in/pantira-monsumrith-b42018224/',
            },
            {
              name: 'Th1nkK1D',
              url: 'https://github.com/Th1nkK1D',
            },
          ],
        },
      ],
      links: {},
    }
  },
  components: {
    ElectionHeader,
    ElectionBottom,
    ElectionFooter,
  },
}
</script>

<style scoped>
.link-text {
  font-weight: 700;
  text-decoration: none !important;
  color: var(--color-black);
}

.button-rounded--black .icon {
  margin-right: 0.5rem;
}

.button-list-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 50px 0px;
}

@media (min-width: 560px) {
  .button-list-section {
    flex-direction: row;
  }
}
</style>