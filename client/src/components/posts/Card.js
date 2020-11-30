import React from "react";
import PropTypes from 'prop-types';
import ImageItem from './imageItem';

const Card = ({ post }) => {
    const { title, text, uri } = post;
    return (
        <div className="w-full flex mb-8 group h-64">
            <div className="w-2/5 object-cover rounded shadow-lg">
                <ImageItem uri={uri} />
            </div>
            <div className="w-3/5 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <div className="text-black font-bold text-xl mb-2">{title}</div>
                    <p className="text-grey-darker text-base">{text}</p>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {
    post: PropTypes.object.isRequired
  }
export default Card;