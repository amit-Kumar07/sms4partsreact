import React from 'react'
import Tabsettigns from './pages/Tabsettigns';
import Button from './Button';
const navlinks = [
  {
    title:'Part Request',
    link:"/",
  }
  ,
  {
    title: 'Help & Support',
    link:"/",
  },
  {
    title: 'Contact Us',
    link:"/",
  }
  ,
  {
    title:  <Button/>,
    link:"/",
  },
]
const Settings = () => {
  return (
    <div className='flex flex-col'>
      <div className='max-w-[1540px] mt-2 p-4 pr-2  flex justify-between items-center py-2 border-b-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] '>
            <div className='text-secondary text-[42px]'>
              LOGO
            </div>
            <div className='hidden md:flex gap-12 items-baseline pr-2'>
            {navlinks.map((link, index) => (
                           <a  key={index} href={link.link} className='text-secondary transition-all duration-100 hover:text-black font-semibold'>{link.title}</a>
                         ))}
            </div>
    </div> 
    <div className='w-[1090px] mt-5 mx-auto  rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]'>
         <div className='w-[13%] border-r-1 rounded-l-lg'>
          <Tabsettigns/>
         </div>
         </div> 
    </div>
  )
} 

export default Settings