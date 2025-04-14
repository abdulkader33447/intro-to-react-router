import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({post}) => {
  const { id, title } = post;
  // console.log(post)

  const navigate = useNavigate();

const handleNavigate=()=>{
// navigate('/laptops')
navigate(`/posts/${id}`)
}


  return (
    <div style={{ border: "1px solid blue" }}>
      <h3>this is my post : {title}</h3>
      <Link to={`/posts/${id}`}>
      <button>Show Details</button>
      </Link>

      {/* programmatically navigate */}
      <button onClick={handleNavigate}>Details of {id}</button>
    </div>
  );
};

export default Post;
