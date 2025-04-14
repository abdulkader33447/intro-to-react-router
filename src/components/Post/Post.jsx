import React from "react";
import { Link } from "react-router";

const Post = ({post}) => {
  const { id, title } = post;
  // console.log(post)

  return (
    <div style={{ border: "1px solid blue" }}>
      <h3>this is my post : {title}</h3>
      <Link to={`/posts/${id}`}>
      <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Post;
