import { connect } from "react-redux";
import User from "../components/User";

const mapStateToProps = state => ({
  ...state.user
});

const UserContainer = connect(mapStateToProps)(User);

export default UserContainer;
