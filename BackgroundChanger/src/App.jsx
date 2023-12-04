import { useState } from "react"
import './index.css'

function App() {
  const [color, setColor] = useState("#808000")

  const btn = [
    {
      name: 'red',
      color: '#FF5733',
    },
    {
      name: 'green',
      color: '#2ECC40',
    },
    {
      name: 'blue',
      color: '#1A96D1',
    },
    {
      name: 'black',
      color: 'black',
    },
    {
      name: 'orange',
      color: '#FFC107',
    },
    {
      name: 'yellow',
      color: '#FDD835',
    },
    {
      name: 'purple',
      color: '#AB00AB',
    },
    {
      name: 'magenta',
      color: '#DC143C',
    },
    {
      name: 'cyan',
      color: '#00FFFF',
    },
    {
      name: 'pink',
      color: '#FFB6C1',
    },
    {
      name: 'gray',
      color: '#AAAAAA',
    },
    {
      name: 'brown',
      color: '#8B4513',
    },
    {
      name: 'chartreuse',
      color: '#3CB371',
     
    },
    {
      name: 'crimson',
      color: '#DA70D6',
    },
    {
      name: 'tan',
      color: '#D2B48C',
    }
  ]

  return (

    <div className="w-full h-screen duration-200 text-center "
      style={{ backgroundColor: color}}
    > 
    <div
      style={{ height: "100%", fontSize: "40px", color: "white", display: "flex", justifyContent: "center", fontFamily: "Times New Roman",   alignItems: "center"}}
    >Change Background Color</div> 
      <div className=" w-full  fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap shadow-xl rounded-full justify-center bg-white gap-3  px-3 py-2">

          {
            btn.map((i, index) => (
              <button key={index} onClick={() => { setColor(i.color) }} className={`outline-none px-4 py-1 rounded-full text-white shadow-lg`} 
              style={{backgroundColor: i.color}}
              >{i.name}</button>
            ))
          }

          <div>

            {/* <button
            onClick={() => setColor("red")}
            className={`outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500`}
            >Red</button>
            
            <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full bg-green-500 text-white shadow-lg"
            >Green</button>
            
            <button 
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 bg-blue-500 rounded-full text-white shadow-lg"
            >Blue</button>
            
            <button 
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 bg-orange-500 rounded-full text-white shadow-lg"
            >Orange</button>
            
            <button 
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full bg-black text-white shadow-lg"
          >Black</button> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
