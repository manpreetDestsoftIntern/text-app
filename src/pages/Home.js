import React, { useEffect, useState } from 'react'
import SignUp from "../components/CustomForm.js"
import { io } from "socket.io-client";

const Home = () => {
const [message, setMessage] = useState('');
const [chat, setChat] = useState([]);
const socket = io('http://localhost:5001'); // Connect to the backend server

// Send message
const sendMessage = () => {
  if (message.trim()) {
    socket.emit('send_message', { message });
    setMessage('');
  }
};

   // Receive message
   useEffect(() => {
    socket.on('set_username', () => {"manu"});
    socket.on('receive_message', (data) => {
      setChat((prevChat) => [...prevChat, data.message]);
    });

    // Cleanup on unmount
    return () => {
      socket.off('receive_message');
    };
  }, []);

  return (
    <div>
  <div>
      <h1>Chat App</h1>
      <div>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>    </div>
  )
}

export default Home