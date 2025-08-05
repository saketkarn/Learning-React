import React from 'react'

const Child = (props) => {
  return (
    <>
    <div>
      <input type='text'
      onChange={(e)=>(props.setValue(e.target.value))}/>
    </div>
    <div>
    <p>{props.name} {props.value}</p>
    </div>
      
    </>
  )
}

export default Child
