import React from 'react'
import {FiHeart} from 'react-icons/fi'
import {HiDotsVertical}from 'react-icons/hi';
import Accordion from './Accordion';
const Dropdown = () => {
  return (
    <div className='flex flex-col gap-16 rounded-lg'>
            <div className='flex flex-row-reverse  gap-2 px-1 mt-2'>
                    <p><HiDotsVertical fontSize={22} className='font-bold text-3xl'/></p>
                        <p><FiHeart fontSize={22} className='text-primary text-3xl font-semibold'/></p>         
            </div>
            <div className='h-100 bg-red-400'>

            </div>
            <div className='mt-80'>
                <Accordion/>
                <div className='flex text-sm  text-gray-500  justify-between  items-center border'> 
                            <p className=' px-5'>Decline</p>
                            <p className='py-3 px-5'>SMS Buyer</p>
                            <p className='bg-primary text-white   px-6 py-4 '>Send Quote</p>
                </div>
            </div>

    </div>
  )
}

export default Dropdown