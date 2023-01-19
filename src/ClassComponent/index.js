import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncreaseButtonClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h1>Class Component</h1>
        <div>{this.state.count}</div>
        <button onClick={this.handleIncreaseButtonClick}>Increase</button>
      </>
    );
  }
}

export default ClassComponent;
