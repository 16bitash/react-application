import { useRef } from "react";

const ReferenceWithoutNode = () => {
  const countRef = useRef(0);

  const handleButtonClick = () => {
    countRef.current = countRef.current + 1;
    console.log(`Button has been clicked ${countRef.current} times`);
  };

  return <button onClick={handleButtonClick}>Click</button>;
};

export default ReferenceWithoutNode;
