import WvButton from '@wevisdemo/ui/react/button'
import React from 'react'

type Props = {}

const TestBTN = (props: Props) => {
  return (
    <div className='w-full h-full bg-red-200'>
      <WvButton>Hello</WvButton>
    </div>
  )
}

export default TestBTN