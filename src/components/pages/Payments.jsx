import React from 'react'
import {ImCross} from 'react-icons/im'
import { NavLink } from 'react-router-dom';
const Payments = () => {
  return (
    <div className='flex flex-col'>
        <div className='ml-[918px] mt-2 text-gray-400 cursor-pointer'>
          <NavLink to='/'>
          <ImCross fontSize={22}/>
          </NavLink>
          </div>
        <div className='text-center font-semibold text-secondary mt-4'>
            <h2 className='text-2xl'>Payment Setting</h2>
        </div>
        <div className='flex mt-[424px] ml-[550px] gap-7'>
          <NavLink to='/'>
          <p className='text-primary'>SKIP TO DASHBOARD</p>
          </NavLink>
          <button className='px-14 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-primary text-white py-3 p-1 mt-[-10px]'>
           CONTINUE
         </button>
        </div>
    </div>
  )
} 

export default Payments