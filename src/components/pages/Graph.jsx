import React from 'react'
import DateRangepicker from './DateRangepicker'
import Chart from './Chart'
const Graph = () => {
  return (
    <div className='flex flex-col my-10'>
       <div><DateRangepicker/></div> 
        <div className='mt-1'><Chart/></div>
    </div>
  )
}

export default Graph