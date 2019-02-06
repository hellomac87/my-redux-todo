import React, { Component } from "react";
import FormContainer from "../containers/FormContainer";
import ListContainer from "../containers/ListContainer";

class App extends Component {
  render() {
    return (
      <div>
        <FormContainer />
        <ListContainer />
      </div>
    );
  }
}

export default App;
