import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = () => {
    return (
        <div className="loading mt-5">
            <Spinner>Loading...</Spinner>
        </div>
    );
};

export default Loading;
