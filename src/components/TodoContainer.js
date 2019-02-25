import { connect } from "react-redux";
import TodoTable from "../components/TodoTable";
import { updateTodo } from "../actions/todoActions";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoChange: id => {
      dispatch(updateTodo(id));
    }
  };
};

const TodoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoTable);

export default TodoContainer;
