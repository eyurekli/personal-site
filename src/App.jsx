import { useState } from 'react'
import './styles/App.css'
import Header from "./components/Header"
import About from "./components/About"

function App() {

  const components = {
    About: <About/> // Add other components here
  };

  const [comp, setComp] = useState("About")

  function changeComp(componentName) {
    setComp(componentName);
  }

  return (
    <>
      <Header changeComp={changeComp}/>
      {components[comp]}
    </>
  )
}

export default App
