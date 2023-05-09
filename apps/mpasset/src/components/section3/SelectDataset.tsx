import React from 'react'

import { PersonCustom } from '../../models/person'
import { usePersonStore } from '../../store/person'
import { Tag } from './Tag'
import { Close } from '../util/icon-main'
import { debounce } from 'debounce'

type Props = {
  open: boolean
  onClose: Function
}

const SelectDataset = ({ open, onClose }: Props) => {
  const { selectedDataSet, setSelectedDataSet } = usePersonStore()

  return (
    <div className={`absolute inset-0 overflow-x-hidden overflow-y-scroll 
      bg-white 
      h-header tablet:h-tablet-header
      z-30
      ${open ? 'visible opacity-100' : 'invisible opacity-0'} transition-all`}>
      <div className='flex flex-row justify-end px-[10px]'>
        <button onClick={() => onClose()}><Close /></button>
      </div>
      <div className='flex flex-row items-center px-[10px] gap-x-[8px] py-[5px]'>
        <button onClick={async () => { onClose(); setTimeout(() => setSelectedDataSet('นักการเมือง 62'), 100); }}>
          <Tag selected={selectedDataSet === 'นักการเมือง 62'}>นักการเมือง 62</Tag>
        </button>
        <button onClick={async () => { onClose(); setTimeout(() => setSelectedDataSet('ผู้สมัคร 66'), 100); }}>
          <Tag selected={selectedDataSet === 'ผู้สมัคร 66'}>ผู้สมัคร 66</Tag>
        </button>
      </div>
    </div >
  )
}

export default SelectDataset