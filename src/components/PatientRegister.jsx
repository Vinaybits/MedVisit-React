import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import HomeService from "./home.service";

import { Modal } from "react-bootstrap";
import '../components/patient.css'

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
          <div class="myform form ">
                        {this.state.loginError && (
                          <div style={{ color: "#B31E6F" }}>
                            <span>{this.state.loginError}</span>
                          </div>
                        )}

                        <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                              <label for="exampleInputEmail1">Fullname</label>
                            <input type="text" placeholder="enter your fullname"
                              name="name"
                              className="form-control floating"
                            />
                            
                          </div>
                          <div class="form-group">
                              <label for="exampleInputEmail1">Mobile Number</label>
                            <input
                              type="text" placeholder="enter your mobile number"
                              name="phone"
                              className="form-control floating"
                            />
                           
                          </div>
                          <div class="form-group">
                              <label for="exampleInputEmail1">Create Password</label>
                            <input placeholder="enter atleast 6 character password"
                              type="password"
                              name="password"
                              className="form-control floating"
                            />
                           
                          </div>
                          <div class="form-group">
                              <p class="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                           </div>
                           <div class="col-md-12 text-center ">
                              <button type="submit" class=" btn btn-block mybtn tx-tfm book-btn">Signup</button>
                           </div>
                           <div class="col-md-12 ">
                              <div class="login-or">
                                 <hr class="hr-or"/>
                                 <span class="span-or">or</span>
                              </div>
                           </div>
                           
                           <div class="form-group">
                              <p class="text-center">Already have a account? <a href="#" id="signup" class="text-primary">Sign In here</a></p>
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
