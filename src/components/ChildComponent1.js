import React from 'react'

const ChildComponent1 = (props) => {
  function handleClick(){
    props.selection("Option 1")
  }
  return (
    <div>
      <h1>Child Component 1</h1>
      <button onClick={handleClick}>Option 1</button>
    </div>
  )
}

export default ChildComponent1