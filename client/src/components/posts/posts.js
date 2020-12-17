import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import PostContext from "../context/posts/postContext";
import Card from "./Card";

const Posts = () => {
  const postContext = useContext(PostContext);
  const { posts, getPosts, loading, user } = postContext;

  useEffect(() => {
    getPosts(user.id);
    // eslint-disable-next-line
  }, []);

  if (posts !== null && posts.length === 0 && !loading) {
    return <h4>No posts returned.</h4>;
  }

  return (
    <div className="flex-1 overflow-y-auto p-5">
      {posts !== null && !loading ? (
        posts.map((post) => <Card key={post.id} post={post} />)
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Posts;
