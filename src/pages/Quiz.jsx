// Quiz.js
import React, { useState } from "react";
import "./Quiz.css";
import Navbar from "./NavBar";

function Quiz() {
  const questions = [
    {
      id: 1,
      text: "Quelle est la principale cause du changement climatique ?",
      options: [
        { id: "option1", text: "Les émissions de gaz à effet de serre" },
        { id: "option2", text: "La déforestation" },
        { id: "option3", text: "Les extraterrestres (juste au cas où)" },
      ],
    },
    {
      id: 2,
      text: "Quelle est l'effet de serre le plus important contribuant au réchauffement climatique ?",
      options: [
        { id: "option4", text: "La vapeur d'eau" },
        { id: "option5", text: "Le dioxyde de carbone (CO2)" },
        { id: "option6", text: "Le méthane" },
      ],
    },
  ];

  const [userAnswers, setUserAnswers] = useState({});

  const handleOptionSelect = (questionId, selectedOption) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Answers:", userAnswers);
    if (userAnswers[1] === "option1" && userAnswers[2] === "option5") {
      alert("Bravo, vous avez reussi le quiz !");
    }
    else {
      alert("Dommage, vous n'avez pas reussi le quiz !");
    }
    // TODO: Add logic to handle the submitted answers
  };

  return (
    <>
    <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Quiz sur le Changement Climatique</h2>
        <form onSubmit={handleSubmit}>
          {questions.map((question) => (
            <div key={question.id}>
              <p>{question.text}</p>
              {question.options.map((option) => (
                <label key={option.id}>
                  <input
                    type="radio"
                    name={`question${question.id}`}
                    value={option.id}
                    checked={userAnswers[question.id] === option.id}
                    onChange={() => handleOptionSelect(question.id, option.id)}
                  />
                  {option.text}
                </label>
              ))}
            </div>
          ))}
          <button type="submit">Soumettre</button>
        </form>
      </div>
      <footer className="home-footer">
          <p>&copy; 2023 ÉcoSavvy. Tous droits réservés.</p>
        </footer>
    </>
  );
}

export default Quiz;
