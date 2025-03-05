import { useState } from "react";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/gemini/generate", { question: input });
      setMessages((prev) => [...prev, { text: response.data.answer, sender: "ai" }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [...prev, { text: "Error getting response.", sender: "ai" }]);
    }
    setLoading(false);
  };

  const newChat = () => {
    if (messages.length > 0) {
      setChats([...chats, messages]);
      setMessages([]);
    }
  };

  const deleteChat = (index) => {
    setChats(chats.filter((_, i) => i !== index));
  };

  const uploadFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File uploaded:", file.name);
      // Handle file processing here
    }
  };

  return (
    <div className="flex h-screen w-full bg-gray-600 text-white mt-16"> {/* Black background, white text */}
      {/* Sidebar for previous chats */}
      <div className="w-1/4 bg-gray-400 p-4 space-y-2"> {/* Dark gray sidebar */}
        <button onClick={newChat} className="bg-gray-700 text-black w-full p-2 rounded-lg hover:bg-gray-300">New Chat</button>
        {chats.map((chat, index) => (
          <div key={index} className="flex justify-between bg-gray-700 p-2 rounded-lg">
            <span>Chat {index + 1}</span>
            <button onClick={() => deleteChat(index)} className="text-red-400 hover:text-red-600">Delete</button>
          </div>
        ))}
      </div>

      {/* Chat window */}
      <div className="flex flex-col flex-1 p-4">
        <div className="flex-1 overflow-y-auto space-y-2 p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-white text-black ml-auto" : "bg-gray-700 text-white"}`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <div className="text-gray-400">Loading...</div>}
        </div>

        {/* Input and actions */}
        <div className="flex p-2 border-t border-gray-600">
          <input
            className="flex-1 p-2 bg-gray-400 text-black rounded-lg outline-none"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <input type="file" onChange={uploadFile} className="hidden" id="fileUpload" />
          <label htmlFor="fileUpload" className="bg-white text-black p-2 rounded-lg hover:bg-gray-300 cursor-pointer ml-2">Upload</label>
          <button
            onClick={sendMessage}
            className="ml-2 bg-white text-black p-2 rounded-lg hover:bg-gray-300"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
