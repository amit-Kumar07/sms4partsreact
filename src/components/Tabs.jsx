
import React from 'react'
import Graph from './pages/Graph';
const { useState } = React;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
        {
            id:1,
            tabTitle:'REQUESTS',
            title:'Title 1',
            content:<Graph/>
        },
        {
            id:2,
            tabTitle:'PAYMENTS',
            title:'Title 2',
            content:'Payments data here'
        },
        {
            id:3,
            tabTitle:'SHIPMENTS',
            title:'Title 3',
            content:'Shipmentd data here'
        },
        {
            id:4,
            tabTitle:'OPEN ISSUES',
            title:'Title 4',
            content:'Open issues data here'
        },
        {
            id:5,
            tabTitle:'TOTAL ORDERS',
            title:'Title 5',
            content:'Total data here'
        },
    
    ]

  const clickhandler = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="relative border max-h-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-md mt-2">
      <div className="flex border-b-2  justify-between text-gray-400 font-semibold sm:text-sm">
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
      <div className="">{tabs[activeTab].content}</div>
    </div>
  );
};
export default Tabs