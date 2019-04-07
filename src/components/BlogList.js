import React from "react";
import { connect } from "react-redux";
import { deleteBlog } from "../actions";

class BlogList extends React.Component {
  // Delete blog post handler
  onDeleteClick = e => {
    // Call delete action creator
    // We are fetching the title and body from the data attributes on the delete button
    this.props.deleteBlog(e.target.dataset.title, e.target.dataset.body);
  };

  renderBlogs = () => {
    return this.props.blogs.map(blog => {
      return (
        <div key={blog.title} className="item">
          <div className="content">
            <div className="header">{blog.title}</div>
            <div className="description">{blog.body}</div>
          </div>
          <button
            className="ui right floated red button"
            onClick={this.onDeleteClick}
            data-title={blog.title}
            data-body={blog.body}
          >
            Delete Blog
          </button>
        </div>
      );
    });
  };

  render() {
    return <div className="ui relaxed divided list">{this.renderBlogs()}</div>;
  }
}

// Mapping state to props
const mapStateToProps = state => {
  return { blogs: state.blogs };
};

export default connect(
  mapStateToProps,
  { deleteBlog }
)(BlogList);
