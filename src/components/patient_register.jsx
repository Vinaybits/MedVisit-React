import React, { Component } from 'react';
import doc_img1 from "../assets/img/doctors/doctor-01.jpg";
import doc_img2 from "../assets/img/doctors/doctor-02.jpg";
import doc_img3 from "../assets/img/doctors/doctor-03.jpg";

import register_banner from "../assets/img/login-banner22.png";

import Footer from "./footer";

import HomeService from "./home.service";
import Breadcrumb from "./breadcrumb";


class PatientRegister extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            userId: '',
            email : '',
            phone: '',
            input: {},
            errors:{}
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.homeService = new HomeService();
    }


    handleSubmit(e) {
        e.preventDefault();

         if (this.validateInput()) {
             let input = {};
             input["name"] = "";
             input["phone"] = "";
             input["password"] = "";
             input["confirm_password"] = "";
             this.setState({input:input});
             const body = {
                 'name': e.target.elements['name'].value,
                 'phone': e.target.elements['phone'].value,
                 'password': e.target.elements['password'].value
             };
             try {
                 this.homeService.registerPatient(body).then((response) => {
                     if (response.status === 200) {
                         this.props.history.push(`/patient/login`);
                     } else if (response.status === 400) {
                         this.setState({loginError: response.data.message});
                     } else {
                         this.setState({loginError: 'Error Occurred, Please try later'});
                     }
                 });
             } catch (error) {
                 console.error(error);
             }
         }
    };


    validateInput(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your name.";
        }

        if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter your phone number.";
        }

        if (typeof input["phone"] !== "undefined") {

            let pattern = new RegExp('\\d{10}|(?:\\d{3}-){2}\\d{4}|\\(\\d{3}\\)\\d{3}-?\\d{4}');
            if (!input["phone"].match(pattern)) {
                isValid = false;
                errors["phone"] = "Please enter valid phone number.";
            }
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        if (!input["confirm_password"]) {
            isValid = false;
            errors["confirm_password"] = "Please confirm your password.";
        }

        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {

            if (input["password"] != input["confirm_password"]) {
                isValid = false;
                errors["password"] = "Passwords don't match.";
            }
        }

        this.setState({
            errors: errors
        });

        return isValid;
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }


    render() {
        return (
            <>
                <Breadcrumb view={'register'}/>
                <div className="content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-md-8 offset-md-2">

                                <div className="account-content">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-md-7 col-lg-6 login-left">
                                            <img src={register_banner} className="img-fluid"
                                                 alt="Doccure Register"/>
                                        </div>
                                        <div className="col-md-12 col-lg-6 login-right">
                                            {this.state.loginError && (
                                                <div style={{ color: "#B31E6F" }}>
                                                    <span>{this.state.loginError}</span>
                                                </div>
                                            )}

                                            <form onSubmit={this.handleSubmit}>
                                                <div className="form-group form-focus">
                                                    <input type="text" name="name" value={this.state.input.name} onChange={this.handleChange} className="form-control floating"/>
                                                        <label className="focus-label">Name</label>
                                                    <div className="text-danger">{this.state.errors.name}</div>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input type="text" name="phone" value={this.state.input.phone} onChange={this.handleChange} className="form-control floating"/>
                                                        <label className="focus-label">Mobile Number</label>
                                                    <div className="text-danger">{this.state.errors.phone}</div>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input type="password" name="password" value={this.state.input.password} onChange={this.handleChange} className="form-control floating"/>
                                                        <label className="focus-label">Password</label>
                                                    <div className="text-danger">{this.state.errors.password}</div>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input id="confirm_password" type="password" name="confirm_password"
                                                           value={this.state.input.confirm_password}
                                                           onChange={this.handleChange}
                                                           placeholder="Enter confirm password"
                                                           className="form-control floating"/>
                                                    <label className="focus-label">Confirm Password</label>
                                                    <div className="text-danger">{this.state.errors.confirm_password}</div>
                                                </div>
                                                <div className="text-right">
                                                    <a className="forgot-link" href="/patient/login">Already have an
                                                        account?</a>
                                                </div>

                                                <button className="btn btn-primary btn-block btn-lg login-btn"
                                                        type="submit">Signup
                                                </button>
                                            </form>


                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>
                <Footer/>
            </>

        )
    }
}

export default PatientRegister;
