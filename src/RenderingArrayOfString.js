const items = ["item1", "item2", "item3", "item4", "item5"];

const RenderingArrayOfString = () => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default RenderingArrayOfString;
