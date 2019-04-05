import { CREATE_BLOG } from "../actions/types";

// Blog creation reducer
// Recieves current state and action
// Can return new state (add a new blog to the list of blogs in the redux store) or
// Return the state as it is
// Initial state = Empty list of blogs

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_BLOG:
      return [...state, action.payload];
    default:
      return state;
  }
};
