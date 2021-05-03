import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, {Component} from "react";

import { GlobalProvider } from './context';
import {BookingProvider} from './bookingContext'
import MasterLayout from "./layout/MasterLayout";
import Calendar from "./components/calendar";
import DoctorSearchResult from './components/DoctorSearchResult';
import CheckoutAppointment from "./components/CheckoutAppointment";
import DoctorProfile from "./layout/DoctorProfile";
import Header from "./layout/Header";
class App extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
        }
  }



    render() {
        return (
            <>
                 <GlobalProvider>
                    <div className="main-wrapper">
                    <Router>
                        <Header/>
                        <Switch>
                            <Route exact path={"/"} render={(props) => <MasterLayout handleClose={(str) => this.handleClose(str)} {...props} />} />
                            <Route path={'/appointments/booking'} render={(props) => <Calendar {...props}/>}/>
                            <Route path={'/doctor/search'} render={(props) => <DoctorSearchResult {...props}/>}/>
                            <Route exact path="/appointments/checkout" component={CheckoutAppointment}/>
                            <Route path={'/doctor/profile'} render={(props) => <DoctorProfile {...props} />} />
                        </Switch>

                        
                    </Router>
                    </div>
                    </GlobalProvider>
            </>
        );
    }
}

export default App;
