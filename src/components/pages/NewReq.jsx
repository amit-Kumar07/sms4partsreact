import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {BiDotsVerticalRounded} from 'react-icons/bi'
const NewReq = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col py-4 items-center mt-4'>
            <div className='flex flex-col w-[420px]  rounded-xl   pt-4   text-gray-500  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  gap-2 border'>
                <div className='flex gap-9'>
                        <div className='text-primary pl-2'><FiHeart   fontSize=  {28}/></div>
                            <div>Request Name . Part Name</div>
                            <p className='text-sm relative'> Thur, 13 Aug 
                            <span className='absolute'><BiDotsVerticalRounded fontSize={22} /></span>
                            </p>
                </div>
                    <div className='gap-1 flex mx-14 mt-[-9px] text-gray-400  py-3 text-sm'>
                            <div className='border-r-2 px-2'>Model</div>
                            <div className='border-r-2 px-2'>Make</div>
                            <div className='border-r-2 px-2'>Mileage</div>
                  </div> 
                        <div className='flex text-sm  text-gray-500 border-t-2  justify-between items-center' > 
                            <p className='py-3 px-5'>Decline Request</p>
                            <p className='py-3 px-5'>SMS Buyer</p>
                            <p className='bg-primary text-white py-4 px-6 rounded-r-md'>Send Quote</p>
                        </div>
                 </div>
            
        </div>
        <div className='flex flex-col py-4 items-center mt-4'>
            <div className='flex flex-col w-[420px]  rounded-xl   pt-4  text-gray-500  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  gap-2 border'>
                <div className='flex gap-9 '>
                        <div className='text-primary pl-2'><FiHeart   fontSize=  {28}/></div>
                            <div>Request Name . Part Name</div>
                            <p className='text-sm relative'> Thur, 13 Aug 
                            <span className='absolute'><BiDotsVerticalRounded fontSize={22} /></span>
                            </p>
                </div>
                    <div className='gap-1 flex mx-14 mt-[-15px] text-gray-400  py-3 text-sm'>
                            <div className='border-r-2 px-2'>Model</div>
                            <div className='border-r-2 px-2'>Make</div>
                            <div className='border-r-2 px-2'>Mileage</div>
                  </div> 
                        <div className='flex text-sm  text-gray-500 border-t-2  justify-between items-center' > 
                            <p className='py-3 px-5'>Decline Request</p>
                            <p className='py-3 px-5'>SMS Buyer</p>
                            <p className='bg-primary text-white py-4 px-6 rounded-r-md'>Send Quote</p>
                        </div>
                 </div>
            
        </div>
        <div className='flex flex-col py-4 items-center mt-4'>
            <div className='flex flex-col w-[420px]  rounded-xl   pt-4   text-gray-500  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  gap-2 border'>
                <div className='flex gap-9 '>
                        <div className='text-primary pl-2'><FiHeart   fontSize=  {28}/></div>
                            <div>Request Name . Part Name</div>
                            <p className='text-sm relative'> Thur, 13 Aug 
                            <span className='absolute'><BiDotsVerticalRounded fontSize={22} /></span>
                            </p>
                </div>
                    <div className='gap-1 flex mx-14 mt-[-15px] text-gray-400  py-3 text-sm'>
                            <div className='border-r-2 px-2'>Model</div>
                            <div className='border-r-2 px-2'>Make</div>
                            <div className='border-r-2 px-2'>Mileage</div>
                  </div> 
                        <div className='flex text-sm  text-gray-500 border-t-2  justify-between items-center' > 
                            <p className='py-3 px-5'>Decline Request</p>
                            <p className='py-3 px-5'>SMS Buyer</p>
                            <p className='bg-primary text-white py-4 rounded-r-md  px-6 '>Send Quote</p>
                        </div>
                 </div>
            
        </div>
    </div>
  )
}

export default NewReq