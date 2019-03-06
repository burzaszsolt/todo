import * as thunks from '../actions/thunks';

describe('thunks', () => {
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

  describe('setInitialState', () => {
    test('it resolves todos from local storage', () => {
      const todos = [{ id: 1, name: 'a', completed: false }, { id: 2, name: 'b', completed: true }];

      localStorageApi.getTodos.mockReturnValue(todos);
      thunks.getTodos()(dispatch, getState, { localStorageApi });
      expect(localStorageApi.getTodos).toHaveBeenCalledTimes(1);
      expect(localStorageApi.getTodos).toHaveBeenNthCalledWith(1);
      expect(dispatch).toHaveBeenCalledWith({ type: 'GET_TODOS', payload: { todos } });
    });
  });

  describe('addTodo', () => {
    test('it add todo into store and local storage', () => {
      const nextState = { todos: [{ id: 1, name: 'a', completed: false }] };
      getState.mockReturnValue(nextState);
      thunks.addTodo('a')(dispatch, getState, { localStorageApi });
      expect(dispatch).toHaveBeenCalledWith({ type: 'ADD_TODO', payload: { name: 'a' } });
      expect(localStorageApi.setTodos).toHaveBeenCalledWith(nextState.todos);
    });

    test('throws error if setTodos throws error', () => {
      const nextState = { todos: [{ id: 1, name: 'a', completed: false }] };
      getState.mockReturnValue(nextState);
      localStorageApi.setTodos.mockImplementation(() => {
        throw new Error('jaj');
      });
      expect(() => {
        thunks.addTodo('a')(dispatch, getState, { localStorageApi });
      }).toThrow();
    });
  });
});
