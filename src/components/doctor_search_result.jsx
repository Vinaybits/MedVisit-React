import React, { Component } from "react";

import HeaderSection from "../components/header";
import Footer from "../components/footer";
import Search from "../layout/search_result";

class DoctorSearchResult extends Component {
  constructor(props) {
        super(props);
        this.state = {doctors: this.props.location.state.doctors, searchLocation: this.props.location.state.searchLocation,
            searchConditions: this.props.location.state.searchConditions
        };
    }

  componentDidMount(props) {
    console.log("In Doctor search result component....")
    console.log("Got doctors : " + this.props.location.state.doctors)
      console.log("search conditions : " + this.props.location.state.searchConditions)
  }

  render() {
    return (
        <>
          <Search doctors={this.state.doctors} searchLocation={this.state.searchLocation} searchConditions={this.state.searchConditions}/>
          <Footer />
        </>
    );
  }
}

export default DoctorSearchResult;
