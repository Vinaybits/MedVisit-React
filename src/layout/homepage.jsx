import React from "react";
import DocSection from "../components/HomePageComponents/DocSection";
import MobileSection from "../components/HomePageComponents/MobileSection";
import SearchSection from "../components/HomePageComponents/SearchSection";
import SpecialitySection from "../components/HomePageComponents/SpecialitySection";
const Homepage = () => {
  return (
    <>
      <SearchSection />
      <SpecialitySection />
      <DocSection />
      <MobileSection />
    </>
  );
};

export default Homepage;
