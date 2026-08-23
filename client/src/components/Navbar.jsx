function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <a href="#home" style={{ color: "#f1f0f6", fontWeight: 700, textDecoration: "none" }}>
          PB
        </a>
        <nav className="nav-links">
          <a href="#ai">Ask AI</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#current-work">Current Work</a>
          <a href="#achievements">Achievements</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
