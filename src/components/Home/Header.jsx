import React, { Fragment } from 'react';
import '../../scss/index.scss';

const Header = () => {
    return (
        <Fragment>
            <div className="header__content">
                <h2>Inc. This Morning</h2>
                <h1>
                    <span>“</span> Blog <span>”</span>
                </h1>
                <p className="header__description">
                    awesome place to make oneself <br /> productive and entertained through daily updates.
                </p>
            </div>
        </Fragment>
    );
};

export default Header;
