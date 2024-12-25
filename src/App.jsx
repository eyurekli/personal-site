import { useState } from 'react'
//import './App.css'
import Header from "./components/Header"
import About from "./components/About"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <About/>
    </>
  )
}

export default App
