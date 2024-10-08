import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const navigate = useNavigate();

  const correctAnswers = {
    answer1: 'A syntax extension for JavaScript',
    answer2: 'A lightweight representation of the real DOM',
    answer3: 'A reusable piece of UI'
  };

  const handleSubmit = () => {
    if (
      answer1 === correctAnswers.answer1 &&
      answer2 === correctAnswers.answer2 &&
      answer3 === correctAnswers.answer3
    ) {
      alert('You have qualified for the next stage!');
      navigate('/welcome'); // Navigate to the Welcome page
    } else {
      alert('Please answer all questions correctly');
    }
  };

  return (
    <div className="container">
      <h1>Take Quiz to Qualify</h1>
      <p>Welcome to the qualifier quiz</p>
      <div>
        <label>
          Question 1: What is JSX?
          <select value={answer1} onChange={(e) => setAnswer1(e.target.value)}>
            <option value="">Select an answer</option>
            <option value="A syntax extension for JavaScript">A syntax extension for JavaScript</option>
            <option value="A type of database">A type of database</option>
            <option value="A CSS framework">A CSS framework</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Question 2: What is the virtual DOM?
          <select value={answer2} onChange={(e) => setAnswer2(e.target.value)}>
            <option value="">Select an answer</option>
            <option value="A lightweight representation of the real DOM">A lightweight representation of the real DOM</option>
            <option value="A type of server">A type of server</option>
            <option value="A JavaScript library">A JavaScript library</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Question 3: What is a component in React?
          <select value={answer3} onChange={(e) => setAnswer3(e.target.value)}>
            <option value="">Select an answer</option>
            <option value="A reusable piece of UI">A reusable piece of UI</option>
            <option value="A type of function">A type of function</option>
            <option value="A CSS class">A CSS class</option>
          </select>
        </label>
      </div>
      <button onClick={handleSubmit}>Submit Quiz</button>
    </div>
  );
};

export default QuizPage;