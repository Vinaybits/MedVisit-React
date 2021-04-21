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
import PatientLogin from "./components/patient_login";
import PatientRegister from "./components/patient_register";
import Doctor_Profile from "./layout/doctor_profile";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName:"",
            lastName: "",
            email: "",
            phone: "",
            userId: ""
        }
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

    logOut(){
        reactLocalStorage.remove('responseData');
    }

    render() {
        return (
            <>
                <div className="main-wrapper">
                    <Router>
                    <nav class="navbar navbar-expand-lg header-nav">
					<div class="navbar-header">
						<a id="mobile_btn" href="javascript:void(0);">
							<span class="bar-icon">
								<span></span>
								<span></span>
								<span></span>
							</span>
						</a>
						<a href="index-2.html" class="navbar-brand logo">
							<img src={logo} class="img-fluid" alt="Logo"/>
						</a>
					</div>
					<div class="main-menu-wrapper">
						<div class="menu-header">
							<a href="index-2.html" class="menu-logo">
								<img src={logo} class="img-fluid" alt="Logo"/>
							</a>
							<a id="menu_close" class="menu-close" href="javascript:void(0);">
								<i class="fas fa-times"></i>
							</a>
						</div>
						
					</div>		 
					<ul class="nav header-navbar-rht">
						<li class="nav-item contact-item">
							<div class="header-contact-img">
								<i class="far fa-hospital"></i>							
							</div>
							<div class="header-contact-detail">
								<p class="contact-header">Contact</p>
								<p class="contact-info-header"> +1 315 369 5943</p>
							</div>
						</li>
						
                        <li class="nav-item">
                        <button type="button" class="btn btn-rounded btn-outline-success">Login</button>
						</li>
                        <li class="nav-item">
                        <button type="button" class="btn btn-rounded btn-outline-info">Signup</button>
						</li>
						<li class="nav-item dropdown has-arrow logged-item">
							<a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
								<span class="user-img">
									<img class="rounded-circle" src={userprofile} width="31" alt={this.state.firstName}/>
								</span>
							</a>
							<div class="dropdown-menu dropdown-menu-right">
								<div class="user-header">
									<div class="avatar avatar-sm">
										<img src={userprofile} alt="User Image" class="avatar-img rounded-circle"/>
									</div>
									<div class="user-text">
										<h6>{this.state.firstName}</h6>
										<p class="text-muted mb-0">8574151908</p>
									</div>
								</div>
								
								<a class="dropdown-item" href="doctor-profile-settings.html">Profile Settings</a>
								<a class="dropdown-item" href="" onClick={() => this.logOut()}>Logout</a>
							</div>
						</li>
						
						
					</ul>
				</nav>
                       
                        <Switch>
                            <Route exact path={"/"} render ={(props) => <Master_layout {...props}/>}/>

                            <Route exact path="/patient/login" render={ props =><PatientLogin {...props} onChangeValue = {(event)=>this.updateLoggedInUser(event)}/>}/>

                            <Route exact path="/patient/register" component={PatientRegister}/>
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
