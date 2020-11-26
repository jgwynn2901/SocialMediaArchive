import React from 'react';
import PropTypes from 'prop-types';

const ImageItem = ({ uri }) => {
  const srcUri = './' + uri;
  console.log(srcUri);
return(
  <img className="rounded-lg mb-3" alt='nothing' src={srcUri} />
)}

ImageItem.propTypes = {
  uri: PropTypes.string.isRequired
}

export default ImageItem;