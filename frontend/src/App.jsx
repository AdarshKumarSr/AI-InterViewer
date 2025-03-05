import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Top from './components/Top'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Top/>
    </>
  )
}

export default App
