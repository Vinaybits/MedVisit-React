import React, { Component } from "react";
import Footer from "../components/footer";

import Homepage from "./homepage";
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
    return <>{currentView()}
    
    </>;
  }
}

export default MasterLayout;
