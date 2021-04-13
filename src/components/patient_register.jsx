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
            phone: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.homeService = new HomeService();
    }


    handleSubmit(e) {
        e.preventDefault();

        const body = {
            'name'  : e.target.elements['name'].value,
            'phone' : e.target.elements['phone'].value,
            'password' : e.target.elements['password'].value};
        try {
            this.homeService.registerPatient(body).then((response)=>{
                if(response.status===200){
                    this.props.history.push(`/patient/login`);
                } else if(response.status === 400){
                    this.setState({loginError: response.data.message});
                } else {
                    this.setState({loginError : 'Error Occurred, Please try later'});
                }
            });
        } catch (error) {
            console.error(error);
        }
    };


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
                                                    <input type="text" name="name" className="form-control floating"/>
                                                        <label className="focus-label">Name</label>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input type="text" name="phone" className="form-control floating"/>
                                                        <label className="focus-label">Mobile Number</label>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input type="password" name="password" className="form-control floating"/>
                                                        <label className="focus-label">Create Password</label>
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
