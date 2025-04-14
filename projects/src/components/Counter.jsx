import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <h2>Count:{count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
