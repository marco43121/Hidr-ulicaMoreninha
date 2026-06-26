import useReveal from "./useReveal";

export default function HeroSection() {
  const [ref, visible] = useReveal();

  return (
    <section
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px 80px",
        position: "relative",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {/* Efeito de Luz de Fundo */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "clamp(300px, 60vw, 800px)",
          height: "clamp(300px, 60vw, 800px)",
          background: "radial-gradient(circle, rgba(11,67,140,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontSize: "0.8rem",
            color: "#ffd700",
            fontWeight: 700,
            letterSpacing: "4px",
            textTransform: "uppercase",
            display: "inline-block",
            marginBottom: 20,
            background: "rgba(255,215,0,0.06)",
            border: "1px solid rgba(255,215,0,0.15)",
            padding: "6px 16px",
            borderRadius: "999px",
          }}
        >
          Serviço Rápido e Qualificado
        </span>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "#fff",
            letterSpacing: "-2px",
            marginBottom: 24,
          }}
        >
          Manutenção de Paleteiras e <br />
          <span
            style={{
              background: "linear-gradient(135deg, #ffd700, #ffaa00)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ar Condicionado
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.5)",
            maxWidth: 580,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Sua paleteira parou ou o ar condicionado não está gelando? Resolva agora com quem é especialista em Campo Grande. Atendimento rápido diretamente na sua empresa.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contato"
            style={{
              background: "linear-gradient(135deg, #ffd700, #ffaa00)",
              color: "#050505",
              padding: "16px 36px",
              borderRadius: "14px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 8px 30px rgba(255,215,0,0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(255,215,0,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,215,0,0.2)";
            }}
          >
            Falar com Especialista
          </a>
          <a
            href="#galeria"
            style={{
              background: "rgba(255,255,255,0.03)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "16px 36px",
              borderRadius: "14px",
              fontWeight: 600,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
            }}
          >
            Ver Serviços
          </a>
        </div>
      </div>
    </section>
  );
}