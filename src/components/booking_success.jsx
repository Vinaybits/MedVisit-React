import React, { Component } from 'react';

class BookingSucess extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
           
			<div class="content success-page-cont">
				<div class="container-fluid">
				
					<div class="row justify-content-center">
						<div class="col-lg-6">
						
						
							<div class="card success-card">
								<div class="card-body">
									<div class="success-cont">
										<i class="fas fa-check"></i>
										<h3>Appointment requested Successfully!</h3>
										<p>Appointment requested with <strong>Dr. XYZ</strong><br/> on <strong>12 Apr 2021 5:00PM - 6:00PM</strong></p>
                                        <p>You will soon get the confirmation call from the Clinic and status on your appointment request</p>
										<a href="/" class="btn btn-primary view-inv-btn">Call Clinic</a>
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
 
export default BookingSucess;