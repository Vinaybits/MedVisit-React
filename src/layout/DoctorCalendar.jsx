import React from "react";
import Breadcrumb from "./Breadcrumb";
import Calendar from "../components/calendar";
import DoctorProfileSnapshot from "../components/DoctorProfileSnapshot";

const DoctorCalendar = () => {
  return (
    <>
      <Breadcrumb />
      <DoctorProfileSnapshot />
      <Calendar />
    </>
  );
};

export default DoctorCalendar;
