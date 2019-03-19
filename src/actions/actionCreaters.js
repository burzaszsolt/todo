import {
  ADD_TODO,
  UPDATE_TODO_NAME,
  UPDATE_TODO_COMPLETED,
  CLEAR_TODOS,
  SEARCH_TODO,
  RESOLVE_TODO,
  RESOLVE_TODOS,
  DELETE_TODO,
  DELETE_ALL_TODOS,
  LOGIN
} from "./actionNames";

// export function getTodos(todos) {
//   return {
//     type: GET_TODOS,
//     payload: {
//       todos
//     }
//   };
// }

export function addTodo(name) {
  return {
    type: ADD_TODO,
    payload: {
      name
    }
  };
}

export function updateTodoCompleted(id) {
  return {
    type: UPDATE_TODO_COMPLETED,
    payload: {
      id
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
      search
    }
  };
}

export function resolveTodo(todo) {
  return {
    type: RESOLVE_TODO,
    payload: {
      todo
    }
  };
}

export function resolveTodos(todos) {
  return {
    type: RESOLVE_TODOS,
    payload: {
      todos
    }
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  };
}

export function deleteAllTodos() {
  return {
    type: DELETE_ALL_TODOS
  };
}

export function login() {
  return {
    type: LOGIN
  };
}
