import React, { useEffect, useContext } from "react";
import Navbar from "../layout/Navbar";
import Spinner from "../layout/Spinner";
import PostContext from "../context/posts/postContext";
import ImageSilder from "./ImageSilder";

const Post = ({ match }) => {
    const postContext = useContext(PostContext);
    const { post, getPost, loading } = postContext;

    useEffect(() => {
        getPost(match.params.id);
        // eslint-disable-next-line
      }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        { post !== null  && !loading  ? (
          <>
            <div className="min-h-screen bg-green-100 p-12 rounded shadow-lg">
              <h3 className="text-2xl mb-12">{post.title}</h3>
              <p>{post.text}</p>
              <ImageSilder post={post} />
            </div>
          </>) : (<Spinner />)}
      </div>  

    </>
  );
};

export default Post;
