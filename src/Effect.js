import { useState, useEffect } from "react";

const Effect = () => {
  const [isCountVisible, setIsCountVisible] = useState(true);

  return (
    <>
      <button onClick={() => setIsCountVisible(!isCountVisible)}>
        Toggle count visibility
      </button>
      {isCountVisible && <Count />}
    </>
  );
};

const Count = () => {
  const [count, setCount] = useState(0);

  const unMountFunction = () => {
    console.log("Unmount");
  };

  const mountFunction = () => {
    console.log("Mount");

    return unMountFunction;
  };

  useEffect(mountFunction, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default Effect;
