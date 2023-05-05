import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement | ReactElement[]
  open: boolean
  onClose?: Function
}

const Dialog = ({ children, open }: Props) => {

  return (
    <div className={`absolute inset-0 bg-white bg-opacity-50 
      flex flex-col justify-center items-center z-50 transition-all
      ${open ? 'visible opacity-100' : 'invisible opacity-0'}
      `}>
      {children}
    </div>
  )
}

export default Dialog