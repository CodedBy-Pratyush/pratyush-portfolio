// aiController.js

// Validates the incoming request, then calls aiService to get a reply.

const { getAIReply } = require("../services/aiService");

const ALLOWED_PROVIDERS = ["groq", "gemini", "mistral"];

const MAX_MESSAGE_LENGTH = 500;

async function chatWithAI(req, res) {
  const { message, provider } = req.body;

  // Empty-message validation
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return res.status(400).json({
      error: "Message cannot be empty.",
    });
  }

  // Message length limit
  if (message.length > MAX_MESSAGE_LENGTH) {
    return res.status(400).json({
      error: `Message is too long. Max ${MAX_MESSAGE_LENGTH} characters.`,
    });
  }

  // Provider validation
  if (!provider || !ALLOWED_PROVIDERS.includes(provider)) {
    return res.status(400).json({
      error: `Invalid provider. Must be one of: ${ALLOWED_PROVIDERS.join(", ")}`,
    });
  }

  try {
    const reply = await getAIReply(message.trim(), provider);

    return res.json({ reply });
  } catch (error) {
    console.error("AI request failed:", error.message);

    return res.status(500).json({
      error: "The AI assistant is temporarily unavailable. Please try again.",
    });
  }
}

module.exports = { chatWithAI };
