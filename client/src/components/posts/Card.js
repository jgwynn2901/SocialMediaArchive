import React from "react";
import PropTypes from "prop-types";
import ImageItem from "./imageItem";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  const { id, title, text, uri } = post;
  const linkTo = "/post/" + id;
  
  return (
    <Link to={linkTo}>
        <div className="max-w-3xl flex mx-auto my-8 rounded-lg bg-white hover:bg-gray-300 cursor-pointer"
            onClick={() => console.log(id) }>
        <div className="w-2/5 object-cover rounded">
            <ImageItem uri={uri} />
        </div>
        <div className="w-3/5 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
            <div className="text-black font-bold text-xl mb-2">{title}</div>
            <p className="text-grey-darker text-base">{text}</p>
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
