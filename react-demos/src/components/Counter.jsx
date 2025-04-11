import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => {
    return 10;
  });
  return (
    <div>
      {count}
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      ></button>
    </div>
  );
};

export default Counter;
