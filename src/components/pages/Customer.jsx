import React from 'react'

const Customer= () => {
  return (
    <div className='flex flex-col mt-4 gap-4 ml-2'>
        <div>
        <input
            required
            type="text"
            placeholder="First Name"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
        <div>
        <input
            required
            type="text"
            placeholder="Lasst Name"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
                     
        </div>
        <div>
        <input
            required
            type="email"
            placeholder="Email address"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
        <div>
        <input
            required
            type="text"
            placeholder="Phone Number"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
        <div>
        <input
            required
            type="text"
            placeholder="Fax Number"
            className='border py-3 rounded-lg  pl-6 outline-1 shadow'
                     /> 
        </div>
    </div>
  )
}

export default Customer