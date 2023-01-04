const isConditional = true;

const App4 = () => {
  // let conditionalJSX;

  // if (isConditional) {
  //   conditionalJSX = <h1>Conditional JSX</h1>;
  // } else {
  //   conditionalJSX = <h2>Unconditional JSX</h2>;
  // }

  // If you only need to render in true condition
  // return (
  //   <div>
  //     {isConditional && <h1>Conditional JSX</h1>}
  //   </div>
  // );

  return (
    <div>
      {isConditional ? <h1>Conditional JSX</h1> : <h2>Unconditional JSX</h2>}
    </div>
  );
};

export default App4;
