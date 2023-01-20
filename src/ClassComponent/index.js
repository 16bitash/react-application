import { Component } from "react";

class Counter extends Component {
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
      throw new Error("Error");
    }

    return (
      <>
        <h1>Class Component</h1>
        <div>{this.state.count}</div>
        <button onClick={this.increaseCount}>Increase</button>

        <div>{this.state.newCount}</div>
        <button onClick={this.increaseNewCount}>Increase</button>

        <div>My name is {this.props.name}</div>
      </>
    );
  }
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}

class ClassComponent extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Counter name="John" />
      </ErrorBoundary>
    );
  }
}

export default ClassComponent;
