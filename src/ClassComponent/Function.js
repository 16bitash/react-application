import { useEffect, useState } from "react";

const Function = (props) => {
  const [count, setCount] = useState(0);
  const [newCount, setNewCount] = useState(0);

  useEffect(() => {
    console.log("function component mount");

    return () => {
      console.log("function component unmount");
    };
  }, []);

  useEffect(() => {
    console.log("function component count change");
  }, [count]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const increaseNewCount = () => {
    setNewCount(newCount + 1);
  };

  return (
    <>
      <h1>Function Component</h1>
      <div>{count}</div>
      <button onClick={increaseCount}>Increase</button>

      <div>{newCount}</div>
      <button onClick={increaseNewCount}>Increase</button>

      <div>My name is {props.name}</div>
    </>
  );
};

export default Function;
