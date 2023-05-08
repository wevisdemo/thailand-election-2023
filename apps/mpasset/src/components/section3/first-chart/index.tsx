import React from 'react';
import ClickGuide from '../ClickGuide';
import LeftNav from './LeftNav';
import MainNav from './MainNav';
import { usePersonStore } from '../../../store/person';
import { PersonCustom } from '../../../models/person';
import SearchPerson from '../SearchPerson';
import Filter, { SelectedFilterType } from '../Filter';
import { NotFound } from '../../util/action';
import { debounce } from 'debounce';

// Project = TheyWorkForUs, Table = Person
type Props = {}

export type ScrollChartControlType = {
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number
}

const FirstChart = (props: Props) => {
  const [isOpenSearchDialog, setIsOpenSearchDialog] = React.useState(false)
  const { filterPerson } = usePersonStore()

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
      <Filter onOpenSeachDialog={() => setIsOpenSearchDialog(true)} />
      <div className='flex flex-row justify-between px-[10px]'>
        <div className='typo-b7 text-gray-3 typo-ibmplex'>*แสดงสีเฉพาะพรรคที่อยู่ในสภาสมัยล่าสุด</div>
        <div className='typo-b7 text-right'>ล้านบาท</div>
      </div>
      <div className='px-0 w-full h-full flex-grow-1'>
        <div className='w-full h-full flex-grow-1 relative' ref={chartRef}>
          {filterPerson.length > 0 ?
            <>
              <div className='w-full h-full flex flex-row'>
                <div className='w-1/6 h-full'>
                  <LeftNav
                    width={resolution.width * .1666}
                    height={resolution.height}
                    scrollControl={mainScroll}
                  />
                </div>
                <div className='w-5/6 h-full'>
                  <MainNav width={resolution.width * .83333} height={resolution.height} onScroll={setMainScroll} />
                </div>
              </div>
              <div className='absolute bottom-[10px] inset-x-0'>
                <ClickGuide />
              </div>
            </>
            :
            <div className='py-28'>
              <NotFound />
            </div>
          }
        </div>
      </div>
      <SearchPerson open={isOpenSearchDialog} onClose={() => setIsOpenSearchDialog(false)} />
    </>

  )
}

export default FirstChart