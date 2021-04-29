import React from "react";
import Breadcrumb from "../components/breadcrumb";
import ProfileMainContent from "../components/ProfileMainContent";

const DoctorProfile = (props) => {
  return (
    <>
    
      <Breadcrumb view={"doctor"} />
      <ProfileMainContent {...props} />
    </>
  );
};

export default DoctorProfile;
