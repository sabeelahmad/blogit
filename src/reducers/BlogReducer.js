import { CREATE_BLOG } from "../actions/types";
import { DELETE_BLOG } from "../actions/types";

// Blog creation reducer
// Recieves current state and action
// Can return new state (add a new blog to the list of blogs in the redux store) or
// Return the state as it is
// Initial state = Empty list of blogs

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_BLOG:
      return [...state, action.payload];
    case DELETE_BLOG:
      return state.filter(
        blog =>
          blog.title !== action.payload.title ||
          blog.body !== action.payload.body
      );
    default:
      return state;
  }
};
