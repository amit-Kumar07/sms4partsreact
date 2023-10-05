import React from 'react'
import {ImCross} from 'react-icons/im';
import {FaCheck} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Complete = () => {
  return (
    <div className='flex flex-col gradient'>
        <div className='ml-[918px] mt-2 text-gray-400 cursor-pointer'>
          <NavLink to='/'>
          <ImCross fontSize={22}/>
          </NavLink>
          </div>
        <div className='text-center font-semibold text-secondary mt-4'>
            <h2 className='text-2xl'>Confirmation Message</h2>
        </div>
        <div className='w-[400px] h-[400px] ml-80    rounded-full text-primary '>
         <FaCheck fontSize={120} className='absolute mt-36 ml-20'/>
        </div>
        <div className='flex mt-6 ml-[738px] gap-8'>
        <NavLink to='/'>
        <button className='px-14 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-primary text-white py-3 p-1 mt-[-10px]'>
           CONTINUE
         </button>
        </NavLink>
        </div>
    </div>
  )
} 

export default Complete 