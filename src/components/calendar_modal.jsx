import React,{Component} from 'react';
import Modal from 'react-bootstrap/Modal'
import {Button} from "react-bootstrap";
import {Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda} from "@syncfusion/ej2-react-schedule";
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";
import HomeService from "./home.service";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import doc_img2 from "../assets/img/doctors/doctor-02.jpg";
import {Link} from "react-router-dom";

class CalendarModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDoctor: {}
        }
        this.workingDays = [1, 2, 3, 4, 5];
        this.scheduleDataMap = {};
        this.homeService = new HomeService();
    }

    componentDidMount() {
        this.setState({selectedDoctor : this.props.location.state.doctor});
    }

    onPopupOpen(args){
        if (args.type === 'Editor') {
            // scheduled appointment slots cannot be seen by general search
            if(args.data && args.data.Id) {
                args.cancel = true;
            } else  {
                let formElement = args.element.querySelector('.e-schedule-form');
                if (formElement && (formElement).ej2_instances) {
                    let validator = (formElement).ej2_instances[0];
                    validator.addRules('patientName', { required: [true, 'Required patient name'] });
                    validator.addRules('phoneNumber', { required: [true, 'Required phone number'] });
                }
            }
        }
    }
    OnEventRendered(args) {
        // Add grey color to alredy requested, confirmed appointments.
        const greyColor = 'grey';
        args.element.style.backgroundColor = greyColor;
        if (args.data.status == "Requested") {
            args.element.innerHTML = 'Appointment ' + '<br>' + 'Pending ' + '<br>' + 'Confirmation';
        } else {
            args.element.innerText = '';
        }
    }

    editorTemplate(props){
        return (props !== undefined ? <table className="custom-event-editor" style={{ width: '100%', cellpadding: '5' }}><tbody>
        <tr><td className="e-textlabel">Date/Time</td><td colSpan={4}>
            <DateTimePickerComponent readOnly={true} format='dd/MM/yy hh:mm a' id="StartTime" data-name="StartTime" value={new Date(props.startTime || props.StartTime)} className="e-field"></DateTimePickerComponent>
        </td></tr>
        <tr hidden={true}><td className="e-textlabel">To</td><td colSpan={4}>
            <DateTimePickerComponent format='dd/MM/yy hh:mm a' id="EndTime" data-name="EndTime" value={new Date(props.endTime || props.EndTime)} className="e-field"></DateTimePickerComponent>
        </td></tr>
        <tr><td className="e-textlabel">Patient Name *</td><td colSpan={4}>
            <input id="patientName" className="e-field e-isnput" type="text" name="patientName" style={{ width: '100%' }}/>
        </td></tr>
        <tr><td className="e-textlabel">Phone Number *</td><td colSpan={4}>
            <input id="phoneNumber" className="e-field e-input" type="text" name="phoneNumber" style={{ width: '100%' }}/>
        </td></tr>
        <tr><td className="e-textlabel">Reason for Visit</td><td colSpan={4}>
            <textarea id="reason" className="e-field e-input" name="reason" rows={3} cols={50} style={{ width: '100%', height: '60px !important', resize: 'vertical' }}></textarea>
        </td></tr></tbody></table> : <div></div>);
    }

    onActionBegin(args) {
        console.log("in action being with request type :" + args.requestType);
        if (args.requestType === 'eventCreate' && args.data.length > 0) {
            this.requestAppointment(args)
        }
    }

    requestAppointment = (args) => {

        console.log("in event create");
        let eventData = args.data[0];
        console.log("appointment details - " + eventData.patientName + eventData.phoneNumber + " : " + eventData.StartTime + " : " + eventData.EndTime + " : " + eventData.reason);
        console.log("selected doctors ID is :" + this.state.selectedDoctor.doctor.id)
        const appointment = {
            newPatient: true,
            patientName: eventData.patientName,
            phoneNumber: eventData.phoneNumber,
            appointmentTime : {
                from: eventData.StartTime,
                to: eventData.EndTime
            },
            reason: eventData.reason? eventData.reason : 'Not Provided',
            status: 'Requested',
            doctor: {
                name: this.state.selectedDoctor.doctor.name,
                clinicName: this.state.selectedDoctor.doctor.email,
                id: this.state.selectedDoctor.doctor.id
            }
        }

        this.homeService.createAppointment(appointment).then(response => {
            if(response.status && response.status === 200) {
                this.setState({openAlert: true});
            } else {
                console.log(response);
            }
        })

    }

    render() {
        return (

            <>

                <div>
                    <Row>
                        <Col md={6}>
                            <div className="row row-sm">
                                <div className="col-4 profile-widget">
                                    <div className="doc-img">
                                        <a href="doctor-profile.html">
                                            <img
                                                className="img-fluid"
                                                alt="User Image"
                                                src={doc_img2}
                                            />
                                        </a>
                                        <a href="javascript:void(0)" className="fav-btn">
                                            <i className="far fa-bookmark"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-4 profile-widget">
                                    <div className="pro-content">
                                        <h3 className="title">
                                            <a href="doctor-profile.html">{this.props.location.state.doctor.doctor.name}</a>
                                            <i className="fas "></i>
                                        </h3>
                                        <p className="speciality">{this.props.location.state.doctor.doctor.languages}</p>
                                        <div className="rating">
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star filled"></i>
                                            <i className="fas fa-star"></i>
                                            <span className="d-inline-block average-rating">(35)</span>
                                        </div>
                                        <ul className="available-info">
                                            <li>
                                                <i className="fas fa-map-marker-alt"></i> {this.props.location.state.doctor.doctor.name}, {this.props.location.state.doctor.doctor.name}
                                            </li>
                                            <li>
                                                <i className="far fa-clock"></i> Available on Fri, 22 Mar
                                            </li>
                                            <li>
                                                <i className="far fa-money-bill-alt"></i> $50 - $300
                                                <i
                                                    className="fas fa-info-circle"
                                                    data-toggle="tooltip"
                                                    title="Lorem Ipsum"
                                                ></i>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <ScheduleComponent delayUpdate="true" height="400px" width="auto"
                                       currentView='Month'
                                       selectedDate={new Date()}
                                       eventSettings={{ dataSource: this.scheduleDataMap[this.state.selectedDoctor.id],
                                           fields: {
                                               id: 'Id',
                                               subject: { name: 'Subject', title: 'Event Name' },
                                               patientName: { name: 'patientName', title: 'Patient Name', validation : {required: true} },
                                               phoneNumber: { name: 'phoneNumber', title: 'Phone Number', validation : {required: true} },
                                               reason: { name: 'reason', title: 'Reason for Visit' },
                                               startTime: { name: 'StartTime', title: 'Start Time' },
                                               endTime: { name: 'EndTime', title: 'End Time' }
                                           }
                                       }} workDays={this.workingDays}
                                       editorTemplate={this.editorTemplate.bind(this)} showQuickInfo={false}
                                       popupOpen={this.onPopupOpen.bind(this)}
                                       eventRendered={this.OnEventRendered.bind(this)}
                                       actionBegin={this.onActionBegin.bind(this)}
                                       timeScale={{
                                           enable: true, interval: 60, slotCount: 4
                                       }} >
                        <Inject
                            services={[Day, Week, WorkWeek, Month]}/>
                    </ScheduleComponent>
                        </Col>
                    </Row>
                </div>
            </>
        );

    }

}

export default CalendarModal;
