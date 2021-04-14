import React from "react";
import Breadcrumb from "../components/breadcrumb";
import SearchMainContent from "../components/search_mainContent";

const Search =(props) =>{

    return(
        <>
            {console.log("doctors in Search component: " + props.doctors.length)}
        <Breadcrumb noOfMatches={props.doctors.length} searchLocation={props.searchLocation} searchConditions={props.searchConditions}/>
        <SearchMainContent doctors={props.doctors}/>

        </>
    )
};

export default Search;
