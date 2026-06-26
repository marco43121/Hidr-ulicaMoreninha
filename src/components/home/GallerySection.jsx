import { Link } from "react-router-dom";
import useReveal from "./useReveal";

const items = [
  { src: "/reparo.jpeg", title: "Reparo Hidráulico", desc: "Manutenção especializada diretamente no local do cliente.", tag: "Hidráulica" },
  { src: "/manuar.jpeg", title: "Climatização", desc: "Limpeza, higienização e carga de gás em splits.", tag: "Ar Condicionado" },
  { src: "/rolamento.jpeg", title: "Rodas e Rolamentos", desc: "Substituição por peças de alta durabilidade.", tag: "Peças" },
  { src: "/paleteiraaluguel.jpeg", title: "Locação de Paleteiras", desc: "Equipamentos novos e revisados para entrega imediata.", tag: "Locação", href: "/locacoes" },
  { src: "/paleteiravenda.jpeg", title: "Venda de Seminovos", desc: "Transpaleteiras multimarcas revisadas.", tag: "Venda", href: "/vendas" },
];

function GalleryCard({ item, delay }) {
  const [ref, visible] = useReveal(0.1);

  const card = (
    <article ref={ref}
      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(50px)", transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`, height: "100%" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 25px 50px rgba(0,0,0,0.5)"; e.currentTarget.style.borderColor = "rgba(255,215,0,0.15)"; e.currentTarget.querySelector("img").style.transform = "scale(1.08)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.querySelector("img").style.transform = "scale(1)"; }}
    >
      <div style={{ width: "100%", height: 240, overflow: "hidden", background: "#0a0f1a", position: "relative" }}>
        <img src={item.src} alt={item.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }} />
        <div style={{ position: "absolute", top: 14, left: 14, background: "rgba(5,5,5,0.75)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,215,0,0.2)", borderRadius: 999, padding: "4px 12px", fontSize: "0.72rem", color: "#ffd700", fontWeight: 700 }}>{item.tag}</div>
      </div>
      <div style={{ padding: "22px 22px 26px", borderTop: "2px solid rgba(255,215,0,0.3)", flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{item.title}</h3>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.88rem", lineHeight: 1.6, flexGrow: 1 }}>{item.desc}</p>
        {item.href && (
          <div style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 8, color: "#ffd700", fontWeight: 700, fontSize: "0.92rem" }}>
            Ver paleteiras disponíveis →
          </div>
        )}
      </div>
    </article>
  );

  return item.href ? (
    <Link to={item.href} style={{ textDecoration: "none", color: "inherit" }}>
      {card}
    </Link>
  ) : card;
}

export default function GallerySection() {
  const [titleRef, titleVisible] = useReveal();
  return (
    <section id="galeria" style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 24px" }}>
      <div ref={titleRef} style={{ textAlign: "center", marginBottom: 60, opacity: titleVisible ? 1 : 0, transform: titleVisible ? "translateY(0)" : "translateY(30px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)" }}>
        <span style={{ fontSize: "0.75rem", color: "#ffd700", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", display: "block", marginBottom: 12 }}>Portfólio</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#fff", letterSpacing: "-1px", marginBottom: 12 }}>Nosso Trabalho na <span style={{ color: "#ffd700" }}>Prática</span></h2>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1rem", maxWidth: 500, margin: "0 auto" }}>Confira alguns de nossos atendimentos recentes e equipamentos disponíveis.</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 24 }}>
        {items.map((item, i) => <GalleryCard key={item.title} item={item} delay={i * 80} />)}
      </div>
    </section>
  );
}
