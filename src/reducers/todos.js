import {
  ADD_TODO,
  UPDATE_TODO_COMPLETED,
  UPDATE_TODO_NAME,
  CLEAR_TODOS
} from "../actions/actionNames";

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO: {
      const lastId = state.reduce((max, todo) => {
        return todo.id > max ? todo.id : max;
      }, -1);
      return [
        ...state,
        { id: lastId + 1, name: action.payload.name, completed: false }
      ];
    }
    case UPDATE_TODO_COMPLETED: {
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    case UPDATE_TODO_NAME: {
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, name: action.payload.name }
          : todo
      );
    }
    case CLEAR_TODOS: {
      return state.filter(todo => !todo.completed);
    }
    default:
      return state;
  }
}
