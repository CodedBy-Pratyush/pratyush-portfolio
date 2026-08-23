import { useState } from "react";
import axios from "axios";


const API_URL =
  import.meta.env.VITE_API_URL || "https://portfolio1-flax-pi.vercel.app/";
const SUGGESTED_QUESTIONS = [
  "What projects has Pratyush built?",
  "Tell me about CompilerX.",
  "What technologies does he use?",
  "How does he use multiple LLMs?",
  "What is he currently working on?",
  "Tell me about his education.",
];

// A realistic preview conversation shown by default, so visitors instantly
// understand what this AI can do before they type anything.
const INITIAL_MESSAGES = [
  { role: "user", text: "Tell me about CompilerX" },
  {
    role: "ai",
    text: "CompilerX is an AI-powered multi-language online compiler supporting 8+ programming languages. It uses Groq for fast syntax feedback and Gemini for deeper code explanations and optimization advice.",
  },
];

function AIAssistant() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [provider, setProvider] = useState("groq");
  const [loading, setLoading] = useState(false);

  async function sendMessage(text) {
    if (!text.trim() || loading) return;

    const userMessage = { role: "user", text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(API_URL, {
        message: text,
        provider: provider,
      });

      const aiMessage = { role: "ai", text: response.data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      const errorMessage = {
        role: "ai",
        text: "Sorry, I couldn't reach the AI right now. Please try again in a moment.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setLoading(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  function handleSuggestedClick(question) {
    sendMessage(question);
  }

  return (
    <div id="ai" className="ai-panel">
      <div className="ai-core-stage">
        <div className="ai-ring-outer"></div>
        <div className="ai-ring"></div>
        <div className="ai-core"></div>
      </div>

      <h2 className="ai-title">Ask Pratyush's AI</h2>
      <p
        style={{
          textAlign: "center",
          color: "#9b98b0",
          fontSize: 14.5,
          marginTop: 8,
        }}
      >
        Your AI guide to my projects, skills, experience and technical
        background.
      </p>

      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user" ? "bubble bubble-user" : "bubble bubble-ai"
            }
          >
            {msg.text}
          </div>
        ))}
        {loading && <div className="bubble bubble-ai">Thinking...</div>}
      </div>

      <form className="chat-form" onSubmit={handleFormSubmit}>
        <input
          className="chat-input"
          type="text"
          placeholder="Ask about my projects, skills, education..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn-primary" disabled={loading}>
          Send
        </button>
      </form>

      <div className="provider-row">
        <div>
          <label
            htmlFor="provider"
            style={{ fontSize: 12.5, color: "#9b98b0", marginRight: 8 }}
          >
            AI Model
          </label>
          <select
            id="provider"
            className="provider-select"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          >

            <option value="mistral">NVDIA-gpt</option>
            <option value="groq">Groq</option>
            <option value="gemini">Gemini</option>
          </select>
        </div>
      </div>

      <div className="suggested-grid">
        {SUGGESTED_QUESTIONS.map((question, index) => (
          <button
            key={index}
            className="suggested-card"
            onClick={() => handleSuggestedClick(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AIAssistant;
