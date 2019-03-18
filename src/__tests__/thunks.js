import * as thunks from "../actions/thunks";
import * as actions from "../actions/actionNames";

describe("thunks", () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  const localStorageApi = {
    getTodos: jest.fn(),
    setTodos: jest.fn()
  };

  beforeEach(() => {
    dispatch.mockReset();
    getState.mockReset();
    localStorageApi.getTodos.mockReset();
    localStorageApi.setTodos.mockReset();
  });

  describe("setInitialState", () => {
    // test("it resolves todos from local storage", () => {
    //   const todos = [
    //     { id: "1", name: "a", completed: false },
    //     { id: "2", name: "b", completed: true }
    //   ];

    //   localStorageApi.getTodos.mockReturnValue(todos);
    //   thunks.getTodos()(dispatch, getState, { localStorageApi });
    //   expect(localStorageApi.getTodos).toHaveBeenCalledTimes(1);
    //   expect(localStorageApi.getTodos).toHaveBeenNthCalledWith(1);
    //   expect(dispatch).toHaveBeenCalledWith({
    //     type: actions.GET_TODOS,
    //     payload: { todos }
    //   });
    // });

    test("it resolves todos from api", () => {
      const todos = [
        { id: "1", name: "a", completed: false },
        { id: "2", name: "b", completed: true }
      ];

      localStorageApi.getTodos.mockReturnValue(todos);
      thunks.getTodos()(dispatch, getState, { localStorageApi });
      expect(localStorageApi.getTodos).toHaveBeenCalledTimes(1);
      expect(localStorageApi.getTodos).toHaveBeenNthCalledWith(1);
      expect(dispatch).toHaveBeenCalledWith({
        type: actions.GET_TODOS,
        payload: { todos }
      });
    });
  });

  describe("addTodo", () => {
    test("it adds todo into store and local storage", () => {
      const nextState = { todos: [{ id: 0, name: "a", completed: false }] };
      getState.mockReturnValue(nextState);
      thunks.addTodo("a")(dispatch, getState, { localStorageApi });
      expect(dispatch).toHaveBeenCalledWith({
        type: actions.ADD_TODO,
        payload: { name: "a" }
      });
      expect(localStorageApi.setTodos).toHaveBeenCalledWith(nextState.todos);
    });

    // test("throws error if setTodos throws error", () => {
    //   const nextState = { todos: [{ id: 1, name: "a", completed: false }] };
    //   getState.mockReturnValue(nextState);
    //   localStorageApi.setTodos.mockImplementation(() => {
    //     throw new Error("jaj");
    //   });
    //   expect(() => {
    //     thunks.addTodo("a")(dispatch, getState, { localStorageApi });
    //   }).toThrow();
    // });
  });

  describe("updateTodoCompleted", () => {
    test("it updates the todos' completed property in local storage", () => {
      const nextState = { todos: [{ id: 0, name: "a", completed: true }] };
      getState.mockReturnValue(nextState);
      thunks.updateTodoCompleted(0)(dispatch, getState, { localStorageApi });
      expect(dispatch).toHaveBeenCalledWith({
        type: actions.UPDATE_TODO_COMPLETED,
        payload: { id: 0 }
      });
      expect(localStorageApi.setTodos).toHaveBeenCalledWith(nextState.todos);
    });
  });

  describe("updateTodoName", () => {
    test("it updates the todos' completed property in local storage", () => {
      const nextState = { todos: [{ id: 0, name: "b", completed: true }] };
      getState.mockReturnValue(nextState);
      thunks.updateTodoName(0, "b")(dispatch, getState, { localStorageApi });
      expect(dispatch).toHaveBeenCalledWith({
        type: actions.UPDATE_TODO_NAME,
        payload: { id: 0, name: "b" }
      });
      expect(localStorageApi.setTodos).toHaveBeenCalledWith(nextState.todos);
    });
  });

  describe("clearTodos", () => {
    test("clears completed todos from local storage", () => {
      const nextState = { todos: [{ id: 0, name: "b", completed: false }] };
      getState.mockReturnValue(nextState);
      thunks.clearTodos()(dispatch, getState, { localStorageApi });
      expect(dispatch).toHaveBeenCalledWith({
        type: actions.CLEAR_TODOS
      });
      expect(localStorageApi.setTodos).toHaveBeenCalledWith(nextState.todos);
    });
  });
});
