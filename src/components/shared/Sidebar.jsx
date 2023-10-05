import React from 'react';
import classNames from 'classnames';
import { DASHBOARD_SIDEBAR_LINKS} from '../../lib/consts/Navigation';
import { Link, useLocation } from 'react-router-dom';
const Sidebar = () => {
  return (
    <div className='flex'>
      <div className='py-40 border-r-2 ml-4  pr-4'>{ DASHBOARD_SIDEBAR_LINKS.map((item) => (
        <SidebarLink key={item.key}
          item={item}/>
      ))} </div>
    </div>
  )
}  


function SidebarLink({item}){
  
  const {pathname} = useLocation();
  const linkClass ='flex flex-col items-center  my-4 p-3  w-32 h-15 rounded-xl   shadow  shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]';

  return (
    <Link to={item.path} className= 'flex flex-col items-center text-gray-300 hover:text-black transition-all duration-75 gap-2'>
       <div className={classNames(pathname === item.path ? 'bg-primary opacity-100 text-white':'text-secondary hover:text-black', linkClass)}>
       <span>{item.icon}</span>
        <span>{item.label}</span>
       </div>
    </Link> 
  )
}
export default Sidebar 