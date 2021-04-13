import React, { Component } from "react";

import HeaderSection from "../components/header";
import Footer from "../components/footer";
import Homepage from "./homepage";
import Search from "./search_result";
import Doctor_Profile from "./doctor_profile";
import Doctor_Calendar from "./doctor_calendar";
import {reactLocalStorage} from "reactjs-localstorage";
import {Link, Redirect, useHistory} from "react-router-dom";
import Breadcrumb from "../components/breadcrumb";

class MasterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false
    }
  }

  render() {



    if ( !localStorage ||  !localStorage['responseData'] ||  !JSON.parse(localStorage['responseData']).id) {
      return <Redirect to={{pathname: "/patient/login"}}/>;
    }

    function currentView() {
      var view = "home";

      if (view === "home") {
        return <Homepage/>;
      } else if (view === "") {
        return "";
      }
    }
    return (
      <>
        <Breadcrumb/>
        {currentView()}
        <Footer />
      </>
    );
  }
}

export default MasterLayout;
