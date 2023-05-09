import React from 'react'
import { scrollInToView } from '../util';

type Props = {}

const Section2 = (props: Props) => {
  React.useEffect(() => {
    // @ts-ignore
    import('@thailand-election-2023/components');
  });
  return (
    <div className='h-full flex flex-col items-center justify-center gap-y-[20px] relative'>
      <div className='typo-ibmplex typo-b4 leading-[150%] text-center px-[20px] max-w-[640px]'>
        ความเกี่ยวข้องกับธุรกิจผ่านการถือหุ้นของนักการเมือง ไม่ใช่เรื่องที่ทำไม่ได้<br className='hidden tablet:block' /> แต่เพื่อเกิดความโปร่งใส<br className='tablet:hidden' />
        ไม่ใช้อำนาจจากการดำรงตำแหน่งทางการเมือง<br className='hidden tablet:block' />ที่เอื้อผลประโยชน์ต่อบริษัทตนเองหรือผู้อื่น<br className='hidden tablet:block' />พวกเราเลยอยากชวนทุกคนสำรวจข้อมูลนักการเมือง ทั้งผู้สมัคร ส.ส. เลือกตั้ง 66 รวมถึง อดีต ส.ส. และ ครม. จากเลือกตั้ง 62 <br className='tablet:hidden' />
        ใครกันที่เกี่ยวข้องกับธุรกิจบ้างและจับตาดูว่าบริษัทเหล่านี้ได้รับหรือเกี่ยวข้องกับโครงการภาครัฐหรือไม่?
      </div>
      <div className='text-gray-3 typo-ibmplex typo-b7 text-center'>*Update ข้อมูลล่าสุดวันที่ 09/05/2023</div>
      <election-bottom
        index-path="/mpasset"
        about-path="/mpasset/about"
      ></election-bottom>
      <svg className='cursor-pointer absolute bottom-[30px]
        animate-bounce w-[18px] h-[21px]'
        onClick={() => scrollInToView('section-3')}
        viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform={`rotate(180 9 10.5)`}>
          <path d="M8.99477 19.5C8.99477 18.6288 9.53505 15.367 9.45186 14.5C9.31774 13.1021 8.82178 12.4134 8.80946 11C8.78908 8.66088 8.75586 8.09703 8.87741 5.77256C8.90547 5.23592 8.93918 5.00754 8.93918 4.5C8.40451 5.0132 7.74585 4.86917 7.21583 5.38947C5.23111 7.33779 -0.544392 13.3727 1.39104 11.3721C2.83864 9.87574 4.19694 8.2418 5.58514 6.6856C6.75868 5.37002 7.89038 3.91503 8.80946 2.39497C9.02275 2.04222 9.16673 1.15737 9.45186 1.64156C10.253 3.00195 11.0273 4.33533 11.9597 5.60656C13.0568 7.10229 14.1073 8.64607 15.1716 10.1653C15.2557 10.2853 15.3779 10.4604 15.5052 10.5357C16.0965 10.8849 16.4117 11.7257 17 12.0297" stroke="#9a948c" strokeWidth={2} strokeLinecap="round" />
        </g>
      </svg>
    </div>
  )
}

export default Section2