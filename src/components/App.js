import React, { Component } from "react";
import "./App.css";
import Banner from "./Banner";
import TextArea from "./TextArea";
import BlogList from "./BlogList";

class App extends Component {
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
        <div className="ui container blog-list">
          <BlogList />
        </div>
      </div>
    );
  }
}

export default App;
