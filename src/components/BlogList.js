/* 
  Functional Component that will receive a list of blogs and 
  render them to the screen
*/

/* 
  TODO : Abstract the component a bit more by making a separate component for each blog that is displayed,
  can be named blogdetails?
*/

import React from "react";
import { connect } from "react-redux";
import { deleteBlog } from "../actions";

class BlogList extends React.Component {
  // Delete blog post handler
  onDeleteClick = e => {
    // Call delete action creator
    // But we need to have some parameter to delete this blog, can we do it solely on basis of title?
    // Maybe we can for now simply match the blog title and content and delete.
    // Later maybe introduce a rest api server and then assign id's to each blog.
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
