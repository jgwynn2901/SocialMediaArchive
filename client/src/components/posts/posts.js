import React, {  useEffect, useContext } from 'react';
import PostItem from './postItem';
import Spinner from '../layout/Spinner';
import PostContext from '../context/posts/postContext';

const Posts = () => {
  const postContext = useContext(PostContext);
  const { posts, getPosts, loading, user } = postContext;

  useEffect(() => {
    console.log(user);
    getPosts(user.id);
    // eslint-disable-next-line
  }, []);

  if (posts !== null && posts.length === 0 && !loading) {
    return <h4>No posts returned.</h4>;
  }

  return (
    <div className="content-center">
      {posts !== null && !loading ? (      
        posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Posts;