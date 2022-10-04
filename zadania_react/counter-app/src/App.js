import {useState} from 'react'
import "./style.css";

function App() {
  const [value, setValue] = useState(0)
  
  

  return (
    <div class="container">
      <div>
        <h1>prosty counter</h1>
      </div>
      <div>
        <p className= {value <0 ? 'red' : value >0 ?'green': 'black'  }>{value}</p>  
      </div>
      <div class="btnStyle">
        <button className='btn' onClick={() => setValue(value +1)}>Increase</button>
        <button className='btn' onClick={() => setValue(0)}>Reset</button>
        <button className='btn' onClick={() => setValue(value -1)}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
