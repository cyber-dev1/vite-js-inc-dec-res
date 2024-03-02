import { useState } from 'react'
import './App.css'

function App() {
 const [count, setCount] = useState(0)
 const handleInc = () => {
  setCount((count) => count+=1)
 }
 const handleDec = () => {
  if(count > 0){
    setCount((count) => count-=1)
  }

 }
 const handleRes = () => {
  setCount(0)
 }
  return (
    <div>
        <h1>Vite.js For React inc, dec, res</h1>
       <h1>{count}</h1>
       <button onClick={handleRes}>Reset</button>
       <button onClick={handleInc}>increment</button>
       <button onClick={handleDec}>decrement</button>
    </div>
  )
}

export default App
