import React from 'react'
import { ReactElement } from 'react'
import { Collapse, Expand } from '../../util/action'
import { Asset } from '../../util/icon-main'
import { usePersonStore } from '../../../store/person'
import { numberWithCommas } from '../../util/calculation'
import * as d3 from 'd3'
import { CredenData } from '../../../models/person'
import CompanyList from './CompanyList'

type TagProps = {
  children: ReactElement | string
}

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <div className='rounded-[100px] bg-gray-2 px-[10px] py-[5px]'>
      {children}
    </div>
  )
}

type Props = {
  open: boolean
  onToggle: Function
}

const PersonDetail = ({ open, onToggle }: Props) => {

  const [relatedCompanyToGovernmentCount, setRelatedCompanyToGovernmentCount] = React.useState({
    total: 0,
    related: 0,
    notRelated: 0
  })

  const { selectedPerson,
    setDirectorData,
    directorData,
    setShareholderData,
    shareholderData,
    selectedDataSet,
  } = usePersonStore()

  const fetchFromGit = React.useCallback(async (name: string) => {
    if (selectedPerson) {
      const promises: Promise<CredenData[] | undefined>[] = []

      if (selectedDataSet === 'นักการเมือง 62') {
        if (selectedPerson.countDirector > 0)
          promises.push(d3.json<CredenData[]>(`https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/creden/director/${name}.json`))
        if (selectedPerson.countCompShare > 0)
          promises.push(d3.json<CredenData[]>(`https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/creden/shareholder/${name}.json`))
      } else {
        if (selectedPerson.countDirector > 0)
          promises.push(d3.json<CredenData[]>(`https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/yourcandidate/creden/director/${name}.json`))
        if (selectedPerson.countCompShare > 0)
          promises.push(d3.json<CredenData[]>(`https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/yourcandidate/creden/shareholder/${name}.json`))
      }
      await Promise.all(promises).then((value) => {
        const directorData = value[0]
        const shareholderData = value[1]

        if (selectedDataSet === 'ผู้สมัคร 66') {
          if (shareholderData) {
            shareholderData.forEach((d) => {
              d.company_shareholder?.forEach((c) => {
                if (typeof c.person?.Images === 'string')
                  c.person.Images = `${process.env.SECURE_HOST}${c.person.Images}`
              })
            })
          }
        }
        setDirectorData(directorData || [])
        setShareholderData(shareholderData || [])

      }).catch((err) => console.log(err))
    }
  }, [setDirectorData, setShareholderData, selectedPerson, selectedDataSet])

  React.useEffect(() => {
    if (selectedPerson) {
      fetchFromGit(selectedPerson.Name.replaceAll(' ', '-'))
    }
  }, [selectedPerson, fetchFromGit])

  React.useEffect(() => {
    const total = (Array.isArray(directorData) ? directorData.length : 0) + (Array.isArray(shareholderData) ? shareholderData.length : 0)

    const related = (Array.isArray(directorData) ? directorData.reduce((acc, cur) => acc + (Array.isArray(cur.gov_fund_proj) ? 1 : 0), 0) : 0)
      + (Array.isArray(shareholderData) ? shareholderData.reduce((acc, cur) => acc + (Array.isArray(cur.gov_fund_proj) ? 1 : 0), 0) : 0)
    setRelatedCompanyToGovernmentCount({
      total,
      related,
      notRelated: total - related
    })
  }, [directorData, shareholderData])

  return (
    <div className={`absolute w-full
      rounded-[10px] py-[10px] px-[15px]
      border-black border-[3px]
      gap-y-[5px] gap-x-[10px]
      ${!open ? 'top-[calc(100%-105px)] desktop:top-[58px]' : 'top-[58px]'}
      transition-all
      h-header tablet:h-tablet-header
      bg-white
      max-w-[480px]
      `}>
      <div>
        <div className='flex flex-row justify-between items-center'>
          <div className='typo-h7 font-bold text-kondolar leadin-[140%]'>{selectedPerson?.Name}</div>
          <div className='desktop:hidden'>
            <div className='flex flex-row gap-x-[9px]'>
              <div>สองเพิ่มเติม</div>
              <svg className='cursor-pointer'
                onClick={() => onToggle()}
                width={18} height={21} viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g transform={!open ? `` : `rotate(180 9 10.5)`}>
                  <path d="M8.99477 19.5C8.99477 18.6288 9.53505 15.367 9.45186 14.5C9.31774 13.1021 8.82178 12.4134 8.80946 11C8.78908 8.66088 8.75586 8.09703 8.87741 5.77256C8.90547 5.23592 8.93918 5.00754 8.93918 4.5C8.40451 5.0132 7.74585 4.86917 7.21583 5.38947C5.23111 7.33779 -0.544392 13.3727 1.39104 11.3721C2.83864 9.87574 4.19694 8.2418 5.58514 6.6856C6.75868 5.37002 7.89038 3.91503 8.80946 2.39497C9.02275 2.04222 9.16673 1.15737 9.45186 1.64156C10.253 3.00195 11.0273 4.33533 11.9597 5.60656C13.0568 7.10229 14.1073 8.64607 15.1716 10.1653C15.2557 10.2853 15.3779 10.4604 15.5052 10.5357C16.0965 10.8849 16.4117 11.7257 17 12.0297" stroke="#090909" strokeWidth={2} strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className={`min-h-[54px] flex flex-row gap-x-[10px] ${!open ? 'visible block' : 'none hidden'}`}>
          <div className='flex flex-col px-[7px] py-[5px] rounded-[5px] border-[2px] border-black items-center text-center h-fit'>
            <div className='typo-ibmplex typo-b7 font-bold'>{relatedCompanyToGovernmentCount.total}</div>
            <div className='typo-ibmplex typo-b7'>บริษัท</div>
          </div>
          <div>
            <div className='flex flex-row gap-x-[5px] items-center
            typo-b7'>
              <svg width={11} height={10} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" width={10} height={10} rx={2} fill="#090909" />
              </svg>
              <div className='font-bold'>เคย</div>
              <div>รับโครงการรัฐ</div>
              <div><span className='font-bold'>{relatedCompanyToGovernmentCount.related}</span> บริษัท</div>
            </div>
            <div className='flex flex-row gap-x-[5px] items-center
            typo-b7'>
              <svg width={11} height={10} viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x={1} y="0.5" width={9} height={9} rx="1.5" stroke="#090909" />
              </svg>
              <div className='font-bold'>ไม่เคย</div>
              <div>รับโครงการรัฐ</div>
              <div><span className='font-bold'>{relatedCompanyToGovernmentCount.notRelated}</span> บริษัท</div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row border-b-[1px] border-dashed border-b-gray-2 pb-[10px] gap-x-[10px]'>
        <div className='w-[70px] h-[70px] rounded-full border-[2px] border-black bg-cover bg-top' style={{
          backgroundImage: `url(${typeof selectedPerson?.Images === 'string' && selectedPerson?.Images !== "" ? selectedPerson?.Images : process.env.BASE_PATH + '/design_assets/profile_pic.jpg'}`
        }} />
        <div className='flex flex-col gap-y-[5px]'>
          <div className='flex flex-row gap-x-[5px]'>
            {selectedDataSet === 'ผู้สมัคร 66' && <Tag>ผู้สมัคร 66</Tag>}
            {selectedDataSet === 'ผู้สมัคร 66' && selectedPerson?.IsPmCandidate && <Tag>แคนดิเดต นายก</Tag>}
            {selectedDataSet === 'นักการเมือง 62' && !selectedPerson?.IsCabinet && !selectedPerson?.IsSenator && <Tag>ส.ส.62</Tag>}
            {selectedPerson?.IsCabinet && <Tag>ค.ร.ม.</Tag>}
            {selectedPerson?.IsSenator && <Tag>ส.ว.</Tag>}
          </div>
          <div className='flex flex-row gap-[5px]
              typo-b5'>
            <div>พรรค</div>
            {selectedPerson?.Party ?
              <div className='font-bold'>{selectedPerson?.Party?.Name}</div> :
              <div className='font-bold'>ไม่มีสังกัด</div>
            }
            {selectedPerson?.Party && <div className={`w-[20px] h-[20px] rounded-full bg-cover bg-center`} style={{ backgroundImage: `url(${selectedPerson?.Party?.Images}` }} />}

          </div>
          {(!selectedPerson?.IsCabinet && !selectedPerson?.IsSenator) &&
            <div className='typo-b5'> {`แบบ${selectedPerson?.MpType} ${selectedPerson?.MpType === 'แบ่งเขต' ? `จังหวัด${selectedPerson?.MpProvince} เขต${selectedPerson?.MpZone}` : ''}`}</div>
          }
        </div>
      </div >
      <div className='flex flex-col divide-y-[1px] divide-gray-2 divide-dashed'>
        <CompanyList type='shareholder' companyData={shareholderData} selectedPerson={selectedPerson} />
        <CompanyList type='director' companyData={directorData} selectedPerson={selectedPerson} />
      </div>
    </div >
  )
}

export default PersonDetail