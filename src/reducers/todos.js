import {
  CLEAR_TODOS,
  RESOLVE_TODOS,
  RESOLVE_TODO,
  DELETE_TODO,
  DELETE_ALL_TODOS
} from "../actions/actionNames";

export default function reducer(state = [], action) {
  switch (action.type) {
    case RESOLVE_TODOS: {
      return action.payload.todos;
    }
    case RESOLVE_TODO: {
      if (state.findIndex(todo => todo.id === action.payload.todo.id) === -1) {
        return [...state, action.payload.todo];
      }
      return state.map(todo =>
        todo.id === action.payload.todo.id ? action.payload.todo : todo
      );
    }
    // case ADD_TODO: {
    //   const lastId = state.reduce((max, todo) => {
    //     return todo.id > max ? todo.id : max;
    //   }, -1);
    //   return [
    //     ...state,
    //     { id: lastId + 1, name: action.payload.name, completed: false }
    //   ];
    // }
    // case UPDATE_TODO_COMPLETED: {
    //   return state.map(todo =>
    //     todo.id === action.payload.id
    //       ? { ...todo, completed: !todo.completed }
    //       : todo
    //   );
    // }
    // case UPDATE_TODO_NAME: {
    //   return state.map(todo =>
    //     todo.id === action.payload.id
    //       ? { ...todo, name: action.payload.name }
    //       : todo
    //   );
    // }
    case DELETE_TODO: {
      return state.filter(todo => todo.id !== action.payload.id);
    }
    case CLEAR_TODOS: {
      return state.filter(todo => !todo.completed);
    }
    case DELETE_ALL_TODOS: {
      return [];
    }
    default:
      return state;
  }
}
