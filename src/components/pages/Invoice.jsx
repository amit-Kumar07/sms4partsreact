import React from 'react';
import {useState} from 'react';
import './Accordion.css';
import Customer from '../pages/Customer';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {FaCheckCircle} from 'react-icons/fa';
import Billing from './Billing';
import Order from './Order';
const data = [
    {
        question: 'Customer Details',
        answer: <Customer/>
    },
    {
        question: 'Billing Address',
        answer: <Billing/>
    },
    {
        question: 'Orders  Details',
        answer: <Order/>
    },
]
const Accordion = () => {
    const [selected, setSelected] = useState(null);

const toggle = (i) => {
  if(selected === i){
    return setSelected(null)
  }
  setSelected(i)
}


  return (
    <div className='wrapper'>
         <div className='w-[100%]'>
              {data.map((item, i) => (
                <div className='item border'>
                    <div className='title' onClick={() => toggle(i)}>
                     <FaCheckCircle fontSize={28} className='text-primary'/>
                       <p className='text-gray-500 flex flex-row-reverse gap-4 text-[15px] '>{item.question}
                       </p>
                        
                       <sapn ><RiArrowDropDownLine fontSize={30} className='text-gray-400' /></sapn>
                    </div>
                    <div className={selected === i ? 'content show' : 'content'}>
                        {item.answer}
                    </div>
                </div>
              ))}
         </div>
  
    </div>
  )
    
}

export default Accordion