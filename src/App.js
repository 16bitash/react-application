// Evaluating Expressions in JSX
// const name = "John Doe";

// const MyComponent = () => {
//   return <h1>My name is {name}</h1>;
// };

// Children props
const TwoButtons = (props) => {
  const { children, isDisabled } = props;

  return (
    <div>
      <button disabled={isDisabled}>{children}</button>
      <button disabled={isDisabled}>{children}</button>
    </div>
  );
};

const MyComponent = (props) => {
  const { name, age } = props;

  return (
    <h1>
      My name is {name} and my age is {age}
    </h1>
  );
};

const App = () => {
  return (
    <>
      <MyComponent name="Jane" age="40" />
      <MyComponent name="John" age="30" />
      <TwoButtons isDisabled={true}>
        Do something
      </TwoButtons>
      <TwoButtons isDisabled={false}>Do something else</TwoButtons>
    </>
  );
};

export default App;
