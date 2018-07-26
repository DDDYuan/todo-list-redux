const initialState = [];

export default function todos(currentState = initialState, action) {
  switch (action.type) {
    default:
      return currentState;

    case "ADD":
      return [
        ...currentState,
        {
          id: Date.now(),
          value: action.text,
          editable: false,
          visible: true,
          checked: false,
          timestamp: new Date().toLocaleString()
        }
      ];

    case "EDIT":
      return currentState.map(
        todo =>
          todo.id === action.id
            ? {
                ...todo,
                value: action.text,
                timestamp: new Date().toLocaleString()
              }
            : todo
      );

    case "EDIT_S":
      return currentState.map(
        todo =>
          todo.id === action.id ? { ...todo, editable: action.status } : todo
      );

    case "REMOVE":
      return currentState.filter(todo => todo.id !== action.id);

    case "CHECK":
      return currentState.map(
        todo =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );

    case "FILTER":
      return currentState.map(
        todo =>
          todo.value.includes(action.filter)
            ? { ...todo, visible: true }
            : { ...todo, visible: false }
      );
  }
}
