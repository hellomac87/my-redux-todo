import React, { Component } from "react";
import { removeTodo, completedTodo } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class List extends Component {
  render() {
    const { todos, removeTodo, completedTodo } = this.props;
    return (
      <ul>
        {todos.map(t => (
          <li key={t.id}>
            <span onClick={() => completedTodo(t.id)}>{t.text}</span>
            <button onClick={() => removeTodo(t.id)} type="button">
              delete
            </button>
            {t.completed ? "completed" : "not completed"}
          </li>
        ))}
      </ul>
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
)(List);
