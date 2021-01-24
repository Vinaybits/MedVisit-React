import React, { Component } from "react";
import logo from '../assets/img/logo.png';

class header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <header class="header">
          <nav class="navbar navbar-expand-lg header-nav">
            <div class="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span class="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <a href="index.html" class="navbar-brand logo">
                <img src={logo} class="img-fluid" alt="Logo" />
              </a>
            </div>
            <div class="main-menu-wrapper">
              <div class="menu-header">
                <a href="index.html" class="menu-logo">
                  <img src={logo} class="img-fluid" alt="Logo" />
                </a>
                <a
                  id="menu_close"
                  class="menu-close"
                  href="javascript:void(0);"
                >
                  <i class="fas fa-times"></i>
                </a>
              </div>
              <ul class="main-nav">
                <li class="active">
                  <a href="index.html">Home</a>
                </li>
               
                <li class="login-link">
                  <a href="login.html">Login / Signup</a>
                </li>
              </ul>
            </div>
            <ul class="nav header-navbar-rht">
              <li class="nav-item contact-item">
                <div class="header-contact-img">
                  <i class="far fa-hospital"></i>
                </div>
                <div class="header-contact-detail">
                  <p class="contact-header">Contact</p>
                  <p class="contact-info-header"> +91 857 4151 908</p>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link header-login" href="login.html">
                  login / Signup{" "}
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default header;
