import React from 'react'

const Billing= () => {
  return (
    <div className='flex flex-col mt-4 gap-4 ml-2'>
        <div>
        <input
            required
            type="text"
            placeholder="Address"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
        <div>
        <input
            required
            type="text"
            placeholder="City"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
                     
        </div>
        <div>
        <input
            required
            type="text"
            placeholder="State"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
        <div>
        <input
            required
            type="Country"
            placeholder="Phone Number"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
        <div>
        <input
            required
            type="text"
            placeholder="Pincode"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
    </div>
  )
}

export default Billing;