import React, { Component } from "react";
import { Container, Segment, List, Button } from "semantic-ui-react";
import { removeTodo, completedTodo } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ListContainer extends Component {
  render() {
    const { todos, removeTodo, completedTodo } = this.props;
    return (
      <Container style={{ marginTop: "15px" }}>
        <Segment inverted>
          <List inverted relaxed>
            {todos.map(t => (
              <List.Item key={t.id}>
                <List.Content
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <List.Header>
                    <h2
                      style={{
                        textDecoration: t.completed ? "line-through" : "none"
                      }}
                      onClick={() => completedTodo(t.id)}
                    >
                      {t.text}
                    </h2>
                  </List.Header>

                  <Button onClick={() => removeTodo(t.id)} type="button">
                    delete
                  </Button>
                  {}
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Segment>
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
