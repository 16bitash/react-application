import { forwardRef, useRef } from "react";

const ForwardRef = () => {
  const divRef = useRef(null);
  const childDivRef = useRef(null);

  const handleClickHandler = () => {
    console.log(divRef.current);
    console.log(childDivRef.current);
  };

  return (
    <>
      <div ref={divRef}>Hey</div>
      <ChildWithForwardRef ref={childDivRef} />
      <button onClick={handleClickHandler}>Click</button>
    </>
  );
};

const Child = (props, ref) => {
  return <div ref={ref}>Bye</div>;
};

const ChildWithForwardRef = forwardRef(Child);

export default ForwardRef;
