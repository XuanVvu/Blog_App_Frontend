import React from 'react';
import '../../scss/index.scss';

const BlogCategory = ({ category }) => {
    // const jsUcfirst = (string) => {
    //     return string.charAt(0).toUpperCase() + string.slice(1);
    // };
    return (
        <div>
            <div className="blog__category">{category}</div>
        </div>
    );
};

export default BlogCategory;
