import React, { Component } from "react";
import Form from "../containers/Form";
import List from "../containers/List";

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
