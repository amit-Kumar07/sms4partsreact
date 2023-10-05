import React from 'react'
import Contact from './pages/Contact'
import Invoice from './pages/Invoice';
import {RxCross2} from 'react-icons/rx';
import Sample from './pages/Sample';
const Messages = () => {
  return (
    <div className='flex w-[1250px] gap-4 h-full mt-8'>
        <div className='w-[20%] rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
            <div className='flex flex-col'>
                 <div className='flex flex-col  justify-content p-5 border-b-2 '>
                    <h1 className='text-xl font-semibold text-secondary'>Messages</h1>
                    <div className='mt-2 '>
                    <input
                     required
                     type="text"
                     placeholder="Search for contact"
                     className="form-style sm:w-full lg:w-50 px-6 rounded-md py-2 border-2 "
                     /> 
                    </div>    
                 </div>
                 <div className='flex flex-col mt-5 border-b-2 pb-6'>
                      <p className='text-secondary pl-6 '>New Requests (4)</p>
                      <div className='bg-primary h-[88px] w-[82%] rounded-lg relative  flex flex-col ml-5 mt-5  cursor-pointer hover:opacity-90 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                              <div className='flex'>
                                <p className='ml-4'><button className='rounded-full h-9 w-9 bg-white text-primary  absolute mt-3'>U</button></p>
                                <p className='absolute  text-white  ml-28  mt-3'>Contact</p>
                              </div>
                              <p className='absolute text-white mt-14 pl-4' >Name (2)</p>
                      </div>
                      <div className='bg-white h-[88px] w-[82%] rounded-lg relative  flex flex-col ml-5 mt-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] border text-secondary hover:text-black cursor-pointer'>
                              <div className='flex'>
                                <p className='ml-4'><button className='rounded-full h-9 w-9 bg-yellow-400 text-orange-500 hover:opacity-90 absolute mt-3'>U</button></p>
                                <p className='absolute  ml-28  mt-3'>Contact</p>
                              </div>
                              <p className='absolute  mt-14 pl-4' >Name (2)</p>
                      </div>
                      <div className='bg-white h-[88px] w-[82%] rounded-lg relative  flex flex-col ml-5 mt-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] border text-secondary hover:text-black cursor-pointer'>
                              <div className='flex'>
                                <p className='ml-4'><button className='rounded-full h-9 w-9 bg-sky-400 text-white hover:opacity-90 absolute mt-3'>U</button></p>
                                <p className='absolute  ml-28  mt-3'>Contact</p>
                              </div>
                              <p className='absolute  mt-14 pl-4' >Name (2)</p>
                      </div>
                      <div className='bg-white h-[88px] w-[82%] rounded-lg relative  flex flex-col ml-5 mt-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] border text-secondary hover:text-black cursor-pointer'>
                              <div className='flex'>
                                <p className='ml-4'><button className='rounded-full h-9 w-9 bg-red-500 text-white hover:opacity-90 absolute mt-3'>U</button></p>
                                <p className='absolute  ml-28  mt-3'>Contact</p>
                              </div>
                              <p className='absolute  mt-14 pl-4' >Name (2)</p>
                      </div>
                 </div>
                 
                 <div className='flex flex-col mt-5 border-b-2 pb-6'>
                      <p className='text-secondary pl-6 '>New Requests (4)</p>
                      <div className='bg-primary h-[88px] w-[82%] rounded-lg relative  flex flex-col ml-5 mt-5  cursor-pointer hover:opacity-90 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
                              <div className='flex'>
                                <p className='ml-4'><button className='rounded-full h-9 w-9 bg-white text-primary  absolute mt-3'>U</button></p>
                                <p className='absolute  text-white  ml-28  mt-3'>Contact</p>
                              </div>
                              <p className='absolute text-white mt-14 pl-4' >Name (2)</p>
                      </div>
                      <div className='bg-white h-[88px] w-[82%] rounded-lg relative  flex flex-col ml-5 mt-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] border text-secondary hover:text-black cursor-pointer'>
                              <div className='flex'>
                                <p className='ml-4'><button className='rounded-full h-9 w-9 bg-yellow-400 text-orange-500 hover:opacity-90 absolute mt-3'>U</button></p>
                                <p className='absolute  ml-28  mt-3'>Contact</p>
                              </div>
                              <p className='absolute  mt-14 pl-4' >Name (2)</p>
                      </div>
                      <div className='bg-white h-[88px] w-[82%] rounded-lg relative  flex flex-col ml-5 mt-5 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] border text-secondary hover:text-black cursor-pointer'>
                              <div className='flex'>
                                <p className='ml-4'><button className='rounded-full h-9 w-9 bg-sky-400 text-white hover:opacity-90 absolute mt-3'>U</button></p>
                                <p className='absolute  ml-28  mt-3'>Contact</p>
                              </div>
                              <p className='absolute  mt-14 pl-4' >Name (2)</p>
                      </div>
                 </div>
            </div>
        </div>
        <div className='w-[54%] border h-[760px] rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
          <Contact />
        </div>
        <div className=' w-[20%] border rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] h-[770px]'>
          <div className='flex flex-col'>
          <div className='flex gap-20 py-3 ml-3 text-gray-500'>
            <p>Genrate Invoice</p>
            <p className='mt-1 cursor-pointer'><RxCross2/></p>
          </div>
          <Invoice/>
          <Sample/>
          <div className='flex  border rounded-lg mt-2'>
            <button className='w-full text-secondary'>Saved Draft</button>
            <button className='w-full bg-primary py-4 text-white p-1'>Genrate Invoice</button>
          </div>
          </div>
          
        </div>
    </div>
  )
}

export default Messages