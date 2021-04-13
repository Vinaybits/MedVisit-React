import React, { Component } from "react";
import logo from '../assets/img/logo.png';
import Link from "@material-ui/core/Link";

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <header className="header">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item contact-item">
                <div className="header-contact-img">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="header-contact-detail">
                  <p className="contact-header">Contact</p>
                  <p className="contact-info-header"> +91 857 4151 908</p>
                </div>
              </li>
              <li className="nav-item">
                <Link className='nav-link header-login' href="/patient/login" variant="body2">
                  login / Signup{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default header;
