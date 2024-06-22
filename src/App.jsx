import './App.css';
import { useState } from 'react';

const portfolioEigenaar = {
  naam: 'Lucas de Ruijter',
}

function WelcomeMessage() {
  return (
    <>
      <h1>Welkom op mijn portfolio!</h1>
      <p className='markup'>Ik ben {portfolioEigenaar.naam}</p>
    </>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);
  function HandleClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={HandleClick}>
      Counter {count}
    </button>
  )
}

function App() {
  return (
    <div className="App">
        <WelcomeMessage/>
        <MyButton/>
    </div>
  );
}

export default App;
