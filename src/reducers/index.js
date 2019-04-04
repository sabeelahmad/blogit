import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import createBlogReducer from "./CreateBlogReducer";

// Temporary reducer just for scaffolding
export default combineReducers({
  blogs: createBlogReducer,
  form: formReducer
});
