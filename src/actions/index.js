import $ from "jquery";
import { push } from "connected-react-router";

export const addTodo = todo => ({ type: "ADD", todo });
export const editTodo = (id, text) => ({ type: "EDIT", id, text });
export const editableStatus = (id, status) => ({ type: "EDIT_S", id, status });
export const removeTodo = id => ({ type: "REMOVE", id });
export const checkTodo = id => ({ type: "CHECK", id });
export const filterTodo = filter => ({ type: "FILTER", filter });
export const initTodoList = list => ({ type: "INIT", list });
export const setUser = (name, id) => ({ type: "SET", name, id });
export const getTodoList = () => dispatch => {
  $.ajax({
    url: "/api/todos",
    type: "GET",
    headers: {
      Authorization: localStorage.token
    },
    success: data => {
      dispatch(initTodoList(data));
    },
    error: data => {
      if (data.status === 401) {
        dispatch(push("/login"));
      }
    }
  });
};
export const deleteTodo = id => dispatch => {
  $.ajax({
    url: "/api/todos/" + id,
    type: "DELETE",
    headers: {
      Authorization: localStorage.token
    },
    success: () => {
      dispatch(removeTodo(id));
    }
  });
};
export const saveTodo = (text, userId) => dispatch => {
  const todo = {
    value: text,
    checked: false,
    timestamp: Date.now(),
    userId,
    tasks: []
  };
  $.ajax({
    url: "/api/todos",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify(todo),
    headers: {
      Authorization: localStorage.token
    },
    success: result => {
      dispatch(addTodo(result));
    }
  });
};
export const logOut = () => dispatch => {
  localStorage.removeItem("token");
  dispatch(push("/login"));
};
export const logIn = (username, password) => dispatch => {
  $.ajax({
    url: "/api/login",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({ username, password }),
    success: result => {
      localStorage.token = result;
      dispatch(push("/"));
    },
    error: error => {
      alert(error.responseJSON.message);
    }
  });
};
export const getUserInfo = () => dispatch => {
  $.ajax({
    url: "/api/users/logged",
    type: "GET",
    headers: {
      Authorization: localStorage.token
    },
    success: user => {
      dispatch(setUser(user.username, user.id));
    }
  });
};
