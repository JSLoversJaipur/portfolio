import React from 'react';
import './header.css';
import config from '../../config'
function Header(){
return (
  <header className="bg-danger text-light fixed-top">
  <div className="container">
      <div className="row align-items-center">
          <div className="col-md-4">
              <h1 className="logo">{config.information.firstname}</h1>
          </div>
          <div className="col-sm-8">
              <nav className="navbar  navbar-expand-md navbar-dark">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse text-right" id="navbarNav">
                      <ul className="navbar-nav ml-auto text-right">
                          <li className="nav-item">
                              <a className="nav-link" href="#aboutme">About</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#education">Education</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#project">Project</a>
                          </li>
                          <li className="nav-item">
                              <a className="nav-link" href="#gallery">Gallery</a>
                          </li>

                      </ul>
                  </div>
              </nav>
          </div>
      </div>
  </div>
</header>
);
}
export default Header;
