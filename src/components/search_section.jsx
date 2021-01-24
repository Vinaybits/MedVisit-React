import React,{Component} from 'react';
import './component.css';

class Search_section extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <>
        <section class="section section-search">
				<div class="container-fluid">
					<div class="banner-wrapper">
						<div class="banner-header text-center">
							<h1>Search Doctor, Make an Appointment</h1>
							<p>Discover the best doctors, clinic & hospital near you.</p>
						</div>
                         
					
						<div class="search-box">
							<form action="search.html">
								<div class="form-group search-location">
									<input type="text" class="form-control" placeholder="Search Location"/>
									<span class="form-text">Based on your Location</span>
								</div>
								<div class="form-group search-info">
									<input type="text" class="form-control" placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"/>
									<span class="form-text">Ex : Dental or Sugar Check up etc</span>
								</div>
								<button type="submit" class="btn btn-primary search-btn"><i class="fas fa-search"></i> <span>Search</span></button>
							</form>
						</div>
						
						
					</div>
				</div>
			</section>
        </> );
    }
}
 
export default Search_section;