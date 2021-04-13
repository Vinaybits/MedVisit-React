import React, { Component } from "react";
import doc_img1 from '../assets/img/doctors/doctor-01.jpg'
import doc_img2 from '../assets/img/doctors/doctor-02.jpg'
import doc_img3 from '../assets/img/doctors/doctor-03.jpg'

class Doc_section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  doSomething =() => {
    // do something
  }
  render() {
    return (
      <>
        <section className="section section-doctor">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="section-header ">
                  <h2>Book Our Doctor</h2>
                  <p>Lorem Ipsum is simply dummy text </p>
                </div>
                <div className="about-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et{" "}
                  </p>
                  <a href="#!" onClick={this.doSomething}>Read More..</a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="doctor-slider slider">
                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={doc_img1}
                        />
                      </a>
                      <a href="#!" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">MDS, BDS</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <span className="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Xyz, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $300
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={doc_img2}
                        />
                      </a>
                      <a href="#!" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i className="fas "></i>
                      </h3>
                      <p className="speciality">BDS, MDS - Oral & Surgery</p>
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
                          <i className="fas fa-map-marker-alt"></i> Newyork, USA
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
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={doc_img3}
                        />
                      </a>
                      <a href="#!" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">MBBS, MD - General Medicine</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">(27)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Georgia, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $400
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={doc_img1}
                        />
                      </a>
                      <a href="#!" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">MDS, BDS</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <span className="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Xyz, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $300
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={doc_img2}
                        />
                      </a>
                      <a href="#!" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i className="fas "></i>
                      </h3>
                      <p className="speciality">BDS, MDS - Oral & Surgery</p>
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
                          <i className="fas fa-map-marker-alt"></i> Newyork, USA
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
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="profile-widget">
                    <div className="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          className="img-fluid"
                          alt="User Image"
                          src={doc_img3}
                        />
                      </a>
                      <a href="#!" className="fav-btn">
                        <i className="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div className="pro-content">
                      <h3 className="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i className="fas fa-check-circle verified"></i>
                      </h3>
                      <p className="speciality">MBBS, MD - General Medicine</p>
                      <div className="rating">
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star filled"></i>
                        <i className="fas fa-star"></i>
                        <span className="d-inline-block average-rating">(27)</span>
                      </div>
                      <ul className="available-info">
                        <li>
                          <i className="fas fa-map-marker-alt"></i> Georgia, USA
                        </li>
                        <li>
                          <i className="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i className="far fa-money-bill-alt"></i> $100 - $400
                          <i
                            className="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
                        </li>
                      </ul>
                      <div className="row row-sm">
                        <div className="col-6">
                          <a href="doctor-profile.html" className="btn view-btn">
                            View Profile
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="booking.html" className="btn book-btn">
                            Book Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Doc_section;
