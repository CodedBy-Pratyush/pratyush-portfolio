const PROJECTS = [
  {
    name: "DeepSeek Clone",
    description: "Real-time conversational AI platform with streaming LLM responses.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    status: "done",
    github: "",
    liveDemo: "",
  },
  {
    name: "CompilerX",
    description: "AI-powered multi-language online compiler using Groq + Gemini.",
    tech: ["React", "Node.js", "Groq API", "Gemini API"],
    status: "done",
    github: "",
    liveDemo: "",
  },
  {
    name: "ResumeForge AI",
    description: "ATS resume analyzer and builder with AI bullet rewriting.",
    tech: ["React", "Node.js", "MongoDB", "Groq API", "Gemini API"],
    status: "done",
    github: "",
    liveDemo: "",
  },
  {
    name: "UPI Without Internet",
    description: "Offline P2P transaction processor — architecture & research stage.",
    tech: ["System Design", "CRDT Research", "Offline-first"],
    status: "progress",
    github: "",
    liveDemo: "",
  },
];

function Projects() {
  return (
    <div id="projects" className="section-wrap section-pad">
      <p className="section-eyebrow">Projects</p>
      <h2 className="section-title">What I've built</h2>

      <div className="project-grid">
        {PROJECTS.map((project) => (
          <div key={project.name} className="project-card">
            <span className={project.status === "progress" ? "status-tag status-progress" : "status-tag status-done"}>
              {project.status === "progress" ? "IN PROGRESS" : "COMPLETED"}
            </span>

            <h3>{project.name}</h3>
            <p style={{ color: "#9b98b0", fontSize: 14, margin: 0 }}>{project.description}</p>

            <div className="badge-row">
              {project.tech.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary">
                  GitHub
                </a>
              ) : (
                <span className="btn-secondary" style={{ opacity: 0.5, cursor: "default" }}>
                  GitHub
                </span>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noreferrer" className="btn-secondary">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
