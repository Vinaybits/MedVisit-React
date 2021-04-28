import React, { Component } from "react";
import Footer from "./Footer";

class CheckoutAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDoctor: {},
      selectedClinicName: "",
      selectedClinicId: "",
      slotTime: "",
      slotDate: "",
      doctorDaysOff: {},
      fromDate: new Date(),
      toDate: new Date(new Date().setDate(new Date().getDate() + 6)),
      name: "",
      userId: "",
      email: "",
      phone: "",
      patient: this.props.location.state.patient,
    };
  }

  componentDidMount() {
    this.state = {
      selectedDoctor: this.props.location.state.doctor,
      selectedClinicName: this.props.location.state.clinicName,
      selectedClinicId: this.props.location.state.clinicId,
      slotTime: this.props.location.state.selectedSlotTime,
      slotDate: this.props.location.state.selectedSlotDate,
    };
    console.log("selected slot time :" + this.state.slotTime);
  }

  render() {
    return (
      <>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-lg-8">
                <div className="card">
                  <div className="card-body">
                    <form action="booking-success.html">
                      <div className="info-widget">
                        <h4 className="card-title">Personal Information</h4>
                        <div className="row">
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>First Name</label>
                              <input
                                className="form-control"
                                type="text"
                                value={this.state.patient.firstName}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>Last Name</label>
                              <input
                                className="form-control"
                                type="text"
                                value={this.state.patient.lastName}
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>Email</label>
                              <input
                                className="form-control"
                                type="email"
                                value={
                                  this.state.patient.email &&
                                  this.state.patient.email !== "undefined"
                                    ? this.state.patient.email
                                    : ""
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <div className="form-group card-label">
                              <label>Phone</label>
                              <input
                                className="form-control"
                                type="text"
                                value={this.state.patient.phone}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 theiaStickySidebar">
                <div className="card booking-card">
                  <div className="card-header">
                    <h4 className="card-title">Booking Summary</h4>
                  </div>
                  <div className="card-body">
                    <div className="booking-doc-info">
                      <a href="doctor-profile.html" className="booking-doc-img">
                        <img
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                          alt="User"
                        />
                      </a>
                      <div className="booking-info">
                        <h4>
                          <a href="doctor-profile.html">{}</a>
                        </h4>
                        <div className="rating">
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star filled"></i>
                          <i className="fas fa-star"></i>
                          <span className="d-inline-block average-rating">
                            35
                          </span>
                        </div>
                        <div className="clinic-details">
                          <p className="doc-location">
                            <i className="fas fa-map-marker-alt"></i>{" "}
                            {this.state.selectedClinicName}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="booking-summary">
                      <div className="booking-item-wrap">
                        <ul className="booking-date">
                          <li>
                            Doctor{" "}
                            <span>
                              {this.props.location.state.selectedDoctor.name}
                            </span>
                          </li>
                          <li>
                            Clinic{" "}
                            <span>
                              {
                                this.props.location.state.selectedDoctor
                                  .clinic_name
                              }
                            </span>
                          </li>
                          <li>
                            Date{" "}
                            <span>
                              {this.props.location.state.selectedSlotDate}
                            </span>
                          </li>
                          <li>
                            Time{" "}
                            <span>
                              {this.props.location.state.selectedSlotTime}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default CheckoutAppointment;
