import React, { Component } from 'react';

import login_banner from "../assets/img/login-banner.png";

import Footer from "./footer";

import HomeService from "./home.service";
import Redirect from "react-router-dom/es/Redirect";
import Breadcrumb from "./breadcrumb";


class PatientLogin extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            userId: '',
            email : '',
            phone: '',
            loginError: '',
            userLoggedIn: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.homeService = new HomeService();

    }

     handleSubmit(e) {
         e.preventDefault();

        const body = {'phone' : e.target.elements['phone'].value, 'password' : e.target.elements['password'].value};
        //const body = new FormData(event.target);
        try {
            this.homeService.userAuthenticate(body).then((response)=>{
                if(response.status===200){
                    this.props.onChangeValue(response.data)
                    this.setState({userLoggedIn: true});

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

        if (localStorage && localStorage['responseData'] && JSON.parse(localStorage['responseData']).id) {
            return <Redirect to={{pathname: "/", state: {userLoggedIn: true}}}/>;
        }

        return (
            <>
                <Breadcrumb view={'login'}/>
                <div className="content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-md-8 offset-md-2">


                                <div className="account-content">
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-md-7 col-lg-6 login-left">
                                            <img src={login_banner} className="img-fluid"
                                                 alt="Doccure Login"/>
                                        </div>
                                        <div className="col-md-12 col-lg-6 login-right">
                                            <div className="login-header">
                                                <h3>Login <span>Medvisit</span></h3>
                                            </div>

                                            {this.state.loginError && (
                                                <div style={{ color: "#B31E6F" }}>
                                                    <span>{this.state.loginError}</span>
                                                </div>
                                            )}
                                            <form onSubmit={this.handleSubmit}>
                                                <div className="form-group form-focus">
                                                    <input id="phone" type="phone" name="phone" className="form-control floating"/>
                                                        <label className="focus-label">Phone</label>
                                                </div>
                                                <div className="form-group form-focus">
                                                    <input id="password" type="password" name="password" className="form-control floating"/>
                                                        <label className="focus-label">Password</label>
                                                </div>
                                                <button className="btn btn-primary btn-block btn-lg login-btn"
                                                        type="submit">Login
                                                </button>
                                                <div className="text-center dont-have">Don’t have an account? <a
                                                    href="/patient/register">Register</a></div>
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

export default PatientLogin;
