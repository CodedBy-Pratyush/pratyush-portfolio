function Contact() {
  return (
    <div id="contact" className="section-wrap section-pad">
      <p className="section-eyebrow">Contact</p>
      <h2 className="section-title">Let's connect</h2>

      <div className="contact-grid">
        <a className="contact-item" href="mailto:pratyushbanerjee75@gmail.com">
          <span>Email</span>
          <span>pratyushbanerjee75@gmail.com</span>
        </a>
        <a className="contact-item" href="tel:+917699897880">
          <span>Phone</span>
          <span>+91 7699897880</span>
        </a>
        <a
          className="contact-item"
          href="https://github.com/CodedBy-Pratyush"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
          <span>github.com/CodedBy-Pratyush</span>
        </a>
        <a
          className="contact-item"
          href="https://linkedin.com/in/pratyush-banerjee-0a0642284"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <span>linkedin.com/in/pratyush-banerjee-0a0642284</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
