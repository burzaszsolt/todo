import {
  ADD_TODO,
  UPDATE_TODO_NAME,
  UPDATE_TODO_COMPLETED,
  CLEAR_TODOS,
  SEARCH_TODO
} from "./actionNames";

export function addTodo(name) {
  return {
    type: ADD_TODO,
    payload: {
      name: name
    }
  };
}

export function updateTodoCompleted(id) {
  return {
    type: UPDATE_TODO_COMPLETED,
    payload: {
      id: id
    }
  };
}

export function updateTodoName(id, name) {
  return {
    type: UPDATE_TODO_NAME,
    payload: {
      id: id,
      name: name
    }
  };
}

export function clearTodos() {
  return {
    type: CLEAR_TODOS
  };
}

export function searchTodo(search) {
  return {
    type: SEARCH_TODO,
    payload: {
      search: search
    }
  };
}
