function Education() {
  return (
    <div id="education" className="section-wrap section-pad">
      <p className="section-eyebrow">Education</p>
      <h2 className="section-title">Academic background</h2>

      <div className="info-card">
        <h3 style={{ margin: 0, fontFamily: "'Space Grotesk', sans-serif" }}>
          B.Tech — Computer Science & Engineering
        </h3>
        <p style={{ color: "#a08bff", marginTop: 6, fontSize: 14 }}>
          Specialisation: AI/ML
        </p>
        <p style={{ color: "#9b98b0", marginTop: 10, fontSize: 14.5 }}>
          Sister Nivedita University, Kolkata, India · 2024–2028
        </p>
        <p style={{ color: "#9b98b0", fontSize: 14.5 }}>
          Currently a 2nd year undergraduate student.
        </p>

        <div className="badge-row" style={{ marginTop: 16 }}>
          {["Data Structures & Algorithms", "DBMS", "OOP", "Computer Networks", "Operating Systems"].map(
            (course) => (
              <span key={course} className="badge">
                {course}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Education;
