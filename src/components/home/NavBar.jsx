import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar({ scrollY }) {
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 50;

  const links = [
    { label: "Quem Somos", href: "#sobre" },
    { label: "Nossos Serviços", href: "#servicos" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      transition: "all 0.4s ease",
      background: scrolled ? "rgba(5,5,5,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      padding: scrolled ? "12px 24px" : "20px 24px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 38, height: 38, background: "linear-gradient(135deg,#0b438c,#ffd700)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 18, color: "#fff", flexShrink: 0 }}>H</div>
          <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff", letterSpacing: "-0.3px" }}>
            Hidráulica <span style={{ color: "#ffd700" }}>Moreninha</span>
          </span>
        </div>

        <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", fontWeight: 500, fontSize: "0.95rem", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#ffd700"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}
            >{l.label}</a>
          ))}
          <a href="https://wa.me/5567991203080" target="_blank" rel="noreferrer"
            style={{ background: "linear-gradient(135deg,#ffd700,#ffaa00)", color: "#050505", padding: "9px 22px", borderRadius: 999, fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(255,215,0,0.25)" }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(255,215,0,0.4)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 4px 20px rgba(255,215,0,0.25)"; }}
          >Solicitar Orçamento</a>
        </nav>

        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", padding: 4 }} className="mobile-menu-btn">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(5,5,5,0.97)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", fontWeight: 500, fontSize: "1rem", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>{l.label}</a>
          ))}
          <a href="https://wa.me/5567991203080" target="_blank" rel="noreferrer" style={{ background: "linear-gradient(135deg,#ffd700,#ffaa00)", color: "#050505", padding: "12px 22px", borderRadius: 999, fontWeight: 700, textDecoration: "none", textAlign: "center", marginTop: 8 }}>Solicitar Orçamento</a>
        </div>
      )}

      <style>{`
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } }
      `}</style>
    </header>
  );
}