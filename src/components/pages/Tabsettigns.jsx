

import React from 'react'
import {MdAccountCircle} from 'react-icons/md';
import {FaRegCreditCard} from 'react-icons/fa';
import {FaCheck} from 'react-icons/fa';
import Account from './Account';
import Payments from './Payments';
import { useState } from 'react';
import Complete from './Complete';

const Tabsettigns = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
        {
            id:1,
            icon:<MdAccountCircle fontSize={40}/>,
            title:'ACCOUNT',
            content:<Account/>
        },
        {
          id:2,
          icon:<FaRegCreditCard fontSize={40}/>,
          title:'PAYMENTS',
          content:<Payments/>
      },
     
      {
        id:3,
        icon:<FaCheck fontSize={40}/>,
        title:'COMPLETE',
        content:<Complete />
    },
   
    
    ]

  const clickhandler = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="relative border  shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] flex h-[570px]">
      <div className="flex flex-col border-b-2  text-gray-400  mt-28">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => clickhandler(index)}
          >
            <div  className={`tab-items ${activeTab === index ? "active" : ""}`}>
              <p className='pl-5'>{tab.icon}</p>
              <p className='pr-3'> {tab.title}</p>
            </div>
      
          </div>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabsettigns