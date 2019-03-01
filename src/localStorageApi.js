export const localStorageApi = {
  getTodos: function() {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  },
  setTodos: function(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
};
