// Chatbot.js
import React from 'react';
import { MessageList, MessageForm, Message } from 'react-chatbot-kit';
import "./Chatbot.css";
import Chatbot from "react-chatbot-kit";

import config from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function Chatbots() {
  const config = {
    botName: 'ÉcoBot',
    lang: 'fr',
    customStyles: {
      botMessageBox: {
        backgroundColor: '#61dafb',
      },
      chatButton: {
        backgroundColor: '#61dafb',
      },
    },
  };

  const messages = [
    {
      id: 1,
      author: 'ÉcoBot',
      message: 'Salut! Comment puis-je vous aider aujourd\'hui ?',
    },
  ];

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Ajoutez ici la logique pour traiter la nouvelle message
  };

  return (
    <div>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        messageList={MessageList}
        messageForm={MessageForm}
        message={Message}
        handleNewUserMessage={handleNewUserMessage}
      />
    </div>
  );
}

export default Chatbots;
