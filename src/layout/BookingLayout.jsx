import React, { Component } from "react";
import BookingSucess from "../components/booking_success";
import { GlobalContext } from "../context";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";

class BookingLayout extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
        <Breadcrumb view={"Success"} />
        <BookingSucess />
        <Footer />
      </>
    );
  }
}

export default BookingLayout;
