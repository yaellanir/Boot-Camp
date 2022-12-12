import React from 'react'
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q1Input from "./Q1-input";
import Q2Input from "./Q2-input";
import QuizTitle from "./Quiz-title";
import "./Quiz.css"
const Quiz = () => {
  return (
    <div className="quiz">
      <QuizTitle/>  
      <Q1/>
      <Q1Input/>
      <Q2/>
      <Q2Input/>
    </div>
  )
}

export default Quiz