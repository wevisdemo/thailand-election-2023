<template>
  <div>
    <election-header />
    <a href="/theyworkforyou">
      <div class="back-btn">
        <div class="arrow">
          <img :src="arrow_left" alt="arrow" />
        </div>
        <p class="typo-b6">กลับไปหน้าแรก</p>
      </div>
    </a>

    <div class="section-about">
      <h1>เกี่ยวกับโครงการ</h1>

      <h2>เป้าหมาย</h2>
      <p>
        นับจากการเลือกตั้งปี 62 เราได้เห็นการประชุมและการลงมติในประเด็นต่างๆ
        ของสมาชิกสภาผู้แทนราษฎร (ส.ส.) หลายครั้ง
        หลายประเด็นเป็นกฎหมายหรือนโยบายที่กระทบกับชีวิตของเราโดยตรง
        ซึ่งพวกเราทีม WeVis
        ได้พยายามรวบรวมการลงมติครั้งสำคัญของคนที่ได้ชื่อว่าเป็น ‘ผู้แทน’
        ทุกคนไว้ ใน
        <span>
          <a
            href="https://theyworkforus.wevis.info/"
            target="_blank"
            rel="noopener noreferrer"
            >They Work for Us</a
          >
        </span>
        ให้ได้เลือกสำรวจกันตามความสนใจอยู่แล้ว
        <br /><br />
        แต่คำถามหนึ่งที่หลายๆ คนถามมา คืออยากลองดูว่า ส.ส. เขตบ้านของแต่ละคน
        ทำงานตรงกับใจเราแค่ไหน เพราะหน้าที่สำคัญอย่างหนึ่งของ ส.ส. เขต
        คือการเป็น ‘ผู้แทน’ ประชาชนในพื้นที่ไปส่งเสียงในสภา
        ผ่านการโหวตประเด็นต่างๆ พวกเรา WeVis จึงได้ทดลองทำโปรเจกต์ ‘They Work
        for You?’ นี้ เพื่อให้ทุกคนได้ทดลองเล่นดู
        <br /><br />
        แม้ประเด็นที่เราคัดเลือกมาให้โหวต
        อาจเป็นเพียงส่วนหนึ่งของประเด็นที่ถูกผลักดันในสภาตลอด 4 ปีที่ผ่านมา
        แต่ก็ชวนคิดว่า ส.ส. เขตของเรา ได้ทำหน้าที่เป็น ‘ผู้แทน’
        อย่างที่เราหวังไหม? และการเลือกตั้งครั้งต่อไป เราควรเลือก ‘ใคร’
        เพื่อทำหน้าที่นี้ให้เรา
      </p>

      <h2>ที่มาของข้อมูล</h2>
      <ul class="source-list">
        <li v-for="source in sources" :key="source.text">
          {{ source.text }}
          <br />
          <a :href="source.link" target="_blank" rel="noopener noreferrer">{{
            source.link_text
          }}</a>
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
      <div v-for="person in team" :key="person.role" class="team-list">
        <h3>{{ person.role }}</h3>
        <p>
          <a :href="person.link" target="_blank" rel="noopener noreferrer">
            {{ person.name }}
          </a>
        </p>
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
    </div>

    <div class="btn-container">
      <div v-for="button in buttons" :key="button.text" class="btn-wrap">
        <a :href="button.link" target="_blank" rel="noopener noreferrer">
          <div class="btn">
            <div class="icon">
              <img :src="button.icon" :alt="button.id" />
            </div>
            <p class="typo-b6">
              <b>{{ button.text }}</b>
            </p>
          </div>
        </a>
      </div>
    </div>

    <election-bottom index-path="/theyworkforyou" />
    <election-footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrow_left: require('~/assets/images/icons/arrow_left.svg'),
      buttons: [
        {
          id: 'download',
          text: 'ดาวน์โหลดข้อมูล',
          icon: require('~/assets/images/icons/download.svg'),
          link: 'https://sheets.wevis.info/dashboard/#/base/5e439277-692a-43d3-9b17-7d6c683835f6',
        },
        {
          id: 'feedback',
          text: 'Feedback',
          icon: require('~/assets/images/icons/letter.svg'),
          link: 'https://airtable.com/shryu4errnlj1LWsM',
        },
        {
          id: 'github',
          text: 'View on Github',
          icon: require('~/assets/images/icons/github.svg'),
          link: 'https://github.com/wevisdemo/thailand-election-2023/tree/main/apps/theyworkforyou',
        },
      ],
      sources: [
        {
          text: 'ข้อมูลการแบ่งเขตการเลือกตั้ง จากราชกิจจานุเบกษา',
          link_text: 'https://ratchakitcha.soc.go.th/',
          link: 'https://ratchakitcha.soc.go.th/',
        },
        {
          text: 'รายชื่อสมาชิกสภาผู้แทนราษฎร จากคณะกรรมการการเลือกตั้ง',
          link_text: 'https://www.ect.go.th',
          link: 'https://www.ect.go.th/ect_th/',
        },
        {
          text: ' ข้อมูลการลงมติ จากระบบฐานข้อมูลการประชุม สำนักงานเลขาธิการสภาผู้แทนราษฎร',
          link_text:
            'https://msbis.parliament.go.th/ewtadmin/ewt/parliament_report/main_warehouse.php',
          link: 'https://msbis.parliament.go.th/ewtadmin/ewt/parliament_report/main_warehouse.php',
        },
      ],
      team: [
        {
          role: 'เขียนโปรแกรม',
          name: 'Naanong',
          link: 'https://github.com/naanong-s',
        },
        {
          role: 'ออกแบบ',
          name: 'Namsai Supavong',
          link: 'https://www.instagram.com/namsaisupavong/',
        },
        {
          role: 'สืบค้นและรวบรวมข้อมูล',
          name: 'Thanisara GG',
          link: 'https://www.linkedin.com/in/thanisara-r/',
        },
        {
          role: 'บรรณาธิการ',
          name: 'Thanisara GG',
          link: 'https://www.linkedin.com/in/thanisara-r/',
        },
        {
          role: 'ประสานงานและจัดการอื่นๆ',
          name: 'Fhy Pantira',
          link: 'https://www.linkedin.com/in/pantira-monsumrith-b42018224/',
        },
      ],
    }
  },
  mounted() {
    import('@thailand-election-2023/components')
  },
}
</script>

<style lang="scss" scoped>
.back-btn {
  display: flex;
  width: fit-content;
  padding: 10px;
  cursor: pointer;
  .arrow {
    width: 12px;
    margin-right: 4px;
  }
}
.btn-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  @include mobile {
    flex-direction: column;
  }
  .btn-wrap {
    a {
      text-decoration: none;
    }
    &:nth-child(2) {
      margin: 0 20px;
      @include mobile {
        margin: 10px 0;
      }
    }
    .btn {
      width: 180px;
      height: 42px;
      flex: none;
      display: flex;
      align-items: center;
      border: 3px solid var(--color-black);
      border-radius: 100px;
      padding: 0 20px;
      &:hover {
        border-color: var(--color-highlight-2);
      }
      .typo-b6 {
        white-space: nowrap;
      }
      .icon {
        width: 20px;
        margin-right: 8px;
        margin-bottom: 2px;
      }
    }
  }
}
.team-list {
  margin-bottom: 30px;
  @include mobile {
    margin-bottom: 15px;
  }
}
.source-list {
  a {
    word-break: break-all;
  }
}
</style>
