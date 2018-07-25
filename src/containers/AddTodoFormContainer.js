import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as Actions from "../actions";
import AddTodoForm from "../components/AddTodoForm";

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

const AddTodoFormContainer = connect(mapDispatchToProps)(AddTodoForm);

export default AddTodoFormContainer;
