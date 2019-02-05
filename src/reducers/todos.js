import {
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  COMPLETED_TOGGLE_TODO
} from "../actions/index";

import { produce } from "immer";

export const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return produce(state, draft => {
        draft.push(action.payload);
      });
    case REMOVE_TODO:
      return produce(state, draft => {
        const id = draft.findIndex(todo => todo.id === action.id);
        draft.splice(id, 1);
      });
    case COMPLETED_TOGGLE_TODO:
      return produce(state, draft => {
        const id = draft.findIndex(todo => todo.id === action.id);
        draft[id].completed = !draft[id].completed;
      });
    default:
      return state;
  }
};
