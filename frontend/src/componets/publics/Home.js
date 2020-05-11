import React, { Component, Fragment } from "react";
// import "../CSS/Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        
    
  
<div class="banner">
  <div>
  <section id="section1" className="" style={{ marginTop: 80 + "px" }}>
          <div className="leftside">
            
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-02/04/full/1549242531-6926.jpg"
              alt=""
            />
          </div>
          
          <div className="rightside rollIn animated wow animated">
            <div className="container ">
           
            <h1> Welcome To Our e-scheme scholership!</h1>
              <h3>IT'S NICE TO MEET YOU</h3>
           
              <a href="/Home#product" className="btn btn-success welcome">
              Tell Me More
              </a>
             
            </div>
          </div>
       
        </section>
  </div>

</div>
 {/*  */}
 <section id="service">
          <div className="container">
            <h2>About Us</h2>
            <div className="service_area">
              <div className="row">
              <div className="col-lg-12">
                  <div className="service_block">
              
                    <p className="animated zoomIn wow animated">
                    It is the platform for students ,that allows both seekers and scholarship providers to access curated scholarship information.We provide useful scholerships informations ,those who are not aware about the schemes.
                    So many people lack of know-how about education funding schemes are helpful to students who wanted their higher study.
                     This platform users easy to recieve the benefits.
                    </p>
                  </div>
                </div>
              
             
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/*  */}
        {/*  */}

      

        <section >
        <div className="row">
              <div className="col-lg-6 wow fadeInLeft animated">
              
                <div className=" address clearfix address1">
                  <h1>Address</h1>
                  <p className="address1">
                    We are trying to provide a e-scheme scholership awerness information.
                  </p>
                  <p className="address1">If any suggestions or tips let us know</p>
                </div>
                <ul className="social-link">
                  <li >
                    <a href="(0)">
                      <i className="fa fa-twitter "></i>
                    </a>
                  </li>
                  <li className="facebook animated bounceIn wow delay-03s animated">
                    <a href="(0)">
                      <i className="fa fa-facebook "></i>
                    </a>
                  </li>
                  <li className="pinterest animated bounceIn wow delay-04s animated">
                    <a href="(0)">
                      <i className="fa fa-pinterest "></i>
                    </a>
                  </li>
                  <li className="dribbble animated bounceIn wow delay-06s animated">
                    <a href="(0)">
                      <i className="fa fa-instagram "></i>
                    </a>
                  </li>
               
                
                </ul>
              </div>
              <div className="col-lg-6 wow fadeInUp delay-06s animated">
                <div className="form">
                <h1 className="address2">Contact Us</h1>
                  <div id="sendmessage" className="address2">
                    Sent Message Thank you!
                  </div>
                  <div id="errormessage"></div>
                  <form
                    action=""
                    method="post"
                    role="form"
                    className="contactForm"
                  >
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control input-text"
                        id="name"
                        placeholder="Your Name"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control input-text"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        data-rule="email"
                        data-msg="Please enter a valid email"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 8 chars of subject"
                      />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        rows="5"
                        data-rule="required"
                        data-msg="Please write something for us"
                        placeholder="Message"
                      ></textarea>
                      <div className="validation"></div>
                    </div>

                    <button type="submit" className="btn input-btn">
                      SEND MESSAGE
                    </button>
                  </form>
                </div>
              </div>
              
            </div>
      
        </section>
     
        {/*  */}
        {/*  */}
        {/*  */}

        <section className="subscribe-section">
  <div className="subscribe-form">
  <form action="#" className="subscribe-form">
    <label for="text"className="clr" >Join our exclusive newsletter</label>
    <input type="email" name="email" className="clr" placeholder="Enter your email address"/>
    <span className="submit">
      <input type="submit" value="subscribe"/> <a  className="clr" >Subscribe</a>
    </span> 
  </form>
</div>
</section>
        {/*  */}
        {/*  */}
      </Fragment>
    );
  }
}

export default Home;
