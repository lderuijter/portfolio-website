import './App.css';
import Projecten from './projecten';
import Navbar from './navbar';
import Footer from './footer';

const portfolioEigenaar = {
  naam: 'Lucas de Ruijter',
}

function WelkomBericht() {
  return (
    <>
      <h1>Welkom op mijn portfolio!</h1>
      <p className='markup'>Ik ben {portfolioEigenaar.naam}</p>
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div className='main'>
        <WelkomBericht />
        <Projecten />
      </div>
      <Footer />
    </>
  );
}

export default App;
