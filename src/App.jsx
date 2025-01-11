import { useState } from 'react'
import './styles/App.css'
import Header from "./components/Header"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"

function App() {

  return (
    <>
      <Header/>
      <hr id="hr-line"></hr>
      <About/>
      <Projects id="Projects"/>
      <Contact id="Contact"/>
    </>
  )
}

export default App
