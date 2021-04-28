import React from "react";
import Breadcrumb from "../components/Breadcrumb";
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
