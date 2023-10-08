import { useState, useEffect } from "react"

function Greeting({ name, age, color }) {
  const [counter, setCounter] = useState(0)
  const [toggle, setToggle] = useState(true)
  useEffect(logThis, [toggle]);

  function logThis() {
    console.log("hello")
    return () => {
      console.log("Removed")
    }
  }

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Click Me</button>
      <br />
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <h2 style={{ color: color }}>Hello {name}</h2>
      <p>My age is {age}</p>
      <p>{counter}</p>
    </>
  )
}

export default Greeting;