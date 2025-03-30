import { useState } from 'react'
import { Logo } from './components/Logo'
import { Counter } from './components/Counter'
import { Info } from './components/Info'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Logo />
      <h1>Vite + React</h1>
      <Counter 
        count={count} 
        onIncrement={() => setCount(count => count + 1)} 
      />
      <Info />
    </>
  )
}

export default App