import React, { Fragment, useEffect, useState } from 'react';
import BlogContent from '../components/Blog/BlogContent';
import Header from '../components/Blog/Header';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PostsState$ } from '../redux/selectors';
import Footer from '../components/ui/Footer';

const Blog = () => {
    const { id } = useParams();
    const blogList = useSelector(PostsState$);
    console.log('[blogList]', blogList);
    let blog = blogList.find((blog) => blog.id === id);
    console.log('[blog]', blog);

    return (
        <Fragment>
            <div className="back__btn">
                <Link to="/home">
                    <i className="fa-solid fa-arrow-left-long me-2"></i>
                    Go back
                </Link>
            </div>
            <div className="container__blog">
                {blog && <Header blog={blog} />}
                {blog && <BlogContent blog={blog} />}
            </div>
            <Footer />  
        </Fragment>
    );
};

export default Blog;
