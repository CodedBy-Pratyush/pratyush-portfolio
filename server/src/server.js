// server.js
// This is the file you run to start the backend.

require("dotenv").config();
const app = require("./app");

const PORT = process.env.PORT || 5000;

// Start server locally (for development and non-Vercel deployments)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
}

module.exports = app;