import React from 'react'
import {ImCross} from 'react-icons/im'
import {PiCheckCircleBold} from 'react-icons/pi'
import { NavLink } from 'react-router-dom';
const Account = () => {
  return (
    <div className='flex flex-col'>
        <div className='ml-[918px] mt-2 text-gray-400 cursor-pointer'>
          <NavLink to='/'>
          <ImCross fontSize={22}/>
          </NavLink>
          </div>
        <div className='text-center font-semibold text-secondary mt-4'>
            <h2 className='text-2xl'>Confirm Your Account Settings</h2>
        </div>
          <div className='flex flex-col'>
              <div className='ml-[237px] mt-14'>
              <input
                          required
                          type="text"
                          placeholder="Full Name"
                          className="border-2 py-4 rounded-lg w-[450px] pl-12"
                          /> 
                </div>
                <div className='ml-[237px] mt-4'>
                <input
                          required
                          type="email"
                          placeholder="Email id"
                          className="border-2 py-4 rounded-l-lg w-[390px] pl-12 relative"
                          /> 
               
                 <div className='mt-[-60px] ml-[387px] w-[60px] border rounded-r-lg py-2 cursor-pointer'>
                 <PiCheckCircleBold fontSize={42} className='ml-1'/>
                 </div>
                </div>
                <div className='ml-[237px] mt-4'>
                <input
                          required
                          type="number"
                          placeholder="Mobile Number"
                          className="border-2 py-4 rounded-l-lg w-[390px] pl-12 relative"
                          /> 
               
                 <div className='mt-[-60px] ml-[387px] w-[60px] border rounded-r-lg py-2 cursor-pointer'>
                 <PiCheckCircleBold fontSize={42} className='ml-1'/>
                 </div>
                </div>
                <div className='ml-[237px] mt-4'>
              <input
                          required
                          type="text"
                          placeholder="Password"
                          className="border-2 py-4 rounded-lg w-[450px] pl-12"
                          /> 
                </div>
          </div>
        <div className='flex mt-20 ml-[550px] gap-7'>
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

export default Account