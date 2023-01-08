import { useState } from "react";

const LiftingStateUp = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Count count={count} />
      <IncreaseButton count={count} setCount={setCount} />
    </>
  );
};

const Count = (props) => {
  const { count } = props;

  return <h1>{count}</h1>;
};

const IncreaseButton = (props) => {
  const { count, setCount } = props;

  const increaseCount = () => {
    setCount(count + 1);
  };

  return <button onClick={increaseCount}>Increase</button>;
};

export default LiftingStateUp;
