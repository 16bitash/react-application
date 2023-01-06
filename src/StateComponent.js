import { useState } from "react";

const Age = (props) => {
  const { age } = props;

  return <h1>My age is {age}</h1>;
};

const StateComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");
  const [age, setAge] = useState(40);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const changePerson = () => {
    if (name === "John") {
      setName("Jane");
      setAge(50);
      return;
    }

    setName("John");
    setAge(40);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>

      <h1>My name is {name}</h1>
      <Age age={age} />

      <button onClick={changePerson}>Change person</button>
    </>
  );
};

export default StateComponent;
