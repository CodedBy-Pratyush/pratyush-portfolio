const SKILL_GROUPS = [
  { title: "Languages", items: ["Java", "JavaScript ES6+", "SQL", "C++"] },
  { title: "Frontend", items: ["React.js", "HTML5", "CSS3"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { title: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  { title: "AI / LLM", items: ["Gemini API", "Groq API", "Multi-LLM Orchestration", "Prompt Engineering"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "Docker", "VS Code"] },
];

function Skills() {
  return (
    <div id="skills" className="section-wrap section-pad">
      <p className="section-eyebrow">Skills</p>
      <h2 className="section-title">My technical stack</h2>

      <div className="skills-grid">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="skill-card">
            <h4>{group.title}</h4>
            <div className="badge-row">
              {group.items.map((item) => (
                <span key={item} className="badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
