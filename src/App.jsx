import { useState } from 'react'
import './App.css'
import { ParagraphComp } from './ParagraphComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 id="name">21BAI1444 Rahan S</h1>
    <ParagraphComp/>
    </>
  )
}

export default App
