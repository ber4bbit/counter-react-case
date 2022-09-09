import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div className='App container align-middle'>
      <div className='card'>
        <div className='card-body'>
          <h2>Counter</h2>
          <h4>{counter}</h4>
          <div className='btn-container'>
            <button className='btn btn-danger' onClick={ () => setCounter(counter - 1)}>-1</button>
            <button className='btn btn-success' onClick={ () => setCounter(counter + 1)}>+1</button>
          </div>
          <button className='btn btn-primary' onClick={ () => setCounter(0) }>Clear counter</button>
        </div>
      </div>
    </div>
  );
}

export default App;
