import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import HomeService from "./home.service";

import { Modal } from "react-bootstrap";

class PatientRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      userId: "",
      email: "",
      phone: "",
      userLoggedIn: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.homeService = new HomeService();
  }

  handleSubmit(e) {
    e.preventDefault();

    const body = {
      name: e.target.elements["name"].value,
      phone: e.target.elements["phone"].value,
      password: e.target.elements["password"].value,
    };
    try {
      this.homeService.registerPatient(body).then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.props.onChangeValue(response.data);
          this.setState({ userLoggedIn: true });
        } else if (response.status === 400) {
          this.setState({ loginError: response.data.message });
        } else {
          this.setState({ loginError: "Error Occurred, Please try later" });
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (
      localStorage &&
      localStorage["responseData"] &&
      JSON.parse(localStorage["responseData"]).id
    ) {
      return <Redirect to={{ pathname: "/", state: { userLoggedIn: true } }} />;
    }
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="content">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <div className="account-content">
                      <div className="row align-items-center justify-content-center">
                        {this.state.loginError && (
                          <div style={{ color: "#B31E6F" }}>
                            <span>{this.state.loginError}</span>
                          </div>
                        )}

                        <form onSubmit={this.handleSubmit}>
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              name="name"
                              className="form-control floating"
                            />
                            <label className="focus-label">Name</label>
                          </div>
                          <div className="form-group form-focus">
                            <input
                              type="text"
                              name="phone"
                              className="form-control floating"
                            />
                            <label className="focus-label">Mobile Number</label>
                          </div>
                          <div className="form-group form-focus">
                            <input
                              type="password"
                              name="password"
                              className="form-control floating"
                            />
                            <label className="focus-label">
                              Create Password
                            </label>
                          </div>

                          <button
                            className="btn btn-primary btn-block btn-lg login-btn"
                            type="submit"
                          >
                            Signup
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default PatientRegister;
