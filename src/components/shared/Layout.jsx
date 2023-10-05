
import React from 'react'
import{Outlet} from "react-router-dom";
import { useState } from 'react';
import {FaSearch, FaEnvelope, FaBell} from 'react-icons/fa';
import{AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {RiLayoutGridFill} from 'react-icons/ri'
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';
import Button  from '../Button';

const navlinks = [
    {
      title: < FaSearch />,
      link:"/",
    }
    ,
    {
      title: < FaEnvelope />,
      link:"/",
    },
    {
      title:  <FaBell/>,
      link:"/",
    }
    ,
    {
      title:  <RiLayoutGridFill/>,
      link:"/",
    },
    {
      title:  <Button/>,
      link:"/",
    },
]

const Layout = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div>
         <div className='max-w-[1540px] mt-2 p-4 pr-2  flex justify-between items-center py-2 border-b-2 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] '>
          <NavLink to='/'>
          <div className='text-secondary text-[42px] hover:text-black transition-all duration-75'>
              LOGO
            </div>
          </NavLink>

            {
              toggle ?
              <AiOutlineClose onClick={() => setToggle(!toggle)} className='md:hidden block text-secondary text-2xl'/> :
              <AiOutlineMenu onClick={() => setToggle(!toggle)} className='md:hidden block text-secondary text-2xl'/> 
            }

            <div className='hidden md:flex gap-12 items-baseline pr-2'>
            {navlinks.map((link, index) => (
                           <a  key={index} href={link.link} className='text-secondary transition-all duration-100 hover:text-black'>{link.title}</a>
                         ))}
            </div>
            {/* Responsive menu*/}
            <div className={` md:hidden inline-flex ml-[200px] w-full px-3 text-secondary  fixed  top-[104px] h-screen ${toggle ? 'left-[0]':'left-[-100%]'}`}>
            {navlinks.map((link, index) => (
                           <a key={index} href={link.link} className='text-secondary transition-all duration-100 hover:text-black p-2'>{link.title}</a>
                         ))}
            </div>
         </div>
         <div className='flex'>
         <Sidebar />
          <div className='p-4'>
        <div>{<Outlet/>}</div> 
         </div>
         </div> 
    </div>
  )
}

export default Layout













