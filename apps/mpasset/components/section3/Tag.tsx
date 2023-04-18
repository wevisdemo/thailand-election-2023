import { ReactElement } from "react"

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