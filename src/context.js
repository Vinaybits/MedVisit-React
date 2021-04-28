import React, { Component } from "react";
export const GlobalContext = React.createContext();

export class GlobalProvider extends Component {

    update_loggedIn_user(event) {
        console.log(event)
        this.setState({firstName:event['first_name'], lastName:event["last_name"], id:event["id"], email : event.email, phone:event.phone,userId:event.id })
    }

    log_out() {
        this.setState({ firstName: null, lastName: null, email: null, phone: null, userId: null, showlogout: true })
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
            logOut:this.log_out()
		
	};
	render() {
		return (
			<GlobalContext.Provider value={this.state}>
				{this.props.children}
			</GlobalContext.Provider>
		)
	}
}