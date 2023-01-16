import { useRef } from "react";

const Reference = () => {
  const inputRef = useRef(null);

  const handleFocusClick = () => {
    if (inputRef.current === null) {
      // Ref is not initialized yet
      return;
    }

    const inputNode = inputRef.current;
    inputNode.focus();
  };

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleFocusClick}>Focus</button>
    </>
  );
};

export default Reference;
