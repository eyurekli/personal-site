import { useState, useEffect } from 'react';
import './styles/App.css';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import EmeraldGame from "./components/EmeraldGame";

function App() {

  return (
    <>
      <Header/>
      <EmeraldGame/>
      <About/>
      <Projects id="Projects"/>
      <Contact id="Contact"/>
    </>
  )
}

export default App
