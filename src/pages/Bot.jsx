import React from "react";
import { MessageBox } from "react-chat-elements";
import { MessageList } from "react-chat-elements";
import Navbar from "./NavBar";

const messageListReference = React.createRef();

const Bot = () => {
  return (
    <div>
      <Navbar />
      <h3>
        Bienvenue ! Cliquez sur le lien ci-dessous pour démarrer une
        conversation avec notre chatbot :<br/><br/>
        <a href="https://huggingface.co/spaces/SaileshSivan/Conversation_chatbot">Discuter avec le Chatbot</a>
      </h3>
      <footer className="home-footer">
        <p>&copy; 2023 ÉcoSavvy. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Bot;
