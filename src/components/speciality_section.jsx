import React, { Component } from "react";
import icon1 from '../assets/img/specialities/urology_sp.png';
import icon2 from '../assets/img/specialities/neurology_sp.png';
import icon3 from '../assets/img/specialities/orthopedic_sp.png';
import icon4 from '../assets/img/specialities/cardiologist_sp.png';
import icon5 from '../assets/img/specialities/dental_speciality.png';

class Speciality_Section extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="section section-specialities">
          <div className="container-fluid">
            <div className="section-header text-center">
              <h2>Clinic and Specialities</h2>
              <p className="sub-title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="specialities-slider slider">
                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <img
                        src={icon1}
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                    </div>
                    <p>Urology</p>
                  </div>

                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <img
                       src={icon2}
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                    </div>
                    <p>Neurology</p>
                  </div>

                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <img
                       src={icon3}
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                    </div>
                    <p>Orthopedic</p>
                  </div>

                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <img
                        src={icon4}
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                    </div>
                    <p>Cardiologist</p>
                  </div>

                  <div className="speicality-item text-center">
                    <div className="speicality-img">
                      <img
                       src={icon5}
                        className="img-fluid"
                        alt="Speciality"
                      />
                      <span>
                        <i className="fa fa-circle" aria-hidden="true"></i>
                      </span>
                    </div>
                    <p>Dentist</p>
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

export default Speciality_Section;
