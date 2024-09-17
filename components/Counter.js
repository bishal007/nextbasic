import { useState } from 'react'
//done1
const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Counter</h5>
        <p className="card-text">Count: {count}</p>
        <button className="btn btn-primary me-2" onClick={increment}>Increment</button>
        <button className="btn btn-secondary" onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter