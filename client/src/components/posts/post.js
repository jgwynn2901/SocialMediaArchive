import React, { useEffect, useContext } from "react";
import Navbar from "../layout/Navbar";
import Spinner from "../layout/Spinner";
import ImageItem from "./imageItem";
import PostContext from "../context/posts/postContext";

const Post = ({ match }) => {
    const postContext = useContext(PostContext);
    const { post, getPost } = postContext;

    useEffect(() => {
        getPost(match.params.id);
        // eslint-disable-next-line
      }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        { post !== null ? (
          <>
            <div className="min-h-screen bg-green-100 p-12 rounded shadow-lg">
              <h3 className="text-2xl mb-12">{post.title}</h3>
              <p>{post.text}</p>
              <div className="pt-6">
                <ImageItem uri={post.uri} />
              </div>
            </div>
            </>) : (<Spinner />)}
            
      </div>  

    </>
  );
};

export default Post;
