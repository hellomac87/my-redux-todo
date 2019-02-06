import React, { Component } from "react";
import { Container, Button, Form } from "semantic-ui-react";
import { addTodo } from "../actions/index";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class FormContainer extends Component {
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
      <Container>
        <Form
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
          <Button type="submit">add</Button>
        </Form>
      </Container>
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
)(FormContainer);
