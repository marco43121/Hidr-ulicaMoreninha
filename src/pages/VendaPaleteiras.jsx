import { useEffect, useState } from "react";
import { ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/home/AnimatedBackground";
import CustomCursor from "../components/home/CustomCursor";
import NavBar from "../components/home/NavBar";
import FooterSection from "../components/home/FooterSection";

const fallbackData = [
  {
    id: 1,
    marca_equipamento: "Toyota",
    modelo_equipamento: "LHM230",
    tonelagem: 2.3,
    rodagem: "Dupla",
    largura_mm: 685,
    comprimento_mm: 1150,
  },
  {
    id: 2,
    marca_equipamento: "Still",
    modelo_equipamento: "EXU16",
    tonelagem: 1.6,
    rodagem: "Simples",
    largura_mm: 550,
    comprimento_mm: 1150,
  },
];

export default function VendaPaleteiras() {
  const [paleteiras, setPaleteiras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/transpaletes")
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => setPaleteiras(data))
      .catch(() => setPaleteiras(fallbackData))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ background: "#050505", color: "#fff", minHeight: "100vh" }}>
      <CustomCursor />
      <AnimatedBackground />
      <NavBar scrollY={0} />

      <main style={{ position: "relative", zIndex: 2 }}>
        <section
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "140px 24px 60px",
          }}
        >
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: "rgba(255,255,255,0.75)",
              textDecoration: "none",
              marginBottom: 28,
              fontWeight: 500,
            }}
          >
            <ArrowLeft size={18} />
            Voltar para o início
          </Link>

          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 32,
              padding: "clamp(32px, 5vw, 64px)",
              backdropFilter: "blur(20px)",
              overflow: "hidden",
              position: "relative",
              marginBottom: 40,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -120,
                right: -120,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,215,0,0.15), transparent 70%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: -120,
                left: -120,
                width: 300,
                height: 300,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(11,67,140,0.18), transparent 70%)",
              }}
            />

            <div style={{ position: "relative", zIndex: 1 }}>
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "#ffd700",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginBottom: 18,
                  background: "rgba(255,215,0,0.08)",
                  border: "1px solid rgba(255,215,0,0.15)",
                  padding: "6px 14px",
                  borderRadius: "999px",
                }}
              >
                Seminovos Revisados
              </span>

              <h1
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                  fontWeight: 900,
                  lineHeight: 1.05,
                  marginBottom: 18,
                  letterSpacing: "-2px",
                }}
              >
                Paleteiras prontas para <span style={{ color: "#ffd700" }}>trabalhar hoje</span>
              </h1>

              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "1.1rem",
                  maxWidth: 680,
                  lineHeight: 1.7,
                  marginBottom: 32,
                }}
              >
                Equipamentos multimarcas revisados, testados e disponíveis para entrega imediata em Campo Grande e região.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href="https://wa.me/5567991203080"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    background: "linear-gradient(135deg,#ffd700,#ffaa00)",
                    color: "#050505",
                    padding: "16px 28px",
                    borderRadius: 14,
                    fontWeight: 800,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    boxShadow: "0 10px 30px rgba(255,215,0,0.25)",
                  }}
                >
                  <MessageCircle size={18} />
                  Solicitar Orçamento
                </a>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 18px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.7)",
                    fontWeight: 600,
                  }}
                >
                  <CheckCircle2 size={18} color="#ffd700" />
                  Revisadas e testadas
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {loading && (
              <div
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  color: "rgba(255,255,255,0.5)",
                  padding: 40,
                }}
              >
                Carregando equipamentos...
              </div>
            )}

            {!loading &&
              paleteiras.map((item) => (
                <article
                  key={item.id}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 24,
                    overflow: "hidden",
                    backdropFilter: "blur(16px)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 24px 50px rgba(0,0,0,0.45)";
                    e.currentTarget.style.borderColor = "rgba(255,215,0,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                    <img
                      src="/paleteiravenda.jpeg"
                      alt={item.modelo_equipamento}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        background: "rgba(5,5,5,0.75)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,215,0,0.2)",
                        borderRadius: 999,
                        padding: "6px 12px",
                        color: "#ffd700",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                      }}
                    >
                      {item.tonelagem} t
                    </div>
                  </div>

                  <div style={{ padding: 24 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 12 }}>
                      <div>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: 4 }}>
                          {item.marca_equipamento}
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem" }}>
                          Modelo {item.modelo_equipamento}
                        </p>
                      </div>
                      <div
                        style={{
                          alignSelf: "flex-start",
                          padding: "6px 10px",
                          borderRadius: 999,
                          background: "rgba(11,67,140,0.18)",
                          border: "1px solid rgba(11,67,140,0.3)",
                          color: "#8ab4ff",
                          fontWeight: 700,
                          fontSize: "0.78rem",
                        }}
                      >
                        {item.rodagem}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 12,
                        marginBottom: 24,
                      }}
                    >
                      <Spec label="Tonelagem" value={`${item.tonelagem} t`} />
                      <Spec label="Rodagem" value={item.rodagem} />
                      <Spec label="Largura" value={`${item.largura_mm} mm`} />
                      <Spec label="Comprimento" value={`${item.comprimento_mm} mm`} />
                    </div>

                    <a
                      href={`https://wa.me/5567991203080?text=Olá! Tenho interesse na paleteira ${item.marca_equipamento} ${item.modelo_equipamento}.`}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 10,
                        width: "100%",
                        background: "linear-gradient(135deg,#ffd700,#ffaa00)",
                        color: "#050505",
                        padding: "14px 18px",
                        borderRadius: 14,
                        fontWeight: 800,
                        textDecoration: "none",
                      }}
                    >
                      <MessageCircle size={18} />
                      Pedir orçamento desta paleteira
                    </a>
                  </div>
                </article>
              ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 16,
        padding: 14,
      }}
    >
      <div
        style={{
          fontSize: "0.78rem",
          color: "rgba(255,255,255,0.45)",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      <div style={{ fontWeight: 700, color: "#fff" }}>{value}</div>
    </div>
  );
}
