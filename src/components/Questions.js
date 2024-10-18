import React from 'react';
import { Link } from 'react-router-dom';
import questionsData from '../data/questionsData';

const Questions = () => (
  <div className="questions">
    <h2>Previous Year Questions</h2>
    <ul>
      {questionsData.map((question) => (
        <li key={question.id}>
          <Link to={`/questions/${question.id}`}>{question.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Questions;
