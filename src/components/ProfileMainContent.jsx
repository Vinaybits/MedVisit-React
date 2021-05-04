import React, { Component } from "react";

import doctor1 from "../assets/img/doctors/doctor-01.jpg";

import Cardiologist from "../assets/img/specialities/cardiologist_sp.png";
import HomeService from "./home.service";
import { Redirect } from "react-router-dom";

class ProfileMainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorDaysOff: [],
      selectedDoctor: {},
      navigateToBookAppointment: false,
    };
    this.homeService = new HomeService();
  }

  getTodayDate = () => {
    let today = new Date();
    return this.formatDate(today);
  };

  getOneWeekDate = () => {
    let today = new Date();
    let oneWeekDate = new Date(today);
    oneWeekDate.setDate(today.getDate() + 6);
    return this.formatDate(oneWeekDate);
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

  getDoctorCalendarOffDaysAndNonAvailableSlots = (doctor) => (e) => {
    console.log("Selected doctor for booking appointment :" + doctor.name);
    this.homeService
      .getDoctorCalendarOffDaysAndNonAvailableSlots(
        doctor.id,
        doctor.clinic_id,
        this.getTodayDate(),
        this.getOneWeekDate()
      )
      .then((response) => {
        if (response) {
          if (response.data) {
            this.setState({
              doctorDaysOff: response.data,
              selectedDoctor: doctor,
              navigateToBookAppointment: true,
            });
          }
        } else {
          console.log("Could not fetch data");
        }
      });
  };

  render() {
    if (this.state.navigateToBookAppointment) {
      return (
        <Redirect
          to={{
            pathname: "/appointments/booking",
            state: {
              doctorDaysOff: this.state.doctorDaysOff,
              doctor: this.state.selectedDoctor,
            },
          }}
        />
      );
    }
    var condition1 = "";
    var condition2 = "";
    var condition3 = "";
    var condition6 = "";
    var condition11 = "";
    if (typeof this.props.location.state.condition !== "undefined") {
      let conditions = this.props.location.state.doctor.condition.split(",");
      condition1 = conditions[1];
      condition2 = conditions[2];
      condition3 = conditions[3];
      condition6 = conditions[6];
      condition11 = conditions[11];

      var clinicAddress = [
        this.props.location.state.doctor.street_address,
        this.props.location.state.doctor.state,
        this.props.location.state.doctor.country,
        this.props.location.state.doctor.zip,
      ].join(",");
    }
    return (
      <>
        <div class="content">
          <div class="container">
            <div class="card">
              <div class="card-body">
                <div class="doctor-widget">
                  <div class="doc-info-left">
                    <div class="doctor-img">
                      <img src={doctor1} class="img-fluid" alt="User" />
                    </div>
                    <div class="doc-info-cont">
                      <h4 class="doc-name">
                        {this.props.location.state.doctor.name}
                      </h4>
                      <p class="doc-speciality">
                        {this.props.location.state.doctor.speciality}
                      </p>
                      <p class="doc-department">
                        <img
                          src={Cardiologist}
                          class="img-fluid"
                          alt="Speciality"
                        />
                        {this.props.location.state.doctor.speciality}
                      </p>
                      <div class="clinic-services">
                        <span>{condition1}</span>
                        <span>{condition3}</span>
                        <span>{condition11}</span>
                      </div>
                    </div>
                  </div>
                  <div class="doc-info-right">
                    <div class="clini-infos">
                      <ul>
                        <li>
                          <i class="fas fa-map-marker-alt"></i>{" "}
                          {this.props.location.state.doctor.city},{" "}
                          {this.props.location.state.doctor.state}
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $100 per hour{" "}
                        </li>
                      </ul>
                    </div>
                    <div class="doctor-action">
                      <a
                        href="javascript:void(0)"
                        class="btn btn-white fav-btn"
                      >
                        <i class="far fa-bookmark"></i>
                      </a>
                      <a href="chat.html" class="btn btn-white msg-btn">
                        <i class="far fa-comment-alt"></i>
                      </a>
                      <a
                        href="javascript:void(0)"
                        class="btn btn-white call-btn"
                        data-toggle="modal"
                        data-target="#voice_call"
                      >
                        <i class="fas fa-phone"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                <div class="location-list">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="clinic-content">
                        <h4 class="clinic-name">
                          <a href="#">
                            {this.props.location.state.doctor.clinic_name}
                          </a>
                        </h4>
                        <p class="doc-speciality">MDS, BDS</p>

                        <div class="clinic-details mb-0">
                          <h6 class="clinic-direction">
                            {" "}
                            <i class="fas fa-map-marker-alt"></i>{" "}
                            {clinicAddress} <br />
                            <a href="javascript:void(0);">Get Directions</a>
                          </h6>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="clinic-timing">
                        <div>
                          <p class="timings-days">
                            <span> Mon - Sat </span>
                          </p>
                          <p class="timings-times">
                            <span>10:00 AM - 2:00 PM</span>
                            <span>4:00 PM - 9:00 PM</span>
                          </p>
                        </div>
                        <div>
                          <p class="timings-days">
                            <span>Sun</span>
                          </p>
                          <p class="timings-times">
                            <span>10:00 AM - 2:00 PM</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-3">
                      <div class="clinic-booking">
                        <button
                          className="apt-btn book-btn"
                          onClick={this.getDoctorCalendarOffDaysAndNonAvailableSlots(
                            this.props.location.state.doctor
                          )}
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfileMainContent;
