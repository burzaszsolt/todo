import * as selectors from "../selectors";

describe("selectors", () => {
  describe("getTodos", () => {
    test("it returns all todos", () => {
      const state = {
        todos: [
          { id: 1, name: "a", completed: false },
          { id: 2, name: "b", completed: true }
        ]
      };
      const result = selectors.getTodos(state);
      expect(result).toBe(state.todos);
    });
  });

  describe("getTodosCount", () => {
    test("it returns the num of todos", () => {
      const state = {
        todos: [
          { id: 1, name: "a", completed: false },
          { id: 2, name: "b", completed: true }
        ]
      };
      const result = selectors.getTodosCount(state);
      expect(result).toBe(2);
    });
  });

  describe("getCompletedTodosCount", () => {
    test("it returns the num of completed todos", () => {
      const state = {
        todos: [
          { id: 1, name: "a", completed: false },
          { id: 2, name: "b", completed: true }
        ]
      };
      const result = selectors.getCompletedTodosCount(state);
      expect(result).toBe(1);
    });
  });

  describe("getUncompletedTodosCount", () => {
    test("it returns the num of uncompleted todos", () => {
      const state = {
        todos: [
          { id: 1, name: "a", completed: false },
          { id: 2, name: "b", completed: false },
          { id: 3, name: "c", completed: true }
        ]
      };
      const result = selectors.getUncompletedTodosCount(state);
      expect(result).toBe(2);
    });
  });

  describe("filterTodos", () => {
    const todos = [
      { id: 0, name: "a", completed: false },
      { id: 1, name: "b", completed: true }
    ];

    test("it returns all of the todos if there is no search keyword", () => {
      const state = { search: "", todos };
      const result = selectors.filterTodos(state);
      expect(result).toEqual(state.todos);
    });

    test("it returns the filtered todos", () => {
      const state = { search: "a", todos };
      const result = selectors.filterTodos(state);
      expect(result).toEqual([state.todos[0]]);
    });

    test("it returns nothing if there is no match", () => {
      const state = { search: "abc", todos };
      const result = selectors.filterTodos(state);
      expect(result).toEqual([]);
    });
  });
});
