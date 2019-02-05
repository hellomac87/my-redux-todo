import React, { Component } from "react";
import { addTodo } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  handleInput = e => {
    const value = e.target.value;
    this.setState({
      input: value
    });
  };

  handleSubmit = e => {
    const { input } = this.state;
    const { addTodo } = this.props;
    e.preventDefault();
    addTodo(input);

    this.setState({
      input: ""
    });
  };

  render() {
    const { input } = this.state;
    return (
      <form
        onSubmit={e => {
          this.handleSubmit(e);
        }}
      >
        <input
          onChange={e => this.handleInput(e)}
          value={input}
          type="text"
          placeholder="push todo"
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTodo
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
