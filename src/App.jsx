import { useState } from 'react'
import './styles/App.css'
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

function App() {

  const components = {
    About: <About/>,
    Contact: <Contact/>,
    Projects: <Projects/>
  };

  const [comp, setComp] = useState("About")

  function changeComp(componentName) {
    if (componentName != comp)
      setComp(componentName);
  }

  return (
    <>
      <Header changeComp={changeComp}/>
      <hr id="hr-line"></hr>
      {components[comp]}
    </>
  )
}

export default App
