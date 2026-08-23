// aiService.js

const portfolioData = require("../config/portfolioData");

// --------------------------------------------------
// Build portfolio context
// --------------------------------------------------

function buildPortfolioContext() {
  return `
Name: ${portfolioData.name}
Location: ${portfolioData.location}
Email: ${portfolioData.email}
Phone: ${portfolioData.phone}
LinkedIn: ${portfolioData.linkedin}
GitHub: ${portfolioData.github}

Role: ${portfolioData.role}

Focus areas:
${portfolioData.focusAreas.join(", ")}

Target roles:
${portfolioData.targetRoles.join(", ")}

Skills:
- Languages: ${portfolioData.skills.languages.join(", ")}
- Frontend: ${portfolioData.skills.frontend.join(", ")}
- Backend: ${portfolioData.skills.backend.join(", ")}
- Databases: ${portfolioData.skills.databases.join(", ")}
- AI/LLM: ${portfolioData.skills.ai.join(", ")}
- Tools: ${portfolioData.skills.tools.join(", ")}
- CS Fundamentals: ${portfolioData.skills.csFundamentals.join(", ")}

Education:
${portfolioData.education.degree}
Specialisation: ${portfolioData.education.specialisation}
University: ${portfolioData.education.university}
Location: ${portfolioData.education.location}
Duration: ${portfolioData.education.duration}
Current status: ${portfolioData.education.currentStatus}
Coursework: ${portfolioData.education.coursework.join(", ")}

Projects:
${portfolioData.projects
  .map(
    (project) => `
- ${project.name} (${project.category})
  Status: ${project.status}
  Technologies: ${project.technologies.join(", ") || "N/A"}
  Description: ${project.description}
  Features: ${project.features?.join(", ") || "N/A"}
  Current work: ${project.currentWork?.join(", ") || "N/A"}
  Results: ${project.results?.join(" | ") || "No reported results"}
  GitHub: ${project.github || "not available"}
  Live demo: ${project.liveDemo || "not available"}
`,
  )
  .join("\n")}

Achievements:
${portfolioData.achievements
  .map((achievement) => `- ${achievement}`)
  .join("\n")}
`.trim();
}

// --------------------------------------------------
// System prompt
// --------------------------------------------------

function buildSystemPrompt() {
  return `
You are Pratyush Banerjee's personal portfolio assistant.

You can ONLY answer questions about:
- Pratyush
- His background
- Education
- Skills
- Projects
- Experience
- Technical interests
- Portfolio

Rules:

1. Do not answer unrelated questions.
   If asked something unrelated, say:
   "I can only answer questions about Pratyush and his portfolio."

2. Never invent information.
   If something is not available below, say:
   "That information is not available in the portfolio."

3. If a project is "IN PROGRESS", clearly say that it is unfinished
   and not production-ready.

4. Never exaggerate project metrics.
   Keep testing results, estimates, and user-testing numbers
   in their original context.

5. If asked for source code or proof:
   - Share GitHub only if a GitHub link exists.
   - Share live demo only if a live demo link exists.
   - Never invent URLs.

6. Keep answers concise, friendly, and recruiter-appropriate.

Portfolio data:

${buildPortfolioContext()}
`.trim();
}

// --------------------------------------------------
// Provider configuration
// --------------------------------------------------

const providers = {
  groq: {
    url: "https://api.groq.com/openai/v1/chat/completions",
    apiKey: process.env.GROQ_API_KEY,
    model: "openai/gpt-oss-120b",
  },

  mistral: {
    url: "https://api.mistral.ai/v1/chat/completions",
    apiKey: process.env.MISTRAL_API_KEY,
    model: "mistral-medium-latest",
  },
};

// --------------------------------------------------
// Groq + Mistral
// Both use OpenAI-compatible API format
// --------------------------------------------------

async function callOpenAICompatible(message, systemPrompt, provider) {
  const config = providers[provider];

  const response = await fetch(config.url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.apiKey}`,
    },

    body: JSON.stringify({
      model: config.model,

      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],

      max_tokens: 500,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || `${provider} request failed`);
  }

  return data.choices[0].message.content;
}

// --------------------------------------------------
// Gemini
// --------------------------------------------------

async function callGemini(message, systemPrompt) {
  const model = "gemini-3.6-flash";

  const url =
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent` +
    `?key=${process.env.GEMINI_API_KEY}`;

  const response = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      systemInstruction: {
        parts: [
          {
            text: systemPrompt,
          },
        ],
      },

      contents: [
        {
          role: "user",
          parts: [
            {
              text: message,
            },
          ],
        },
      ],

      generationConfig: {
        maxOutputTokens: 500,
      },
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error?.message || "Gemini request failed");
  }

  return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

// --------------------------------------------------
// Main AI function
// --------------------------------------------------

async function getAIReply(message, provider) {
  const systemPrompt = buildSystemPrompt();

  if (provider === "gemini") {
    return callGemini(message, systemPrompt);
  }

  if (provider === "groq" || provider === "mistral") {
    return callOpenAICompatible(message, systemPrompt, provider);
  }

  throw new Error(`Unknown provider: ${provider}`);
}

module.exports = {
  getAIReply,
};
