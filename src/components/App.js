import React, { Component } from "react";
import "./App.css";
import Banner from "./Banner";
import TextArea from "./TextArea";
import BlogList from "./BlogList";

class App extends Component {
  /* State for the app component, it will be the central data hub for the blogs.
     which is an array/list of objects (initially empty), and on submission of a blog
     the state is updated and correspondigly the blog is added to the display of the
     list of blogs
  */

  state = { blogPosts: [] };

  // Callback for the TextArea component to receive the blog text.
  onFormSubmit = blogBody => {
    // Form a single blog.
    /* It will be an object with two properties 
      => 1. Title
      => 2. Blog Body 
    */
    const newBlog = {
      title: "New Blog",
      body: blogBody
    };
    // Update state
    this.setState({ blogPosts: [...this.state.blogPosts, newBlog] });
  };

  render() {
    return (
      <div className="app">
        <Banner
          heading="Blog It"
          tagline="“Blogging is a conversation, not a code.”"
        />
        <div className="ui container">
          <TextArea onSubmit={this.onFormSubmit} />
        </div>
        <div className="list-heading">
          <Banner
            heading="Your Blogs"
            tagline="“If you want to continually grow your blog, you need to learn to blog on a consistent basis.”"
          />
        </div>
        <div className="ui container blog-list">
          <BlogList blogs={this.state.blogPosts} />
        </div>
      </div>
    );
  }
}

export default App;
