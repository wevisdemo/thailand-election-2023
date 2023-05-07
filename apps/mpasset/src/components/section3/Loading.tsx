import React from 'react'
import { LottieBusiness } from '../util/lottie'

type Props = {}

const Loading = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center gap-y-[20px] flex-grow'>
      <LottieBusiness />
      <div className='typo-b4 typo-ibmplex leading-[150%]'>
        รอสักครู่...
      </div>
    </div>
  )
}

export default Loading

export const LoadingScreen = () => {
  return (<div className='
  h-header tablet:h-tablet-header
  flex flex-col'><Loading /></div>)
}