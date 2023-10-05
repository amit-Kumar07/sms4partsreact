
import React, { useState } from 'react'
import {AiOutlineCaretUp, AiOutlineCaretDown} from 'react-icons/ai';
import list from '../list';
const Dropdownbtn = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative flex flex-col items-center w-[150px] rounded-md mr-5'>
     <button onClick={() => setIsOpen((prev) => !prev)} className='shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-2.5 w-[112px] flex itmes-center justify-between  text-gray-400 rounded-lg tracking-wider border  active:outline duration-300 active:text-white  opacity-75'>SORT BY
      {
        !isOpen ? (
            <AiOutlineCaretDown className='h-6'/>
        ):(
            <AiOutlineCaretUp className='h-6'/>
        )
      }
     </button>
     {isOpen && (
        <div className='bg-white absolute top-12 flex flex-col items-start rounded-lg p-2 w-full border'>{list.map((item, i) =>(
            <div className='w-full hover:bg-blue-400 cursor-pointer'>
                <h3>{item.label}</h3>
            </div>
        ))}</div>
     )}
    </div>
  )
}

export default Dropdownbtn