import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="bg-header p-2 shadow d-flex justify-content-between">
            <div className="text-light">
                <i className="bi bi-life-preserver"></i>
                <span className="fs-5 ps-2">Jack學 React.js</span>
            </div>
            <div>
                <button className="btn btn-primary btn-sm mx-1">登陆</button>
                <button className="btn btn-danger btn-sm mx-1">退出</button>
            </div>
        </div>
    )
}

export default Header;