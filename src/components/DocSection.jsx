import React, { Component } from "react";
import doc_img1 from "../assets/img/doctors/doctor-01.jpg";
import HomeService from "./home.service";
import Slider from "react-slick";
// import doc_img2 from "../assets/img/doctors/doctor-02.jpg";
// import doc_img3 from "../assets/img/doctors/doctor-03.jpg";

class DocSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctorArray: [],
    };
    this.homeService = new HomeService();
  }

  componentDidMount() {
    try {
      this.homeService.getAllDoctors().then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          this.setState({ doctorArray: response.data });
        } else if (response.status === 400) {
          this.setState({ doctorArray: [] });
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <>
        <section class="section section-doctor">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-4">
                <div class="section-header ">
                  <h2>Book Our Doctor</h2>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
                <div class="about-content">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum.
                  </p>
                  <p>
                    web page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes
                  </p>
                  <a href="javascript:;">Read More..</a>
                </div>
              </div>
              <div class="col-lg-8">
                <Slider {...settings}>
                  <div class="profile-widget">
                    <div class="doc-img">
                      <a href="doctor-profile.html">
                        <img class="img-fluid" alt="User" src={doc_img1} />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">
                          {typeof this.state.doctorArray[0] !== "undefined"
                            ? this.state.doctorArray[0].name
                            : ""}
                        </a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">
                        {typeof this.state.doctorArray[0] !== "undefined"
                          ? this.state.doctorArray[0].speciality
                          : ""}
                      </p>

                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i>
                          {typeof this.state.doctorArray[0] !== "undefined"
                            ? this.state.doctorArray[0].city
                            : ""}
                          ,{" "}
                          {typeof this.state.doctorArray[0] !== "undefined"
                            ? this.state.doctorArray[0].state
                            : ""}
                          ,{" "}
                          {typeof this.state.doctorArray[0] !== "undefined"
                            ? this.state.doctorArray[0].country
                            : ""}
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available at{" "}
                          {typeof this.state.doctorArray[0] !== "undefined"
                            ? this.state.doctorArray[0].clinic_name
                            : ""}
                        </li>
                      </ul>
                      <div class="row row-sm">
                        <div class="col-6">
                          <a href="doctor-profile.html" class="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div class="col-6">
                          <a href="booking.html" class="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="profile-widget">
                    <div class="doc-img">
                      <a href="doctor-profile.html">
                        <img class="img-fluid" alt="User" src={doc_img1} />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">
                          {typeof this.state.doctorArray[1] !== "undefined"
                            ? this.state.doctorArray[1].name
                            : ""}
                        </a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">
                        {typeof this.state.doctorArray[1] !== "undefined"
                          ? this.state.doctorArray[1].speciality
                          : ""}
                      </p>

                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i>
                          {typeof this.state.doctorArray[1] !== "undefined"
                            ? this.state.doctorArray[1].city
                            : ""}
                          ,{" "}
                          {typeof this.state.doctorArray[1] !== "undefined"
                            ? this.state.doctorArray[1].state
                            : ""}
                          ,{" "}
                          {typeof this.state.doctorArray[1] !== "undefined"
                            ? this.state.doctorArray[1].country
                            : ""}
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available at{" "}
                          {typeof this.state.doctorArray[1] !== "undefined"
                            ? this.state.doctorArray[1].clinic_name
                            : ""}
                        </li>
                      </ul>
                      <div class="row row-sm">
                        <div class="col-6">
                          <a href="doctor-profile.html" class="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div class="col-6">
                          <a href="booking.html" class="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="profile-widget">
                    <div class="doc-img">
                      <a href="doctor-profile.html">
                        <img class="img-fluid" alt="User" src={doc_img1} />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">
                          {typeof this.state.doctorArray[0] !== "undefined"
                            ? this.state.doctorArray[0].name
                            : ""}
                        </a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">
                        {typeof this.state.doctorArray[0] !== "undefined"
                          ? this.state.doctorArray[0].speciality
                          : ""}
                      </p>

                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i>
                          {typeof this.state.doctorArray[0] !== "undefined"
                            ? this.state.doctorArray[0].city
                            : ""}
                          ,{" "}
                          {typeof this.state.doctorArray[0] !== "undefined"
                            ? this.state.doctorArray[0].state
                            : ""}
                          ,{" "}
                          {typeof this.state.doctorArray[0] !== "undefined"
                            ? this.state.doctorArray[0].country
                            : ""}
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available at{" "}
                          {typeof this.state.doctorArray[0] !== "undefined"
                            ? this.state.doctorArray[0].clinic_name
                            : ""}
                        </li>
                      </ul>
                      <div class="row row-sm">
                        <div class="col-6">
                          <a href="doctor-profile.html" class="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div class="col-6">
                          <a href="booking.html" class="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="profile-widget">
                    <div class="doc-img">
                      <a href="doctor-profile.html">
                        <img class="img-fluid" alt="User" src={doc_img1} />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">
                          {typeof this.state.doctorArray[1] !== "undefined"
                            ? this.state.doctorArray[1].name
                            : ""}
                        </a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">
                        {typeof this.state.doctorArray[1] !== "undefined"
                          ? this.state.doctorArray[1].speciality
                          : ""}
                      </p>

                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i>
                          {typeof this.state.doctorArray[1] !== "undefined"
                            ? this.state.doctorArray[1].city
                            : ""}
                          ,{" "}
                          {typeof this.state.doctorArray[1] !== "undefined"
                            ? this.state.doctorArray[1].state
                            : ""}
                          ,{" "}
                          {typeof this.state.doctorArray[1] !== "undefined"
                            ? this.state.doctorArray[1].country
                            : ""}
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available at{" "}
                          {typeof this.state.doctorArray[1] !== "undefined"
                            ? this.state.doctorArray[1].clinic_name
                            : ""}
                        </li>
                      </ul>
                      <div class="row row-sm">
                        <div class="col-6">
                          <a href="doctor-profile.html" class="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div class="col-6">
                          <a href="booking.html" class="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DocSection;
