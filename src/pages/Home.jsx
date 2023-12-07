// Home.js
import React from "react";
import "./Home.css";
import NavBar from "./NavBar";

function Home() {
  return (
    <>
      <NavBar />
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
            <h3 style={{ textAlign: "left", width: "50%" }}>
              ÉcoSavvy est une plateforme éducative qui vise à sensibiliser le
              public aux enjeux du changement climatique. Nous vous fournissons
              des informations fiables basées sur les rapports du GIEC et de
              l'ADEME, ainsi que des outils interactifs pour comprendre votre
              impact sur l'environnement.
            </h3>
          </section>
          <img
            style={{
              marginTop: "50px",
              width: "20%",
              height: "20%",
              marginBottom: "80px",
            }}
            src="https://previews.123rf.com/images/yupiramos/yupiramos1802/yupiramos180221271/95908446-changement-climatique-dessin-anim%C3%A9-triste-plan%C3%A8te-terre-sablier-temps-vector-illustration.jpg"
          />

          <section>
            <div className="urgency-container">
              <div className="text-content">
                <h2 style={{ textAlign: "left" }}>
                  Comprendre l'Urgence Climatique
                </h2>
                <h3 style={{ textAlign: "left", width: "70%" }}>
                  Le changement climatique est une réalité urgente qui nécessite
                  une action immédiate. Dans cette section, découvrez pourquoi
                  il est crucial de prendre des mesures dès maintenant pour
                  préserver notre planète et les générations futures.
                </h3>
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
                  allowFullscreen
                ></iframe>
              </div>
            </div>
          </section>
          <br />
          <br />
          <div>
                <h2>Causes du Changement Climatique</h2>
                <h3>
                  Le changement climatique est principalement causé par les
                  activités humaines, en particulier les émissions de gaz à
                  effet de serre provenant de la combustion d'énergies fossiles,
                  de l'industrie et de la déforestation.
                </h3><br/><br/>
              </div>
          <section>
            <h2>Impacts du changement climatique</h2>
            <h3
              style={{
                textAlign: "center",
                marginLeft: "100px",
                marginRight: "100px",
              }}
            >
              Hey, le changement climatique est super réel et on ne peut
              vraiment pas le prendre à la légère, tu sais ?! 🌍 Ici, on a
              rassemblé quelques articles super intéressants pour te montrer à
              quel point c'est sérieux. Prends une pause, sirote un café (ou ton
              thé préféré) et découvre ce qui se passe vraiment ! ☕💚
            </h3>
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
                <p>
                  <a href="https://reseauactionclimat.org/rechauffement-climatique-des-vagues-de-chaleur-plus-frequentes-et-plus-intenses/">
                    Réchauffement climatique : des vagues de chaleur plus
                    fréquentes et plus intenses{" "}
                  </a>
                </p>
              </div>
              <div className="card">
                <img
                  src="https://reseauactionclimat.org/wp-content/uploads/2022/11/shahin-khalaji-ntd0ke7wsi-unsplash-700x467.jpg"
                  alt="tree"
                />
                <p>
                  <a href="https://reseauactionclimat.org/climat-et-sante-des-enjeux-lies/">
                    Climat et santé, des enjeux liés
                  </a>
                </p>
              </div>
              <div className="card">
                <img src="https://reseauactionclimat.org/wp-content/uploads/2022/12/justin-clark-h7jieu8slnw-unsplash-200x300.jpg" />
                <p>
                  <a href="https://reseauactionclimat.org/biodiversite-et-climat-meme-combat/">
                    Biodiversité et climat : même combat
                  </a>
                </p>
              </div>
              <button className="btn">
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://reseauactionclimat.org/actualites/impacts-du-changement-climatique"
                >
                  Lire plus
                </a>
              </button>
              <br />
              <br />
              <br />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h2>Emprunte Carbone</h2>
              <img
                style={{ width: "60px", height: "60px" }}
                src="https://c8.alamy.com/compfr/2atnk35/symbole-ou-concept-d-empreinte-carbone-empreinte-pieds-nus-en-herbe-verte-luxuriante-avec-texte-co-2-2atnk35.jpg"
              />
            </div>

            <h3>
              Savais-tu que chacun de nous a une empreinte carbone, comme une
              petite empreinte écologique personnelle ? C'est un peu comme
              l'impact que nous laissons derrière nous en vivant notre vie
              quotidienne. Et devine quoi ? Tu as la possibilité de découvrir la
              tienne ! 🌱 Si l'aventure te tente, n'hésite pas à simuler ton
              empreinte carbone sur notre site. C'est super facile et peut-être
              que tu découvriras quelques astuces sympas pour rendre ton impact
              sur notre belle planète un peu plus léger ! 😊🌍
            </h3>
            <button className="btn">
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://nosgestesclimat.fr/"
              >
                Let's go 🔥
              </a>
            </button>
            <br />
            <br />
            <br />
            <br/>
          </section>
        </main>
        <footer className="home-footer">
          <p>&copy; 2023 ÉcoSavvy. Tous droits réservés.</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
