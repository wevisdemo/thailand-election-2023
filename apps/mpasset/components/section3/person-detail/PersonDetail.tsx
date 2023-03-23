import React from 'react'
import { ReactElement } from 'react'
import { Collapse, Expand } from '../../util/action'
import { Asset } from '../../util/icon-main'

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
        <div className='typo-h7 font-bold text-kondolar leadin-[140%]'>ชลน่าน ศรีแก้ว</div>
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
        <div className='w-[70px] h-[70px] rounded-full border-[2px] border-black' />
        <div className='flex flex-col gap-y-[5px]'>
          <div className='flex flex-row gap-x-[5px]'>
            <Tag>ผู้สมัคร 66</Tag>
            <Tag>ส.ส.62</Tag>
          </div>
          <div className='flex flex-row gap-[5px]
              typo-b5'>
            <div>พรรค</div>
            <div className='font-bold'>เพื่อไทย</div>
            <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <rect y="0.5" width={20} height={20} rx={10} fill="#F41724" />
              <g style={{ mixBlendMode: 'lighten' }}>
                <rect x="2.02307" y="7.15393" width="15.7895" height="7.31707" fill="url(#patternpt)" />
              </g>
              <defs>
                <pattern id="patternpt" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use xlinkHref="#image0_730_1922" transform="matrix(0.00243522 0 0 0.00525495 -0.268293 -1.05263)" />
                </pattern>
                <image id="image0_730_1922" width={641} height={641} xlinkHref="data:image/png;base64,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" />
              </defs>
            </svg>


          </div>
          <div>แบบแบ่งเขต จังหวัดน่าน เขต 1</div>
        </div>
      </div>
      <div className='py-[15px] flex flex-col gap-y-[5px]'>
        <div className='flex flex-row justify-between typo-b5 typo-ibmplex items-center'>
          <div className='font-bold'>มูลค่าหุ้นทั้งหมด</div>
          <div className='flex flex-row gap-x-[5px] '>
            <div className='font-bold'>888</div>
            <div>ล้านบาท</div>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='inline-flex gap-x-[7px]'>
            <Asset />
            <table className='table-auto border-spacing-[5px]'>
              <tr className='font-bold'>
                <td className='w-[180px]'>ถือหุ้นด้วยตนเอง</td>
                <td>20</td>
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
    </div>
  )
}

export default PersonDetail