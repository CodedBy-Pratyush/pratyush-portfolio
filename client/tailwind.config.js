/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0B0B14",
        surface: "#13131F",
        surface2: "#1A1A29",
        border: "#2A2A3D",
        primary: "#7C5CFF",
        primary2: "#5B8CFF",
        text: "#F1F0F6",
        muted: "#9B98B0",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(124, 92, 255, 0.25)",
        glowSm: "0 0 24px rgba(124, 92, 255, 0.35)",
      },
    },
  },
  plugins: [],
};
