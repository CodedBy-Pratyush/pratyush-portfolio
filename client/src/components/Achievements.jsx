const ACHIEVEMENTS = [
  "Built and shipped 3 full-stack AI-integrated applications independently.",
  "Active GitHub contributor.",
  "Regularly solves DSA problems using Java.",
  "Exploring system design and high-concurrency backend concepts.",
  "Exploring LLM orchestration patterns.",
  "Building projects beyond formal academic coursework.",
];

function Achievements() {
  return (
    <div id="achievements" className="section-wrap section-pad">
      <p className="section-eyebrow">Achievements</p>
      <h2 className="section-title">Things I've accomplished</h2>

      <div className="info-card">
        <ul style={{ margin: 0, paddingLeft: 20, color: "#d8d6e6", fontSize: 15, lineHeight: 2 }}>
          {ACHIEVEMENTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Achievements;
