
import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(20);


  const handleAdd = () => {
    if (counter === 0 || counter < 20) {
      setCounter(counter + 10)
    }
  }

  const handleSub = () => {
    if (counter === 20 || counter < 20) {
      setCounter(counter - 10)
    }
  }

  // counter === 20 ? "" : ""

  return (
    <>
      {
        counter <= 0 || counter < 20 ? (
            <button
              onClick={handleAdd}
            > Add  </button>
          
        ) : (
          <button
            onClick={handleSub}
          > Subs </button>
        )
      }

      <p>{counter} final</p>

    </>
  )
}

export default App
