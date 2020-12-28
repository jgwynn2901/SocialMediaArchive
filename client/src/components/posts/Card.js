import React from "react";
import PropTypes from "prop-types";
import ImageItem from "./imageItem";
import { Link } from "react-router-dom";
import { format } from 'date-fns'
const Card = ({ post }) => {
  const { id, title, text, uri } = post;
  const linkTo = "/post/" + id;
  const postDate = format(new Date(post.timestamp * 1000), 'MMM-dd-yyyy');

  return (
    <Link to={linkTo}>
      <div
        className="max-w-3xl flex mx-auto my-8 rounded-lg bg-white hover:bg-gray-300 cursor-pointer">
        <div className="w-2/5 object-cover rounded">
          <ImageItem uri={uri} />
        </div>
        <div className="w-3/5 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col leading-normal">
          <div className="mb-8">
            <div className=" mb-4">
              <span className="text-black font-bold text-xl float-left">{title}</span> 
              <span className="text-md text-gray-600 float-right">{postDate}</span>
            </div>
            <p className="text-grey-darker text-base pt-8">{text}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  post: PropTypes.object.isRequired,
};
export default Card;
