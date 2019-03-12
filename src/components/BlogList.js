/* Functional Component that will receive a list of blogs and 
   render them to the screen
*/

import React from "react";

const BlogList = ({ blogs }) => {
  return blogs.map((blog) => {
    return <div className="ui segment">
        <h3 className="ui header">{blog.title}</h3>
        <p>{blog.body}</p>
    </div>
  });
};

export default BlogList;
