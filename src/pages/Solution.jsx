import React from "react";
import "./Solution.css";
import "./Home.css";
import Navbar from "./NavBar";

const Solution = () => {
  return (
    <div>
      <Navbar />
      <section>
        <h2>Des Solutions à Portée de Main</h2>
        <div className="solutions-container">
          <h3>
            Il existe plusieurs solutions afin de lutter contre le changement
            climatique notament.
          </h3>
          <ul style={{ marginLeft: "70px" }}>
            <li>Inverser la courbe</li>
            <li>La sobriété, une nécessité</li>
            <li>L’élimination du carbone, une fausse solution</li>
            <li>Énergie : indispensables renouvelables</li>
            <li>Industrie : les technologies pour décarboner existent</li>
            <li>
              Agriculture et alimentation : moins de viande, plus de pratiques
              durables
            </li>
          </ul>
          <div className="solutions-content">
            <h3>
              Vous pouvez trouver plus de détails sur les solutions ici 🌿💪 Prends
              le temps de découvrir quelques idées réconfortantes et
              positivement impactantes.
            </h3>
            <button className="btn" style={{ marginLeft: "100px" }}>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://reseauactionclimat.org/6e-rapport-du-giec-quelles-solutions-face-au-changement-climatique/"
              >
                Découvrir 🔥
              </a>
            </button>
          </div>
          <br />
          <br />
          <br />
          <div
            className="video-content"
            style={{ display: "flex", gap: "10px", justifyContent: "center" }}
          >
            <iframe
              style={{ borderRadius: "10px" }}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NV9qGOJtddM?si=hInXn6EUPuSLW54K"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
            <div></div>
            <iframe
              style={{ borderRadius: "10px" }}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iCDYAunYQFA?si=zcLKHIBqEcBjzFEI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <footer className="home-footer">
        <p>&copy; 2023 ÉcoSavvy. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Solution;
