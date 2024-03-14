import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(200);
  const [bgColor, setBgColor] = useState("fffff");
  const [qrCode, setQrCode] = useState("");

 

  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word,size,bgColor]);
  
  function handleSubmit() {
    setWord(temp);
  }
  
  return (

     <div className='App'> 
        <h1>QR Code Generator</h1>
       <div style={{display: 'flex', alignItems: "center", flexDirection: 'column'}}>
        <div className='input-box'>
          <div className='gen'>
            <input type="text" 
            value={temp}
             onChange={(e) =>  {setTemp(e.target.value)}}
            
             placeholder='Enter Your Text For Encode' 
            />

            < button className='button'
              onClick={handleSubmit}>
             Generate 
            </button>
          </div>
          </div>
          <div className='extra' >
            <h5 style={{'fontSize': '18px'}}> Background Color: </h5>
            <input type="Color" style={{'margin-top': '25px'}}
             onChange={(e) => {setBgColor(e.target.value.substring(1))}}  
            />

            <h5 style={{'fontSize': '18px'}}>Dimension: </h5>
            <input type="range" min="200" max="400"
             value={size}
             onChange={(e) => {setSize(e.target.value)}}/>
          </div>
        </div>

        <div className='output-box'>
          <img src={qrCode} alt=' ' />
          <a href={qrCode} download="QRCode">
            <button type='button'> Download </button>
          </a>
        </div>
    
     </div>

  );
}

export default App
