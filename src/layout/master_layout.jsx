import React, { Component } from "react";

import HeaderSection from "../components/header";
import Footer from "../components/footer";
import Homepage from "./homepage";

class MasterLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <HeaderSection />
        {currentView()}
        <Footer />
      </>
    );
  }
}

export default MasterLayout;
