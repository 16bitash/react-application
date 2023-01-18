import { useState, createContext, useContext } from "react";

const CountContext = createContext();

const Context = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={{ count, setCount }}>
        <GrandParent />
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </CountContext.Provider>
    </>
  );
};

const GrandParent = () => {
  return <Parent />;
};

const Parent = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <Child />
    </>
  );
};

const Child = () => {
  const { count } = useContext(CountContext);

  return (
    <>
      <div>Child</div>
      <div>{count}</div>
    </>
  );
};

export default Context;
