import React from 'react'
import { Link } from 'react-router-dom';
import DashboardsStatsGrid from './DashboardsStatsGrid';
import Activities from './pages/Activities';
import Tabs from './Tabs';

const Dashboard = () => {
  return (
    <div className='flex  flex-col gap-4 w-[1250px] p-2 rounded-lg mt-4'>
      <div className='md:flex  justify-between'>
          <div>
          <Link to="/">
            <h2 className='text-3xl text-secondary '>Dashboard</h2>
          </Link>
          </div>
          <div>
            <button className='px-14 rounded-md shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-primary text-white py-2 p-1 mr-10'>
              CREATE ORDER
            </button>
         </div>
      </div>
      <div className='flex max-w-[1250px] '>
        <DashboardsStatsGrid/>
      </div>
      <div className='md:flex flex-wrap  w-[1250px] gap-4 mt-6'>
        <div className='md:w-[72%] lg:grid-cols-2 grid-cols-1'>
          <Tabs/>
        </div>
        <div>
          <Activities/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard