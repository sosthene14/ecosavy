// Navbar.js
import React from 'react';
import './NavBar.css'; // Assurez-vous de créer ce fichier CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span onClick={() => window.location.pathname = "/"}>Climato</span>
      </div>
      <ul className="nav-links">
        <li><a href="/">Accueil</a></li>
        <li><a href="/solutions">Solutions</a></li>
        <li><a href="/quiz">Quiz</a></li>
        <li><a href="/chatbot">ChatBot</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
