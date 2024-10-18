import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <h1>Institute Previous Year Questions</h1>
    <div>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
    </div>
  </nav>
);

export default Navbar;
