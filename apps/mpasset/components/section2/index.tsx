import React from 'react'

type Props = {}

const Section2 = (props: Props) => {
  return (
    <div className='h-full flex flex-col items-center justify-center gap-y-[20px]'>
      <div className='typo-ibmplex typo-b4 leading-[150%] text-center px-[20px]'>
        ความเกี่ยวข้องกับธุรกิจผ่านการถือหุ้นของนักการเมือง ไม่ใช่เรื่องที่ทำไม่ได้ แต่เพื่อเกิดความโปร่งใส<br />
        ไม่ใช้อำนาจจากการดำรงตำแหน่งทางการเมืองที่เอื้อผลประโยชน์ต่อบริษัทตนเองหรือผู้อื่นพวกเราเลยอยากชวนทุกคนสำรวจข้อมูลนักการเมือง ทั้งผู้สมัคร ส.ส. , ส.ส. และ ครม.<br />
        ใครกันที่เกี่ยวข้องกับธุรกิจบ้างและจับตาดูว่าบริษัทเหล่านี้ได้รับหรือเกี่ยวข้องกับโครงการภาครัฐหรือไม่?
      </div>
      <div className='text-gray-3 typo-ibmplex typo-b7 text-center'>*Update ข้อมูลล่าสุดวันที่ 23/02/2023</div>
    </div>
  )
}

export default Section2