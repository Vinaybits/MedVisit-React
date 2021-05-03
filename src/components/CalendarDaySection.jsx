import React, {Component} from 'react'

class CalendarDaySection extends Component {
    constructor (props) {
        super(props)
        this.state = {
            fromDate: {},
            toDate: {}
        }
    }

    render() {

        let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        let datesInRange = [];

        let nextDay = new Date(new Date(this.props.fromDate));

       while (nextDay <= new Date(this.props.toDate)) {
           datesInRange.push(nextDay);
           nextDay = new Date((new Date(nextDay)).setDate((new Date(nextDay).getDate()) + 1));
        }

        let datesInRangeHeader = datesInRange.map(day=> {
            return (
                <li>
                    <span>{weekDays[day.getDay()]}</span>
                    <span className="slot-date">{day.getDate()} {months[day.getMonth()]} <small className="slot-year">{day.getFullYear()}</small></span>
                </li>
            )
        })

      return (<span>{datesInRangeHeader}</span>)

    }
}

export default CalendarDaySection
