import { useMemo, useState } from "react";

const Memorize = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const result = useMemo(() => {
    console.log("Calculating...");
    return count ** 22;
  }, [count]);

  return (
    <>
      <div>{result}</div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <div>{count2}</div>
      <button onClick={() => setCount2(count2 + 1)}>Increase</button>
    </>
  );
};

export default Memorize;
