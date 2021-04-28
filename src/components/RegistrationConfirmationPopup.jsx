import React, { Component } from "react";
import HomeService from "./home.service";
import { Button, Modal } from "react-bootstrap";
import { reactLocalStorage } from "reactjs-localstorage";
import { GlobalContext } from "../context";

class RegistrationConfirmationPopup extends Component {
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
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.state = {
      selectedDoctor: {},
      doctorDaysOff: {},
      fromDate: new Date(),
      toDate: new Date(new Date().setDate(new Date().getDate() + 6)),
      datesInRange: this.getDatesInRange(),
      selectedSlotTime: "",
      selectedSlotDate: "",
      navigateToCheckoutPage: false,
      show: false,
      patient: {
        firstName: null,
        lastName: null,
        userId: null,
        email: null,
        phone: null,
      },
    };

    this.homeService = new HomeService();
  }

  // componentDidMount() {
  //   let patient = {
  //     firstName: this.context.firstName,
  //     lastName: this.context.lastName,
  //     userId: this.context.id,
  //     email: this.context.email,
  //     phone: this.context.phone,
  //   };
  //   this.setState({ patient: patient });
  // }

  componentDidUpdate() {
    if (this.state.patient.userId !== this.context.id) {
      let patient = {
        firstName: this.context.firstName,
        lastName: this.context.lastName,
        userId: this.context.id,
        email: this.context.email,
        phone: this.context.phone,
      };
      this.setState({ patient: patient });
    }
  }

  handleClose = (e) => {
    this.setState({ show: false });
    this.props.cancelPatientChangesCallBack(false);
  };

  updatePatientDetails = (e) => {
    this.setState({ show: false });
    this.props.savePatientCallBack(this.state.patient, false);
  };

  callbackFunction = (slotTime, slotDate) => {
    console.log(" In Calendar class. Selected slot time : " + slotTime);
    console.log(" In Calendar class. Selected slot date : " + slotDate);
    this.setState({ selectedSlotTime: slotTime, selectedSlotDate: slotDate });
  };

  navigateToAppointmentCheckout = (e) => {
    e.preventDefault();
    const body = {
      slotTime: this.state.selectedSlotTime,
      slotDate: this.state.selectedSlotDate,
      doctor_id: this.props.location.state.doctor.id,
      clinic_id: this.props.location.state.doctor.clinic_id,
      patient_id: this.state.userId,
      insurance: "MVP Health Care",
      reason: "Not Given",
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

  getDatesInRange = () => {
    let datesInRange = [];
    let fromDate = new Date();
    let toDate = new Date(new Date().setDate(new Date().getDate() + 6));
    let nextDay = new Date(fromDate);

    while (nextDay <= new Date(toDate)) {
      datesInRange.push(this.formatDate(nextDay));
      nextDay = new Date(
        new Date(nextDay).setDate(new Date(nextDay).getDate() + 1)
      );
    }

    return datesInRange;
  };

  onFirstNameChange = (e) => {
    let patient = this.state.patient;
    patient.firstName = e.target.value;
    this.setState({ patient: patient });
  };

  onLastNameChange = (e) => {
    let patient = this.state.patient;
    patient.lastName = e.target.value;
    this.setState({ patient: patient });
  };

  onEmailChange = (e) => {
    let patient = this.state.patient;
    patient.email = e.target.value;
    this.setState({ patient: patient });
  };

  onPhoneChange = (e) => {
    let patient = this.state.patient;
    patient.phone = e.target.value;
    this.setState({ patient: patient });
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
    console.log(this.state.patient);
    return (
      <>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <Modal show={this.props.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                Appointment with Dr. {this.props.doctor.name} at{" "}
                {this.props.slotTime} on {this.props.slotDate}
              </Modal.Title>
            </Modal.Header>
            <Modal.Header>
              <p>Confirm/Change Patient details</p>
            </Modal.Header>
            <Modal.Body>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group form-focus">
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    className="form-control floating"
                    value={this.state.patient.firstName}
                    onChange={this.onFirstNameChange}
                  />
                  <label className="focus-label">
                    {this.state.patient.firstName ? "" : "First Name"}
                  </label>
                </div>
                <div className="form-group form-focus">
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    className="form-control floating"
                    value={this.state.patient.lastName}
                    onChange={this.onLastNameChange}
                  />
                  <label className="focus-label">
                    {this.state.patient.lastName ? "" : "Last Name"}
                  </label>
                </div>
                <div className="form-group form-focus">
                  <input
                    id="email"
                    type="text"
                    name="email"
                    className="form-control floating"
                    value={
                      this.state.patient.email === "undefined"
                        ? ""
                        : this.state.patient.email
                    }
                    onChange={this.onEmailChange}
                  />
                  <label className="focus-label">
                    {!this.state.patient.email ? "Email" : ""}
                  </label>
                </div>
                <div className="form-group form-focus">
                  <input
                    id="phone"
                    type="phone"
                    name="phone"
                    className="form-control floating"
                    value={this.state.patient.phone}
                    onChange={this.onPhoneChange}
                  />
                  <label className="focus-label">
                    {" "}
                    {this.state.patient.phone ? "" : "Phone"}
                  </label>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Confirm
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </>
    );
  }
}

export default RegistrationConfirmationPopup;