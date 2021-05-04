import React from "react";
import { Link } from "react-router-dom";
const Breadcrumb = (props) => {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-8 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.view}
                  </li>
                </ol>
              </nav>
              {(props.searchConditions || props.searchLocation) && (
                <h2 className="breadcrumb-title">
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
