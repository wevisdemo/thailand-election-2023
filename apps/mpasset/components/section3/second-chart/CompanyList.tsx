import React from 'react'
import { CredenData, PersonCustom } from '../../../models/person'
import { numberWithCommas } from '../../util/calculation'
import { Asset } from '../../util/icon-main'
import { Collapse, Expand } from '../../util/action'
import { usePersonStore } from '../../../store/person'

type Props = {
  type: 'shareholder' | 'director'
  companyData: CredenData[]
  selectedPerson?: PersonCustom | null
}

const CompanyList = ({ type, companyData, selectedPerson }: Props) => {
  const { setSelectedCompany } = usePersonStore()

  const [isExpandShareholder, setIsExpandShareholder] = React.useState(false)

  return (
    <div>
      {(Array.isArray(companyData) && companyData.length > 0) &&
        <div className='pt-[15px] pb-[7px] flex flex-col gap-y-[5px]'>
          {type === 'shareholder' ?
            <>
              <div className='flex flex-row justify-between typo-b5 typo-ibmplex items-center'>
                <div className='inline-flex gap-x-[5px] items-center'>
                  <Asset />
                  <div className='font-bold'>มูลค่าหุ้นทั้งหมด</div>
                </div>
                <div className='flex flex-row gap-x-[5px] '>
                  <div className='font-bold'>{numberWithCommas(Number(selectedPerson?.totalValueShare))}</div>
                  <div>ล้านบาท</div>
                </div>
              </div>

              <div className='flex flex-row justify-between typo-b5 typo-ibmplex items-center'>
                <div className='font-bold'>ถือหุ้นด้วยตนเอง</div>
                <div className='flex flex-row gap-x-[5px] '>
                  <div className='font-bold'>{numberWithCommas(Number(selectedPerson?.countCompShare))}</div>
                  <div>บริษัท</div>
                  {!isExpandShareholder ? <Expand onClick={() => setIsExpandShareholder(true)} /> : <Collapse onClick={() => setIsExpandShareholder(false)} />}
                </div>
              </div>
            </>
            :
            <div className='flex flex-row justify-between typo-b5 typo-ibmplex items-center'>
              <div className='font-bold'>เป็นกรรมการบริษัท (ไม่ได้ถือหุ้น)</div>
              <div className='flex flex-row gap-x-[5px] '>
                <div className='font-bold'>{numberWithCommas(Number(selectedPerson?.countDirector))}</div>
                <div>บริษัท</div>
                {!isExpandShareholder ? <Expand onClick={() => setIsExpandShareholder(true)} /> : <Collapse onClick={() => setIsExpandShareholder(false)} />}
              </div>
            </div>
          }
          <div className='flex flex-row gap-x-[5px] items-center'>
            <div className='w-[10px] h-[10px] bg-black rounded-[2px]' />
            <div className='font-bold'>เคย</div>
            <div>รับโครงการรัฐ</div>
            <div className='flex flex-row gap-x-[5px] '>
              <div className='font-bold'>{Array.isArray(companyData) ? companyData.reduce((acc, cur) => acc + (Array.isArray(cur.gov_fund_proj) ? 1 : 0), 0) : 0}</div>
              <div>บริษัท</div>
            </div>
          </div>
          <div className='flex flex-row gap-x-[5px] items-center'>
            <div className='w-[10px] h-[10px] bg-white border-black border-[2px] rounded-[2px]' />
            <div className='font-bold'>ไม่เคย</div>
            <div>รับโครงการรัฐ</div>
            <div className='flex flex-row gap-x-[5px] '>
              <div>{Array.isArray(companyData) ? companyData.reduce((acc, cur) => acc + (!Array.isArray(cur.gov_fund_proj) ? 1 : 0), 0) : 0}</div>
              <div>บริษัท</div>
            </div>
          </div>
          {isExpandShareholder &&
            <div className='max-h-[50vh] overflow-y-scroll pb-[100px] scrollbar-hide' >
              <div className='flex flex-col gap-y-[10px]
               overflow-y-scroll'>
                {companyData.map((data) => (
                  <div key={`comp-${data.company_name_en}`}
                    className={`px-[15px] py-[10px] 
                    ${Array.isArray(data.gov_fund_proj) ? 'bg-black text-white border-[3px] border-transparent' : ' text-black bg-white border-[3px] border-black '}
                    flex flex-row rounded-[5px] justify-between items-center`}>
                    <div className='truncate text-ellipsis typo-b5 typo-ibmplex leading-[150%]'>{`บริษัท ${data.company_name_th}`}</div>
                    <div className=' flex flex-row gap-x-[12px] items-center flex-nowrap justify-end text-end'>
                      {type === 'shareholder' && <div className='typo-b4 typo-ibmplex whitespace-nowrap'>{`${Number(data.pct_share).toFixed(2)} %`}</div>}
                      <svg className='cursor-pointer hover:translate-x-2 transition-all'
                        onClick={() => setSelectedCompany(data)}
                        width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.99477C1.87122 8.99477 5.13296 9.53505 6 9.45186C7.39793 9.31774 8.08663 8.82178 9.5 8.80946C11.8391 8.78908 12.403 8.75586 14.7274 8.87741C15.2641 8.90547 15.4925 8.93918 16 8.93918C15.4868 8.40451 15.6308 7.74585 15.1105 7.21583C13.1622 5.23111 7.12732 -0.544392 9.12792 1.39104C10.6243 2.83864 12.2582 4.19694 13.8144 5.58514C15.13 6.75868 16.585 7.89038 18.105 8.80946C18.4578 9.02275 19.3426 9.16673 18.8584 9.45186C17.498 10.253 16.1647 11.0273 14.8934 11.9597C13.3977 13.0568 11.8539 14.1073 10.3347 15.1716C10.2147 15.2557 10.0396 15.3779 9.96434 15.5052C9.61507 16.0965 8.77431 16.4117 8.47028 17" stroke={!data.gov_fund_proj ? 'black' : 'white'} strokeWidth={2} strokeLinecap="round" />
                      </svg>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          }
        </div>
      }
    </div >
  )
}

export default CompanyList