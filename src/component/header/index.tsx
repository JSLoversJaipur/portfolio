import React from 'react';
import './header.css';
import config from '../../config'
function Header() {
    return (
        <header className="header bg-danger text-light fixed top-0">
            <div className="container mx-auto px-4">
                <div className="logo text-3xl font-bold text-left">Harry</div>

                <nav className="nav flex justify-end items-center item-center text-right">
                    <a href="#aboutme" className="nav-link mr-4 text-white item-center text-right">About</a>
                    <a href="#education" className="nav-link mr-4 text-white text-right">Education</a>
                    <a href="#project" className="nav-link mr-4 text-white text-right">Project</a>
                    <a href="#gallery" className="nav-link text-white text-right">Gallery</a>
                </nav>
            </div>
        </header>
    );
}
export default Header;
