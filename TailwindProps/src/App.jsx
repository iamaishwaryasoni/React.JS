import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username: "Soni",
    age:23
  }

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 m-10 rounded-xl '>Tailwind CSS</h1>
     <Card username="Aishwarya" btnText="see me"/>
     <Card username="Soni" btnText="visit me"/>

    </>
  )
}

export default App
