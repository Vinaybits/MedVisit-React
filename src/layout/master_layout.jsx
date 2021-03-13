import React, { Component } from "react";

import HeaderSection from "../components/header";
import Footer from "../components/footer";
import Homepage from "./homepage";
import Search from "./search_result";
import Doctor_Profile from "./doctor_profile";
import Doctor_Calendar from "./doctor_calendar";

class MasterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
        <HeaderSection />
        {currentView()}
        <Footer />
      </>
    );
  }
}

export default MasterLayout;
