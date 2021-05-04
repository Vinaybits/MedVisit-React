import React, { Component } from "react";

class MyTimeSlotSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.date,
      selectedDate: {},
      selectedSlot: {},
      selectedDoctorId: "",
      selectedClinicId: "",
      backgroundColor: "",
      startTimeHours: 7,
      startTimeMinutes: 0,
      lastTimeHours: 16,
      lastTimeMinutes: 30,
      slotTimeInMinutes: 30,
      doctorDaysOff: [],
      fromDate: {},
      toDate: {},
      doctorSlotsOff: this.props.slotsOff,
    };
  }

  //   sameDate(date1, date2) {
  //     let dateObject1 = new Date(date1);
  //     let dateObject2 = new Date(date2);

  //     return (
  //       dateObject1.getDate() === dateObject2.getDate() &&
  //       dateObject1.getMonth() === dateObject2.getMonth() &&
  //       dateObject1.getFullYear() === dateObject2.getFullYear()
  //     );
  //   }

  getSlots() {
    let slotsOffTimes = [];

    if (!this.props.slotsOff) {
      return slotsOffTimes;
    }
    for (let i = 0; i < this.props.slotsOff.length; i++) {
      if (this.sameDate(this.props.slotsOff[i].date, this.props.date)) {
        slotsOffTimes.push(
          this.props.slotsOff[i].start_time +
            (parseInt(this.props.slotsOff[i].start_time) < 12 ? " AM" : " PM")
        );
      }
    }
    return slotsOffTimes;
  }

  selectSlot = (slotTime, date, e) => {
    console.log("Selected slot : " + slotTime.toString().split(" ")[0]);
    console.log("Selected date : " + date);
    if (document.getElementById("selected-slot-id")) {
      document.getElementById("selected-slot-id").style.backgroundColor = "";
      document.getElementById("selected-slot-id").id = "";
    }

    e.currentTarget.style.backgroundColor = "#42c0fb";
    e.currentTarget.id = "selected-slot-id";

    this.setState({
      selectedSlot: slotTime,
      selectedDate: date,
      backgroundColor: "#42c0fb",
    });

    this.props.parentCallBack(slotTime, date, this.props.doctor);
  };

  formatTime(date) {
    let d = new Date(date);
    let hours = "" + d.getHours();
    let minutes = "" + d.getMinutes();

    if (hours.length < 2) hours = "0" + hours;
    if (minutes.length < 2) minutes = "0" + minutes;

    return [hours, minutes].join(":");
  }

  render() {
    // let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    // let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    let slotTimes = [];

    let firstTimeSlot = new Date(this.props.date);
    firstTimeSlot.setHours(this.state.startTimeHours);
    firstTimeSlot.setMinutes(this.state.startTimeMinutes);

    let lastTimeSlot = new Date(this.props.date);
    lastTimeSlot.setHours(this.state.lastTimeHours);
    lastTimeSlot.setMinutes(this.state.lastTimeMinutes);

    let timeSlot = new Date(firstTimeSlot);
    let count = 0;
    while (timeSlot <= lastTimeSlot && count < 6) {
      slotTimes.push(
        this.formatTime(timeSlot) + (timeSlot.getHours() < 12 ? " AM" : " PM")
      );
      timeSlot.setMinutes(timeSlot.getMinutes() + this.state.slotTimeInMinutes);
      count++;
    }

    let timeSlotsUI = slotTimes.map((slotTime) => {
      return this.props.dayOff ? (
        <button disabled className="timing-orange">
          <span>{slotTime}</span>
        </button>
      ) : this.getSlots().includes(
          JSON.parse(JSON.stringify({ slotTime }))["slotTime"]
        ) ? (
        <button disabled className="timing-orange">
          <span>{slotTime}</span>
        </button>
      ) : (
        <button
          onClick={this.selectSlot.bind(this, slotTime, this.props.date)}
          type="button"
          key={slotTime}
          class="btn btn-outline-warning btn-sm"
        >
          {slotTime}
        </button>
      );
    });

    return <div class="clini-infos">{timeSlotsUI}</div>;
  }
}

export default MyTimeSlotSelection;
