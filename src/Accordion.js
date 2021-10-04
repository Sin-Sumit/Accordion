import React, { useState } from 'react'
import questions from './data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Accordion = () => {
    const [active, setActive] = useState(null);

    const handleClick = (id) => {
        if (active === id)
            return setActive(null);
        setActive(id);
    }

    return (
        <div className="container">
            <h3>question and answer</h3>
            <section className="info">
                {questions.map((question) => {
                    return (
                        <article className="question" key={question.id}>
                            <header>
                                <h4>{question.title}</h4>
                                <button className='btn' onClick={() => {handleClick(question.id)}}>
                                    {active === question.id ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                </button>
                            </header>
                            <p>{active === question.id && question.info}</p>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Accordion