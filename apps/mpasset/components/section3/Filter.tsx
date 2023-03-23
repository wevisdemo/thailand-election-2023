import React from 'react'
import { Shuffle } from '../util/icon-main'




export type SelectedFilterType = {
  dataSet: string | 'ผู้สมัคร 66',
  domain: string | 'รายได้โครงการรัฐ' | 'มูลค่าหุ้น',
  businessType: string | 'ทุกหมวดธุรกิจ',
  party: string | 'ทุกพรรค'
  sort: 'สูงสุด' | 'ต่ำสุด',
}

type Props = {
  selectedFilter: SelectedFilterType
  onOpenSeachDialog: Function
}


const SelectedFilterButton = ({ wording }: { wording: string | React.ReactElement }) => {
  return <div className='bg-black px-[10px] py-[5px] typo-ibmplex typo-b6 leading-[150%] text-white rounded-[100px]'>
    {wording}
  </div>
}

const Filter = ({ selectedFilter, onOpenSeachDialog }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState("")
  return (
    <div className='flex flex-col gap-y-[5px] px-[10px] py-[5px]'>
      <div className='flex flex-row gap-x-[5px]'>
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
      <div className='flex flex-row gap-x-[5px] items-center'>
        รายชื่อของ
        <SelectedFilterButton wording={selectedFilter.dataSet} />
        ที่มี
        <SelectedFilterButton wording={selectedFilter.domain} />
        <SelectedFilterButton wording={selectedFilter.sort === "สูงสุด" ?
          <div className='flex flex-row items-center gap-x-[5px]'>
            <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.37216 13C4.37216 12.516 4.66762 10.7039 4.62213 10.2222C4.54878 9.4456 4.27755 9.06298 4.27082 8.27778C4.25967 6.97827 4.2415 6.66502 4.30797 5.37365C4.32332 5.07551 4.34175 4.94864 4.34175 4.66667C4.04936 4.95178 3.68915 4.87176 3.3993 5.16082C2.31391 6.24322 0.405426 8.34593 1.46386 7.23449C2.25552 6.40319 1.74834 6.74544 2.50751 5.88089C3.1493 5.15001 3.76819 4.34168 4.27082 3.49721C4.38746 3.30124 4.4662 2.80965 4.62213 3.07864C5.06022 3.83442 5.48367 4.57518 5.99359 5.28142C6.59355 6.11239 6.29295 6.53096 6.875 7.375" stroke="white" strokeLinecap="round" />
              <path d="M9.12189 4.41222C9.49969 4.44656 9.72515 4.39098 10.0982 4.27065C10.3442 4.19129 10.5956 4.29474 10.8401 4.32191C11.1103 4.35193 11.3382 4.19255 11.6016 4.19255C12.0299 4.19255 12.4444 4.13486 12.8586 4.21452C13.078 4.25671 13.315 4.32435 13.5371 4.32435C13.7271 4.32435 14.0513 4.35174 14.2181 4.42198" stroke="white" strokeLinecap="round" />
              <path d="M9.16583 8.19055C9.65769 8.19055 10.1459 8.14661 10.6376 8.14661C10.8289 8.14661 11.0136 8.09748 11.2111 8.10268C11.3808 8.10715 11.5521 8.18646 11.7237 8.19055C11.8723 8.19408 12.0107 8.16022 12.1313 8.254C12.2001 8.30755 12.2725 8.35619 12.3558 8.38824C12.5695 8.47041 12.7842 8.36628 12.988 8.36628" stroke="white" strokeLinecap="round" />
              <path d="M9.07794 12.0566C9.41586 12.0566 9.71658 12.0815 10.0445 12.0542C10.3123 12.0318 10.5762 11.9248 10.8352 11.9248" stroke="white" strokeLinecap="round" />
            </svg>
            {selectedFilter.sort}
          </div>
          : <div className='flex flex-row items-center gap-x-[5px]'>
            <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.37216 3C4.37216 3.48401 4.66762 5.29609 4.62213 5.77778C4.54878 6.5544 4.27755 6.93702 4.27082 7.72222C4.25967 9.02173 4.2415 9.33498 4.30797 10.6264C4.32332 10.9245 4.34175 11.0514 4.34175 11.3333C4.04936 11.0482 3.68915 11.1282 3.3993 10.8392C2.31391 9.75678 0.405426 7.65407 1.46386 8.76551C2.25552 9.59681 1.74834 9.25456 2.50751 10.1191C3.1493 10.85 3.76819 11.6583 4.27082 12.5028C4.38746 12.6988 4.4662 13.1904 4.62213 12.9214C5.06022 12.1656 5.48367 11.4248 5.99359 10.7186C6.59355 9.88761 6.29295 9.46904 6.875 8.625" stroke="white" strokeLinecap="round" />
              <path d="M8.75 11.9899C9.12781 12.0242 9.35326 11.9686 9.72628 11.8483C9.97231 11.7689 10.2237 11.8724 10.4683 11.8995C10.7384 11.9296 10.9663 11.7702 11.2298 11.7702C11.658 11.7702 12.0725 11.7125 12.4867 11.7922C12.7061 11.8343 12.9431 11.902 13.1652 11.902C13.3552 11.902 13.6794 11.9294 13.8462 11.9996" stroke="white" strokeLinecap="round" />
              <path d="M8.75 8.08825C9.24186 8.08825 9.73004 8.04432 10.2217 8.04432C10.4131 8.04432 10.5978 7.99519 10.7953 8.00039C10.965 8.00485 11.1363 8.08417 11.3079 8.08825C11.4565 8.09179 11.5949 8.05793 11.7155 8.15171C11.7843 8.20526 11.8567 8.2539 11.94 8.28595C12.1536 8.36811 12.3684 8.26398 12.5721 8.26398" stroke="white" strokeLinecap="round" />
              <path d="M8.75 4.38184C9.08792 4.38184 9.38864 4.40672 9.71652 4.3794C9.98433 4.35708 10.2483 4.25004 10.5073 4.25004" stroke="white" strokeLinecap="round" />
            </svg>
            {selectedFilter.sort}
          </div>
        } />

      </div>
      <div className='flex flex-row gap-x-[5px] items-center'>
        จาก
        <SelectedFilterButton wording={selectedFilter.businessType} />
        จาก
        <SelectedFilterButton wording={selectedFilter.party} />
      </div>
    </div>
  )
}

export default Filter