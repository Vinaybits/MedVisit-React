import React, { Component } from "react";


export const GlobalContext = React.createContext();

export class GlobalProvider extends Component {

    update_loggedIn_user(event) {
        console.log(event)
        this.setState({patient: event})
        this.setState({firstName:event['first_name'], lastName:event["last_name"], id:event["id"], email : event.email, phone:event.phone,userId:event.id })
    }

    log_out() {
        this.setState({ firstName: null, lastName: null, email: null, phone: null, userId: null, showlogout: true })
    }

    handle_searchDate(date) {
        this.setState({ searchDate: date })
    }
	
    handle_close(str, url) {
            window.scrollTo(0, 0)
            if (str === "login") {
                this.setState({ showlogin: true });
                this.setState({ showregister: false })
            }
            else if (str === "closelogin") {
                this.setState({ showlogin: false });
            }
            else if (str === "register") {
                this.setState({ showregister: true });
                this.setState({ showlogin: false })
            }
            else if (str === "closeregister") {
                this.setState({ showregister: false })
            }
    }

    cancel_patient_changes_callback(str) {
		this.setState({show: str})
    }
    
    callback_function(param1, param2, param3, param4) {
        this.setState({
            selectedDoctor: param1,
            doctorDaysOff: param2,
            selectedSlotTime: param3,
            selectedSlotDate: param4,
        })
    }

    set_patient(param) {
        this.setState({ patient: param })
    }

	state = {
		    firstName: null,
            lastName: null,
            email: null,
            phone: null,
            userId: null,
            id:null,
            showlogin: false,
            showregister: false,
            showlogout: false,
            handleClose: (str) => this.handle_close(str),
            updateLoggedInUser: (item) => this.update_loggedIn_user(item),
            logOut: this.log_out(),
            searchDate: new Date(),
            handleSearchDate: (date) => this.handle_searchDate(date),
            show: false,
	    	slotTime: null,
		    slotDate: null,
            cancelPatientChangesCallBack: (str) => this.cancel_patient_changes_callback(str),
            selectedDoctor: {},
            doctorDaysOff: null,
            selectedSlotTime: null,
            selectedSlotDate: null,
        callbackFunction: (param1, param2, param3, param4) => this.callback_function(param1, param2, param3, param4),
        patient: {},
            setPatient:(param) => this.set_patient(param) 
		
	};
	render() {
		return (
			<GlobalContext.Provider value={this.state}>
				{this.props.children}
			</GlobalContext.Provider>
		)
	}
}