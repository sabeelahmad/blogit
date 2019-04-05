/* Component for TextArea */

/* This will be a class based component and will submit details of blog to the parent
   that is the App component using the callback scheme in react that is used to pass
   data from child to a parent. 

   The button for submitting the blog is not made as a separate component because it is not
   as such reusable at the current stage, since for the current version there is only one button
   in the whole mockup of our app.
*/

import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createBlog } from "../actions";
import "./TextArea.css";

class TextArea extends React.Component {
  //state = { blogBody: "", blogTitle: "" };

  /* Helper function for handling the blog post submission, it will pass the blog text to the App component */
  onFormSubmit = formValues => {
    // Prevent refresh of page on form submission
    // e.preventDefault();
    // // Now pass this to the App component, where it will be added to list of all blog posts.
    // this.props.onSubmit(this.state.blogTitle, this.state.blogBody);
    //console.log(formValues, this.props.blogs);
    this.props.createBlog(formValues.title, formValues.blogBody);
  };

  // /* Blog body update handler */
  // onTextAreaChange = e => {
  //   // Update state
  //   this.setState({ blogBody: e.target.value });
  // };

  // /* Blog title update handler */
  // onInputChange = e => {
  //   // Update state
  //   this.setState({ blogTitle: e.target.value });
  // };

  // Helper function to render input tag
  renderInput = ({ input }) => {
    return (
      <div className="field">
        <label>What's the title?</label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  // Helper function to render text area tag
  renderTextArea = ({ input }) => {
    //console.log(input);
    return (
      <div className="field">
        <label>Type it out!</label>
        <textarea {...input} />
      </div>
    );
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onFormSubmit)}
        className="ui form text-area"
      >
        <Field name="title" component={this.renderInput} />
        <Field name="blogBody" component={this.renderTextArea} />
        <button className="ui black button">Blog It!</button>
      </form>
    );
  }
}

// Mapping state to props
// const mapStateToProps = state => {
//   return { blogs: state.blogs };
// };

// Wrapper for redux form
const WrappedForm = reduxForm({
  form: "createBlog"
})(TextArea);

// Connect component in order to access the mapped state to props in current component
// And to hook up the blog creation action creator to the component
export default connect(
  null,
  { createBlog }
)(WrappedForm);
