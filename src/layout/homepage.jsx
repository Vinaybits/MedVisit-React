import React from "react";
import Doc_section from "../components/fav_doc_section";
import Mobile_section from "../components/mobile_app_sec";
import Search_section from "../components/search_section";
import Speciality_Section from "../components/speciality_section";

const Homepage = () => {
  return (
    <>
      <Search_section />
      <Speciality_Section />
      <Doc_section />
      <Mobile_section />
    </>
  );
};

export default Homepage;
