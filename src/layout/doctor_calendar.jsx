import React, { Component } from 'react';
import Breadcrumb from '../components/breadcrumb';
import Calendar from '../components/calendar';
import Doctor_profile_snapshot from '../components/doctor_profile_snapshot';

const Doctor_Calendar = () =>{
    return (

        <>
        <Breadcrumb/>
        <Doctor_profile_snapshot/>
        <Calendar/>
        </>
    )
};

export default Doctor_Calendar;