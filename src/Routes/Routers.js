import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Blog from '../pages/Blog';

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/blog/:id" element={<Blog />} />
            </Routes>
        </div>
    );
};

export default Routers;
