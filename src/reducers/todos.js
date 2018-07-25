const initialState = [
  {
    id: 1,
    value: "test todo",
    visible: true,
    checked: false
  }
];

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
          visible: true,
          checked: false
        }
      ];

    case "EDIT":
      return currentState.map(
        todo => (todo.id === action.id ? { ...todo, value: action.text } : todo)
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
