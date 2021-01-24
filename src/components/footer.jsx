import React from "react";
import logo from '../assets/img/logo.png';

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-top">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-widget footer-about">
                  <div class="footer-logo">
                    <img src={logo} alt="logo" />
                  </div>
                  <div class="footer-about-content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.{" "}
                    </p>
                    <div class="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-facebook-f"></i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-twitter"></i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="footer-widget footer-menu">
                  <h2 class="footer-title">For Patients</h2>
                  <ul>
                    <li>
                      <a href="search.html">
                        <i class="fas fa-angle-double-right"></i> Search for
                        Doctors
                      </a>
                    </li>
                    <li>
                      <a href="login.html">
                        <i class="fas fa-angle-double-right"></i> Login
                      </a>
                    </li>
                    <li>
                      <a href="register.html">
                        <i class="fas fa-angle-double-right"></i> Register
                      </a>
                    </li>
                    <li>
                      <a href="booking.html">
                        <i class="fas fa-angle-double-right"></i> Booking
                      </a>
                    </li>
                    <li>
                      <a href="patient-dashboard.html">
                        <i class="fas fa-angle-double-right"></i> Connect with
                        us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="footer-widget footer-menu">
                  <h2 class="footer-title">For Doctors</h2>
                  <ul>
                    <li>
                      <a href="login.html">
                        <i class="fas fa-angle-double-right"></i> Login
                      </a>
                    </li>
                    <li>
                      <a href="doctor-register.html">
                        <i class="fas fa-angle-double-right"></i> Register
                      </a>
                    </li>

                    <li>
                      <a href="chat.html">
                        <i class="fas fa-angle-double-right"></i> Connect with
                        us
                      </a>
                    </li>

                    <li>
                      <a href="doctor-dashboard.html">
                        <i class="fas fa-angle-double-right"></i> Request Demo
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="footer-widget footer-contact">
                  <h2 class="footer-title">Contact Us</h2>
                  <div class="footer-contact-info">
                    <div class="footer-address">
                      <span>
                        <i class="fas fa-map-marker-alt"></i>
                      </span>
                      <p>
                        {" "}
                        987 XYZ Street, San Francisco,
                        <br /> California CA{" "}
                      </p>
                    </div>
                    <p>
                      <i class="fas fa-phone-alt"></i>
                      +1 123 456 789
                    </p>
                    <p class="mb-0">
                      <i class="fas fa-envelope"></i>
                      MedVisit@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container-fluid">
            <div class="copyright">
              <div class="row">
                <div class="col-md-6 col-lg-6">
                  <div class="copyright-text">
                    <p class="mb-0">
                      <a href="">Semanticbits</a>
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-6">
                  <div class="copyright-menu">
                    <ul class="policy-menu">
                      <li>
                        <a href="term-condition.html">Terms and Conditions</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
