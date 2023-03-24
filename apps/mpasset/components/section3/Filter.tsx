import React from 'react'
import { SortAsc, SortDesc } from '../util/action'
import { Information, Shuffle } from '../util/icon-main'
import InfoDialog from './first-chart/InfoDialog'
import SearchBusinessType from './SearchBusinessType'
import SearchParty from './SearchParty'

export type SelectedFilterType = {
  dataSet: string | 'ผู้สมัคร 66',
  businessType: string | 'ทุกหมวดธุรกิจ',
  party: string | 'ทุกพรรค'
  sort: 'สูงสุด' | 'ต่ำสุด',
}

type Props = {
  selectedFilter: SelectedFilterType
  onOpenSeachDialog: Function
}


const SelectedFilterButton = ({ wording, onClick }: { wording: string | React.ReactElement, onClick?: Function }) => {
  return <button className='shrink-0 bg-highlight-2 text-black px-[10px] py-[5px] typo-ibmplex typo-b6 leading-[150%] rounded-[100px]'
    onClick={() => { onClick && onClick() }}>
    {wording}
  </button>
}

const Filter = ({ selectedFilter, onOpenSeachDialog }: Props) => {
  const [isOpenInfoDialog, setIsOpenInfoDialog] = React.useState(false)
  const [isOpenSearchBusinessType, setIsOpenSearchBusinessType] = React.useState(false)
  const [isOpenSearchParty, setIsOpenSearchParty] = React.useState(false)


  return (
    <div className='flex flex-col gap-y-[5px]  py-[5px]'>
      <div className='flex flex-row gap-x-[5px] px-[10px]'>
        <div className='px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full'>
          <div
            className=' border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow
              typo-ibmplex typo-b5 leading-[150%]'
            onClick={() => onOpenSeachDialog(true)}
          >ค้นหาชื่อนักการเมือง</div >
          <svg width={19} height={21} viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z" stroke="#090909" strokeWidth={2} strokeLinecap="round" />
            <path d="M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857" stroke="#090909" strokeWidth={2} strokeLinecap="round" />
          </svg>
        </div>
        <Shuffle />
      </div>
      <div className='flex flex-col tablet:flex-row gap-y-[5px] typo-b5 typo-ibmplex ml-[10px]'>
        <div className='flex flex-row gap-x-[5px] items-center w-auto overflow-x-scroll scrollbar-hide pr-[10px]'>
          <div className='shrink-0'>รายชื่อของ</div>
          <SelectedFilterButton wording={selectedFilter.dataSet} />
          <div className='shrink-0'>ที่มีมูลค่าหุ้น</div>
          <button onClick={() => setIsOpenInfoDialog(true)}>
            <Information />
          </button>
          <SelectedFilterButton wording={selectedFilter.sort === "สูงสุด" ?
            <div className='flex flex-row items-center gap-x-[5px]'>
              <SortDesc />
              {selectedFilter.sort}
            </div>
            : <div className='flex flex-row items-center gap-x-[5px]'>
              <SortAsc />
              {selectedFilter.sort}
            </div>
          } />
        </div>
        <div className='flex flex-row gap-x-[5px] items-center'>
          <div>จาก</div>
          <SelectedFilterButton wording={selectedFilter.businessType} onClick={() => setIsOpenSearchBusinessType(true)} />
          <div>จาก</div>
          <SelectedFilterButton wording={selectedFilter.party} onClick={() => setIsOpenSearchParty(true)} />
        </div>
      </div>
      <InfoDialog open={isOpenInfoDialog} onClose={() => setIsOpenInfoDialog(false)} />
      <SearchBusinessType open={isOpenSearchBusinessType} onClose={() => setIsOpenSearchBusinessType(false)} />
      <SearchParty open={isOpenSearchParty} onClose={() => setIsOpenSearchParty(false)} />
    </div>
  )
}

export default Filter