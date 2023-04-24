import React from 'react'

import { PersonCustom } from '../../models/person'
import { usePersonStore } from '../../store/person'

type Props = {
  open: boolean
  onClose: Function
}

const SearchPerson = ({ open, onClose }: Props) => {
  const { person, setSelectedPerson } = usePersonStore()

  const [searchTerm, setSearchTerm] = React.useState("")
  const [searchResult, setSearchResult] = React.useState<PersonCustom[]>(person)



  React.useEffect(() => {
    if (searchTerm !== "" && person.length > 0) {
      const result = person.filter((data) => data.Name.includes(searchTerm))
      if (typeof result === "object")
        setSearchResult(result)
    }
  }, [searchTerm, person])

  return (
    <div className={`absolute inset-0 overflow-x-hidden overflow-y-scroll 
      bg-white
      ${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all`}>
      <div className='flex flex-row items-center px-[10px] gap-x-[8px] py-[5px]'>
        <svg width={20} height={18}
          onClick={() => onClose()}
          viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9.00523C18.1288 9.00523 14.867 8.46495 14 8.54814C12.6021 8.68226 11.9134 9.17822 10.5 9.19053C8.16088 9.21092 7.59703 9.24414 5.27256 9.12259C4.73592 9.09453 4.50754 9.06082 4 9.06082C4.5132 9.59549 4.36917 10.2541 4.88947 10.7842C6.83779 12.7689 12.8727 18.5444 10.8721 16.609C9.37574 15.1614 7.7418 13.8031 6.1856 12.4149C4.87002 11.2413 3.41503 10.1096 1.89497 9.19054C1.54222 8.97725 0.657367 8.83327 1.14156 8.54814C2.50195 7.74705 3.83533 6.97274 5.10655 6.04033C6.60229 4.94324 8.14607 3.89268 9.66534 2.82835C9.78533 2.74429 9.96045 2.62214 10.0357 2.4948C10.3849 1.9035 11.2257 1.58825 11.5297 1" stroke="#090909" strokeWidth={2} strokeLinecap="round" />
        </svg>
        <div className='px-[15px] py-[5px] inline-flex gap-x-[5px] items-center border-[3px] rounded-[50px] border-black w-full'>
          <input type='text'
            className=' border-transparent focus:border-transparent focus:ring-0 p-0 flex-grow
              typo-ibmplex typo-b5 leading-[150%]'
            placeholder='ค้นหาชื่อนักการเมือง'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} />
          <svg width={19} height={21} viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.83471 9.59463C1.23317 5.256 2.84023 1 7.54379 1C10.8817 1 12.8956 2.14215 14.0071 3.83806C15.3957 5.95668 16 10.5 12 13.4261C9.00001 15 7.5693 14.574 5.50001 14C4.15877 13.6279 2.09016 11.437 1.83471 9.59463Z" stroke="#090909" strokeWidth={2} strokeLinecap="round" />
            <path d="M11.7864 12.761C12.6911 13.2133 13.1092 13.8446 13.7142 14.5168C14.3766 15.2528 14.7908 16.667 15.5316 17.2597C16.4331 17.9809 17.1718 19.0385 17.8033 19.9857" stroke="#090909" strokeWidth={2} strokeLinecap="round" />
          </svg>
        </div>
      </div>
      <div className='flex flex-col divide-y-2 divide-gray-3 divide-dashed'>
        {searchResult.map((data) => (
          <button key={`search-result-${data.Id}`}
            className="py-[5.5px] px-[20px] w-full text-left"
            onClick={() => {
              onClose();
              setSelectedPerson(data);
            }}
          >
            <div className='typo-b4 typo-ibmplex leading-[150%]'>
              {data.Name}
            </div>
            <div className='typo-b7 typo-ibmplex text-gray-3 leading-[150%] inline-flex gap-x-[5px]'>
              {!data.IsCabinet && !data.IsSenator && <div>{data.IsActive ? 'ผู้สมัคร ส.ส. 66' : ' ส.ส. 62'} {data.Party ? `พรรค${data.Party.Name}` : ''} แบบ{data.MpType} {data.MpType === 'แบ่งเขต' ? `จังหวัด${data.MpProvince} เขต ${data.MpZone}` : ``} </div>}
              {data.IsCabinet && <div>ค.ร.ม.</div>}
              {data.IsSenator && <div>ส.ว.</div>}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchPerson