import React from 'react';
import PropTypes from 'prop-types';
import ImageItem from './imageItem';

const PostItem = ({ post }) => {
  const { title, text, uri } = post;
  console.log(post);
  return (
    <div className="px-1 mb-3">
      <div className="max-w-sm bg-white overflow-hidden shadow-lg">
      
        <div className="px-6 py-4 rounded-full">
        <div className="font-bold text-xl mb-2">{title}</div>
        <ImageItem uri={uri} />
        <p className="text-gray-700 text-base">{text}</p>
        </div>
        <div class="px-6 py-4">
			    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#icon</span>
			    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#icon</span>
			    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#icon</span>
		    </div>
      </div>
    </div>
  )};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;