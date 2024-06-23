import './App.css';
import Projecten from './projectenDisplay';

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
      <div className="App">
        <WelkomBericht />
      </div>
      <Projecten/>
    </>
  );
}

export default App;
