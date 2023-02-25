import React, { useState, useEffect } from "react";

export function Example1() {
  // Declare state variables using the useState hook:
  const [check, setCheck] = useState(true);
  const [count, setCount] = useState(0);

  // Use the useEffect hook to manage side effects:
  useEffect(() => {
    setCount(count + 1);
  }, [check]);

  // This code uses the useEffect hook to update the data state variable when the component mounts. The empty array [] as the second argument of the useEffect hook means that this effect should only run once, when the component mounts. If you want the effect to run when a specific prop or state variable changes, you can pass it as a dependency array instead.

  return (
    <div>
      <p>Count: { count}</p>
      <button onClick={() => setCheck(!check)}>Click</button>
    </div>
  );
}

