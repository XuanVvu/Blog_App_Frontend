import React, { Fragment, useState, useEffect } from 'react';
import BlogCategory from '../ui/BlogCategory';
import { convertDate, jsUcfirst } from '../../config/convertData';

const Header = ({ blog }) => {
    return (
        <Fragment>
            <div className="blog__header">
                <div className="createAt">Published {convertDate(blog.createAt)}</div>
                <h2 className="title">{blog.title}</h2>
                <BlogCategory category={jsUcfirst(blog.category)} />
            </div>
        </Fragment>
    );
};

export default Header;
