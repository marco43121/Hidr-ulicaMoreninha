import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import VendaPaleteiras from './pages/VendaPaleteiras.jsx'
import LocacoesPaleteiras from './pages/LocacoesPaleteiras.jsx'
import ReparoHidraulico from './pages/ReparoHidraulico.jsx'
import Climatizacao from './pages/Climatizacao.jsx'
import RodasRolamentos from './pages/RodasRolamentos.jsx'
import '../style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendas" element={<VendaPaleteiras />} />
        <Route path="/locacoes" element={<LocacoesPaleteiras />} />
        <Route path="/reparo-hidraulico" element={<ReparoHidraulico />} />
        <Route path="/climatizacao" element={<Climatizacao />} />
        <Route path="/rodas-rolamentos" element={<RodasRolamentos />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
