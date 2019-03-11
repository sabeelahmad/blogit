/* This component will any part of the website with
  => Heading
  => BannerLine/TagLine
*/

import React from "react";

const Banner = props => {
  return (
    <div className="ui center aligned container">
      <h2>{props.heading}</h2>
      <p>{props.tagline}</p>
    </div>
  );
};

export default Banner;
