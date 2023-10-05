import React from 'react';
import {  NavLink } from 'react-router-dom';
import Activitie from './pages/Activitie';
import Dropdown from './pages/Dropdown';
import Request from './pages/Request';
import {IoChevronForward} from 'react-icons/io5'
const Reports = () => {
  return (
    <div className='w-[1250px] mt-6 ml-2'>
        <div className='flex justify-between'>
          <div className=' text-secondary flex '>
            <NavLink to="/">
            <h2 className='text-3xl'>Dashboard</h2> 
            </NavLink>
            <h2 className='mt-1'><IoChevronForward fontSize={30}/></h2>
            <h2 className='text-3xl'>Requests</h2>
            
          </div>
          <div>
          <button className='px-14 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-primary text-white py-2 mr-14'>
           CREATE ORDER
         </button>
          </div>
         
        </div>
            <div className='md:mx-w-[1230px]  mt-4 md:flex ' >
            
                <div className='w-[42%] h-[800px]  rounded-l-xl   shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] border'>
                  <Request/>
                </div>
                <div className='w-[28%] h-[800px] border rounded-r-lg  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                  <Dropdown/>
                </div>
                <div className='mx-8 h-[800px] w-[32%] border rounded-lg  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                  <Activitie/>
                </div>
            </div>
    </div>
  )
}

export default Reports