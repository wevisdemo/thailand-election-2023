import WvButton from '@wevisdemo/ui/react/button';
import WvButtonGroup from '@wevisdemo/ui/react/button-group';
import WvContainer from '@wevisdemo/ui/react/container';
import WvParagraphGroup from '@wevisdemo/ui/react/paragraph-group';
import WvSharer from '@wevisdemo/ui/react/sharer';
import Head from 'next/head';

import WvFooter from '@wevisdemo/ui/react/footer';
import WvNavButton from '@wevisdemo/ui/react/nav-button';
import WvNavbar from '@wevisdemo/ui/react/navbar';
import { useRouter, usePathname } from 'next/navigation';
type Props = {}

const About = (props: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='bg-white'>
      <Head>
        <title>Wevis | POLITICAL UNIVERSE</title>
        <link rel="icon" href="/design_assets/sns/favicon.png" />
      </Head>
      <WvNavbar title="POLITICAL UNIVERSE" dark>
        <WvNavButton dark active={pathname === '/'} onClick={() => router.replace('/')}>Home</WvNavButton>
        <WvNavButton dark active={pathname === '/about/'} onClick={() => router.replace('/about')}>About</WvNavButton>
      </WvNavbar>
      <WvContainer heading="เกี่ยวกับโครงการ">
        <WvParagraphGroup heading="เป้าหมาย">
          <p>
            การสื่อสารผ่านสื่อสังคมออนไลน์ (Social Media) คือหนึ่งทางสำคัญสำหรับของพรรคการเมืองในการสื่อสารทางการเมืองไปยังประชาชนได้อย่างรวดเร็ว ซึ่งพรรคการเมืองมีช่องทางและแนวทางสำหรับการสื่อสารที่ต่างกันออกไป โดยเรื่องนี้สามารถแสดงให้เห็นว่า แต่ละพรรคต้องการสื่อสารเรื่องอะไร ในปริมาณเท่าใด รวมถึงสิ่งที่สื่อสารเหล่านั้นไปถึงคนในโลกออนไลน์มากน้อยเพียงใด
          </p>
          <p>
            WeVis ขอชวนทุกคนร่วมเดินทางผ่านข้อมูลจากช่องทางออนไลน์ 3 ทางหลักของพรรคการเมือง ได้แก่ Facebook , Twitter และ YouTube เพื่อทำความรู้จักแนวทางการสื่อสารในโลกออนไลน์ของ 6 พรรคการเมือง ที่แบ่งเป็น 3 พรรคการเมืองฝ่ายรัฐบาลที่มี ส.ส. ในสภามากที่สุด ได้แก่ พรรคพลังประชารัฐ พรรคภูมิใจไทย และพรรคประชาธิปัตย์ และ 3 พรรคการเมืองฝ่ายค้านที่มี ส.ส. ในสภามากที่สุด ได้แก่ พรรคเพื่อไทย พรรคอนาคตใหม่/ก้าวไกล และพรรคเสรีรวมไทย ผ่าน 3 ประเด็นหลักที่น่าสนใจ
          </p>
        </WvParagraphGroup>
        <WvParagraphGroup heading="ที่มาของข้อมูล">
          <ol className='!list-decimal px-4'>
            <li>สำหรับข้อมูลการ Post และจำนวน Engagement ใน Official Account 3 ช่องทางหลัก ได้แก่ Facebook , Twitter และ YouTube ของ 6 พรรคการเมือง ซึ่งเก็บข้อมูลช่วงระหว่างวันที่ 1 พ.ค. 2562 ถึง 31 ส.ค. 2565 ทาง WeVis ขอขอบคุณบริษัท Wisesight สำหรับการสนับสนุนข้อมูลที่เป็นประโยชน์กับโปรเจกต์นี้อย่างละเอียด และครบถ้วนที่สุดเท่าที่จะเป็นไปได้</li>
            <li>สำหรับข้อมูลภาพปก (Cover Photo) จาก Facebook ของพรรคการเมือง เป็นการเก็บข้อมูลช่วงระหว่างวันที่ 1 พ.ค. 2562 ถึง 31 ส.ค. 2565 จาก Official Account ของ 6 พรรคการเมือง ได้แก่
              <ul className='px-4 !list-disc text-side-gov'>
                <li><a href="https://www.facebook.com/PPRPThailand" target="_blank" rel="noreferrer">Facebook พรรคพลังประชารัฐ</a></li>
                <li><a href="https://www.facebook.com/bhumjaithaiparty" target="_blank" rel="noreferrer">Facebook พรรคภูมิใจไทย</a></li>
                <li><a href="https://www.facebook.com/DemocratPartyTH" target="_blank" rel="noreferrer">Facebook พรรคประชาธิปัตย์</a></li>
                <li><a href="https://www.facebook.com/pheuthaiparty" target="_blank" rel="noreferrer">Facebook พรรคเพื่อไทย</a></li>
                <li><a href="https://www.facebook.com/FWPthailand" target="_blank" rel="noreferrer">Facebook พรรคอนาคตใหม่</a></li>
                <li><a href="https://www.facebook.com/MoveForwardPartyThailand" target="_blank" rel="noreferrer">Facebook พรรคก้าวไกล</a></li>
                <li><a href="https://www.facebook.com/sereeruamthai" target="_blank" rel="noreferrer">Facebook พรรคเสรีรวมไทย</a></li>
              </ul>
            </li>
          </ol>
        </WvParagraphGroup>
        <WvParagraphGroup heading="นโยบายการนำข้อมูลไปใช้ต่อ">
          <p>ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons Attribution-ShareAlike License คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า และต้องเผยแพร่งานดัดแปลงโดยใช้สัญญาอนุญาตชนิดเดียวกัน</p>
          <p>หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team@punchup.world</p>
        </WvParagraphGroup>
        <WvParagraphGroup heading="อาสาสมัครร่วมพัฒนา">
          <WvParagraphGroup small heading="เขียนโปรแกรม">
            <p>
              Worawit Roengruen
            </p>
          </WvParagraphGroup>
          <WvParagraphGroup small heading="ออกแบบ">
            <p>
              น้ำใส ศุภวงศ์
            </p>
          </WvParagraphGroup>
          <WvParagraphGroup small heading="สืบค้นและรวบรวมข้อมูล">
            <p>
              สิทธิกานต์ ธีระวัฒนชัย, <a className='text-side-gov' href='https://wisesight.com' target="_blank" rel="noreferrer">Wisesight</a>
            </p>
          </WvParagraphGroup>
          <WvParagraphGroup small heading="บรรณาธิการ">
            <p>
              ธนิสรา เรืองเดช
            </p>
          </WvParagraphGroup>
          <WvParagraphGroup small heading="ประสานงานและจัดการอื่นๆ">
            <p>
              Punch Up
            </p>
          </WvParagraphGroup>
          <WvParagraphGroup>
            <p>โปรเจกต์ “ส่องเพจพรรค การเมืองถูกสื่อสารทางออนไลน์อย่างไร ?” ได้รับการสนับสนุนทุนในการดำเนินงานจาก <a className='text-side-gov' href='https://www.ned.org' target="_blank" rel="noreferrer">National Endowment for Democracy (NED)</a> ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์ ประสานงาน บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ</p>
          </WvParagraphGroup>
        </WvParagraphGroup>
        <WvButtonGroup center>
          <WvButton color="blue"
            onClick={() => window.open("https://drive.google.com/drive/folders/1Ytxy7exTpVKEvIsX0MJSBbfgTsKi-spW", "_blank")}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_314_173)">
                <path
                  d="M7.03582 2.86356H1.17529V19.4081H19.8247V2.86356C19.8247 2.86356 15.306 2.86356 13.9642 2.86356"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <path
                  d="M16.0317 8.65536L10.7284 13.9587L5.42513 8.65536"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-miterlimit="10"
                />
                <line
                  x1="10.667"
                  y1="0.5"
                  x2="10.667"
                  y2="13"
                  stroke="currentColor"
                  stroke-width="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_314_173">
                  <rect
                    width="20.8333"
                    height="20"
                    fill="white"
                    transform="translate(0.0834961 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span>ดาวน์โหลดข้อมูล</span>
          </WvButton>
          <WvButton
            onClick={() => window.open("https://airtable.com/shryu4errnlj1LWsM", "_blank")}>
            <img
              width="30"
              height="30"
              src="data:image/png;base64,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"
              alt=""
            />
            <span>Feedback</span>
          </WvButton>
        </WvButtonGroup>
        <WvSharer center url="PROJECT_MAIN_PAGE" />
      </WvContainer >
      <WvFooter dark={true} />
    </div >
  )
}

export default About

