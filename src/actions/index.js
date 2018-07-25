export const addTodo = text => ({ type: "ADD", text });
export const editTodo = (id, text) => ({ type: "EDIT", id, text });
export const removeTodo = id => ({ type: "REMOVE", id });
export const checkTodo = id => ({ type: "CHECK", id });
export const filterTodo = filter => ({ type: "FILTER", filter });
