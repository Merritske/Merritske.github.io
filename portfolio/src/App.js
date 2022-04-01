import './App.css';
import './styles/home.scss'
import './components/Quotes.js'
import './components/uiterst.js'
import { useState } from 'react';
import Uiterst from './components/uiterst.js';

function App() {

  const [uiterst, setUiterst] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        
     {/* <Quotes /> */}

        {/* <img src="/images/hond.jpg" /> */}
       <ul style={{listStyleType: "none"}}>
         Kortverhalen
         {/* <li>
           
Huis te koop in gezellige buurt.
    </li> */}
        
         <li onClick={()=>setUiterst(true)} style={{cursor:"pointer"}} >
     
          Een uiterst gewichtige aangelegenheid. 
  
{
  uiterst && <Uiterst />
}

         </li>
       </ul>
      </header>
    </div>
  );
}

export default App;
