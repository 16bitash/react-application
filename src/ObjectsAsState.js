import { useState } from "react";

const ObjectsAsState = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const addAnotherNumber = () => {
    const lastElement = numbers[numbers.length - 1];
    const newNumbers = [...numbers, lastElement + 1];

    setNumbers(newNumbers);
  };

  return (
    <>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>

      <button onClick={addAnotherNumber}>Add another number</button>
    </>
  );
};

export default ObjectsAsState;
