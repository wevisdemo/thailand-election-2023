import { Person, TheyWorkForUs } from '@thailand-election-2023/database'
import React from 'react'

import { usePersonStore } from '../../store/person'
import Filter, { SelectedFilterType } from './Filter'
import FirstChart from './first-chart'
import Loading from './Loading'
import SearchPerson from './SearchPerson'
import SelectedPersonDetail from './person-detail/SelectedPersonDetail'

type Props = {}

const Section3 = (props: Props) => {
  const [filter, setFilter] = React.useState<SelectedFilterType>({
    dataSet: 'ผู้สมัคร 66',
    businessType: 'ทุกหมวดธุรกิจ',
    party: 'ทุกพรรค',
    sort: 'สูงสุด',
  })
  const [isLoading, setIsLoading] = React.useState(true)

  const { person, setPerson, selectedPerson } = usePersonStore();

  React.useEffect(() => {
    let ignore = false;
    if (person.length <= 0) {
      TheyWorkForUs.People.fetchAll().then((value) => {
        if (!ignore) {
          setPerson(value as Person[])
          setIsLoading(false)
        }
      });
    }
    return () => {
      ignore = true;
    }
  }, [person, setPerson])

  // usePersonStore

  const [isOpenSearchDialog, setIsOpenSearchDialog] = React.useState(false)

  if (isLoading) return <div className='h-screen flex flex-col'><Loading /></div>

  return (
    <div className='h-full inset-0 flex flex-col relative'>
      {
        !selectedPerson ?
          <>
            <Filter selectedFilter={filter} onOpenSeachDialog={setIsOpenSearchDialog} />
            <div className='flex flex-row justify-between px-[10px]'>
              <div className='typo-b7 text-gray-3 typo-ibmplex'>*แสดงสีเฉพาะพรรคที่อยู่ในสภาสมัยล่าสุด</div>
              <div className='typo-b7 text-right'>ล้านบาท</div>
            </div>
            <FirstChart />
            <SearchPerson open={isOpenSearchDialog} onClose={() => setIsOpenSearchDialog(false)} />
          </>
          :
          <SelectedPersonDetail />
      }
    </div>
  )
}

export default Section3