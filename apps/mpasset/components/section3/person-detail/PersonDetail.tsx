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

  const [isExpandShareholder, setIsExpandShareholder] = React.useState(false)

  const { selectedPerson,
    setDirectorData,
    directorData,
    setShareholderData,
    shareholderData
  } = usePersonStore()

  const fetchFromGit = React.useCallback(async (name: string) => {
    if (selectedPerson) {
      const promises: Promise<CredenData[] | undefined>[] = []

      if (selectedPerson.countDirector > 0)
        promises.push(d3.json<CredenData[]>(`https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/creden/director/${name}.json`))
      if (selectedPerson.countCompShare > 0)
        promises.push(d3.json<CredenData[]>(`https://raw.githubusercontent.com/wevisdemo/thailand-election-2023/main/apps/mpasset/crawler/public/data/creden/shareholder/${name}.json`))

      await Promise.all(promises).then((value) => {
        const directorData = value[0]
        const shareholderData = value[1]

        setDirectorData(directorData || [])
        setShareholderData(shareholderData || [])

      }).catch((err) => console.log(err))
    }
  }, [setDirectorData, setShareholderData, selectedPerson])

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
      ${!open ? 'top-[calc(100%-105px)]' : 'top-[58px]'}
      transition-all
      h-header
      bg-white
      `}>
      <div>
        <div className='flex flex-row justify-between items-center mb-[10.5px]'>
          <div className='typo-h7 font-bold text-kondolar leadin-[140%]'>{selectedPerson?.Name}</div>
          <div>
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
        <div className={`flex flex-row gap-x-[10px] ${!open ? 'visible block' : 'none hidden'}`}>
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
            <div className='inline-flex gap-x-[5px]'>
              <svg width={15} height={16} viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6082 7.2008C13.535 6.95217 13.301 7.40847 13.1372 7.20957C13.0466 6.4637 12.8828 5.72661 12.5844 5.08896C12.2714 4.41329 11.7888 3.87216 11.2916 3.36322C10.7943 2.85427 10.221 2.39212 9.5629 2.10255C8.90478 1.81297 8.21156 1.5 7.46276 1.5C6.71397 1.5 6.02952 1.83345 5.37432 2.1201C4.71913 2.40675 4.04638 2.73434 3.53158 3.26084C3.01678 3.78734 2.58389 4.37819 2.27091 5.05386C1.95794 5.72953 1.90236 6.48125 1.81169 7.22712C1.64789 7.42602 1.26179 6.91707 1.18574 7.16277C0.940044 7.99347 0.93712 8.09584 1.18282 8.92654C1.25594 9.17516 1.56599 8.73057 1.72686 8.92654C1.81754 9.67241 1.97256 10.389 2.27384 11.0296C2.58681 11.7053 3.01971 12.3312 3.51696 12.8402C4.01421 13.3491 4.7279 13.6416 5.38895 13.9341C6.05 14.2266 6.71689 14.525 7.46569 14.525C8.21449 14.525 8.90771 14.2763 9.56583 13.9868C10.224 13.6972 10.7855 13.2526 11.3003 12.7261C11.8151 12.1996 12.2539 11.6614 12.5698 10.9887C12.8857 10.3159 13.1168 9.67534 13.2104 8.93239C13.3742 8.73349 13.5877 9.15176 13.7456 8.94702C14.2721 8.26257 13.8568 8.02857 13.6111 7.19787L13.6082 7.2008Z" stroke="#090909" strokeWidth="1.01144" strokeMiterlimit={10} strokeLinejoin="round" />
                <text></text>
              </svg>
              <div className='typo-igmplex typo-b7'>
                = มีนักการเมืองเกี่ยวข้องกับบริษัทนั้นอีกกี่คน
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row border-b-[1px] border-dashed border-b-gray-2 pb-[10px] gap-x-[10px]'>
        <div className='w-[70px] h-[70px] rounded-full border-[2px] border-black bg-contain bg-center' style={{
          backgroundImage: `url(${selectedPerson?.Images}`
        }} />
        <div className='flex flex-col gap-y-[5px]'>
          <div className='flex flex-row gap-x-[5px]'>
            <Tag>ผู้สมัคร 66</Tag>
            <Tag>ส.ส.62</Tag>
          </div>
          <div className='flex flex-row gap-[5px]
              typo-b5'>
            <div>พรรค</div>
            <div className='font-bold'>{selectedPerson?.Party?.Name}</div>
            {selectedPerson?.Party && <div className={`w-[20px] h-[20px] rounded-full bg-contain bg-center`} style={{ backgroundImage: `url(${selectedPerson?.Party?.Images}` }} />}

          </div>
          <div>แบบแบ่งเขต จังหวัดน่าน เขต 1</div>
        </div>
      </div >
      <CompanyList type='shareholder' companyData={shareholderData} selectedPerson={selectedPerson} />
      <CompanyList type='director' companyData={directorData} selectedPerson={selectedPerson} />
    </div >
  )
}

export default PersonDetail