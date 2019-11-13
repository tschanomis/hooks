import React, {useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="Counter">
      <h1>{count}</h1>
      <input onChange={(e) => setCount(Number(e.target.value))}/>
      <br/>
      <button onClick={() => setCount(count +1)}>+1</button>
      <br/>
      <button onClick={() => setCount(count -1)}>-1</button>
    </div>
  );
}

export default Counter;