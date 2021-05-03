import React, { Component } from 'react';
import BookingSucess from '../components/booking_success';
import Breadcrumb from './Breadcrumb';
import Footer from './Footer';



class BookingLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <Breadcrumb view={"Success"}/>
            <BookingSucess/>
            <Footer/>
            </>
         );
    }
}
 
export default BookingLayout;