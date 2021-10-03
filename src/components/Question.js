import React  from 'react';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({index,title,info,active,onToggle}) => {
  
  

  return (
  <article className='question'>
    <header>
      <h4>{title}</h4>
      <p className='btn' onClick={onToggle}>
        {active ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </p>
    </header>
   {active && <p>{info}</p>}
  </article>
    );
};

export default Question;