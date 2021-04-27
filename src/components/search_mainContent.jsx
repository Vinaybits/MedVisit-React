import React, {Component} from "react";

import doctor1 from '../assets/img/doctors/doctor-thumb-01.jpg'
import dental_sp from '../assets/img/specialities/dental_speciality.png'
import {Link, Redirect} from "react-router-dom";
import HomeService from "./home.service";
import Breadcrumb from "./breadcrumb";

class SearchMainContent extends Component {

	constructor(props) {
		super(props)
		this.state = {
			doctorDaysOff : [],
			selectedDoctor : {},
			navigateToBookAppointment : false,
			viewDoctorProfile: false
		}

		this.homeService = new HomeService();
	}

	getDoctorCalendarOffDaysAndNonAvailableSlots = doctor => e => {
		this.homeService.getDoctorCalendarOffDaysAndNonAvailableSlots(doctor.id, doctor.clinic_id, this.getTodayDate(), this.getOneWeekDate()).then(response => {
			if(response) {
				let fields = this.state.fields;
				if (response.data) {
					this.setState({doctorDaysOff: response.data, selectedDoctor : doctor, navigateToBookAppointment: true});
				}
			}

			else {
				console.log("Could not fetch data");
			}
		});
	}

	viewDoctorProfile = doctor => e => {
		this.homeService.getDoctorById(doctor.id).then(response => {
			if(response) {
				if (response.data) {
					this.setState({selectedDoctor : response.data, viewDoctorProfile: true});
				}
			}
			else {
				console.log("Could not fetch data");
			}
		});
	}

	getTodayDate = () =>{
		let today = new Date();
		return this.formatDate(today)
	}

	getOneWeekDate = () =>{
		let today = new Date();
		let oneWeekDate = new Date(today);
		oneWeekDate.setDate(today.getDate() + 6);
		return this.formatDate(oneWeekDate);
	}

	 formatDate = (date) => {
		let d = new Date(date)
		let month = '' + (d.getMonth() + 1)
		let day = '' + d.getDate()
		let year = d.getFullYear();

		if (month.length < 2)
			month = '0' + month;
		if (day.length < 2)
			day = '0' + day;

		return [year, month, day].join('-');
	}


	render() {
		if (this.state.navigateToBookAppointment) {

			return <Redirect to={{pathname: "/appointments/booking",
				state: {doctorDaysOff : this.state.doctorDaysOff ,
					doctor: this.state.selectedDoctor
				}}}/>;
		}

		if (this.state.viewDoctorProfile) {
			return <Redirect to={{pathname: "/doctor/profile", state : {doctor: this.state.selectedDoctor}}} />;
		}

		return (
			<>
				

				<div class="content">
					<div class="container-fluid">

						<div class="row">
							<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">


								<div class="card search-filter">
									<div class="card-header">
										<h4 class="card-title mb-0">Search Filter</h4>
									</div>
									<div class="card-body">
										<div class="filter-widget">
											<div class="cal-icon">
												<input type="text" class="form-control datetimepicker"
													   placeholder="Select Date"/>
											</div>
										</div>
										<div class="filter-widget">
											<h4>Gender</h4>
											<div>
												<label class="custom_check">
													<input type="checkbox" name="gender_type" checked/>
													<span class="checkmark"></span> Male Doctor
												</label>
											</div>
											<div>
												<label class="custom_check">
													<input type="checkbox" name="gender_type"/>
													<span class="checkmark"></span> Female Doctor
												</label>
											</div>
										</div>
										<div class="filter-widget">
											<h4>Select Specialist</h4>
											<div>
												<label class="custom_check">
													<input type="checkbox" name="select_specialist" checked/>
													<span class="checkmark"></span> Urology
												</label>
											</div>
											<div>
												<label class="custom_check">
													<input type="checkbox" name="select_specialist" checked/>
													<span class="checkmark"></span> Neurology
												</label>
											</div>
											<div>
												<label class="custom_check">
													<input type="checkbox" name="select_specialist"/>
													<span class="checkmark"></span> Dentist
												</label>
											</div>
											<div>
												<label class="custom_check">
													<input type="checkbox" name="select_specialist"/>
													<span class="checkmark"></span> Orthopedic
												</label>
											</div>
											<div>
												<label class="custom_check">
													<input type="checkbox" name="select_specialist"/>
													<span class="checkmark"></span> Cardiologist
												</label>
											</div>
											<div>
												<label class="custom_check">
													<input type="checkbox" name="select_specialist"/>
													<span class="checkmark"></span> Cardiologist
												</label>
											</div>
										</div>
										<div class="btn-search">
											<button type="button" class="btn btn-block">Search</button>
										</div>
									</div>
								</div>


							</div>

							<div class="col-md-12 col-lg-8 col-xl-9">
							
								{(this.props.doctors.length > 0) && this.props.doctors.map(doctor => (

									<div class="card">
										<div class="card-body">
											<div class="doctor-widget">
												<div class="doc-info-left">
													<div class="doctor-img">
														<a href="doctor-profile.html">
															<img src={doctor1} class="img-fluid" alt="User Image"/>
														</a>
													</div>
													<div class="doc-info-cont">
														<h4 class="doc-name"><a
															href="doctor-profile.html">{doctor.name}</a></h4>
															<p class="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>

														<h5 class="doc-department">
															<img src={dental_sp} class="img-fluid"
																 alt="Speciality"/>{doctor.speciality}
													    </h5>
														<hr/>
														<button type="button" class="btn btn-outline-info" onClick={this.getDoctorCalendarOffDaysAndNonAvailableSlots(doctor)}>Book Appointment</button>
													</div>
												</div>
												<div class="doc-info-right">
												<p class="doc-speciality">Available Slots - 11/11/1111 </p>
													<div class="clini-infos">
													<button type="button" class="btn btn-outline-warning btn-sm">8:30-9:00am</button>
													<button type="button" class="btn btn-outline-warning btn-sm">9:30-10:00am</button>
													<button type="button" class="btn btn-outline-warning btn-sm">12:00-12:30pm</button>
													<button type="button" class="btn btn-outline-warning btn-sm">1:00-1:30pm</button>
													<button type="button" class="btn btn-outline-warning btn-sm">12:00-12:30pm</button>
													<button type="button" class="btn btn-outline-warning btn-sm">1:00-1:30pm</button>
													</div>
													
													<div >
												{/* <button type="button" class="btn btn-outline-info" onClick={this.viewDoctorProfile(doctor)}>View Profile</button> */}
												{/* <button type="button" class="btn btn-outline-info" onClick={this.getDoctorCalendarOffDaysAndNonAvailableSlots(doctor)}>Book Appointment</button> */}
												<button type="button" class="btn btn-light btn-sm">View more available slots</button>
											</div>
												
												</div>
											</div>
										</div>
									</div>
								))}

								<div class="load-more text-center">
									<a class="btn btn-primary btn-sm" href="javascript:void(0);">Load More</a>
								</div>
							</div>
						</div>

					</div>

				</div>

			</>
		)
	}
};

export default SearchMainContent;
