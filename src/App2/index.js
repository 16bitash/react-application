import "./styles.css";

const isYellow = false;

const App2 = () => {
  return (
    <div>
      <h1 className={isYellow ? "yellow-heading" : "blue-heading"}>App2</h1>
    </div>
  );
};

export default App2;
