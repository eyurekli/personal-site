import { useState } from 'react';
import './styles/variables.css'; // Design system variables - import first
import './styles/App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from "./components/Header";
import About from "./components/About";
import PreviousWork from "./components/PreviousWork";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import ExtracurricularActivities from "./components/ExtracurricularActivities";
import EmeraldGame from "./components/EmeraldGame";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {

  const [showGame, setShowGame] = useState(false);

  const toggleGameVisibility = () => {
    setShowGame(prevState => !prevState);
  };


  return (
    <ThemeProvider>
      <Header/>
      <main>
        <About/>
        <PreviousWork/>
        <div className="emerald-game-button-container">
          <Button 
            onClick={toggleGameVisibility} 
            variant="secondary"
            className="emerald-game-button"
            ariaLabel={showGame ? 'Hide Emerald Game' : 'Show Emerald Game'}
          >
            {showGame ? 'Hide Emerald Game' : 'Want To Play a Little Game?'}
          </Button>
        </div>
        {showGame && <EmeraldGame />}
        <Projects id="Projects"/>
        <ExtracurricularActivities/>
        <Contact id="Contact"/>
      </main>
    </ThemeProvider>
  )
}

export default App
