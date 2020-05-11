import React, { Component, Fragment } from "react";
import logo from "../../assets/logo.png";
import "../CSS/donor.css";

class CompanyHome extends Component {
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div class="card text-center">
                  <img class="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div class="card-body">
                    <h4 class="card-title">Products</h4>
                    <p class="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}

        <section class="counts section-bg mt-5">
          <div class="container mt-5">
            <div class="row">
            
              <div
                class="col-lg-12 col-md-6 text-center animated fadeInUp wow animated"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div >
                <div class="row">
                <div class="col-xl-6 col-lg-12 mb-50">
                  <h2> List of students/company</h2>
                  </div>
                        
              </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
 





       
      </Fragment>
    );
  }
}

export default CompanyHome;
