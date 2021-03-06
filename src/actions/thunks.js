import * as actions from "./actionCreaters";

export const getTodos = () => async (
  dispatch,
  getState,
  { localStorageApi, api, toast }
) => {
  try {
    // const todos = localStorageApi.getTodos();
    const todos = await api.get("/todos");
    dispatch(actions.resolveTodos(todos));
  } catch (apiError) {
    toast(apiError.message, {
      toastId: Symbol(),
      type: toast.TYPE.ERROR
    });
  }
};

export const addTodo = name => async (
  dispatch,
  getState,
  { localStorageApi, api, toast }
) => {
  try {
    const todo = await api.post("/todos", { body: { name } });
    dispatch(actions.resolveTodo(todo));
    toast("TODO created!", {
      toastId: Symbol(),
      type: toast.TYPE.SUCCESS
    });
    // localStorageApi.setTodos(selectors.getTodos(getState()));
  } catch (apiError) {
    toast(apiError.message, {
      toastId: Symbol(),
      type: toast.TYPE.ERROR
    });
  }
};

export const updateTodoCompleted = (id) => async (
  dispatch,
  getState,
  { localStorageApi, api, toast }
) => {
  try {
    const prevTodo = getTodos(getState()).find(todo => todo.id === id);
    const todo = await api.put(`/todos/${id}`, {
      body: { completed: !prevTodo.completed }
    });
    dispatch(actions.resolveTodo(todo));
    toast("Completed!", {
      toastId: Symbol(),
      type: toast.TYPE.SUCCESS
    });
    // localStorageApi.setTodos(selectors.getTodos(getState()));
  } catch (apiError) {
    toast(apiError.message, {
      toastId: Symbol(),
      type: toast.TYPE.ERROR
    });
  }
};

export const updateTodoName = (id, name) => async (
  dispatch,
  getState,
  { localStorageApi, api, toast }
) => {
  try {
    const todo = await api.put(`/todos/${id}`, {
      body: { name }
    });
    dispatch(actions.resolveTodo(todo));
    toast("Updated!", {
      toastId: Symbol(),
      type: toast.TYPE.SUCCESS
    });
    // localStorageApi.setTodos(selectors.getTodos(getState()));
  } catch (apiError) {
    toast(apiError.message, {
      toastId: Symbol(),
      type: toast.TYPE.ERROR
    });
  }
};

export const deleteTodo = id => async (
  dispatch,
  getState,
  { localStorageApi, api, toast }
) => {
  try {
    await api.delete(`/todos/${id}`);
    dispatch(actions.deleteTodo(id));
    toast("Deleted", {
      toastId: Symbol(),
      type: toast.TYPE.SUCCESS
    });
  } catch (apiError) {
    toast(apiError.message, {
      toastId: Symbol(),
      type: toast.TYPE.ERROR
    });
  }
};

export const deleteAllTodos = () => async (
  dispatch,
  getState,
  { localStorageApi, api, toast }
) => {
  try {
    await api.delete(`/todos/all`);
    dispatch(actions.deleteAllTodos()); // TODO: use resolveTodos
    toast("All todos deleted", {
      toastId: Symbol(),
      type: toast.TYPE.SUCCESS
    });
  } catch (apiError) {
    toast(apiError.message, {
      toastId: Symbol(),
      type: toast.TYPE.ERROR
    });
  }
};

export const clearTodos = () => async (
  dispatch,
  getState,
  { localStorageApi, api, toast }
) => {
  try {
    await api.delete("/todos/completed");
    dispatch(actions.clearTodos());
    // localStorageApi.setTodos(selectors.getTodos(getState()));
    toast("Completed todos cleared", {
      toastId: Symbol(),
      type: toast.TYPE.SUCCESS
    });
  } catch (apiError) {
    toast(apiError.message, {
      toastId: Symbol(),
      type: toast.TYPE.ERROR
    });
  }
};

export const login = () => (
  dispatch,
  getState,
  { localStorageApi, api, toast }
) => {
  try {
    toast("Login", {
      toastId: Symbol(),
      type: toast.TYPE.SUCCESS
    });
    dispatch(actions.login());
  } catch (err) {
    toast("Hiba a bejelentkezés során", {
      toastId: Symbol(),
      type: toast.TYPE.ERROR
    });
  }
};
