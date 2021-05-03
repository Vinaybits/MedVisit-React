import React, { Component } from "react";


export const BookingContext = React.createContext();

export class BookingProvider extends Component {

	cancel_patient_changes_callback(str) {
		this.setState({show: str})
	}

	state = {
		show: false,
		slotTime: null,
		slotDate: null,
		cancelPatientChangesCallBack: (str) => this.cancel_patient_changes_callback(str),

		
	};
	render() {
		return (
			<BookingContext.Provider value={this.state}>
				{this.props.children}
			</BookingContext.Provider>
		)
	}
}