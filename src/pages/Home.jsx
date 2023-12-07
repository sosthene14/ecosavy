// Home.js
import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Bienvenue sur ÉcoSavvy</h1>
        <p>Comprendre le changement climatique et agir pour un avenir durable</p>
      </header>
      <main className="home-main">
        {/* Ajoutez ici d'autres composants ou sections de votre page d'accueil */}
      </main>
      <footer className="home-footer">
        <p>&copy; 2023 ÉcoSavvy. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Home;
