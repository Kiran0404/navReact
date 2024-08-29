import { useState } from 'react'
import './App.css'

function App() {
  const [value, changeState] = useState(0);

  return (
    <>
      <div className="counter">{value}</div>
      <button onClick={() => changeState(value+1)}>Increment</button>
      <button onClick={() => changeState(value-1)}>Decrement</button>
    </>
  )
}

export default App
