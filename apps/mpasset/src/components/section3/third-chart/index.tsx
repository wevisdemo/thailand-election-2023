import { useTour } from '@reactour/tour'
import dynamic from 'next/dynamic'
import React from 'react'
import { usePersonStore } from '../../../store/person'
import { List } from '../../util/icon-main'
import ShuffleButton from '../ShuffleButton'
import CompanyDetail from './CompanyDetail'

type Props = {}

const CompanyToPersonRelationChart = dynamic(() => import('./CompanyToPersonRelationChart'))
const SelectCompanyDetail = (props: Props) => {
  const { setSelectedCompany, setSelectedPerson } = usePersonStore()
  const [isOpenCompanyDetail, setIsOpenCompanyDetail] = React.useState(false)

  const { isOpen, setIsOpen } = useTour()
  return (
    <div className='relative w-full h-full flex flex-col'>
      <div className='flex flex-row justify-center items-center py-[10px] px-[10px]'>
        <svg className='cursor-pointer' width={20} height={19}
          onClick={() => {
            setSelectedCompany(null)
            if (isOpen)
              setIsOpen(false)
          }}
          viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 9.50523C18.1288 9.50523 14.867 8.96495 14 9.04814C12.6021 9.18226 11.9134 9.67822 10.5 9.69053C8.16088 9.71092 7.59703 9.74414 5.27256 9.62259C4.73592 9.59453 4.50754 9.56082 4 9.56082C4.5132 10.0955 4.36917 10.7541 4.88947 11.2842C6.83779 13.2689 12.8727 19.0444 10.8721 17.109C9.37574 15.6614 7.7418 14.3031 6.1856 12.9149C4.87002 11.7413 3.41503 10.6096 1.89497 9.69054C1.54222 9.47725 0.657367 9.33327 1.14156 9.04814C2.50195 8.24705 3.83533 7.47274 5.10655 6.54033C6.60229 5.44324 8.14607 4.39268 9.66534 3.32835C9.78533 3.24429 9.96045 3.12214 10.0357 2.9948C10.3849 2.4035 11.2257 2.08825 11.5297 1.5" stroke="#090909" strokeWidth={2} strokeLinecap="round" />
        </svg>
        <div className='mx-auto'>
          <div className='typo-b5'>ความเชื่อมโยงกับนักการเมือง</div>
        </div>
        <div className='flex flex-row gap-x-[5px]'>
          <button onClick={() => { setSelectedCompany(null); setSelectedPerson(null) }} >
            <List />
          </button>
          <ShuffleButton />
        </div>
      </div>
      <div className='flex-grow-1 h-full'>
        <CompanyToPersonRelationChart />
      </div>
      <CompanyDetail open={isOpenCompanyDetail} onToggle={() => setIsOpenCompanyDetail((prev) => !prev)} />
    </div>
  )
}

export default SelectCompanyDetail