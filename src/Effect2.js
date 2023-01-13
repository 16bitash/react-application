import { useState, useEffect } from "react";

const Effect2 = () => {
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

  useEffect(() => {
    const headingNode = document.querySelector("#heading");

    const clickHandler = () => {
      console.log("Heading clicked");
    };

    headingNode.addEventListener("click", clickHandler);

    return () => {
      headingNode.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <>
      <h1 id="heading">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default Effect2;
