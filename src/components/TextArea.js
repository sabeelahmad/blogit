/* Component for TextArea */

/* This will be a class based component and will submit details of blog to the parent
   that is the App component using the callback scheme in react that is used to pass
   data from child to a parent. 

   The button for submitting the blog is not made as a separate component because it is not
   as such reusable at the current stage, since for the current version there is only one button
   in the whole mockup of our app.
*/

import React from "react";
import "./TextArea.css";

class TextArea extends React.Component {
  state = { blogBody: "" };

  /* Helper function for handling the blog post submission, it will pass the blog text to the App component */
  onFormSubmit = e => {
    // Prevent refresh of page on form submission
    e.preventDefault();
    // Now pass this to the App component, where it will be added to list of all blog posts.
    this.props.onSubmit(this.state.blogBody);
  };

  /* Blog body update handler */
  onTextAreaChange = e => {
    // Update state
    this.setState({ blogBody: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="ui form text-area">
        <div className="field">
          <label>Type it out!</label>
          <textarea onChange={this.onTextAreaChange} />
        </div>
        <button className="ui black button">Blog It!</button>
      </form>
    );
  }
}

export default TextArea;
