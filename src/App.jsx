import { CFooter, CNavbar, CContainer, CNavbarBrand, CNavbarToggler, CCollapse, CNavbarNav, CNavLink} from '@coreui/react';
import React, { useState } from 'react';
import './App.css';
import Projecten from './projecten';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";

const portfolioEigenaar = {
  naam: 'Lucas de Ruijter',
}

function Home() {
  return (
    <>
    <div className='container'>
      <div className='col-info'>
        <h1>Welkom op mijn portfolio!</h1>
        <p>Ik ben {portfolioEigenaar.naam}</p>
      </div>
      <div className='col-image'>
        <img className='portfolio-image' alt='foto van Lucas' src='images/lucas.png'/>
      </div>
    </div>
    </>
  );
}

function NotFound() {
  return (
      <div>
          <h2>404 Not Found</h2>
          <p>Deze pagina bestaat niet!</p>
      </div>
  );
}

function Footer() {
  return (
    <CFooter>
  <div className='copyright-contact'>
    <span>Copyright &copy; 2024 Lucas de Ruijter </span>
    <a href="mailto:lucasder2003@gmail.com">mail</a>
  </div>
  <div className='powered-by'>
    <span>Powered by CoreUI and React</span>
  </div>
</CFooter>
  );
}

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <CNavbar expand="lg" className="bg-body-dark navbar">
      <CContainer fluid>
        <CNavbarBrand href="#">Lucas de Ruijter</CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav as="nav">
            <CNavLink className="nav-link" href="/#" active>
              Home
            </CNavLink>
            <CNavLink className="nav-link" href="/projecten">
            Projecten
            </CNavLink>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
    <Router>
    <div className="main">
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="/projecten" element={<Projecten />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
