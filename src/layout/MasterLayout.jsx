import React, { Component } from "react";
import { GlobalContext } from "../context";
import Footer from "./Footer";

import Homepage from "../layout/homepage";
class MasterLayout extends Component {
  static contextType = GlobalContext;
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
    if (
      localStorage &&
      localStorage["responseData"] &&
      JSON.parse(localStorage["responseData"]).id &&
      !this.context.id
    ) {
      this.context.updateLoginDetails();
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
