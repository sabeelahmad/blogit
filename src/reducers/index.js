import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import BlogReducer from "./BlogReducer";

// Temporary reducer just for scaffolding
export default combineReducers({
  blogs: BlogReducer,
  form: formReducer
});
