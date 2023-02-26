import React, { Fragment, useEffect } from 'react';
import BlogList from '../components/Home/BlogList';
import Header from '../components/Home/Header';
import Search from '../components/Home/Search';
import Example from '../components/Home/Modal';
import Footer from '../components/ui/Footer';

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Search />
            <BlogList />

            <div className="add__btn">
                <i className="fa-solid fa-plus"></i>
            </div>
            <Example />
            <Footer />
        </Fragment>
    );
};

export default Home;
