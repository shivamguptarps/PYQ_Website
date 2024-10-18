import React from 'react';
import './Home.css'; // Import styles specific to the Home component

const Home = () => {
  const questionPapers = [
    { title: 'Mathematics - 2023', description: 'Complete question paper of Mathematics for 2023.', link: '/questions/1' },
    { title: 'Physics - 2022', description: 'Complete question paper of Physics for 2022.', link: '/questions/2' },
    { title: 'Chemistry - 2021', description: 'Complete question paper of Chemistry for 2021.', link: '/questions/3' },
    // Add more question papers as needed
  ];

  return (
    <div className="home">
      <h2>Welcome to the Previous Year Questions Portal</h2>
      <p>Find question papers from past years and prepare for exams effectively.</p>
      <div className="card-container">
        {questionPapers.map((paper, index) => (
          <div className="card" key={index}>
            <h3>{paper.title}</h3>
            <p>{paper.description}</p>
            <a href={paper.link} className="card-button">View Paper</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
