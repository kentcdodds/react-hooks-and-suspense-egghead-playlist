import React, {useState, useEffect} from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count + 1)
  useEffect(() => {
    window.localStorage.setItem('count', count)
  })
  return <button onClick={increment}>{count}</button>
}

export default Counter
