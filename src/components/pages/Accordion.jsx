import React from 'react';
import {useState} from 'react';
import './Accordion.css';

import {RiArrowDropDownLine} from 'react-icons/ri';
import {BsCheckCircle} from 'react-icons/bs';
const data = [
    {
        question: 'Request Details',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
        question: 'Quote Details',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
        question: 'Billing Details',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
        question: 'Order Details',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
    },
    {
        question: 'Other Detials',
        answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
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
         <div className='accordion'>
              {data.map((item, i) => (
                <div className='item border'>
                    <div className='title' onClick={() => toggle(i)}>
                       <h2 className='text-gray-400 flex flex-row-reverse gap-4'>{item.question}
                       <BsCheckCircle fontSize={30} className='text-gray-500'/>
                       </h2>
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