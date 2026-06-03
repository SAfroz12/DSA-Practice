class App extends React.Component {

  constructor() {
    super();

    console.log("Constructor");

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  render() {
    console.log("Render");

    return (
      <button
        onClick={() =>
          this.setState({
            count:
              this.state.count + 1
          })
        }
      >
        {this.state.count}
      </button>
    );
  }
}