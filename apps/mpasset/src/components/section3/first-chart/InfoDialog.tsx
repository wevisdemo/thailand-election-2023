import { CloseNoOutline } from '../../util/icon-main'

type Props = {
  open: boolean
  onClose: Function
}

const InfoDialog = ({ open, onClose }: Props) => {
  return (
    <div className={`absolute inset-0 bg-white transition-all z-30
      ${open ? 'visible opacity-100' : 'invisible opacity-0'}
      flex flex-col justify-center items-center px-[10px]`}
    >
      <div className='p-[20px] rounded-[10px] border-black border-[3px]'>
        <div className='flex flex-row justify-end'>
          <button onClick={() => onClose()}>
            <CloseNoOutline />
          </button>
        </div>
        <div className='typo-b5 typo-ibmplex text-center'>
          <div className='font-bold'>มูลค่าหุ้นธุรกิจ</div>
          คือ มูลค่าหุ้นของผู้ถือหุ้นแต่ละคน โดย วิธีการคำนวณข้อมูลของผู้ถือหุ้นว่ามีมูลค่าหุ้นเท่าไหร่ จะคิดจาก
          <div className='font-bold'>เปอร์เซ็นต์หุ้น x ส่วนของผู้ถือหุ้นในงบการเงิน</div>
          ซึ่งส่วนของผู้ถือหุ้นเป็นส่วนที่เหลือจากสินทรัพย์หักด้วยหนี้สิน
        </div>
      </div>
    </div>
  )
}

export default InfoDialog