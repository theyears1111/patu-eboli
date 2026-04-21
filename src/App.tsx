import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import MenuPage from './pages/Menu';
import BirrePage from './pages/Birre';
import DrinkPage from './pages/Drink';
import ViniPage from './pages/Vini';
import GalleriaPage from './pages/Galleria';
import ContattiPage from './pages/Contatti';
import AllergeniPage from './pages/Allergeni';
import Admin from './admin/Admin';

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div style={{ minHeight:'100vh', display:'flex', flexDirection:'column', background:'#F9F5EE' }}>
      <Header />
      <main style={{ flex:1 }}>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/birre" element={<BirrePage />} />
          <Route path="/drink" element={<DrinkPage />} />
          <Route path="/vini" element={<ViniPage />} />
          <Route path="/galleria" element={<GalleriaPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/allergeni" element={<AllergeniPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}
