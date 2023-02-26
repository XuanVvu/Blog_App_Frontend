import React, { Fragment } from 'react';

const BlogContent = ({ blog }) => {
    return (
        <Fragment>
            <div className="blog__content mt-5">
                <img src={blog.cover} alt="" />
                <p className="description mt-4">{blog.description}</p>
            </div>
        </Fragment>
    );
};

export default BlogContent;
