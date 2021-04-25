import React, { Component } from "react";
import doc_img2 from "../assets/img/doctors/doctor-02.jpg";
import Footer from "./footer";
import cardiologist_sp from "../assets/img/specialities/cardiologist_sp.png";

import CalendarDaySection from "./calendar_day_section";
import CalendarTimeSlotSection from "./calendar_time_slot_section";
import { Redirect } from "react-router-dom";
import HomeService from "./home.service";
import { reactLocalStorage } from "reactjs-localstorage";

import PropTypes from "prop-types";
import Breadcrumb from "./breadcrumb";
import RegistrationConfirmationPopup from "./registration_confirmation_popup";

class Calendar extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  constructor(props) {
    super(props);
    let user = reactLocalStorage.getObject("responseData");

    let patient = {};

    if (user) {
      patient = {
        firstName: user.first_name,
        lastName: user.last_name,
        userId: user.id,
        email: user.email,
        phone: user.phone,
      };
    }
    this.state = {
      selectedDoctor: this.props.location.state.doctor,
      doctorDaysOff: this.props.location.state.doctorDaysOff,
      fromDate: new Date(),
      toDate: new Date(new Date().setDate(new Date().getDate() + 6)),
      datesInRange: this.getDatesInRange(
        new Date(),
        new Date(new Date().setDate(new Date().getDate() + 6))
      ),
      selectedSlotTime: "",
      selectedSlotDate: "",
      navigateToCheckoutPage: false,
      show: false,
      email: "",
      patient: patient,
      doctorSlotsOff: {},
    };

