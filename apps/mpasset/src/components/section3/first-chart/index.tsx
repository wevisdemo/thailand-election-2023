import { debounce } from 'debounce';
import React from 'react';
import { usePersonStore } from '../../../store/person';
import { NotFound } from '../../util/action';
import { Question } from '../../util/icon-main';
import ClickGuide from '../ClickGuide';
import Dialog from '../Dialog';
import Filter from '../Filter';
import SearchPerson from '../SearchPerson';
import Tutorial from '../tutorial';
import MainNav from './MainNav';

// Project = TheyWorkForUs, Table = Person
type Props = {}

export type ScrollChartControlType = {
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number
}

const FirstChart = (props: Props) => {
  const [isOpenSearchDialog, setIsOpenSearchDialog] = React.useState(false)
  const {
    filterPerson,
    openTutorial,
    setOpenTutorial
  } = usePersonStore()

  const chartRef = React.useRef<HTMLDivElement>(null)

  const [resolution, setResolution] = React.useState<{ width: number, height: number }>({
    width: 0,
    height: 0
  })

  const [mainScroll, setMainScroll] = React.useState<ScrollChartControlType>({
    scrollTop: 0,
    scrollHeight: 0,
    clientHeight: 0
  })

  React.useEffect(() => {
    if (chartRef.current) {
      console.log(chartRef.current.clientHeight);

      setResolution({
        width: chartRef.current.clientWidth,
        height: chartRef.current.clientHeight
      })
    }
  }, [chartRef])

  React.useLayoutEffect(() => {
    function updateSize() {
      if (chartRef.current) {
        setResolution({
          width: chartRef.current.clientWidth,
          height: chartRef.current.clientHeight
        })
      }
    }
    window.addEventListener('resize', debounce(updateSize, 1000));
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <div className='h-full max-w-[743px] mx-auto flex flex-col pt-4'>
        <Filter onOpenSeachDialog={() => setIsOpenSearchDialog(true)} />
        <div className='flex flex-row justify-between px-[10px]'>
          <div className='typo-b7 text-gray-3 typo-ibmplex'>*แสดงสีเฉพาะพรรคที่อยู่ในสภาสมัยล่าสุด</div>
          <div className='typo-b7 text-right'>ล้านบาท</div>
        </div>
        <div className='w-full h-full flex-grow-1 relative' ref={chartRef}>
          {filterPerson.length > 0 ?
            <>
              <MainNav width={resolution.width} height={resolution.height} onScroll={setMainScroll} />
              <div className='absolute bottom-0 inset-x-0'>
                <div className='pb-[1rem]'>
                  <ClickGuide />
                </div>
              </div>
            </>
            :
            <div className='py-28'>
              <NotFound />
            </div>
          }
          <div className='absolute bottom-[10px] right-[10px]'>
            <div className='flex flex-col gap-[5px]'>
              <button onClick={() => setOpenTutorial(true)}>
                <Question />
              </button>
            </div>
          </div>
        </div>
        <Dialog open={openTutorial} onClose={() => setOpenTutorial(false)}><Tutorial /></Dialog>
        <SearchPerson open={isOpenSearchDialog} onClose={() => setIsOpenSearchDialog(false)} />
      </div>
    </>

  )
}

export default FirstChart