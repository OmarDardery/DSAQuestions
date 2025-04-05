import React from 'react';
import './App.css';
import Question from "./question.js";
import questions from "./questions.js";
function App() {
  return (
    <div className="App">
      <div>
        <h1 style={{color: "whitesmoke"}}>click on the box right after view answer to reveal the answer</h1>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "100px"}}>
          {
            questions.map((question, index) =>{
              return <Question number={index + 1} key={index} question = {question} />
            })
          }
        </div>
        
      </div>
    </div>
  );
}

export default App;
