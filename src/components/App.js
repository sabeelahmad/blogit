import React, { Component } from "react";
import "./App.css";
import Banner from "./Banner";
import TextArea from "./TextArea";

class App extends Component {
  /* State for the app component, it will be the central data hub for the blogs.
     which is an array/list of objects (initially empty), and on submission of a blog
     the state is updated and correspondigly the blog is added to the display of the
     list of blogs
  */

  state = { blogPosts: [] };

  render() {
    return (
      <div className="app">
        <Banner
          heading="Blog It"
          tagline="“Blogging is a conversation, not a code.”"
        />
        <div className="ui container">
          <TextArea />
        </div>
        <div className="list-heading">
          <Banner
            heading="Your Blogs"
            tagline="“If you want to continually grow your blog, you need to learn to blog on a consistent basis.”"
          />
        </div>
      </div>
    );
  }
}

export default App;
