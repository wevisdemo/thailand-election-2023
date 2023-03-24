import React from 'react'
import { Gesture } from '../util/action'

type Props = {}

const ClickGuide = (props: Props) => {
  return (
    <div className='flex flex-row items-center justify-center px-[10px] py-[5px] gap-x-[5px]
      bg-[#090909] bg-opacity-50 rounded-[20px] w-fit mx-auto text-white'>
      <Gesture />
      <div className='typo-b6 typo-ibmplex leading-[150%'>คลิกดูแต่ละคน</div>
    </div>
  )
}

export default ClickGuide