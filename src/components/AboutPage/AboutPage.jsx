import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <center>
          <img src='/Images/stack.png' alt="Tech Stack"/>
        </center>
      <h3>Technology Stack</h3>
      <ul>
        <li>
          React
        </li>
        <li>
          Redux-Saga
        </li>
        <li>
          Express
        </li>
        <li>
          Node.js
        </li>
        <li>
        Postgresql
        </li>
        <li>Material UI</li>

      </ul>
      </div>
    </div>
  );
}

export default AboutPage;
