import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkTodo, removeTodo, editTodo } from "../actions";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  todosToBeShown: state.todos.filter(todo => todo.visible === true)
});

const mapDispatchToProps = dispatch => ({
  actions: {
    checkTodo: bindActionCreators(checkTodo, dispatch),
    removeTodo: bindActionCreators(removeTodo, dispatch),
    editTodo: bindActionCreators(editTodo, dispatch)
  }
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
