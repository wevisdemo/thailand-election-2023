import React from 'react'
import { ReactElement } from 'react'
import { Collapse, Expand } from '../../util/action'
import { Asset } from '../../util/icon-main'
import { usePersonStore } from '../../../store/person'
import { numberWithCommas } from '../../util/calculation'
import * as d3 from 'd3'
import { CredenData } from '../../../models/person'

const COMPANY_DATA = [{
  'company_name': 'ABC',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'OHO',
  percentage: '10'
},
{
  'company_name': 'XYZ',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'XYZ',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'XYZ',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'XYZ',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'XYZ',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'XYZ',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'XYZ',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'XYZ',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'XYZ',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'XYZ',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'XYZ',
  percentage: '20', govermentFunded: true
},
{
  'company_name': 'XYZ',
  percentage: '20'
},
{
  'company_name': 'XYZ',
  percentage: '20'
},
{
  'company_name': 'XYZ',
  percentage: '20'
},
{
  'company_name': 'XYZ',
  percentage: '20'
},
{
  'company_name': 'XYZ',
  percentage: '20'
},
{
  'company_name': 'XYZ',
  percentage: '20'
},
{
  'company_name': 'XYZ',
  percentage: '20'
},
]


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
  const [isExpand, setIsExpand] = React.useState(false)

  const { selectedPerson,
    setDirectorData,
    setShareholderData } = usePersonStore()

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


  return (
    <div className={`absolute w-full
      rounded-[10px] py-[10px] px-[15px]
      border-black border-[3px]
      gap-y-[5px] gap-x-[10px]
      ${!open ? 'top-[calc(100%-49px)]' : 'top-[58px]'}
      transition-all
      h-header
      bg-white
      `}>

      <div className='flex flex-row justify-between items-center mb-[12px]'>
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
      <div className='py-[15px] flex flex-col gap-y-[5px]'>
        <div className='flex flex-row justify-between typo-b5 typo-ibmplex items-center'>
          <div className='font-bold'>มูลค่าหุ้นทั้งหมด</div>
          <div className='flex flex-row gap-x-[5px] '>
            <div className='font-bold'>{numberWithCommas(Number(selectedPerson?.totalValueShare))}</div>
            <div>ล้านบาท</div>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='inline-flex gap-x-[7px]'>
            <Asset />
            <table className='table-auto border-spacing-[5px]'>
              <tr className='font-bold'>
                <td className='w-[180px]'>ถือหุ้นด้วยตนเอง</td>
                <td>{selectedPerson?.countCompShare}</td>
                <td>บริษัท</td>
              </tr>
            </table>
          </div>
          <div>
            {!isExpand ? <Expand onClick={() => setIsExpand(true)} /> : <Collapse onClick={() => setIsExpand(false)} />}
          </div>
        </div>
        {isExpand &&
          <div>
            <div className='inline-flex gap-x-[7px] mb-[15px]'>
              <div className='w-[24px] h-[24px]'>&nbsp;</div>
              <table className='table-auto border-spacing-[5px]'>
                <tr>
                  <td className='w-[180px]'>
                    <div className='flex flex-row gap-x-[5px] items-center'>
                      <div className='w-[10px] h-[10px] bg-black rounded-[2px]' />
                      <div className='font-bold'>เคย</div>
                      <div>รับโครงการรัฐ</div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>บริษัท</td>
                </tr>
                <tr>
                  <td className='w-[180px]'>
                    <div className='flex flex-row gap-x-[5px] items-center'>
                      <div className='w-[10px] h-[10px] bg-white border-black border-[2px] rounded-[2px]' />
                      <div className='font-bold'>ไม่เคย</div>
                      <div>รับโครงการรัฐ</div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>บริษัท</td>
                </tr>
              </table>
            </div>
            <div className='flex flex-col gap-y-[10px]
              max-h-[50vh] overflow-y-scroll'>
              {COMPANY_DATA.map((data) => (
                <div key={`comp-${data.company_name}`}
                  className={`px-[15px] py-[10px] ${data.govermentFunded ? 'bg-black text-white border-[3px] border-transparent' : ' text-black bg-white border-[3px] border-black '}
                    flex flex-row rounded-[5px] justify-between items-center`}>
                  <div className='typo-b5 typo-ibmplex leading-[150%]'>{`บริษัท ${data.company_name}`}</div>
                  <div className='flex flex-row gap-x-[12px] items-center'>
                    <div>{`${data.percentage} %`}</div>
                    <svg className='cursor-pointer hover:translate-x-2 transition-all'
                      onClick={() => { }}
                      width={20} height={18} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 8.99477C1.87122 8.99477 5.13296 9.53505 6 9.45186C7.39793 9.31774 8.08663 8.82178 9.5 8.80946C11.8391 8.78908 12.403 8.75586 14.7274 8.87741C15.2641 8.90547 15.4925 8.93918 16 8.93918C15.4868 8.40451 15.6308 7.74585 15.1105 7.21583C13.1622 5.23111 7.12732 -0.544392 9.12792 1.39104C10.6243 2.83864 12.2582 4.19694 13.8144 5.58514C15.13 6.75868 16.585 7.89038 18.105 8.80946C18.4578 9.02275 19.3426 9.16673 18.8584 9.45186C17.498 10.253 16.1647 11.0273 14.8934 11.9597C13.3977 13.0568 11.8539 14.1073 10.3347 15.1716C10.2147 15.2557 10.0396 15.3779 9.96434 15.5052C9.61507 16.0965 8.77431 16.4117 8.47028 17" stroke="white" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                  </div>

                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </div >
  )
}

export default PersonDetail