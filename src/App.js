import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, {Component} from "react";
import logo from '../src/assets/img/logo.png';

import {Navbar, Nav,NavDropdown, NavLink, NavItem} from 'react-bootstrap';
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

                        <Navbar bg="light" variant="dark">
                            <Navbar.Brand > {/*href="#home"*/}
                                <a href="/" className="menu-logo">
                                    <img src={logo} className="img-fluid" alt="Logo"/>
                                </a>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mr-auto">
                                </Nav>
                                <ul className="nav header-navbar-rht">
                                    <li className="nav-item contact-item">
                                        <div className="header-contact-img">
                                            <i className="far fa-hospital"></i>
                                        </div>
                                        <div className="header-contact-detail">
                                            <p className="contact-header">Contact</p>
                                            <p className="contact-info-header"> +91 857 4151 908</p>
                                        </div>
                                    </li>
                                    {!this.state.firstName &&
                                    <li className="nav-item">
                                        <Link className='nav-link header-login' href="/patient/login" variant="body2">
                                            login / Signup{" "}
                                        </Link>
                                    </li>
                                    }
                                </ul>
                                {this.state.firstName &&
                                <NavDropdown title={this.state.firstName} id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/patient/login"
                                                      onClick={() => this.logOut()}>Logout</NavDropdown.Item>
                                </NavDropdown>
                                }

                            </Navbar.Collapse>
                        </Navbar>
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
