
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, incrementByAmount } from './features/counter/counterSlice'
import './App.css'
import { useState } from 'react'

function App() {
  const [amount, setAmount]=useState(0)
  const dispatch=useDispatch()
  const counter=useSelector((state)=>state.counter.value)
  return (
    <div>
      <button
      onClick={()=>dispatch(increment())}>Increment</button>
      <br/>
      <br/>
      <span>{counter}</span>
      <br/>
      <br/>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <br/>
      <br/>
      <button onClick={()=>dispatch(reset())}>Reset</button>
      <br/>
      <br/>
      <input 
      type="number"
      value={amount}
      placeholder='Enter the amount'
      onChange={(e)=>setAmount(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={()=>dispatch(incrementByAmount(amount))}>Increse the value as per the amount mentioned above</button>
    </div>
  )
}

export default App
