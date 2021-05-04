import React from "react";
import Breadcrumb from "./Breadcrumb";
import ProfileMainContent from "../components/ProfileMainContent";

const DoctorProfile = (props) => {
  return (
    <>
      <Breadcrumb view={"Doctor"} />
      <ProfileMainContent {...props} />
    </>
  );
};

export default DoctorProfile;
