import reducer from "../reducers";
import * as actions from "../actions/actionCreaters";

describe("reducers", () => {
  describe("todos", () => {
    test("it returns an empty array as default state after init the store", () => {
      const nextState = reducer(undefined, { type: "@@redux/INIT" });
      expect(nextState).toEqual({ search: "", todos: [] });
    });

    test("resolve todos", () => {
      const state = {
        search: "",
        todos: [
          { id: "0", name: "a", completed: true },
          { id: "1", name: "b", completed: false }
        ]
      };

      const nextState = reducer(state, actions.resolveTodos(state.todos));
      expect(nextState.todos).toHaveLength(2);
      expect(nextState.todos).toContainEqual(...state.todos);
    });

    test("resolve todo", () => {
      const state = { search: "", todos: [] };
      const nextState = reducer(
        state,
        actions.resolveTodo({ id: "0", name: "a", completed: false })
      );
      expect(nextState.todos).toHaveLength(1);
      expect(nextState.todos).toContainEqual({
        id: "0",
        name: "a",
        completed: false
      });
    });

    test("update todo name", () => {
      const state = {
        search: "",
        todos: [
          {
            id: "0",
            name: "a",
            completed: false
          }
        ]
      };
      const nextState = reducer(
        state,
        actions.resolveTodo({
          id: "0",
          name: "b",
          completed: false
        })
      );
      expect(nextState.todos).toHaveLength(1);
      expect(nextState.todos).toContainEqual({
        id: "0",
        name: "b",
        completed: false
      });
    });

    test("update todo completed", () => {
      const state = {
        search: "",
        todos: [
          {
            id: "0",
            name: "a",
            completed: false
          }
        ]
      };
      const nextState = reducer(
        state,
        actions.resolveTodo({
          id: "0",
          name: "a",
          completed: true
        })
      );
      expect(nextState.todos).toHaveLength(1);
      expect(nextState.todos).toContainEqual({
        id: "0",
        name: "a",
        completed: true
      });
    });

    test("clear completed todos", () => {
      const state = {
        search: "",
        todos: [
          {
            id: "0",
            name: "a",
            completed: true
          },
          {
            id: "1",
            name: "b",
            completed: false
          },
          {
            id: "2",
            name: "c",
            completed: true
          }
        ]
      };
      const nextState = reducer(state, actions.clearTodos());
      expect(nextState.todos).toHaveLength(1);
      expect(nextState.todos).toContainEqual({
        id: "1",
        name: "b",
        completed: false
      });
    });

    test("delete todo", () => {
      const state = {
        todos: [
          {
            id: "1",
            name: "a",
            completed: false
          },
          {
            id: "2",
            name: "b",
            completed: false
          }
        ],
        search: ""
      };
      const nextState = reducer(state, actions.deleteTodo("1"));
      expect(nextState.todos).toHaveLength(1);
      expect(nextState.todos).toContainEqual({
        id: "2",
        name: "b",
        completed: false
      });
    });

    test("delete todo", () => {
      const state = {
        todos: [
          {
            id: "1",
            name: "a",
            completed: false
          },
          {
            id: "2",
            name: "b",
            completed: false
          }
        ],
        search: ""
      };
      const nextState = reducer(state, actions.deleteAllTodos());
      expect(nextState.todos).toHaveLength(0);
    });
  });

  describe("search", () => {
    test("set search", () => {
      const state = {
        search: "",
        todos: []
      };

      const nextState = reducer(state, actions.searchTodo("a"));
      expect(nextState.search).toBe("a");
    });
  });
});
