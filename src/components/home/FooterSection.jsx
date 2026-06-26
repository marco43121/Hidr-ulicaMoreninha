export default function FooterSection() {
  return (
    <footer style={{ background: "rgba(0,0,0,0.6)", borderTop: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", padding: "32px 24px", textAlign: "center", position: "relative", zIndex: 2 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
        <div style={{ width: 28, height: 28, background: "linear-gradient(135deg,#0b438c,#ffd700)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, color: "#fff" }}>H</div>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}>Hidráulica <span style={{ color: "#ffd700" }}>Moreninha</span></span>
      </div>
      <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.82rem" }}>© 2026 Hidráulica Moreninha. Todos os direitos reservados.</p>
    </footer>
  );
}