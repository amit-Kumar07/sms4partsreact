import React from 'react'

const Order= () => {
  return (
    <div className='flex flex-col mt-4 gap-4 ml-2'>
        <div>
        <input
            required
            type="text"
            placeholder="VIN"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
        <div>
        <input
            required
            type="text"
            placeholder="Make"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
                     
        </div>
        <div>
        <input
            required
            type="text"
            placeholder="Modal"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
        <div>
        <input
            required
            type="Year"
            placeholder="Phone Number"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
        <div>
        <input
            required
            type="text"
            placeholder="Mileage"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
    </div>
  )
}

export default Order;