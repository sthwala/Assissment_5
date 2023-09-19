import React, { useState, useEffect } from 'react';

function QuestionDashboard() {
  // State to store the total number of questions
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [totalAgree, setTotalAgree] = useState(0);
  const [totalNeutral, setTotalNeutral] = useState(0);
  const [totalDisagree, setTotalDisagree] = useState(0);

  useEffect(() => {
    const questions = Object.keys(localStorage);
    // Function to retrieve questions from localStorage
    const getQuestionsFromLocalStorage = () => {
      //const storedQuestions = localStorage.getItem(questions); // 'questions' should be your localStorage key
        //const parsedQuestions = JSON.parse(storedQuestions);
        setTotalQuestions(questions.length); 
    };
    // Call the function to get the initial count
    getQuestionsFromLocalStorage();
  }, []);

    useEffect(() => {
        const answers = Object.keys(localStorage);
        const totalNum = answers.reduce((count, questionKey) => {
            const answerObj = JSON.parse(localStorage.getItem(questionKey));
            return count + (answerObj.answer === 'Agree' ? 1 : 0);
        }, 0);
        setTotalAgree(totalNum);
    }, []);
    useEffect(() => {
        const answers = Object.keys(localStorage);
        const totalNum = answers.reduce((count, questionKey) => {
            const answerObj = JSON.parse(localStorage.getItem(questionKey));
            return count + (answerObj.answer === 'Disagree' ? 1 : 0);
        }, 0);
        setTotalDisagree(totalNum);
    }, []);
    useEffect(() => {
        const answers = Object.keys(localStorage);
        const totalNum = answers.reduce((count, questionKey) => {
            const answerObj = JSON.parse(localStorage.getItem(questionKey));
            return count + (answerObj.answer === 'Neutral' ? 1 : 0);
        }, 0);
        setTotalNeutral(totalNum);
    }, []);

      return (
    <div className="question-dashboard">
      <h2>Total Questions: {totalQuestions}</h2>
      <h2>Total Agrees: {totalAgree}</h2>
      <h2>Total Neutrals: {totalNeutral}</h2>
      <h2>Total Disagrees: {totalDisagree}</h2>
    </div>
  );
};

export default QuestionDashboard;
