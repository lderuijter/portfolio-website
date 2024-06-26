import { CNav, CNavItem, CNavLink } from '@coreui/react';
import React from "react";
import './App.css';
import Projecten from './projecten';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { CFooter } from '@coreui/react';

const portfolioEigenaar = {
  naam: 'Lucas de Ruijter',
}

function Home() {
  return (
    <>
      <h1>Welkom op mijn portfolio!</h1>
      <p>Ik ben {portfolioEigenaar.naam}</p>
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
  return (
    <>
    <Router>
    <CNav className="flex-column navbar">
      <CNavItem>
        <CNavLink className="nav-link">
          <CNavLink className="nav-link" href="/#">Home</CNavLink>
        </CNavLink>
      </CNavItem>
      <CNavItem>
        <CNavLink className="nav-link" href="/projecten">Projecten</CNavLink>
      </CNavItem>
    </CNav><div className="main">
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
