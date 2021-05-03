import React, { Component } from "react";
import logo from "../assets/img/logo.png";
import PatientLogin from "../components/LoginAndRegister/PatientLogin";
import PatientRegister from "../components/LoginAndRegister/PatientRegister";
import { Modal } from "react-bootstrap";
import userprofile from "../../src/assets/img/doctors/doctor-01.jpg";
import { GlobalContext } from "../context";
import { Link } from "react-router-dom";
class Header extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.setState({ show: true });
    this.context.logOut();
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="">
              <span className="bar-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </a>
            {/* <a href="/" className="navbar-brand logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </a> */}
            <Link to="/" className="navbar-brand logo">
              <img src={logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <a href="index-2.html" className="menu-logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </a>
              <a id="menu_close" className="menu-close" href="">
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
                <p className="contact-info-header"> +1 315 369 5943</p>
              </div>
            </li>

            {this.context.firstName ? (
              <li className="nav-item dropdown has-arrow logged-item">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <span className="user-img">
                    <img
                      className="rounded-circle"
                      src={userprofile}
                      width="31"
                      alt={this.state.firstName}
                    />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-right">
                  <div className="user-header">
                    <div className="avatar avatar-sm">
                      <img
                        src={userprofile}
                        alt="User"
                        className="avatar-img rounded-circle"
                      />
                    </div>
                    <div className="user-text">
                      <h6>{this.state.firstName}</h6>
                      <p className="text-muted mb-0">8574151908</p>
                    </div>
                  </div>

                  <a
                    className="dropdown-item"
                    href="doctor-profile-settings.html"
                  >
                    Profile Settings
                  </a>
                  <a
                    className="dropdown-item"
                    href=""
                    onClick={() => this.logOut()}
                  >
                    Logout
                  </a>
                </div>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-success"
                    onClick={() => this.context.handleClose("login")}
                  >
                    Login
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="btn btn-rounded btn-outline-info"
                    onClick={() => this.context.handleClose("register")}
                  >
                    Signup
                  </button>
                </li>
              </>
            )}
          </ul>
        </nav>

        <PatientLogin />
        <PatientRegister />

        <Modal show={this.state.show}>
          <Modal.Body>Successfully Logged out!</Modal.Body>
        </Modal>
      </>
    );
  }
}

export default Header;
