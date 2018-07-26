import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions/index";
import Todos from "../components/Todos";

const mapStateToProps = state => ({
  todosToBeShown: state.todos.filter(todo => todo.visible === true)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);

export default TodoListContainer;
