
import { useEffect, useState } from "react";
import NavBar from "../components/home/NavBar";
import AnimatedBackground from "../components/home/AnimatedBackground";
import CustomCursor from "../components/home/CustomCursor";
import FooterSection from "../components/home/FooterSection";

export default function Climatizacao() {
 const [itens,setItens]=useState([]);
 useEffect(()=>{
   fetch("/api/galeria/climatizacao").then(r=>r.json()).then(setItens).catch(()=>setItens([]));
 },[]);
 return (
 <div style={{background:"#050505",color:"#fff",minHeight:"100vh"}}>
 <CustomCursor/><AnimatedBackground/><NavBar scrollY={0} />
 <section style={{padding:"140px 24px 80px",maxWidth:1200,margin:"0 auto"}}>
 <h1 style={{fontSize:"3rem",color:"#ffd700"}}>Climatização</h1>
 <p>Galeria de serviços, imagens e vídeos.</p>
 <div style={{display:"grid",gridTemplateColumns":"repeat(auto-fit,minmax(280px,1fr))",gap:"24px"}}>
 {itens.map((i,idx)=><div key={idx} style={{border:"1px solid #333",padding:"16px",borderRadius:"16px"}}><h3>{i.titulo}</h3><p>{i.descricao}</p></div>)}
 </div>
 </section>
 <FooterSection/>
 </div>);
}
