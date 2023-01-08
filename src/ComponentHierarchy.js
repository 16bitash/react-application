import { useState } from "react";

const ComponentHierarchy = () => {
  return <Parent />;
};

const Parent = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  console.log("Parent render");

  return (
    <>
      <h3>Parent</h3>
      <div>{count}</div>
      <button onClick={increaseCount}>Increase</button>
      <Child1 />
      <Child2 />
    </>
  );
};

const Child1 = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  console.log("Child 1 render");

  return (
    <>
      <h3>Child 1</h3>
      <div>{count}</div>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
};

const Child2 = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  console.log("Child 2 render");

  return (
    <>
      <h3>Child 2</h3>
      <div>{count}</div>
      <button onClick={increaseCount}>Increase</button>
    </>
  );
};

export default ComponentHierarchy;
