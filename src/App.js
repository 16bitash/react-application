import "./App.css";

// Evaluating Expressions in JSX
// const name = "John Doe";

// const MyComponent = () => {
//   return <h1>My name is {name}</h1>;
// };

const MyComponent = (props) => {
  const { name, age } = props;

  return <h1>My name is {name} and my age is {age}</h1>;
};

const App = () => {
  return (
    <>
      <MyComponent name="Jane" age="40" />
      <MyComponent name="Jhon" age="30"></MyComponent>
    </>
  );
};

export default App;
