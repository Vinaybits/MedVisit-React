import React, { Component } from 'react';
import Breadcrumb from '../components/breadcrumb';
import Profile_MainContent from '../components/doctor_mainContent';

const Doctor_Profile =(props) =>{
    return(
        <>
        <Breadcrumb view={'doctor'}/>
       <Profile_MainContent {...props}/>
        </>
    )
};

export default Doctor_Profile;
