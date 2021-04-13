import React from "react";
import Breadcrumb from "../components/breadcrumb";
import Footer from "../components/footer";
import Search_mainContent from "../components/Search_mainContent";

const Search =(props) =>{

    return(
        <>
            {console.log("doctors in Search component: " + props.doctors.length)}
        <Breadcrumb noOfMatches={props.doctors.length} searchLocation={props.searchLocation} searchConditions={props.searchConditions}/>
        <Search_mainContent doctors={props.doctors}/>

        </>
    )
};

export default Search;
