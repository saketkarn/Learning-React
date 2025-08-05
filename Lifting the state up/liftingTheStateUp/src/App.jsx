import React, { Children, useState } from 'react'
import Child from './components/Child'

const App = () => {
  const [value, setValue]=useState(0)
  return (
    <div>
      Hello
      <Child name="Child1" value={value} setValue={setValue}/>
      <Child name="Child2" value={value} setValue={setValue}/>
    </div>
  )
}

export default App
