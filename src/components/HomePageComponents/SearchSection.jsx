import React, { Component } from "react";
import "./component.css";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { TextField } from "@material-ui/core";
import HomeService from "../home.service";
import { Redirect } from "react-router-dom";
import DatePicker from "react-date-picker";
import { GlobalContext } from "../../context";

class SearchSection extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.state = {
      fields: {},
      errors: {},
      currencies: [
        { value: "John", label: "John" },
        { value: "Mike", label: "Mike" },
        { value: "David", label: "David" },
      ],
      doctors: [],
      openAlert: false,
      expandedPanel: "panel1",
      expandGetDoctorsPanel: false,
      selectedCondition: "",
      selectedConditions: [],
      hideCard: true,
      openedCalendarDivs: {},
      searchDoctorsLabel: "Search Doctors",
      disableSearchButton: false,
      selectedDoctorId: "",
      selectedDoctorName: "",
      selectedClinicName: "",
      displaySearchedDoctors: false,
      searchLocation: "",
      value: new Date(),
    };
    this.homeService = new HomeService();
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  onChange(value) {
    this.setState({ value: value });
  }

  handleAutoCompleter(event) {
    const data = {
      searchString: event.target.value,
    };

    // geConditionsAndSpecialities
    this.homeService.getDoctor(data).then((response) => {
      if (response) this.setState({ doctors: response.data });
      else {
        console.log("Could not fetch data");
      }
    });
  }

  handleSelectSpecialityOrCondition = (event, reason) => {
    this.setState({
      selectedConditions: reason.toString().split(","),
      searchDoctorsLabel: "Search Doctors",
      disableSearchButton: !(reason.length > 0),
    });
  };

  handleSelectSearchLocation = (event, locationText) => {
    this.setState({
      selectedSearchLocation: locationText,
      searchDoctorsLabel: "Search Doctors",
    });
  };

  getSpecialitiesAndConditions = (event, value) => {
    this.homeService.getConditionsAndSpecialities(value).then((response) => {
      if (response) {
        let fields = this.state.fields;
        let errors = this.state.errors;
        errors["conditionsAndSpecialities"] = "";
        let conditionsAndSpecialities = response.data ? response.data : [];
        fields["conditionsAndSpecialities"] = conditionsAndSpecialities;
        this.setState({
          fields,
          expandGetDoctorsPanel: false,
          searchDoctorsLabel: "Search Doctors",
          openCalendarDivs: {},
        });
      } else {
        console.log("Could not fetch data");
      }
    });
  };

  getSearchLocations = (event, value) => {
    this.homeService.getSearchLocations(value).then((response) => {
      if (response) {
        let fields = this.state.fields;
        let errors = this.state.errors;
        errors["searchLocations"] = "";
        let locations = response.data ? response.data : [];
        fields["searchLocations"] = locations;
        this.setState({
          fields,
          expandGetDoctorsPanel: false,
          searchDoctorsLabel: "Search Doctors",
          searchLocation: value,
          openCalendarDivs: {},
        });
      } else {
        console.log("Could not fetch data");
      }
    });
  };

  //getDoctorsByTreatingCondition
  getDoctorsByTreatingCondition = (event, value) => {
    console.log(this.state.selectedConditions);
    if (this.state.selectedConditions.length <= 0) {
      this.homeService.getAllDoctors().then((response) => {
        if (response) {
          let errors = this.state.errors;
          errors["doctors"] = "";
          if (response.data) {
            //this.setScheduledDataForAllDoctors(response.data);
          }
          this.setState({
            doctors: response.data,
            displaySearchedDoctors: true,
            searchConditions: this.state.selectedConditions,
            searchLocation: this.state.searchLocation,
          });
        } else {
          console.log("Could not fetch data");
        }
      });
    } else {
      this.homeService
        .getDoctorsByTreatingCondition(this.state.selectedConditions)
        .then((response) => {
          if (response) {
            let errors = this.state.errors;
            errors["doctors"] = "";
            if (response.data) {
              //this.setScheduledDataForAllDoctors(response.data);
            }
            this.setState({
              doctors: response.data,
              displaySearchedDoctors: true,
              searchConditions: this.state.selectedConditions,
              searchLocation: this.state.searchLocation,
            });
          } else {
            console.log("Could not fetch data");
          }
        });
    }
  };

  setScheduledDataForAllDoctors = (doctors) => {
    if (doctors) {
      doctors.forEach((doctor) => {
        this.homeService
          .getAppointmentForDoctorsAndClinic(doctor._id, doctor.clinicName)
          .then((response) => {
            if (response) {
              this.scheduleDataMap[doctor._id] = response.data;
              console.log("Got doctors : ");
            } else {
              console.log(
                "could not fetch appointments for doctor : " + doctor.name
              );
            }
          });
      });
    }
  };

  render() {
    if (this.state.displaySearchedDoctors) {
      return (
        <Redirect
          to={{
            pathname: "/doctor/search",
            state: {
              doctors: this.state.doctors,
              searchConditions: this.state.searchConditions,
              searchLocation: this.state.searchLocation,
            },
          }}
        />
      );
    }
    // const CustomAutocomplete = withStyles({
    //   tag: {
    //     backgroundColor: "#a0a",
    //     height: 24,
    //     position: "relative",
    //     zIndex: 0,
    //     "& .MuiChip-label": {
    //       color: "#fff",
    //     },
    //     "& .MuiChip-deleteIcon": {
    //       color: "red",
    //     },
    //     "&:after": {
    //       content: '""',
    //       right: 10,
    //       top: 6,
    //       height: 12,
    //       width: 12,
    //       position: "absolute",
    //       backgroundColor: yellow,
    //       zIndex: -1,
    //     },
    //   },
    // })(Autocomplete);

    return (
      <>
        <section className="section section-search">
          <div className="container-fluid">
            <div className="banner-wrapper">
              <div className="banner-header text-center">
                <h1>Search Doctor, Make an Appointment</h1>
                <p>Discover the best doctors, clinic & hospital near you.</p>
              </div>

              <div className="search-box">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group search-location">
                    <Autocomplete
                      style={{ width: "220px" }}
                      id="doctor-name"
                      options={
                        this.state.fields["searchLocations"]
                          ? this.state.fields["searchLocations"]
                          : []
                      }
                      getOptionLabel={(option) => option.toString()}
                      filterOptions={(options, object) => options}
                      multiple={false}
                      filterSelectedOptions={true}
                      onInputChange={this.getSearchLocations}
                      onChange={this.handleSelectSearchLocation}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Search by location"
                          style={{ backgroundColor: "white" }}
                          variant="outlined"
                          name="doctor"
                          margin="normal"
                          size={"small"}
                          fullWidth
                        />
                      )}
                    />
                    <span className="form-text">Based on your Location</span>
                  </div>

                  <div className="form-group search-info">
                    <Autocomplete
                      id="doctor-name"
                      options={
                        this.state.fields["conditionsAndSpecialities"]
                          ? this.state.fields["conditionsAndSpecialities"]
                          : []
                      }
                      getOptionLabel={(option) => option.toString()}
                      filterOptions={(options, object) => options}
                      multiple={true}
                      filterSelectedOptions={true}
                      onInputChange={this.getSpecialitiesAndConditions}
                      onChange={this.handleSelectSpecialityOrCondition}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Search by conditions, diseases"
                          style={{ backgroundColor: "white" }}
                          variant="outlined"
                          name="doctor"
                          margin="normal"
                          size={"small"}
                          fullWidth
                        />
                      )}
                    />
                    <span className="form-text">
                      Ex : Dental or Sugar Check up etc
                    </span>
                  </div>
                  <div className="form-group search-date">
                    <DatePicker
                      onChange={this.context.handleFilterDate}
                      value={this.context.filterDate}
                      minDate={new Date()}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary search-btn"
                    onClick={this.getDoctorsByTreatingCondition}
                  >
                    <i className="fas fa-search"></i> <span>Search</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SearchSection;
