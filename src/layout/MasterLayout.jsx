import React, { Component } from "react";
import Footer from "../components/Footer";

import Homepage from "./Homepage";
class MasterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
    };
  }

  render() {
    function currentView() {
      var view = "home";

      if (view === "home") {
        return <Homepage />;
      } else if (view === "") {
        return "";
      }
    }
    return (
      <>
        {currentView()}
        <Footer handleClose={(str) => this.context.handleClose(str)} />
      </>
    );
  }
}

export default MasterLayout;
