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
   
      </header>
    </div>
  );
}

export default App;
