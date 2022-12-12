import React, { useState } from 'react';
function App() {
  const [first, setfirst] = useState(0)

  return (
    <div className='App'>
      <h1>first</h1>2
      <h1>{first}</h1>22
      <ul>
        <li>1</li>
        <li>1</li>
      </ul>
      <button onClick={()=>{throw new Error('cuowu')}}>+1</button>
    </div>
  );
}

export default App;
