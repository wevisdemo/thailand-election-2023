import React from 'react'

type Props = {}

const Section2 = (props: Props) => {
  return (
    <div className='h-full flex flex-col items-center justify-center gap-y-[20px]'>
      <div className='typo-ibmplex typo-b4 leading-[150%] text-center px-[20px] max-w-[640px]'>
        ความเกี่ยวข้องกับธุรกิจผ่านการถือหุ้นของนักการเมือง ไม่ใช่เรื่องที่ทำไม่ได้<br className='hidden tablet:block' /> แต่เพื่อเกิดความโปร่งใส<br className='tablet:hidden' />
        ไม่ใช้อำนาจจากการดำรงตำแหน่งทางการเมือง<br className='hidden tablet:block' />ที่เอื้อผลประโยชน์ต่อบริษัทตนเองหรือผู้อื่น<br className='hidden tablet:block' />พวกเราเลยอยากชวนทุกคนสำรวจข้อมูลนักการเมือง ทั้งผู้สมัคร ส.ส. เลือกตั้ง 66 รวมถึง อดีต ส.ส. และ ครม. จากเลือกตั้ง 62 <br className='tablet:hidden' />
        ใครกันที่เกี่ยวข้องกับธุรกิจบ้างและจับตาดูว่าบริษัทเหล่านี้ได้รับหรือเกี่ยวข้องกับโครงการภาครัฐหรือไม่?
      </div>
      <div className='text-gray-3 typo-ibmplex typo-b7 text-center'>*Update ข้อมูลล่าสุดวันที่ 09/05/2023</div>
    </div>
  )
}

export default Section2