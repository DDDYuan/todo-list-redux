export const addTodo = text => ({ type: "ADD", text });
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
