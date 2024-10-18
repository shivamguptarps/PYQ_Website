import React from 'react';
import { useParams } from 'react-router-dom';
import questionsData from '../data/questionsData';

const QuestionDetails = () => {
  const { id } = useParams();
  const question = questionsData.find((q) => q.id === parseInt(id));

  if (!question) {
    return <h2>Question not found</h2>;
  }

  return (
    <div className="question-details">
      <h2>{question.title}</h2>
      <p>{question.description}</p>
      <a href={question.link} target="_blank" rel="noopener noreferrer">
        View Question Paper
      </a>
    </div>
  );
};

export default QuestionDetails;
