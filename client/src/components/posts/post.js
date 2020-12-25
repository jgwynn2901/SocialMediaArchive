import React, { useEffect, useContext } from "react";
import Navbar from "../layout/Navbar";
import Spinner from "../layout/Spinner";
import PostContext from "../context/posts/postContext";

const Post = ({ match }) => {
    const postContext = useContext(PostContext);
    const { post, getPost } = postContext;

    useEffect(() => {
        getPost(match.params.id);
        // eslint-disable-next-line
      }, [post]);

  return (
    <>
      <Navbar />
      <div className="container">
        { post !== null ? (
            <>
                <p>Post ID: {post.id}</p>
                <p>Post Text: {post.text}</p></>) : (<Spinner />)}
            
      </div>  

    </>
  );
};

export default Post;
