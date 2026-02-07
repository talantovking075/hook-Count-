import React from 'react'
import './App.css'
const App = () => {

  const [count, setCount] = React.useState(0);

  const add1 = () => {
    setCount((add) => add + 1);
  }
  const minus1 = () => {
    setCount((minus1) => minus1 -1);
  }
  const reset =() => {
    setCount(0)
  }
  return (
    <div className="container">
      <div className="card">
        <h1>Counter</h1>
        <div className="p">{count}</div>
        <div className="btns">
          <button className="minus" onClick={minus1}>-</button>
          <button className="plus" onClick={add1}>+</button>
          <button className="reset" onClick={reset}>Reset</button>
      </div>
      </div>
    </div>
  )
}

export default App
