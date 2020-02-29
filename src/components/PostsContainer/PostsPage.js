//Complete the necessary code in this file
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";


const PostsPage = () => {
  const [data, setData] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {data.map( (post) => {
        return <Post post={post}/>
      })}
    </div>
  );
};

export default PostsPage;

