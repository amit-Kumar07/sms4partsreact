import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {FiHeart} from 'react-icons/fi';
import {HiDotsVertical} from 'react-icons/hi';
import {ImAttachment} from 'react-icons/im';
import {FaCamera} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa6'
const Contact = () => {
  return (
    <div className='flex flex-col'>
           <div className='flex mt-3 border-b pb-4'>
               <div className='pl-3 '>
                   <p className='text-2xl font-semibold text-primary'>Contact Name</p>
               </div>
               <div className='pl-20 text-secondary'>
                <p>Request Name . Part Name</p>
                 <p><span className='border-r pl-1 '>Model&nbsp;</span> <span className='border-r'>Make&nbsp;</span><span> Mileage &nbsp;</span></p>
               </div>
               <div className='pl-32 flex gap-4 text-secondary'>
                <FaSearch fontSize={20}/>
                <FiHeart fontSize={20} className='text-primary'/>
                <HiDotsVertical fontSize={20} />
               </div>
           </div>
           <div className='flex flex-col mt-2 border-b pb-4'>
              <div className='flex'>
              <p className='ml-4'><button className='rounded-full h-9 w-9 bg-primary text-white  mt-3'>U</button></p>
                <div className='ml-6 mt-3 relative'>
                   <h1 className='text-secondary font-semibold '>Contact Name &nbsp; &nbsp;</h1>
                   <p className='absolute mt-[-20px] pl-32 text-sm text-secondary'>10.19 am</p>
                   <div>
                    <p className='text-sm text-secondary p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                   </div>
                </div>
              </div>
              <div className='flex'>
              <p className='ml-4'><button className='rounded-full h-9 w-9 bg-gray-600 text-white  mt-3'>U</button></p>
                <div className='ml-6 mt-3 relative'>
                   <h1 className='text-secondary font-semibold '>You &nbsp; &nbsp;</h1>
                   <p className='absolute mt-[-20px] pl-16 text-sm text-secondary'>10.01 am</p>
                   <div>
                    <p className='text-sm text-secondary p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                   </div>
                </div>
              </div>
           </div>
           <div className='border-b pb-4'>
            <p className='text-center text-secondary'>Today</p>
           <div className='flex'>
            
              <p className='ml-4'><button className='rounded-full h-9 w-9 bg-gray-600 text-white  mt-3'>U</button></p>
                <div className='ml-6 mt-3 relative'>
                   <h1 className='text-secondary font-semibold '>You &nbsp; &nbsp;</h1>
                   <p className='absolute mt-[-20px] pl-14 text-sm text-secondary'>10.19 am</p>
                   <div>
                    <p className='text-sm text-secondary p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                   </div>
                   <div className='flex text-secondary text-sm gap-2 mt-6'>
                      <div>
                        <span>Fielname.jpg</span>
                        <img className='w-[150px] bg-gray-300 rounded-lg h-[150px] mt-4' src='' alt=''></img>
                      </div>
                    <div>
                    <div>
                        <span>Fielname.jpg</span>
                        <img className='w-[150px] bg-gray-300 rounded-lg h-[150px] mt-4' src='' alt=''></img>
                      </div>
                    </div>
                   </div>
                </div>
              </div>
           </div>
           <div className='flex gap-8 mt-4 ml-12'>
                  <div>
                      <button className='px-5 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-sky-300 text-white py-2 p-1'>
                    GENRATE INVOICE
                    </button>
                  </div>
                  <div>
                      <button className='px-5 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-sky-300 text-white py-2 p-1'>
                    REQUEST PAYMENT
                    </button>
                  </div>
            <div>
           </div>
           </div>
           <div className='mt-4 ml-8'>
             <div className='relative'>
             <input
                     required
                     type="text"
                     placeholder="Say something"
                     className="form-style w-[97%]  px-10 rounded-lg border-gray-300 py-3  relative outline-blue-500 border-2"
                     /> 
                     <div className='flex absolute ml-[480px] gap-4 mt-[-37px] text-secondary'>
                      <ImAttachment fontSize={22}/>
                        <FaCamera fontSize={22}/>
                        <HiDotsVertical fontSize={22}/>
                </div>
                    <button className='absolute  px-3  py-3 mt-[5px] rounded-lg mt- ml-[-60px]  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-primary text-white'>
                      <FaArrowRight/>
                    </button>
             </div>
                
              </div>
    </div>
  )
}

export default Contact