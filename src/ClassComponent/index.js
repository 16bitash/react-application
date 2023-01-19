import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      newCount: 0,
      hasError: false,
    };
  }

  componentDidMount() {
    console.log("class component mount");
  }

  componentWillUnmount() {
    console.log("class component unmount");
  }

  componentDidUpdate(_, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("class component count change");
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  increaseNewCount = () => {
    this.setState({ newCount: this.state.newCount + 1 });
  };

  render() {
    if (this.state.count === 5) {
      throw new Error("Something went wrong");
    }

    return (
      <>
        <h1>Class Component</h1>
        <div>{this.state.count}</div>
        <button onClick={this.increaseCount}>Increase</button>

        <div>{this.state.newCount}</div>
        <button onClick={this.increaseNewCount}>Increase</button>

        {this.state.hasError && <div>Something went wrong</div>}
      </>
    );
  }
}

export default ClassComponent;
