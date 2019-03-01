import * as actions from "./actionCreaters";
import * as selectors from "../selectors";

export const getTodos = () => (dispatch, getState, { localStorageApi }) => {
  const todos = localStorageApi.getTodos();
  dispatch(actions.getTodos(todos));
};

export const addTodo = name => (dispatch, getState, { localStorageApi }) => {
  dispatch(actions.addTodo(name));
  localStorageApi.setTodos(selectors.getTodos(getState()));
};

export const updateTodoCompleted = id => (
  dispatch,
  getState,
  { localStorageApi }
) => {
  dispatch(actions.updateTodoCompleted(id));
  localStorageApi.setTodos(selectors.getTodos(getState()));
};

export const updateTodoName = (id, name) => (
  dispatch,
  getState,
  { localStorageApi }
) => {
  dispatch(actions.updateTodoName(id, name));
  localStorageApi.setTodos(selectors.getTodos(getState()));
};
