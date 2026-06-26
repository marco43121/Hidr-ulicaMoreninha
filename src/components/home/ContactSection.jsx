import useReveal from "./useReveal";

export default function ContactSection() {
  const [ref, visible] = useReveal();
  return (
    <section id="contato" ref={ref} style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px 100px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(50px)", transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)" }}>
      <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 28, padding: "clamp(40px, 6vw, 64px)", backdropFilter: "blur(20px)", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(11,67,140,0.15), transparent 70%)", pointerEvents: "none" }} />
        <span style={{ fontSize: "0.75rem", color: "#ffd700", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", display: "block", marginBottom: 12 }}>Contato</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", letterSpacing: "-1px", marginBottom: 16 }}>Entre em <span style={{ color: "#ffd700" }}>Contato</span></h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7 }}>Precisa alugar uma paleteira ou fazer a manutenção do seu ar condicionado? Escolha o melhor canal:</p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
          <a href="https://wa.me/5567991203080" target="_blank" rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(37,211,102,0.1)", border: "1px solid rgba(37,211,102,0.25)", borderRadius: 16, padding: "18px 30px", textDecoration: "none", color: "#fff", fontWeight: 600, fontSize: "0.95rem", transition: "all 0.3s", minWidth: 220 }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(37,211,102,0.18)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(37,211,102,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <span style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(37,211,102,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>💬</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Resposta Imediata</div>
              <div>WhatsApp Comercial</div>
            </div>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hidraulicamoreninha@gmail.com" target="_blank" rel="noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(11,67,140,0.12)", border: "1px solid rgba(11,67,140,0.25)", borderRadius: 16, padding: "18px 30px", textDecoration: "none", color: "#fff", fontWeight: 600, fontSize: "0.95rem", transition: "all 0.3s", minWidth: 220 }}
            onMouseEnter={e => { e.currentTarget.style.background = "rgba(11,67,140,0.22)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "rgba(11,67,140,0.12)"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <span style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(11,67,140,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>✉️</span>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", marginBottom: 2 }}>Suporte Formal</div>
              <div>Enviar E-mail</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}