import React, { Component } from 'react';

const Profile_MainContent = () =>{
    return (
        <>


			<div class="content">
				<div class="container">

					
					<div class="card">
						<div class="card-body">
							<div class="doctor-widget">
								<div class="doc-info-left">
									<div class="doctor-img">
										<img src="assets/img/doctors/doctor-thumb-02.jpg" class="img-fluid" alt="User Image" />
									</div>
									<div class="doc-info-cont">
										<h4 class="doc-name">Dr. Darren Elder</h4>
										<p class="doc-speciality">BDS, MDS - Oral & Surgery</p>
										<p class="doc-department">
                                            <img src="assets/img/specialities/specialities-05.png" class="img-fluid" alt="Speciality"/>Dentist</p>
										<div class="rating">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="d-inline-block average-rating">(35)</span>
										</div>
									
										<div class="clinic-services">
											<span>Dental Fillings</span>
											<span>Teeth Whitneing</span>
										</div>
									</div>
								</div>
								<div class="doc-info-right">
									<div class="clini-infos">
										<ul>
											
											<li><i class="fas fa-map-marker-alt"></i> Newyork, USA</li>
											<li><i class="far fa-money-bill-alt"></i> $100 per hour </li>
										</ul>
									</div>
									<div class="doctor-action">
										<a href="javascript:void(0)" class="btn btn-white fav-btn">
											<i class="far fa-bookmark"></i>
										</a>
										<a href="chat.html" class="btn btn-white msg-btn">
											<i class="far fa-comment-alt"></i>
										</a>
										<a href="javascript:void(0)" class="btn btn-white call-btn" data-toggle="modal" data-target="#voice_call">
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
											<h4 class="clinic-name"><a href="#">Dental Care Center</a></h4>
											<p class="doc-speciality">MDS, BDS</p>
											
											<div class="clinic-details mb-0">
												<h5 class="clinic-direction"> <i class="fas fa-map-marker-alt"></i> 22 Moon Lane, Texas, USA <br/><a href="javascript:void(0);">Get Directions</a></h5>
												
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
										<a class="apt-btn" href="booking.html">Book Appointment</a>
									</div>
									</div>
								</div>
							</div>
						

							<div class="location-list">
								<div class="row">
								
									
									<div class="col-md-6">
										<div class="clinic-content">
											<h4 class="clinic-name"><a href="#">New Dental Care Center</a></h4>
											<p class="doc-speciality">MDS, BDS</p>
											
											<div class="clinic-details mb-0">
												<h5 class="clinic-direction"> 
                                                <i class="fas fa-map-marker-alt"></i> 2286  Sun-Lane Texas, USA <br/>
                                                <a href="javascript:void(0);">Get Directions</a>
                                                </h5>
												
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
										<a class="apt-btn" href="booking.html">Book Appointment</a>
									</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					

				</div>
			</div>		
			
        </>
    )
};

export default Profile_MainContent;