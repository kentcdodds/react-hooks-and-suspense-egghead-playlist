import React, {useState} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  return <button onClick={increment}>{count}</button>
}

export default Counter
