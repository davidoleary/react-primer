import React, { useState, useEffect } from 'react'

function CounterUseEffect() {
  // passing a callback to useState will fire only once so we do not read from localstorage on every render
  const [count, setCount] = useState(() =>
    Number(window.localStorage.getItem('count') || 0),
  )
  const increment = () => setCount(count + 1)
  useEffect(() => {
      window.localStorage.setItem('count', count)
    }, [count], // using [count] will only trigger the update to local storage when the value of count changes
  )
  return <button onClick={increment}>{count}</button>
}

export default CounterUseEffect