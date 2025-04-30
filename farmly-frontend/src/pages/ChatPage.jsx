import React, { useEffect, useState } from 'react';
import socket from '../socket'; // Correct import of the socket instance

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(''); // State for input message

  useEffect(() => {
    // Check if the socket is connected first
    console.log(socket); // Should show the socket instance

    // Listen for 'newMessage' event from backend
    socket.on('newMessage', (message) => {
      console.log('New message received:', message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('newMessage'); // Remove event listener when the component unmounts
    };
  }, []);

  const handleSendMessage = () => {
    if (!message.trim()) return; // Prevent sending empty messages
  
    // Replace with actual MongoDB ObjectId for sender and recipient
    const senderId = '60c72b2f9e5b6f10b8e2a5b8';  // Example ObjectId for sender
    const recipientId = '60c72b3c9e5b6f10b8e2a5b9';  // Example ObjectId for recipient
    const content = message;
  
    // Emit the 'sendMessage' event to backend with senderId, recipientId, and content
    socket.emit('sendMessage', { senderId, recipientId, content });
  
    // Clear the message input after sending
    setMessage('');
  };
  

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col h-[400px] overflow-auto bg-gray-100 p-4 rounded-lg mb-4">
        <div className="flex-1 space-y-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="flex items-start space-x-2 bg-gray-200 p-2 rounded-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full">
                  {msg.sender[0].toUpperCase()}
                </div>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-700">{msg.sender}</div>
                <p className="text-gray-600">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
