
import React from 'react'
import DateRangepicker from './DateRangepicker';
import Dropdownbtn from '../Dropdownbtn';
import NewReq from './NewReq';
const { useState } = React;

const Request = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
        {
            id:1,
            tabTitle:'New Requests(20)',
            content:<NewReq/>
        },
        {
            id:2,
            tabTitle:'Active Requests(30)',
            content:'Active Requests data here'
        },
        {
            id:3,
            tabTitle:'Archived(20)',
            content:'Archieved data here'
        },
    ]

  const clickhandler = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="relative max-h-full">
      <div className="flex border-b-2 text-gray-400 text-sm justify-between">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => clickhandler(index)}
          >
            {tab.tabTitle}
          </div>
        ))}
      </div>
      <div className='flex justify-around border-b-2 p-6'>
      <div><Dropdownbtn/></div>
      <div><DateRangepicker/></div>
      </div>
      <div className="">{tabs[activeTab].content}</div>
    
    </div>
  );
};
export default Request