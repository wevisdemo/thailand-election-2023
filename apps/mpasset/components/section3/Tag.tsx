import { ReactElement } from "react"

type TagProps = {
  children: ReactElement | string
  selected?: boolean
}

export const Tag: React.FC<TagProps> = ({ children, selected }) => {
  return (
    <div className={selected || typeof selected === 'undefined' ? `rounded-[100px] bg-highlight-2 px-[10px] py-[5px] border-highlight-2 border-[3px]` :
      `rounded-[100px] bg-white px-[10px] py-[5px] border-black border-[3px]`}>
      {children}
    </div>
  )
}