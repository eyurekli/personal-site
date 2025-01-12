import { useState } from 'react';
import './styles/App.css';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import EmeraldGame from "./components/EmeraldGame";

function App() {

  const [showGame, setShowGame] = useState(false);

  const toggleGameVisibility = () => {
    setShowGame(prevState => !prevState);
  };


  return (
    <>
      <Header/>
      <About/>
      <button onClick={toggleGameVisibility} id="emerald-game-button">
        {showGame ? 'Hide Emerald Game' : 'Want To Play a Little Game?'}
      </button>
      {showGame && <EmeraldGame />}
      <Projects id="Projects"/>
      <Contact id="Contact"/>
    </>
  )
}

export default App
