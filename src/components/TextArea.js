/* Component for TextArea */

/* This will be a functional component and will submit details of blog to the parent
   that is the App component using the callback scheme in react that is used to pass
   data from child to a parent. 

   The button for submitting the blog is not made as a separate component because it is not
   as such reusable at the current stage, since for the current version there is only one button
   in the whole mockup of our app.
*/

import React from "react";
import "./TextArea.css";

const TextArea = props => {
  return (
    <div className="ui form text-area">
      <div className="field">
        <label>Type it out!</label>
        <textarea />
      </div>
      <button className="ui black button">Blog It!</button>
    </div>
  );
};

export default TextArea;
