export default function todos(currentState = {}, action) {
  switch (action.type) {
    default:
      return currentState;

    case "ADD":
      return {
        ...currentState,
        todos: [
          ...currentState.todos,
          {
            id: Date.now(),
            value: action.text,
            visible: true,
            checked: false
          }
        ]
      };

    case "EDIT":
      return {
        ...currentState,
        todos: currentState.todos.map(
          todo =>
            todo.id === action.id ? { ...todo, value: action.text } : todo
        )
      };

    case "REMOVE":
      return {
        ...currentState,
        todos: currentState.todos.filter(todo => todo.id != action.id)
      };

    case "CHECK":
      return {
        ...currentState,
        todos: currentState.todos.map(
          todo =>
            todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
        )
      };

    case "FILTER":
      return {
        ...currentState,
        todos: currentState.todos.map(
          todo =>
            todo.value.includes(action.filter)
              ? { ...todo, visible: true }
              : { ...todo, visible: false }
        )
      };
  }
}
