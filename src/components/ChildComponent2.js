import React from 'react'

const ChildComponent2 = (props) => {
  function handleClick(){
    props.selection("Option 2")
  }
  return (
    <div>
      <h1>Child Component 2</h1>
      <button onClick={handleClick}>Option 2</button>
    </div>
  )
}

export default ChildComponent2