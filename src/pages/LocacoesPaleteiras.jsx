import { useEffect, useState } from "react";
import NavBar from "../components/home/NavBar";
import AnimatedBackground from "../components/home/AnimatedBackground";
import CustomCursor from "../components/home/CustomCursor";
import FooterSection from "../components/home/FooterSection";

export default function LocacoesPaleteiras(){
 const [scrollY,setScrollY]=useState(0);
 const [items,setItems]=useState([]);
 useEffect(()=>{
  const h=()=>setScrollY(window.scrollY);
  window.addEventListener("scroll",h);
  fetch("/api/locacoes-paleteiras").then(r=>r.json()).then(setItems).catch(()=>{});
  return ()=>window.removeEventListener("scroll",h);
 },[]);
 return <div className="relative min-h-screen overflow-x-hidden" style={{background:"#050505",color:"#fff"}}>
 <CustomCursor/><AnimatedBackground/><NavBar scrollY={scrollY}/>
 <section style={{position:"relative",zIndex:2,padding:"140px 24px 80px",maxWidth:1200,margin:"0 auto"}}>
 <div style={{textAlign:"center",marginBottom:60}}>
 <span style={{color:"#ffd700",letterSpacing:3,fontWeight:700}}>LOCAÇÃO</span>
 <h1 style={{fontSize:"clamp(2.5rem,6vw,5rem)",fontWeight:900}}>Locação de Paleteiras</h1>
 <p style={{color:"rgba(255,255,255,.7)"}}>Equipamentos revisados e disponíveis para entrega imediata.</p>
 </div>
 <div style={{display:"grid",gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",gap:"24px"}}>
 {items.map(item=><div key={item.id} style={{background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,215,0,.15)",borderRadius:20,padding:24}}>
 <h3>{item.modelo_equipamento}</h3>
 <p>Tipo: {item.tipo_equipamento}</p>
 <p>Capacidade: {item.capacidade_carga_ton} toneladas</p>
 <p>Prazo: {item.prazo_locacao_dias} dias</p>
 <button style={{background:"#ffd700",padding:"12px 18px",borderRadius:10,border:"none"}}>Solicitar Locação</button>
 </div>)}
 </div></section><FooterSection/></div>
}
