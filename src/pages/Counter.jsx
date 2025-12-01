import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(1);
  
  return (
    <div className="Counter">
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
