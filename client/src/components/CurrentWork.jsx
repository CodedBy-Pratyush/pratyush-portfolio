function CurrentWork() {
  return (
    <div id="current-work" className="section-wrap section-pad">
      <p className="section-eyebrow">Current Work</p>
      <h2 className="section-title">What I'm building now</h2>

      <div className="info-card">
        <span className="status-tag status-progress">IN PROGRESS</span>
        <h3 style={{ margin: "12px 0 4px", fontFamily: "'Space Grotesk', sans-serif" }}>
          UPI Without Internet
        </h3>
        <p style={{ color: "#9b98b0", fontSize: 14.5, marginBottom: 16 }}>
          An offline P2P transaction processor — an architecture and research
          project, not a completed or production system.
        </p>

        <div className="badge-row">
          {[
            "Cryptographically signed offline ledger",
            "Transaction reconciliation",
            "Double-spend prevention research",
            "CRDT research",
            "Bluetooth/NFC research",
          ].map((item) => (
            <span key={item} className="badge">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurrentWork;
