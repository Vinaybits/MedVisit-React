import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import HomeService from "./home.service";
import { Spinner } from "react-bootstrap";

import { Modal } from "react-bootstrap";
import "../components/patient.css";

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
      isLoading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.homeService = new HomeService();
    this.clearError = this.clearError.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  clearError() {
    this.setState({ loginError: "" });
  }

  handleClose(str) {
    if (str === "login") this.props.handleClose("login");
    else if (str === "closeregister") this.props.handleClose("closeregister");
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    const body = {
      name: e.target.elements["name"].value,
      phone: e.target.elements["phone"].value,
      password: e.target.elements["password"].value,
    };
    if (!body.phone || !body.password || !body.name) {
      this.setState({ loginError: "Please Check your details" });
      this.setState({ isLoading: false });
    } else {
      try {
        this.homeService.registerPatient(body).then((response) => {
          if (response.status === 200) {
            console.log(response);
            console.log(response.data);
            this.props.onChangeValue(response.data);
            this.setState({ userLoggedIn: true });
            this.setState({ isLoading: false });
            this.props.handleClose("closeregister");
          } else if (response.status === 400) {
            this.setState({
              loginError: "Wrong Credentials. Please try again.",
            });
            this.setState({ isLoading: false });
          } else {
            this.setState({ loginError: "Error Occurred, Please try later" });
            this.setState({ isLoading: false });
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  render() {
    return (
      <>
        <Modal
          show={this.props.show}
          onHide={() => {
            this.handleClose("closeregister");
            this.clearError();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="myform form ">
              {this.state.loginError && (
                <div style={{ color: "#B31E6F" }}>
                  <span>{this.state.loginError}</span>
                </div>
              )}

              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Fullname</label>
                  <input
                    type="text"
                    placeholder="Enter your Full Name"
                    name="name"
                    className="form-control floating"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Mobile Number</label>
                  <input
                    type="text"
                    placeholder="Enter your Mobile Number"
                    name="phone"
                    className="form-control floating"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Create Password</label>
                  <input
                    placeholder="Enter Atleast 6 Characters Password"
                    type="password"
                    name="password"
                    className="form-control floating"
                  />
                </div>
                <div class="form-group">
                  <p class="text-center">
                    By signing up you accept our <a href="#">Terms Of Use</a>
                  </p>
                </div>
                <div class="col-md-12 text-center ">
                  <button
                    type="submit"
                    class=" btn btn-block mybtn tx-tfm book-btn"
                  >
                    {this.state.isLoading ? (
                      <span>
                        Signing Up{" "}
                        <Spinner
                          style={{
                            width: "1.2rem",
                            height: "1.2rem",
                            marginLeft: "5px",
                          }}
                          animation="border"
                          role="status"
                        ></Spinner>
                      </span>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </div>
                <div class="col-md-12 ">
                  <div class="login-or">
                    <hr class="hr-or" />
                    <span class="span-or">or</span>
                  </div>
                </div>

                <div class="form-group">
                  <p class="text-center">
                    Already have a account?{" "}
                    <span
                      onClick={() => this.handleClose("login")}
                      style={{ color: "rgb(60,168,247)", cursor: "pointer" }}
                    >
                      Sign In here
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default PatientRegister;
