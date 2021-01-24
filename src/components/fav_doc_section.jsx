import React, { Component } from "react";
import doc_img1 from '../assets/img/doctors/doctor-01.jpg'
import doc_img2 from '../assets/img/doctors/doctor-02.jpg'
import doc_img3 from '../assets/img/doctors/doctor-03.jpg'

class Doc_section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
                  <a href="javascript:;">Read More..</a>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="doctor-slider slider">
                  <div class="profile-widget">
                    <div class="doc-img">
                      <a href="doctor-profile.html">
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src={doc_img1}
                        />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">MDS, BDS</p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <span class="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Xyz, USA
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $300
                          <i
                            class="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
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
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src={doc_img2}
                        />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i class="fas "></i>
                      </h3>
                      <p class="speciality">BDS, MDS - Oral & Surgery</p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                        <span class="d-inline-block average-rating">(35)</span>
                      </div>
                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Newyork, USA
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $50 - $300
                          <i
                            class="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
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
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src={doc_img3}
                        />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">MBBS, MD - General Medicine</p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                        <span class="d-inline-block average-rating">(27)</span>
                      </div>
                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Georgia, USA
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $100 - $400
                          <i
                            class="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
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
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src={doc_img1}
                        />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">MDS, BDS</p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <span class="d-inline-block average-rating">(17)</span>
                      </div>
                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Xyz, USA
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $300
                          <i
                            class="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
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
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src={doc_img2}
                        />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i class="fas "></i>
                      </h3>
                      <p class="speciality">BDS, MDS - Oral & Surgery</p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                        <span class="d-inline-block average-rating">(35)</span>
                      </div>
                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Newyork, USA
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $50 - $300
                          <i
                            class="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
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
                        <img
                          class="img-fluid"
                          alt="User Image"
                          src={doc_img3}
                        />
                      </a>
                      <a href="javascript:void(0)" class="fav-btn">
                        <i class="far fa-bookmark"></i>
                      </a>
                    </div>
                    <div class="pro-content">
                      <h3 class="title">
                        <a href="doctor-profile.html">John Doe</a>
                        <i class="fas fa-check-circle verified"></i>
                      </h3>
                      <p class="speciality">MBBS, MD - General Medicine</p>
                      <div class="rating">
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star filled"></i>
                        <i class="fas fa-star"></i>
                        <span class="d-inline-block average-rating">(27)</span>
                      </div>
                      <ul class="available-info">
                        <li>
                          <i class="fas fa-map-marker-alt"></i> Georgia, USA
                        </li>
                        <li>
                          <i class="far fa-clock"></i> Available on Fri, 22 Mar
                        </li>
                        <li>
                          <i class="far fa-money-bill-alt"></i> $100 - $400
                          <i
                            class="fas fa-info-circle"
                            data-toggle="tooltip"
                            title="Lorem Ipsum"
                          ></i>
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
