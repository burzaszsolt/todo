import { createSelector } from "reselect";

export const getTodos = state => state.todos;
export const getTodosCount = state => state.todos.length;
export const getCompletedTodosCount = state =>
  state.todos.filter(todo => todo.completed).length;
export const getUncompletedTodosCount = createSelector(
  getTodosCount,
  getCompletedTodosCount,
  (all, completed) => {
    return all - completed;
  }
);
export const filterTodos = state =>
  state.todos.filter(todo => todo.name.includes(state.search));
