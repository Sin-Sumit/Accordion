import React from 'react';

const Question = ({ id, title, info }) => {
  return (
    <div>
      <input id={id} name="accordion" type="radio" checked></input>
      <div className="title">
        <label for={id}>{title}</label>
      </div>
      <article>
        <p>{info}</p>
      </article>
    </div>
  );
};

export default Question;
