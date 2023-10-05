import React from 'react'
import {TbMenuDeep} from 'react-icons/tb'
const Activities = () => {
  return (
    <div className='flex flex-col  mt-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] rounded-lg border' >
        <div className='flex  gap-28 border-b-2 mt-2 '>
          <div className='text-gray-400 pl-3'>ACTIVITIES</div>
          <div><TbMenuDeep fontSize={40} className='opacity-40 mr-8'/></div>
        </div>
        <div className='text-gray-400 mt-3 border-b-2  text-sm p-2 py-4'>
         <p className='ml-5'> <span className='text-primary'>User name</span> have requested for 
          <span className='text-primary'> Part <br /> Name</span></p>
          <p className='ml-5'>Now</p>
        </div>
        <div className='text-gray-400 mt-3 border-b-2  text-sm py-4'>
         <p  className='ml-5'> <span className='text-primary'>User name</span> have requested for 
          <span className='text-primary'> Part <br /> Name</span></p>
          <p className='ml-5'>Now</p>
        </div>
        <div className='text-gray-400 mt-3 border-b-2  text-sm py-4'>
         <p className='ml-5'> <span className='text-primary'>User name</span> have requested for 
          <span className='text-primary'> Part <br /> Name</span></p>
          <p  className='ml-5'>Now</p>
        </div>
        <div className='text-gray-400 mt-3 border-b-2  text-sm py-4'>
         <p className='ml-5'> <span className='text-primary'>User name</span> have requested for 
          <span className='text-primary'> Part <br /> Name</span></p>
          <p className='ml-5'>Now</p>
        </div>
        <div className='text-gray-400 mt-3 text-sm py-8'>
         <p className='ml-5'> <span className='text-primary'>User name</span> have requested for 
          <span className='text-primary'> Part <br /> Name</span></p>
          <p className='ml-5'>Now</p>
        </div>
    </div>
  )
}

export default Activities