import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Modal } from "react-bootstrap";
import HomeService from "./home.service";
import "../components/patient.css";
import { Spinner } from "react-bootstrap";

class PatientLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      gender: "",
      userId: "",
      email: "",
      phone: "",
      loginError: "",
      userLoggedIn: false,
      isLoading: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearError = this.clearError.bind(this);
    this.homeService = new HomeService();
    this.handleClose = this.handleClose.bind(this);
  }

  clearError() {
    this.setState({ loginError: "" });
  }

  handleClose(str) {
    if (str === "register") this.props.handleClose("register");
    else if (str === "closelogin") this.props.handleClose("closelogin");
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    const body = {
      phone: e.target.elements["phone"].value,
      password: e.target.elements["password"].value,
    };
    console.log(body.phone);
    console.log(body.password);
    if (!body.phone || !body.password) {
      this.setState({ loginError: "Please Check your details." });
      this.setState({ isLoading: false });
    } else {
      //const body = new FormData(event.target);
      try {
        this.homeService.userAuthenticate(body).then((response) => {
          if (response.status === 200) {
            console.log(response);
            console.log(response.data);
            this.props.onChangeValue(response.data);
            this.setState({ userLoggedIn: true });
            this.setState({ isLoading: false });
            this.props.handleClose("closelogin");
          } else if (response.status === 400) {
            this.setState({
              loginError: "Please enter Valid Mobile Number/Password.",
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
            this.handleClose("closelogin");
            this.clearError();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{ textAlign: "center" }}>
              <span style={{ textAlign: "center" }}>Login</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="myform form ">
              {this.state.loginError && (
                <div style={{ color: "#B31E6F" }}>
                  <span>{this.state.loginError}</span>
                </div>
              )}
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Mobile Number</label>
                  <input
                    id="phone"
                    type="phone"
                    name="phone"
                    className="form-control floating"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Password</label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-control floating"
                  />
                </div>
                <div className="form-group">
                  <p className="text-center">
                    By signing in you accept our <a href="#">Terms Of Use</a>
                  </p>
                </div>
                <div className="col-md-12 text-center ">
                  <button
                    type="submit"
                    className=" btn btn-block mybtn btn-primary tx-tfm"
                  >
                    {this.state.isLoading ? (
                      <span>
                        Signing In{" "}
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
                      "Sign in"
                    )}
                  </button>
                </div>
                <div className="col-md-12 ">
                  <div className="login-or">
                    <hr className="hr-or" />
                    <span className="span-or">or</span>
                  </div>
                </div>

                <div className="form-group">
                  <p className="text-center">
                    Don't have account?{" "}
                    <span
                      onClick={() => this.handleClose("register")}
                      style={{ color: "rgb(60,168,247)", cursor: "pointer" }}
                    >
                      Sign Up here
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

export default PatientLogin;
