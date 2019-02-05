export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const COMPLETED_TOGGLE_TODO = "COMPLETED_TOGGLE_TODO";

let createTodoId = 0;
export const addTodo = input => {
  return {
    type: ADD_TODO,
    payload: {
      id: createTodoId++,
      text: input,
      completed: false
    }
  };
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const updateTodo = (id, input) => {
  return {
    type: UPDATE_TODO,
    id,
    input
  };
};

export const completedTodo = id => {
  return {
    type: COMPLETED_TOGGLE_TODO,
    id
  };
};
