import { useEffect, useState } from "react";
import HeroSection from "../components/home/HeroSection";
import GallerySection from "../components/home/GallerySection";
import ContactSection from "../components/home/ContactSection";
import FooterSection from "../components/home/FooterSection";
import NavBar from "../components/home/NavBar";
import AnimatedBackground from "../components/home/AnimatedBackground";
import CustomCursor from "../components/home/CustomCursor";
import '../../style.css';
export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#050505", color: "#fff" }}>
      <CustomCursor />
      <AnimatedBackground />
      <NavBar scrollY={scrollY} />
      <HeroSection />
      <main style={{ position: "relative", zIndex: 2 }}>

        <GallerySection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}