import { useState } from "react";

const ObjectAsState = () => {
  const [obj, setObj] = useState({ name: "John", age: 30 });

  const addAddress = () => {
    const newObj = { ...obj, address: "New York" };

    setObj(newObj);
  };

  return (
    <>
      <h1>{JSON.stringify(obj)}</h1>
      <button onClick={addAddress}>Add address</button>
    </>
  );
};

export default ObjectAsState;
