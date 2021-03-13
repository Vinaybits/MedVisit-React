import React from "react";

const Breadcrumb =() =>{
    return (

        <>
       
			<div class="breadcrumb-bar">
				<div class="container-fluid">
					<div class="row align-items-center">
						<div class="col-md-8 col-12">
							<nav aria-label="breadcrumb" class="page-breadcrumb">
								<ol class="breadcrumb">
									<li class="breadcrumb-item"><a href="index.html">Home</a></li>
									<li class="breadcrumb-item active" aria-current="page">Search</li>
								</ol>
							</nav>
							<h2 class="breadcrumb-title">45 matches found for : Dentist In XYZ</h2>
						</div>
					
					</div>
				</div>
			</div>
			
        </>
    )
};

export default Breadcrumb;