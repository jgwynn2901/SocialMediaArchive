import React, { useContext } from 'react';
import { Swiper } from 'swiper/react';
import PostContext from "../context/posts/postContext";
import Carousel from "./Carousel";

const ImageSilder = () => {
    const postContext = useContext(PostContext);
    const { post } = postContext;
    
    return (
        <div>
            <Swiper
                id="main"
                tag="section"
                wrapperTag="ul"
                navigation
                pagination
                spaceBetween={0}
                slidesPerView={1}
                onInit={(swiper) => console.log('Swiper initialized!', swiper)}
                onSlideChange={(swiper) => {
                console.log('Slide index changed to: ', swiper.activeIndex);
                }}
                onReachEnd={() => console.log('Swiper end reached')}
            >
                <Carousel post={post} />
            </Swiper>
        </div>
    );
};

export default ImageSilder;