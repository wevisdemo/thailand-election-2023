import React, { ReactElement } from 'react'

type Props = {
  children: ReactElement | ReactElement[]
  open: boolean
  onClose?: Function
  className?: string
}

const Dialog = ({ children, open, className }: Props) => {

  return (
    <div className={`absolute inset-0 
      flex flex-col justify-center items-center z-50 transition-all duration-500
      bg-transparent
      ${open ? 'visible opacity-100 z-50' : 'invisible opacity-0 z-40'}
      `}>
      {children}
    </div>
  )
}

export default Dialog