import { useState } from "react";

const Function = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Function Component</h1>
      <div>{count}</div>
      <button onClick={handleIncreaseButtonClick}>Increase</button>
    </>
  );
};

export default Function;
