import { StepType } from "@reactour/tour";


const StepContainer = ({ title, content }: { title: string, content: string }) => {
  return (
    <div className={`w-[302px] h-[125px] px-[10px] py-[25px]
      typo-b5 bg-contain bg-center bg-no-repeat bg-transparent`}
      style={{ backgroundImage: `url('${process.env.BASE_PATH}/design_assets/step-frame.png')` }}>
      <div className="text-center">
        <div className="typo-b6 text-gray-3 mb-[5px]">{content}</div>
        <div className="bg-highlight-2 rounded-[20px] px-[10px] py-[5px]">
          {`${title}`}
        </div>
      </div>
    </div>
  )
}

export const tourSteps: StepType[] = [
  {
    selector: '.tour1-first-step',
    content: <StepContainer title={'1. เลือกคนที่สนใจ'} content={'นักการเมืองแต่ละคนเกี่ยวข้องกับธุรกิจอะไรบ้าง?'} />,
  },
  {
    selector: '.tour1-second-step',
    content: <StepContainer title={'2. คลิกดูธุรกิจต่างๆ'} content={'นักการเมืองแต่ละคนเกี่ยวข้องกับธุรกิจอะไรบ้าง?'} />,
  },
  {
    selector: '.tour2-first-step',
    content: <StepContainer title={'1. เลือกหมวดธุรกิจ'} content={'ธุรกิจที่เกี่ยวกับนักการเมืองแบบไหนรับเงินจากโครงการรัฐเยอะ?'} />,
  },
  {
    selector: '.tour2-second-step',
    content: <StepContainer title={'2. ดูตามลำดับ'} content={'ธุรกิจที่เกี่ยวกับนักการเมืองแบบไหนรับเงินจากโครงการรัฐเยอะ?'} />,
  },
  {
    selector: '.tour3-first-step',
    content: <StepContainer title={'1. เลือกคนที่สนใจ'} content={'บริษัทที่รับโครงการรัฐมีใครถือหุ้นบ้าง?'} />,
  },
  {
    selector: '.tour3-second-step',
    content: <StepContainer title={'2. เลือกบริษัทที่สนใจ'} content={'บริษัทที่รับโครงการรัฐมีใครถือหุ้นบ้าง?'} />,
  },
  {
    selector: '.tour3-third-step',
    content: <StepContainer title={'3. ดูรูปหรืออ่านเพิ่มเติม'} content={'บริษัทที่รับโครงการรัฐมีใครถือหุ้นบ้าง?'} />,
  },
]