import './App.css';
import project from './projects.json';

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

function Projecten() {
  return (
    <>
      <h1>{project.titel}</h1>
      <p className='markup'>{project.beschrijving}</p>
    </>
  )
}

function App() {
  return (
    <div className="App">
        <WelkomBericht/>
        <Projecten/>
    </div>
  );
}

export default App;
