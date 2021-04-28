import React from "react";
import DocSection from "../components/DocSection";
import MobileSection from "../components/MobileSection";
import SearchSection from "../components/SearchSection";
import SpecialitySection from "../components/SpecialitySection";

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
