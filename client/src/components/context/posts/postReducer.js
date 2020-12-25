import {
  GET_POST,
  GET_POSTS,
  SET_LOADING,
  CLEAR_POSTS,
  POST_ERROR
} from '../types';

const postReducer = (state, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.payload,
        loading: false
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      };
    case CLEAR_POSTS:
      return {
        ...state,
        posts: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
      case POST_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default postReducer;