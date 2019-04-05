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

class BlogList extends React.Component {
  // Delete blog post handler
  onDeleteClick = e => {
    console.log("DELETE!");
    // Call delete action creator
    // But we need to have some parameter to delete this blog, can we do it solely on basis of title?
    // Maybe we can for now simply match the blog title and content and delete.
    // Later maybe introduce a rest api server and then assign id's to each blog.
  };

  renderBlogs = () => {
    return this.props.blogs.map(blog => {
      return (
        <div key={blog.title} className="item">
          <div className="content">
            <div className="header">{blog.title}</div>
            <div className="description">{blog.body}</div>
            <button
              className="ui right floated red button"
              onClick={this.onDeleteClick}
            >
              Delete Blog
            </button>
          </div>
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

export default connect(mapStateToProps)(BlogList);
