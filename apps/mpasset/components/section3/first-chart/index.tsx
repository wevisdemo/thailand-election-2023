import React from 'react';
import ClickGuide from '../ClickGuide';
import LeftNav from './LeftNav';
import MainNav from './MainNav';
import { usePersonStore } from '../../../store/person';
import { PersonCustom } from '../../../models/person';
import SearchPerson from '../SearchPerson';
import Filter, { SelectedFilterType } from '../Filter';

// Project = TheyWorkForUs, Table = Person
type Props = {}

export type ScrollChartControlType = {
  scrollTop: number,
  scrollHeight: number,
  clientHeight: number
}

const FirstChart = (props: Props) => {
  const { personOutlier } = usePersonStore()
  const [filter, setFilter] = React.useState<SelectedFilterType>({
    dataSet: 'ผู้สมัคร 66',
    businessType: 'ทุกหมวดธุรกิจ',
    party: 'ทุกพรรค',
    sort: 'สูงสุด',
  })
  const [filterPerson, setFilterPerson] = React.useState<PersonCustom[]>([])
  const [isOpenSearchDialog, setIsOpenSearchDialog] = React.useState(false)

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
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <Filter selectedFilter={filter} onOpenSeachDialog={setIsOpenSearchDialog} />
      <div className='flex flex-row justify-between px-[10px]'>
        <div className='typo-b7 text-gray-3 typo-ibmplex'>*แสดงสีเฉพาะพรรคที่อยู่ในสภาสมัยล่าสุด</div>
        <div className='typo-b7 text-right'>ล้านบาท</div>
      </div>


      <div className='px-0 w-full h-full flex-grow-1'>
        <div className='w-full h-full flex-grow-1 relative' ref={chartRef}>
          <div className='w-full h-full flex flex-row'>
            <div className='w-1/4 h-full'>
              <LeftNav
                width={resolution.width * .25}
                height={resolution.height}
                scrollControl={mainScroll}
              />
            </div>
            <div className='w-3/4'>
              <MainNav width={resolution.width * .75} height={resolution.height} onScroll={setMainScroll} />
            </div>
          </div>
          <div className='absolute bottom-[10px] inset-x-0'>
            <ClickGuide />
          </div>
        </div>
      </div>
      <SearchPerson open={isOpenSearchDialog} onClose={() => setIsOpenSearchDialog(false)} />
    </>

  )
}

export default FirstChart