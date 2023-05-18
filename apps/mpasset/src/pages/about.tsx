
import { useRouter } from 'next/navigation';

const About = () => {
  const router = useRouter();

  return (
    <div className='bg-white'>
      <button className='flex flex-row items-center gap-x-[4px] px-[12px] py-[10px]
        hover:-translate-x-1 transition-all'
        onClick={() => router.replace('/')}>
        <svg
          width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 6.00229C9.61279 6.00229 8.16313 5.76592 7.77778 5.80231C7.15648 5.86099 6.85039 6.07797 6.22222 6.08336C5.18261 6.09228 4.93201 6.10681 3.89892 6.05363C3.66041 6.04136 3.55891 6.02661 3.33333 6.02661C3.56142 6.26053 3.49741 6.54869 3.72865 6.78057C4.59457 7.64889 7.27675 10.1757 6.38759 9.32892C5.72255 8.6956 4.99635 8.10134 4.30471 7.494C3.72001 6.98058 3.07335 6.48546 2.39777 6.08336C2.24099 5.99005 1.84772 5.92705 2.06292 5.80231C2.66754 5.45183 3.26015 5.11307 3.82514 4.70514C4.48991 4.22517 5.17603 3.76555 5.85126 3.2999C5.90459 3.26313 5.98242 3.20969 6.01585 3.15398C6.17108 2.89528 6.54475 2.75736 6.67988 2.5" stroke="#090909" stroke-linecap="round" />
        </svg>
        <div className='typo-ibmplex typo-b6 leading-[150%]'>
          กลับไปหน้าแรก
        </div>
      </button>
      <div className='max-w-[650px] mx-auto'>
        <div className='flex flex-col justify-center items-center py-[78px]
          desktop:py-[62px]'>
          <div className='text-center font-bold typo-h3 typo-kondolar'>เกี่ยวกับโครงการ</div>
        </div>
        <div className='px-[36px] flex flex-col
          desktop:px-0 '>
          <div className='flex flex-col gap-y-[15px] mb-[50px]
            desktop:mb-[70px]'>
            <div className='typo-kondolar typo-h5 font-bold leading-[140%]'>เป้าหมาย</div>
            <div className='typo-ibmplex typo-b4 leading-[150%]'>
            ประเด็นเรื่องความเกี่ยวข้องกับธุรกิจ เป็นอีกประเด็นนึงที่น่าสนใจ เนื่องจากบทบาทของนักการเมือง ได้แก่ สมาชิกสภาผู้แทนราษฎร (ส.ส.) และคณะรัฐมนตรี (ครม.) รวมถึง สมาชิกวุฒิสภา (ส.ว.) นั้น ได้เข้าไปบริหารงานการเมืองระดับใหญ่ที่ส่งผลต่อประชาชนจำนวนมาก รวมถึงตำแหน่งหน้าที่ของนักการเมืองมีส่วนเกี่ยวข้องกับแผนงานโครงการ และงบประมาณซึ่งใช้ในการจัดสรรให้เป็นประโยชน์ต่อสาธารณะหรือต่อประชาชน นอกจากนี้ต้องมีการจัดซื้อจัดจ้างให้ภาคธุรกิจเข้ามาดำเนินโครงการสาธารณะต่างๆ อีกด้วย
              <br /><br />
              ความเกี่ยวข้องกับธุรกิจผ่านการถือหุ้นหรือเป็นกรรมการบริษัทของนักการเมือง <span className='font-bold'>ไม่ใช่เรื่องที่ทำไม่ได้ แต่เพื่อเกิดความโปร่งใส</span> จึงควรเปิดเผยข้อมูลให้ตรวจสอบได้ เพื่อไม่ให้เกิดการใช้อำนาจจากการดำรงตำแหน่งทางการเมืองหรือเอื้อผลประโยชน์ให้กับบริษัทตนเองหรือผู้อื่น
              <br /><br />
              ทางทีม WeVis ร่วมกับ Creden.co และ HAND Social Enterpise จึงรวบรวมข้อมูลเพื่อแสดงความเกี่ยวข้องของนักการเมือง ว่าใครกันที่เกี่ยวข้องกับธุรกิจบ้าง และจับตาดูว่าบริษัทเหล่านี้ได้รับหรือเกี่ยวข้องกับโครงการภาครัฐหรือไม่?
            </div>
          </div>
          <div className='flex flex-col gap-y-[15px] mb-[50px]
          desktop:mb-[70px]'>
            <div className='flex flex-col gap-y-[15px]'>
              <div className='typo-kondolar typo-h5 font-bold leading-[140%]'>ที่มาของข้อมูล</div>
              <ul className='list-inside list-decimal'>
                <li>ข้อมูลรายชื่อสมาชิกสภาผู้แทนราษฎรและคณะรัฐมนตรีจากเว็บไซต์ <a className="text-gray-3 underline" href='https://theyworkforus.wevis.info/' target="_blank" rel="noopener noreferrer">WeVis - They Work For Us</a></li>
                <li>ข้อมูลรายละเอียดบริษัทที่ ส.ส.และ ครม. ถือหุ้นจาก <a className="text-gray-3 underline" href='https://creden.co/' target="_blank" rel="noopener noreferrer">Creden.co</a></li>
                <li>ข้อมูลโครงการจัดซื้อจัดจ้างภาครัฐจาก<a className="text-gray-3 underline" href='https://govspending.data.go.th/' target="_blank" rel="noopener noreferrer">เว็บไซต์ภาษีไปไหน</a></li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col gap-y-[15px] mb-[50px]
            desktop:mb-[70px]'>
            <div className='typo-kondolar typo-h5 font-bold leading-[140%]'>นโยบายการนำข้อมูลไปใช้ต่อ</div>
            <div className='typo-ibmplex typo-b4 leading-[150%]'>
              ทางทีมมีความตั้งใจที่พัฒนาทุกโปรเจ็กต์ให้เป็น Open Source และเปิดข้อมูลเป็น Open Data ภายใต้เงื่อนไข Creative Commons Attribution-NonCommercial License (CC-BY-NC) คือสามารถนำไปเผยแพร่และดัดแปลงได้ โดยต้องระบุที่มา แต่ห้ามนำไปใช้เพื่อการค้า สามารถดูรายละเอียดเพิ่มเติมได้ที่ <a className="text-gray-3 underline" href="wevis.info/terms-of-use" target="_blank" rel="noopener noreferrer">wevis.info/terms-of-use</a>
              <br /><br />
              หากมีข้อสงสัยต้องการสอบถามเพิ่มเติม ประสงค์แจ้งเปลี่ยนแปลงหรือเพิ่มเติมข้อมูลเพื่อความถูกต้อง หรือมีข้อเสนอแนะใดๆ สามารถติดต่อได้ที่ team [at] punchup.world
            </div>
          </div>
          <div className='flex flex-col gap-y-[15px] mb-[50px]
            desktop:mb-[70px]'>
            <div className='typo-kondolar typo-h5 font-bold leading-[140%]'>ทีมงานร่วมพัฒนา</div>
            <div className='flex flex-col gap-y-[5px] desktop:gap-y-[10px]'>
              <div className='typo-ibmplex typo-b4 font-bold leading-[140%]'>เขียนโปรแกรม</div>
              <div className='typo-ibmplex typo-b4 leading-[150%]'>วรวิทย์ เริงรื่น</div>
            </div>
            <div className='flex flex-col gap-y-[5px] desktop:gap-y-[10px]'>
              <div className='typo-ibmplex typo-b4 font-bold leading-[140%]'>ออกแบบ</div>
              <div className='typo-ibmplex typo-b4 leading-[150%]'>มนสิชา ศรีสวนแตง</div>
            </div>
            <div className='flex flex-col gap-y-[5px] desktop:gap-y-[10px]'>
              <div className='typo-ibmplex typo-b4 font-bold leading-[140%]'>สืบค้นและรวบรวมข้อมูล</div>
              <div className='typo-ibmplex typo-b4 leading-[150%]'><a className="text-gray-3 underline" href='https://www.linkedin.com/in/suphisara-isaranugul-a943b017b/' target="_blank" rel="noopener noreferrer">ศุภิสรา อิศรานุกูล</a></div>
            </div>
            <div className='flex flex-col gap-y-[5px] desktop:gap-y-[10px]'>
              <div className='typo-ibmplex typo-b4 font-bold leading-[140%]'>บรรณาธิการ</div>
              <div className='typo-ibmplex typo-b4 leading-[150%]'><a className="text-gray-3 underline" href='https://www.linkedin.com/in/thanisara-r/' target="_blank" rel="noopener noreferrer">ธนิสรา เรืองเดช</a></div>
            </div>
            <div className='flex flex-col gap-y-[5px] desktop:gap-y-[10px]'>
              <div className='typo-ibmplex typo-b4 font-bold leading-[140%]'>ประสานงานและจัดการอื่นๆ</div>
              <div className='typo-ibmplex typo-b4 leading-[150%]'>
                <a className="text-gray-3 underline" href='https://punchup.world/' target="_blank" rel="noopener noreferrer">Punch Up</a> และ <a className="text-gray-3 underline" href='https://wevis.info/' target="_blank" rel="noopener noreferrer">WeVis</a>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-y-[15px] mb-[50px]
            desktop:mb-[70px]'>
            <div className='typo-kondolar typo-h5 font-bold leading-[140%]'>หมายเหตุ</div>
            <div className='typo-ibmplex typo-b4 leading-[150%]'>
              <a className="text-gray-3 underline" href="https://punchup.world/" target="_blank" rel="noopener noreferrer">Punch Up</a>{' '}
              และ{' '}
              <a className="text-gray-3 underline" href="https://wevis.info/" target="_blank" rel="noopener noreferrer">WeVis</a>{' '}
              ได้รับการสนับสนุนทุนในการดำเนินงานจาก{' '}
              <a className="text-gray-3 underline" href="https://www.ned.org/" target="_blank" rel="noopener noreferrer">National Endowment for Democracy (NED)</a>{' '}
              ซึ่งนำมาใช้เป็นต้นทุนในการรวมรวมข้อมูล ออกแบบ พัฒนาเว็บไซต์ ประสานงาน{' '}
              บริหารจัดการ ตลอดจนการจัด Meetup เพื่อดำเนินโครงการ
            </div>
          </div>
          <div className='flex flex-col gap-[15px] desktop:flex-row justify-center'>
            <a className="group" href='mailto:team@punchup.world'>
              <button className='flex flex-row gap-[10px] items-center justify-center 
          rounded-[100px] border-black border-[3px]
          py-[10px] px-[20px] mx-auto group-hover:border-[#00eaa4]'>
                <svg width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.98933 1.72478C1.4893 2.08362 2.23191 8.88525 2.23191 10.1402C2.23191 10.7029 1.89375 12.5669 2.69478 12.5964C4.67992 12.6695 6.68295 12.5964 8.66999 12.5964C11.3602 12.5964 14.2166 12.9588 17.0016 12.9588C20.41 12.9588 20.7717 13.5082 20.41 10.5943C20.41 7.68815 20.2893 5.73103 20.41 3.53671C20.4612 2.60674 21.4508 1.72478 19.863 1.72478C18.271 1.72478 16.679 1.72478 15.087 1.72478C12.7516 1.72478 10.4163 1.72478 8.08089 1.72478C6.73129 1.72478 4.18961 1.57427 2.98933 1" stroke="#090909" stroke-width="2" stroke-linecap="round" />
                  <path d="M1.5 1.64722C2.21295 1.73249 2.69391 2.60882 3.27778 2.97034C4.0382 3.44117 5.0721 4.15045 5.74691 4.74237C6.74976 5.62202 8.07882 6.24572 9.2037 6.96332C9.98236 7.46005 10.7919 8.01063 11.5988 8.45183C12.0376 8.69178 13.3283 7.54158 13.8086 7.2941C14.8699 6.74731 15.7758 5.87568 16.8827 5.42756C18.537 4.75782 19.7789 3.04678 21.5 2.49779" stroke="#090909" stroke-width="2" stroke-linecap="round" />
                </svg>
                <div className='typo-b6 leading-[150%] typo-ibmplex font-bold'>
                  Feedback
                </div>
              </button>
            </a>
            <a className="group" href='https://github.com/wevisdemo/thailand-election-2023/tree/main/apps/mpasset' target="_blank" rel="noopener noreferrer">
              <button className='flex flex-row gap-[10px] items-center justify-center 
          rounded-[100px] border-black border-[3px]
          py-[10px] px-[20px] mx-auto group-hover:border-[#00eaa4]'>
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2143_6764)"><path fillRule="evenodd" clipRule="evenodd" d="M10.0127 0.5359C7.63574 0.533547 5.3356 1.35605 3.52448 2.85603C1.71336 4.356 0.509647 6.43539 0.129065 8.72156C-0.251517 11.0077 0.215908 13.3512 1.44756 15.3321C2.67922 17.313 4.59461 18.8017 6.85047 19.5316C7.34783 19.6213 7.53204 19.3162 7.53204 19.0589C7.53204 18.8017 7.53204 18.2154 7.53204 17.4017C4.75049 18 4.16102 16.0974 4.16102 16.0974C3.97568 15.5078 3.58192 15.0011 3.04963 14.6675C2.14701 14.0692 3.12331 14.0692 3.12331 14.0692C3.43972 14.1128 3.74181 14.2259 4.0067 14.4C4.2716 14.5742 4.49235 14.8048 4.65225 15.0743C4.78811 15.3144 4.97127 15.5259 5.19124 15.6968C5.4112 15.8677 5.66364 15.9946 5.93406 16.0702C6.20447 16.1458 6.48754 16.1686 6.76704 16.1373C7.04653 16.1061 7.31693 16.0214 7.56273 15.888C7.60127 15.3958 7.81904 14.9333 8.17676 14.5837C5.95398 14.3384 3.62068 13.5008 3.62068 9.76751C3.60541 8.80007 3.97256 7.86395 4.6461 7.15298C4.34552 6.31189 4.38059 5.39142 4.74435 4.57436C4.74435 4.57436 5.58556 4.31111 7.49519 5.5735C9.135 5.13481 10.8658 5.13481 12.5057 5.5735C14.4153 4.31111 15.2504 4.57436 15.2504 4.57436C15.6179 5.39025 15.6552 6.31141 15.3548 7.15298C16.0283 7.86395 16.3954 8.80007 16.3802 9.76751C16.3802 13.5128 14.0407 14.3325 11.8118 14.5538C12.0508 14.7879 12.2354 15.0694 12.353 15.379C12.4706 15.6887 12.5184 16.0194 12.4934 16.3487C12.4934 17.653 12.4934 18.706 12.4934 19.0231C12.4934 19.3401 12.6715 19.5854 13.1811 19.4957C15.4299 18.759 17.3369 17.2678 18.5621 15.2883C19.7873 13.3087 20.2509 10.9694 19.8704 8.68772C19.4898 6.40599 18.2897 4.33017 16.4842 2.83053C14.6787 1.33089 12.3852 0.504941 10.0127 0.5V0.5359Z" fill="#090909"></path></g> <defs><clipPath id="clip0_2143_6764"><rect width="20" height="20" fill="white" transform="translate(0 0.5)"></rect></clipPath></defs></svg>
                <div className='typo-b6 leading-[150%] typo-ibmplex font-bold'>
                  View on GitHub
                </div>
              </button>
            </a>
          </div>
        </div>
        <election-bottom
          index-path="/mpasset"
          about-path="/mpasset/about"
        ></election-bottom>
      </div>
      <election-footer></election-footer>
    </div >
  )
}

export default About

