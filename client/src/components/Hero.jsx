function Hero() {
  return (
    <div>
      <p className="section-eyebrow">Hi, I'm</p>
      <h1 className="hero-name">
        PRATYUSH
        <br />
        BANERJEE
      </h1>

      <p style={{ marginTop: 18, color: "#d8d6e6", fontSize: 17, fontWeight: 500 }}>
        Full Stack Developer
      </p>
      <p style={{ marginTop: 4, color: "#9b98b0", fontSize: 14.5 }}>
        AI / LLM Integration &middot; Backend &middot; MERN
      </p>

      <p style={{ marginTop: 16, color: "#b9b6cc", fontSize: 15, lineHeight: 1.7, maxWidth: 440 }}>
        I build intelligent web applications, backend systems and AI-powered
        products.
      </p>

      <div className="hero-actions" style={{ marginTop: 26 }}>
        <a href="#projects" className="btn-primary">
          View My Work
        </a>
        <a href="https://github.com/CodedBy-Pratyush" target="_blank" rel="noreferrer" className="btn-secondary">
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/pratyush-banerjee-0a0642284"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          LinkedIn
        </a>
        <a href="mailto:pratyushbanerjee75@gmail.com" className="btn-secondary">
          Email
        </a>
      </div>
    </div>
  );
}

export default Hero;
