import _uniqueId from "lodash-es/uniqueId";
import { toast } from "react-toastify";

export default function reducer(
  state = {
    todos: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        ...state,
        todos: [
          ...state.todos,
          { ...action.payload, id: parseInt(_uniqueId()), completed: false }
        ]
      };
    }

    case "UPDATE_TODO": {
      const newTodos = [...state.todos];
      const todoToUpdate = newTodos.findIndex(
        todo => todo.id === action.payload.id
      );
      newTodos[todoToUpdate] = {
        ...newTodos[todoToUpdate],
        completed: !newTodos[todoToUpdate].completed
      };
      toast("Completed!", {
        toastId: 3,
        type: toast.TYPE.SUCCESS
      });
      return {
        ...state,
        todos: newTodos
      };
    }

    case "CLEAR_TODOS": {
      const newTodos = state.todos.filter(todo => !todo.completed);
      if (newTodos.length === state.todos.length) {
        toast("There aren't any completed todos, nothing to clear!", {
          toastId: 5,
          type: toast.TYPE.WARNING
        });
      } else {
        toast("Completed todos cleared", {
          toastId: 6,
          type: toast.TYPE.SUCCESS
        });
      }
      return {
        ...state,
        todos: newTodos
      };
    }

    default:
      return state;
  }
}