    this.homeService = new HomeService();
  }

  callbackFunction = (slotTime, slotDate) => {
    if (
      localStorage &&
      localStorage["responseData"] &&
      JSON.parse(localStorage["responseData"]).id
    ) {
      this.setState({
        selectedDoctor: this.props.location.state.doctor,
        doctorDaysOff: this.props.location.state.doctorDaysOff,
        selectedSlotTime: slotTime,
        selectedSlotDate: slotDate,
        show: true,
      });
    } else {
      this.props.handleClose("login");
    }
  };
  componentDidMount() {
    this.getDoctorCalendarSlotsOff(
      this.state.datesInRange[0],
      this.state.datesInRange[6]
    );
  }

  getDoctorCalendarSlotsOff(fromDate, toDate) {
    this.homeService
      .getDoctorCalendarSlotsOff(
        this.state.selectedDoctor.id,
        this.state.selectedDoctor.clinic_id,
        fromDate,
        toDate
      )
      .then((response) => {
        if (response) {
          if (response.data) {
            this.setState({ doctorSlotsOff: response.data });
          }
        } else {
          console.log("Could not fetch data");
        }
      });
  }

  navigateToAppointmentCheckout = (e) => {
    e.preventDefault();

    const body = {
      slotTime: this.state.selectedSlotTime,
      slotDate: this.state.selectedSlotDate,
      doctor_id: this.props.location.state.doctor.id,
      clinic_id: this.props.location.state.doctor.clinic_id,
      patient_id: this.state.patient.userId,
      insurance: "MVP Health Care",
      reason: "Not Given",
      patient_first_name: this.state.patient.firstName,
      patient_last_name: this.state.patient.lastName,
      patient_email: this.state.patient.email,
      patient_phone: this.state.patient.phone,
    };

    try {
      this.homeService.requestAppointment(body).then((response) => {
        if (response.status === 200) {
          this.setState({ navigateToCheckoutPage: true });
          console.log("Appointment requested successfully ");
        } else if (response.status === 400) {
          this.setState({ loginError: response.data });
        } else {
          this.setState({
            loginError:
              "Error Occurred when saving appointment, Please try later",
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  moveDateRangeRight = () => {
    let fromDateIncremented = new Date(
      new Date(this.state.fromDate).setDate(this.state.fromDate.getDate() + 1)
    );
    let toDateIncremented = new Date(
      new Date(this.state.toDate).setDate(this.state.toDate.getDate() + 1)
    );

    this.getDoctorCalendarSlotsOff(fromDateIncremented, toDateIncremented);
    this.setState({
      fromDate: fromDateIncremented,
      toDate: toDateIncremented,
      datesInRange: this.getDatesInRange(
        fromDateIncremented,
        toDateIncremented
      ),
    });
  };

  moveDateRangeLeft = () => {
    let fromDateDecremented = new Date(
      new Date(this.state.fromDate).setDate(this.state.fromDate.getDate() - 1)
    );
    let toDateDecremented = new Date(
      new Date(this.state.toDate).setDate(this.state.toDate.getDate() - 1)
    );
    this.getDoctorCalendarSlotsOff(fromDateDecremented, toDateDecremented);
    this.setState({
      fromDate: fromDateDecremented,
      toDate: toDateDecremented,
      datesInRange: this.getDatesInRange(
        fromDateDecremented,
        toDateDecremented
      ),
    });
  };

  callbackFunctionPatientModal = (patient, show) => {
    this.setState({ patient: patient, show: show });
  };

  cancelPatientChangesCallBack = (show) => {
    this.setState({ show: show });
  };

  sameDate(date1, date2) {
    let dateObject1 = new Date(date1);
    let dateObject2 = new Date(date2);

    return (
      dateObject1.getDate() == dateObject2.getDate() &&
      dateObject1.getMonth() == dateObject2.getMonth() &&
      dateObject1.getFullYear() == dateObject2.getFullYear()
    );
  }

  isDayOff(date) {
    for (let i = 0; i < this.props.location.state.doctorDaysOff.length; i++) {
      if (
        this.sameDate(date, this.props.location.state.doctorDaysOff[i].date)
      ) {
        return true;
      }
    }

    this.getDoctorCalendarSlotsOff(date);
    return false;
  }

  getDatesInRange = (fromDate, toDate) => {
    let datesInRange = [];
    let nextDay = new Date(fromDate);

    while (nextDay <= new Date(toDate)) {
      datesInRange.push(this.formatDate(nextDay));
      nextDay = new Date(
        new Date(nextDay).setDate(new Date(nextDay).getDate() + 1)
      );
    }

    return datesInRange;
  };

  formatDate = (date) => {
    let d = new Date(date);
    let month = "" + (d.getMonth() + 1);
    let day = "" + d.getDate();
    let year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  render() {
    // publish calendar upto sixty days
    let sixtyDaysFromNow = new Date(
      new Date().setDate(new Date().getDate() + 59)
    );

    const { match, location, history } = this.props;

    if (
      location.state == undefined ||
      location.state == null ||
      location.state == ""
    ) {
      return <Redirect to={{ pathname: "/patient/login" }} />;
    }

    if (this.state.navigateToCheckoutPage) {
      return (
        <Redirect
          to={{
            pathname: "/appointments/checkout",
            state: {
              selectedDoctor: this.props.location.state.doctor,
              selectedClinicName: this.state.clinicName,
              selectedClinicId: 1,
              selectedSlotTime: this.state.selectedSlotTime,
              selectedSlotDate: this.state.selectedSlotDate,
              patient: this.state.patient,
            },
          }}
        />
      );
    }
    return (
      <>
        <Breadcrumb view={"booking"} />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="booking-doc-info">
                      <a href="doctor-profile.html" className="booking-doc-img">
                        <img src={doc_img2} alt="User Image2" />
                      </a>
                      <div className="booking-info">
                        <h4>
                          <a href="doctor-profile.html">
                            {this.props.location.state.doctor.name}
                          </a>
                        </h4>
                        <h5 className="doc-department">
                          <img
                            src={cardiologist_sp}
                            className="img-fluid"
                            alt="Speciality"
                          />
                          {this.props.location.state.doctor.speciality}
                        </h5>
                        <p className="text-muted mb-0">
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          {this.props.location.state.doctor.city},{" "}
                          {this.props.location.state.doctor.state}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="submit-section proceed-btn text-right">
                  <button
                    className="btn btn-primary submit-btn"
                    onClick={this.navigateToAppointmentCheckout}
                  >
                    Request Appointment{" "}
                  </button>
                </div>

                <div className="row">
                  <div className="col-12 col-sm-4 col-md-6">
                    <h4 className="mb-1">
                      {this.state.fromDate.toDateString()}
                    </h4>
                  </div>
                  <div className="col-12 col-sm-8 col-md-6 text-sm-right">
                    <div className="bookingrange btn btn-white btn-sm mb-3">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <span>
                        {this.state.fromDate.toDateString()} -{" "}
                        {this.state.toDate.toDateString()}
                      </span>
                      <i className="fas fa-chevron-down ml-2"></i>
                    </div>
                  </div>
                </div>

                <div className="card booking-schedule schedule-widget">
                  <div className="schedule-header">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="day-slot">
                          <ul>
                            {this.state.fromDate > new Date() && (
                              <li className="left-arrow">
                                <button onClick={this.moveDateRangeLeft}>
                                  <i className="fa fa-chevron-left"></i>
                                </button>
                              </li>
                            )}

                            <CalendarDaySection
                              fromDate={this.state.fromDate}
                              toDate={this.state.toDate}
                            />

                            {this.state.fromDate <= sixtyDaysFromNow && (
                              <li className="right-arrow">
                                <button onClick={this.moveDateRangeRight}>
                                  <i className="fa fa-chevron-right"></i>
                                </button>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="schedule-cont">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="time-slot">
                          <ul className="clearfix">
                            {this.state.datesInRange.map((p, i) => (
                              <CalendarTimeSlotSection
                                parentCallBack={this.callbackFunction}
                                slotsOff={this.state.doctorSlotsOff}
                                dayOff={this.isDayOff(p)}
                                date={p}
                              />
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="submit-section proceed-btn text-right">
                  <button
                    className="btn btn-primary submit-btn"
                    onClick={this.navigateToAppointmentCheckout}
                  >
                    Request Appointment{" "}
                  </button>
                </div>
              </div>
            </div>
            <RegistrationConfirmationPopup
              doctor={this.props.location.state.doctor}
              savePatientCallBack={this.callbackFunctionPatientModal}
              cancelPatientChangesCallBack={this.cancelPatientChangesCallBack}
              show={this.state.show}
              slotTime={this.state.selectedSlotTime}
              slotDate={this.state.selectedSlotDate}
            />
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Calendar;
