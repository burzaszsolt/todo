import { ADD_TODO, UPDATE_TODO, CLEAR_TODOS } from "./actionNames";

export function addTodo(name) {
  return {
    type: ADD_TODO,
    payload: {
      name: name
    }
  };
}

export function updateTodo(id) {
  return {
    type: UPDATE_TODO,
    payload: {
      id: id
    }
  };
}

export function clearTodos() {
  return {
    type: CLEAR_TODOS
  };
}
