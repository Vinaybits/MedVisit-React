import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = (props) => {
  return (
    <>
      <div class="breadcrumb-bar">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-md-8 col-12">
              <nav aria-label="breadcrumb" class="page-breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {props.view}
                  </li>
                </ol>
              </nav>
              {(props.searchConditions || props.searchLocation) && (
                <h2 class="breadcrumb-title">
                  {props.noOfMatches} matches found for{" "}
                  {props.searchConditions
                    ? props.searchConditions.join(", ")
                    : ""}{" "}
                  {props.searchLocation ? " in " + props.searchLocation : ""}
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
