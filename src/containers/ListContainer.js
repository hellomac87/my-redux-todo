import React, { Component } from "react";
import { Container, List, Button } from "semantic-ui-react";
import { removeTodo, completedTodo } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ListContainer extends Component {
  render() {
    const { todos, removeTodo, completedTodo } = this.props;
    return (
      <Container>
        <List>
          {todos.map(t => (
            <List.Item key={t.id}>
              <span onClick={() => completedTodo(t.id)}>{t.text}</span>
              <Button onClick={() => removeTodo(t.id)} type="button">
                delete
              </Button>
              {t.completed ? "completed" : "not completed"}
            </List.Item>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      removeTodo,
      completedTodo
    },
    dispatch
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
