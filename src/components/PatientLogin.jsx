import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Modal } from "react-bootstrap";
import HomeService from "./home.service";
import '../components/patient.css'

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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearError = this.clearError.bind(this);
    this.homeService = new HomeService();
  }

  clearError() {
    this.setState({ loginError: "" });
  }

  handleSubmit(e) {
    e.preventDefault();

    const body = {
      phone: e.target.elements["phone"].value,
      password: e.target.elements["password"].value,
    };
    //const body = new FormData(event.target);
    try {
      this.homeService.userAuthenticate(body).then((response) => {
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
     
        <Modal
          show={this.props.show}
          onHide={() => {
            this.props.handleClose();
            this.clearError();
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title style={{textAlign:"center"}}>
              <span style={{textAlign:"center"}}>Login</span>
              </Modal.Title>
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
                              <label for="exampleInputEmail1">Mobile Number</label>
                            <input id="phone"  type="phone"   name="phone" className="form-control floating" />
                        </div>
                           
                        <div class="form-group">
                              <label for="exampleInputEmail1">Password</label>
                            <input id="password" type="password"  name="password"  className="form-control floating" />
                            
                          </div>
                          <div class="form-group">
                              <p class="text-center">By signing in you accept our <a href="#">Terms Of Use</a></p>
                           </div>
                           <div class="col-md-12 text-center ">
                              <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                           </div>
                           <div class="col-md-12 ">
                              <div class="login-or">
                                 <hr class="hr-or"/>
                                 <span class="span-or">or</span>
                              </div>
                           </div>
                           
                           <div class="form-group">
                              <p class="text-center">Don't have account? <a href="#" id="signup" class="text-info">Sign up here</a></p>
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
