const initialState = { avatar: "user", name: "username" };

export default function user(currentState = initialState, action) {
  switch (action.type) {
    default:
      return currentState;
  }
}
