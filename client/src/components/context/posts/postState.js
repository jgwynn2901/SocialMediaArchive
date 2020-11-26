import React, { useReducer } from 'react';
import { request, gql } from 'graphql-request'
import postContext from './postContext';
import postReducer from './postReducer';
import {
  GET_POSTS,
  POST_ERROR,
  CLEAR_POSTS
} from '../types';

const PostState = props => {
  const initialState = {
    posts: null,
    user: { id: 1},
    loading: false
  };

  const query = gql`
  {
    posts {
      id,
      timestamp,
      title,
      text,
      uri
    }
  }
`

  const [state, dispatch] = useReducer(postReducer, initialState);

  // Get posts
  const getPosts = async (id) => {
    try {
      const data = await request('http://valhalla:5000/graphql', query);
      console.log(data.posts);
      dispatch({
        type: GET_POSTS,
        payload: data.posts
      });
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: err
      });
    }
  };

  // Clear Posts
  const clearPosts = () => {
    dispatch({ type: CLEAR_POSTS });
  };

  return (
    <postContext.Provider
      value={{
        posts: state.posts,
        user: state.user,
        error: state.error,
        getPosts,
        clearPosts
      }}
    >
      {props.children}
    </postContext.Provider>
  );

}

export default PostState;
