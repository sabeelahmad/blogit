/* Component for TextArea */
import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createBlog } from "../actions";
import "./TextArea.css";

class TextArea extends React.Component {
  // Function to handle the invoking of createBlog action creator with the formValues
  onFormSubmit = formValues => {
    this.props.createBlog(formValues.title, formValues.blogBody);
  };

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
