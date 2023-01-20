import { createContext, useContext, useState } from "react";

const CountContext = createContext();

const ProviderWrapper = (props) => {
  const [count, setCount] = useState(1);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {props.children}
    </CountContext.Provider>
  );
};

const CustomProvider = () => {
  return (
    <ProviderWrapper>
      <Child />
    </ProviderWrapper>
  );
};

const Child = () => {
  const { count, setCount } = useContext(CountContext);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
};

export default CustomProvider;
