const Parent = () => {
  return (
    <>
      <Wrapper>
        <div>Content</div>
        <div>Content 2</div>
      </Wrapper>
    </>
  );
};

const Wrapper = (props) => {
  const { children } = props;

  return (
    <>
      <nav style={{ height: 50, backgroundColor: "black" }} />
      <div style={{ backgroundColor: "red" }}>{children}</div>
      <div>Footer</div>
    </>
  );
};

export default Parent;
