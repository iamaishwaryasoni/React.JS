import { useState } from 'react'

import './App.css'
function App() {
 
  let [counter, setCounter] = useState(10) 
  // useState gives two things in array format : 
  // 1st one is the variable which value we get at the 0th index,  
  // 2nd one is the function which controls the variable
  // we can give a default value of a variable in useState.

  //let counter = 10

  const addValue = () => {
    
    //counter = counter + 1
    if(counter <20){
    setCounter(counter + 1);
    }
    else{
      alert("Limit reached");
    }
    console.log("value added", counter);
  }

   const removeValue = () => {
    if(counter > 0 ){
       setCounter(counter -1);
    } else {
      alert('No more items to delete')
    }
   
   }

  // In react hooks is a method by which we can update the data in UI

  return (
    <>
      <h1>Counter Application </h1>
      <h2>Counter Value: {counter} </h2>

      <button
       onClick={addValue}
      >Add Value {counter} </button>
       <br />
      <button
       onClick={removeValue}
      >Remove Value {counter} </button>
    </>
  )
}

export default App
