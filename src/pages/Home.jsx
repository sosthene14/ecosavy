// Home.js
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Bienvenue sur ÉcoSavvy</h1>
        <p>
          Comprendre le changement climatique et agir pour un avenir durable
        </p>
      </header>
      <main className="home-main">
        <section style={{ marginLeft: "30px", marginRight: "30px" }}>
          <h2 style={{ textAlign: "left" }}>Qu'est-ce que ÉcoSavvy ?</h2>
          <p style={{ textAlign: "left", width: "50%" }}>
            ÉcoSavvy est une plateforme éducative qui vise à sensibiliser le
            public aux enjeux du changement climatique. Nous vous fournissons
            des informations fiables basées sur les rapports du GIEC et de
            l'ADEME, ainsi que des outils interactifs pour comprendre votre
            impact sur l'environnement.
          </p>
        </section>
        <section>
          <div className="urgency-container">
            <div className="text-content">
              <h2 style={{ textAlign: "left" }}>
                Comprendre l'Urgence Climatique
              </h2>
              <p style={{ textAlign: "left", width: "70%" }}>
                Le changement climatique est une réalité urgente qui nécessite
                une action immédiate. Dans cette section, découvrez pourquoi il
                est crucial de prendre des mesures dès maintenant pour préserver
                notre planète et les générations futures.
              </p>
            </div>
            <div className="video-content">
              <iframe
                style={{ borderRadius: "10px" }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/8nzRXxPnlPQ?si=XTIvQ1Rsw1hHlJCl"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
        <section>
          <h1>IMPACTS DU CHANGEMENT CLIMATIQUE</h1>
          <p
            style={{
              textAlign: "center",
              marginLeft: "100px",
              marginRight: "100px",
            }}
          >
            Hey, le changement climatique est super réel et on ne peut vraiment
            pas le prendre à la légère, tu sais ?! 🌍 Ici, on a rassemblé
            quelques articles super intéressants pour te montrer à quel point
            c'est sérieux. Prends une pause, sirote un café (ou ton thé préféré)
            et découvre ce qui se passe vraiment ! ☕💚
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              marginLeft: "100px",
              marginTop: "80px",
            }}
          >
            <div className="card">
              <img
                src="https://reseauactionclimat.org/wp-content/uploads/2023/03/080_hl_jffort_1815938-768x512.jpg"
                alt="tree"
              />
              <p>
                <a href="https://reseauactionclimat.org/quels-sont-les-impacts-du-changement-climatique-en-france/">
                  Quels sont les impacts du changement climatique en France ?
                </a>
              </p>
            </div>
            <div className="card">
              <img
                src="https://reseauactionclimat.org/wp-content/uploads/2022/07/000_32et7wj-700x467.jpg"
                alt="tree"
              />
            </div>
            <div className="card">
              <img
                src="https://reseauactionclimat.org/wp-content/uploads/2022/11/shahin-khalaji-ntd0ke7wsi-unsplash-700x467.jpg"
                alt="tree"
              />
              <p><a href="https://reseauactionclimat.org/climat-et-sante-des-enjeux-lies/">Climat et santé, des enjeux liés</a></p>
            </div>
            <div className="card">
              <img src="https://reseauactionclimat.org/wp-content/uploads/2022/12/justin-clark-h7jieu8slnw-unsplash-200x300.jpg" />
              <p>
                <a href="https://reseauactionclimat.org/biodiversite-et-climat-meme-combat/">
                  Biodiversité et climat : même combat
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="home-footer">
        <p>&copy; 2023 ÉcoSavvy. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default Home;
