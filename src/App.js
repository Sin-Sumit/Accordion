import React,{useState} from 'react';
import {questions} from './data';
import Question from './components/Question';
function App() {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };
  return (
   
    <main>
    <div className='container'>
      <h3>question and answer</h3>
      <section className='info'>
        {questions.map((question,index)=>
          <Question key={questions.id} index={question.id} onToggle={() => handleToggle(index)}
          active={clicked === index} {...question}/>
        )}
      </section>
    </div>
  </main>
  
    );
}

export default App;