import React from 'react';
import img_mobile_app from "../assets/img/features/feature.png";
import play_store from '../assets/img/playstore.png';

const Mobile_section =() => {
    return(
        <>
         <section className="section section-features">
				<div className="container-fluid">
				   <div className="row">
						<div className="col-md-5 features-img">
							<img src={img_mobile_app} className="img-fluid" alt="Feature" />
						</div>
						<div className="col-md-7">
							<div className="section-header">
								<h2 className="mt-2" style={{textAlign:"center"}}>Mobile App Availabe on <br/>Android and iOS</h2>
								<p>ILorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
							</div>	
							<div className="section-header">
								<center>
									<img src={play_store} width="400px" />
								</center>
								
							</div>
							
						</div>
				   </div>
				</div>
			</section>		
        
        
        </>
    )

};

export default Mobile_section;
