import axios from 'axios';

export default class HomeService {
    
    getDoctor = (data) => {
        const URL = 'http://localhost:8090/api/v1/doctors/getDoctorByName';
        return axios({
            url: URL,
            method: 'GET',
            params: data
        }).then(response => {
            if(response.status === 200){
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    getDoctorsByTreatingCondition = (conditions) => {
        const URL = 'http://localhost:8090/api/v1/doctors/' + encodeURIComponent(conditions);
        return axios({
            url: URL,
            method: 'GET'
        }).then(response => {
            if(response.status === 200){
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    getDoctorsByLocation = (location) => {
        const URL = 'http://localhost:8090/api/v1/doctors/' + location;
        return axios({
            url: URL,
            method: 'GET'
        }).then(response => {
            if(response.status === 200){
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    getConditionsAndSpecialities = (searchText) => {
        const URL = 'http://localhost:8090/api/v1/conditions/' + searchText;
        return axios({
            url: URL,
            method: 'GET'
        }).then(response => {
            if(response.status === 200){
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    getSearchLocations = (searchText) => {
        const URL = 'http://localhost:8090/api/v1/locations/' + searchText;
        return axios({
            url: URL,
            method: 'GET'
        }).then(response => {
            if(response.status === 200){
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    userAuthenticate = (data) =>{
        const URL = "http://localhost:8090/patient/login";
        return axios({
            url: URL,
            method: 'POST',
            data: data,
            headers: {
                Accept: 'application/pdf',
                'Content-Type':'application/json'
            }
        }).then((response) => {
            if (response.status === 200 && response != null) {
                return response;
            }
        }).catch((error) => {
            return error.response;
        });
    }

    registerPatient = (data) =>{
        const URL = "http://localhost:8090/patient/register";
        return axios({
            url: URL,
            method: 'POST',
            data: data,
            headers: {
                Accept: 'application/pdf',
                'Content-Type':'application/json'
            }
        }).then((response) => {
            if (response.status === 200 && response != null) {
                return response;
            }
        }).catch((error) => {
            return error.response;
        });
    }

    requestAppointment = (data) =>{
        const URL = "http://localhost:8090/appointment/request";
        return axios({
            url: URL,
            method: 'POST',
            data: data,
            headers: {
                Accept: 'application/pdf',
                'Content-Type':'application/json'
            }
        }).then((response) => {
            if (response.status === 200 && response != null) {
                return response;
            }
        }).catch((error) => {
            return error.response;
        });
    }

    getDoctorCalendarOffDaysAndNonAvailableSlots = (doctorId, clinicId, fromDate, toDate) => {
        const URL = 'http://localhost:8090/api/v1/doctorcalendar/daysOff?doctorId=' + doctorId
            + '&clinicId=' + clinicId + '&fromDate=' + fromDate + '&toDate=' + toDate;
        return axios({
            url: URL,
            method: 'GET',
            params: []
        }).then(response => {
            if(response.status === 200){
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    getDoctorCalendarSlotsOff = (doctorId, clinicId, fromDate, toDate) => {
        const URL = 'http://localhost:8090/api/v1/doctorcalendar/slotsOff?doctorId=' + doctorId
            + '&clinicId=' + clinicId + '&fromDate=' + fromDate + '&toDate=' + toDate;
        return axios({
            url: URL,
            method: 'GET',
            params: []
        }).then(response => {
            if(response.status === 200){
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    getDoctorById = (doctorId) => {
        const URL = 'http://localhost:8090/api/v1/doctor/' + doctorId;
        return axios({
            url: URL,
            method: 'GET',
            params: []
        }).then(response => {
            if(response.status === 200){
                return response;
            }
        }).catch(error => {
            console.log(error);
        });
    }
}
