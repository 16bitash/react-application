import { useState } from "react";

const ControlledInput = () => {
  const [controlledInputValue, setControlledInputValue] = useState("");

  const logControlledInputValue = () => {
    console.log(controlledInputValue);
  };

  const changeControlledInputValueToJohn = () => {
    setControlledInputValue("John");
  };

  const onControlledInputChange = (event) => {
    setControlledInputValue(event.target.value);
  };

  return (
    <>
      <h1>Controlled Input:</h1>
      <input value={controlledInputValue} onChange={onControlledInputChange} />
      <br />
      <button onClick={logControlledInputValue}>Log Input Value</button>
      <button onClick={changeControlledInputValueToJohn}>
        Change Input Value To John
      </button>
    </>
  );
};

export default ControlledInput;
