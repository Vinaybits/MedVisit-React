import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, {Component} from "react";
import logo from '../src/assets/img/logo.png';
import userprofile from '../src/assets/img/doctors/doctor-01.jpg'

import {reactLocalStorage} from 'reactjs-localstorage';

import Master_layout from "./layout/master_layout";
import Link from "@material-ui/core/Link";
import Calendar from "./components/calendar";
import DoctorSearchResult from './components/doctor_search_result';
import CheckoutAppointment from "./components/checkout_appointment";
import PatientLogin from "./components/PatientLogin";
import PatientRegister from "./components/PatientRegister";
import Doctor_Profile from "./layout/doctor_profile";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            userId: "",
            showlogin: false,
            showregister: false
        }
        this.handleClose = this.handleClose.bind(this);
  }
    handleClose(str) {
        if (str === "login")
        {
            this.setState({ showlogin: !this.state.showlogin });
        }
        else
            this.setState({ showregister: !this.state.showregister })
    }

    componentDidMount(){

        let user = reactLocalStorage.getObject('responseData');
        if(user){
            const { state } = this.state
            this.state.firstName = user['first_name'];
            this.state.lastName = user['last_name'];
            this.state.email = user.email;
            this.state.phone  = user.phone;
            this.state.userId = user.id;
            this.setState({state});
        }

    }

    updateLoggedInUser(event) {
        reactLocalStorage.setObject('responseData', event);
        const { state } = this.state
        this.state.firstName = event['first_name'];
        this.state.lastName = event['last_name'];
        this.state.name = event['first_name'] + " " + event['last_name'];
        this.state.email = event.email;
        this.state.phone  = event.phone;
        this.state.userId = event.id;
        this.setState({state});
    }

    logOut() {
        reactLocalStorage.remove('responseData');
    }

    render() {
        return (
            <>
                <div className="main-wrapper">
                    <Router>
                    <nav className="navbar navbar-expand-lg header-nav">
					<div className="navbar-header">
						<a id="mobile_btn" href="javascript:void(0);">
							<span className="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</a>
						<a href="index-2.html" className="navbar-brand logo">
							<img src={logo} className="img-fluid" alt="Logo"/>
						</a>
					</div>
					<div className="main-menu-wrapper">
						<div className="menu-header">
							<a href="index-2.html" className="menu-logo">
								<img src={logo} className="img-fluid" alt="Logo"/>
							</a>
							<a id="menu_close" className="menu-close" href="javascript:void(0);">
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
					
                                {this.state.firstName ? (<li className="nav-item dropdown has-arrow logged-item">
							    <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
								<span className="user-img">
									<img className="rounded-circle" src={userprofile} width="31" alt={this.state.firstName}/>
								</span>
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								<div className="user-header">
									<div className="avatar avatar-sm">
										<img src={userprofile} alt="User Image" className="avatar-img rounded-circle"/>
									</div>
									<div className="user-text">
										<h6>{this.state.firstName}</h6>
										<p className="text-muted mb-0">8574151908</p>
									</div>
								</div>
								
								<a className="dropdown-item" href="doctor-profile-settings.html">Profile Settings</a>
								<a className="dropdown-item" href="" onClick={() => this.logOut()}>Logout</a>
							</div>
						</li>)
                                    :
                                    (<>
                                                                <li className="nav-item">
                        <button type="button" className="btn btn-rounded btn-outline-success" onClick={() => this.handleClose("login")}>Login</button>
						</li>
                        <li className="nav-item">
                        <button type="button" className="btn btn-rounded btn-outline-info" onClick={() => this.handleClose("register")}>Signup</button>
                                </li>
                                    </>
                                    )}
						
						
						
					</ul>
                        </nav>
                        
                        <PatientLogin show={this.state.showlogin} handleClose={() => this.handleClose("login")} onChangeValue={(event) => this.updateLoggedInUser(event)} />
                        <PatientRegister show={this.state.showregister} handleClose={() => this.handleClose("register")} onChangeValue={(event) => this.updateLoggedInUser(event)} />
                       
                        <Switch>
                            <Route exact path={"/"} render ={(props) => <Master_layout {...props}/>}/>
                            <Route path={'/appointments/booking'} render={(props) => <Calendar {...props}/>}/>
                            <Route path={'/doctor/search'} render={(props) => <DoctorSearchResult {...props}/>}/>
                            <Route exact path="/appointments/checkout" component={CheckoutAppointment}/>
                            <Route path={'/doctor/profile'} render={(props) => <Doctor_Profile {...props}/>}/>
                        </Switch>


                    </Router>
                </div>
            </>
        );
    }
}

export default App;
