import React from "react";
import Breadcrumb from "../components/breadcrumb";
import SearchMainContent from "../components/SearchMainContent";

const Search = (props) => {
  return (
    <>
      {console.log("doctors in Search component: " + props.doctors.length)}
      <Breadcrumb
        noOfMatches={props.doctors.length}
        searchLocation={props.searchLocation}
        searchConditions={props.searchConditions}
        view={"Search"}
      />
      <SearchMainContent doctors={props.doctors} />
    </>
  );
};

export default Search;
