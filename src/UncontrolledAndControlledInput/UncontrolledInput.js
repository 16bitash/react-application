const UncontrolledInput = () => {
  const logUncontrolledInputValue = () => {
    // Ideally we should use a ref here, but we're using an id for simplicity
    const input = document.querySelector("#uncontrolled_input");
    console.log(input.value);
  };

  const changeUncontrolledInputValueToJohn = () => {
    // Ideally we should use a ref here, but we're using an id for simplicity
    const input = document.querySelector("#uncontrolled_input");
    input.value = "John";
  };

  return (
    <>
      <h1>Uncontrolled Input:</h1>
      <input id="uncontrolled_input" />
      <br />
      <button onClick={logUncontrolledInputValue}>Log Input Value</button>
      <button onClick={changeUncontrolledInputValueToJohn}>
        Change Input Value To John
      </button>
    </>
  );
};

export default UncontrolledInput;
