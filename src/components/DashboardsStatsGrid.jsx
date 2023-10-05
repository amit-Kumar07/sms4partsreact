import React from 'react'
import {FaArrowUp, FaArrowDown} from 'react-icons/fa'
const DashboardsStatsGrid = () => {
  return (
    <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-4'>
    <BoxWrapper>             
          <div className="px-16 py-8">
              <div className="text-center flex flex-col gap-2 bg-green">
                <h1 className="font-bold text-5xl text-gray-500">30</h1>
                <h5 className='text-gray-300 tracking-wide'>REQUESTS</h5>
                <div className='flex flex-row text-primary opacity-75 gap-4'>
                    <FaArrowUp/>
                    <span>42%</span>
                </div>
              </div>
            </div>
    </BoxWrapper>
    <BoxWrapper>
    <div className="px-16 py-8">
              <div className="text-center flex flex-col gap-2 py-3">
                <h1 className="font-bold text-5xl text-gray-500">30</h1>
                <h5 className='text-gray-300 tracking-wide'>PAYMENTS</h5>
                <div className='flex flex-row text-primary opacity-75 gap-4'>
                    <FaArrowUp/>
                    <span>12%</span>
                </div>
              </div>
            </div>
    </BoxWrapper>
    <BoxWrapper>
    <div className="px-16 py-8">
              <div className="text-center flex flex-col gap-2">
                <h1 className="font-bold text-5xl text-gray-500">30</h1>
                <h5 className='text-gray-300 tracking-wide'>SHIPMENTS</h5>
                <div className='flex flex-row text-primary opacity-75 gap-4'>
                    <FaArrowUp/>
                    <span>10%</span>
                </div>
              </div>
            </div>
    </BoxWrapper>
    <BoxWrapper>
    <div className=" px-16 py-8">
              <div className="text-center flex flex-col gap-2 py-3">
                <h1 className="font-bold text-5xl text-gray-500">30</h1>
                <h5 className='text-gray-300 tracking-wide'>OPEN ISSUES</h5>
                <div className='flex flex-row text-red-400 opacity-75 gap-4'>
                    <FaArrowDown/>
                    <span>12%</span>
                </div>
              </div>
            </div>
    </BoxWrapper>
    <BoxWrapper >
    <div className="px-16 py-8">
              <div className="text-center flex flex-col gap-2">
                <h1 className="font-bold text-5xl text-gray-500">30</h1>
                <h5 className='text-gray-300 tracking-wide'>TOTAL ORDERS</h5>
                <div className='flex flex-row text-red-400 opacity-75 gap-4'>
                    <FaArrowDown/>
                    <span>10%</span>
                </div>
              </div>
            </div>
    </BoxWrapper>

    </div>
  )
}

function BoxWrapper({children}){
  return <div className=' flex  items-center rounded-xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>{children}</div>
}
export default DashboardsStatsGrid