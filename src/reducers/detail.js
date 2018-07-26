const initialState = 0;

export default function detail(currentState = initialState, action) {
  switch (action.type) {
    default:
      return currentState;
    case "SET":
      return action.id;
  }
}
