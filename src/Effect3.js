import React, { useState, useEffect } from "react";

const Effect3 = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    console.log("count changed");

    return () => {
      console.log("count changed (cleanup)");
    };
  }, [count]);

  useEffect(() => {
    console.log("count2 changed");

    return () => {
      console.log("count2 changed (cleanup)");
    };
  }, [count2]);

  useEffect(() => {
    console.log("third effect");

    return () => {
      console.log("third effect (cleanup)");
    };
  }, [count3, count]);

  return (
    <div>
      <h1>Effect3</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment count</button>
      <p>Count2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
      <p>Count3: {count3}</p>
      <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
    </div>
  );
};

export default Effect3;
