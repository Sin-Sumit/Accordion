import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return (
    <main>
      <div className='container'>
        <h3>question and answer</h3>
        <section className='info'>
          <div className="tabs">
            {data.map((question) =>
              <SingleQuestion key={question.id} {...question} />
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
