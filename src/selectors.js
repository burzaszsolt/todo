import { createSelector } from "reselect";

export const getTodos = state => state;
export const getTodosCount = state => state.length;
export const getCompletedTodosCount = state =>
  state.filter(todo => todo.completed).length;
export const getUncompletedTodosCount = createSelector(
  getTodosCount,
  getCompletedTodosCount,
  (all, completed) => {
    return all - completed;
  }
);
