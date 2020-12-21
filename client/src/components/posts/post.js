import React from 'react';

const Post = ({ match }) => {

    return (
        <div>
            <p>
                Post ID: {match.params.id}
            </p>
        </div>
    );
};


export default Post;