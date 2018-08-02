import $ from "jquery";

export const addTodo = todo => ({ type: "ADD", todo });
export const editTodo = (id, text) => ({ type: "EDIT", id, text });
export const editableStatus = (id, status) => ({ type: "EDIT_S", id, status });
export const removeTodo = id => ({ type: "REMOVE", id });
export const checkTodo = id => ({ type: "CHECK", id });
export const filterTodo = filter => ({ type: "FILTER", filter });
export const initTodoList = list => ({ type: "INIT", list });
export const getTodoList = () => dispatch => {
  fetch("/api/todos")
    .then(response => response.json())
    .then(json => dispatch({ type: "INIT", list: json }));
};
export const deleteTodo = id => dispatch => {
  $.ajax({
    url: "/api/todos/" + id,
    type: "DELETE",
    success: () => {
      dispatch({ type: "REMOVE", id: id });
    }
  });
};
export const saveTodo = text => dispatch => {
  const todo = JSON.stringify({
    value: text,
    checked: false,
    timestamp: Date.now(),
    tasks: []
  });
  $.ajax({
    url: "/api/todos",
    type: "POST",
    contentType: "application/json",
    data: todo,
    success: () => {
      dispatch({ type: "ADD", todo });
    }
  });
};
