const EXPLORE_ITEMS = [
  { title: "Projects", desc: "Explore what I've built.", href: "#projects" },
  { title: "Skills", desc: "Explore my technical stack.", href: "#skills" },
  { title: "Education", desc: "My academic background.", href: "#education" },
  { title: "Current Work", desc: "What I'm building now.", href: "#current-work" },
  { title: "Achievements", desc: "Things I've accomplished.", href: "#achievements" },
  { title: "Contact", desc: "Let's connect.", href: "#contact" },
];

function Explore() {
  return (
    <div className="explore-grid">
      {EXPLORE_ITEMS.map((item) => (
        <a key={item.title} href={item.href} className="explore-card">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </a>
      ))}
    </div>
  );
}

export default Explore;
