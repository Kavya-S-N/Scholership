import React, { Component, Fragment, } from "react";
import { Redirect } from "react-router-dom";
// import logo from "../assets/logo.jpg";
// import { Link } from "react-router-dom";
import axios from "axios";

class Registration extends Component {
  constructor (props){
    super(props);
  
  this.state = {
    name:"",
    email: "",
    password: "",
    role: null,
    isAuth:false,
    
  };
  this.onChange=this.onChange.bind(this);
}
  
componentDidMount(){
  this.setState({
    role: this.props.match.params.role,
  });
}
//input onchange
onChange(e){
  this.setState({
    [e.target.name]:e.target.value,
  });
}
//register
onSubmit=async (e)=>{
  e.preventDefault();

  const reg={
    name:this.state.name,
    email:this.state.email,
    role:this.state.role,
    password:this.state.password,
  };

     const body=JSON.stringify(reg);
    const config={
      headers:{
          
          "Content-Type":"application/json",
        },
   };
// console.log(body);
      try{
         const res=await axios.post(
                              `http://localhost:5000/api/v1/auth/register`,body,config
                             );
      console.log(res.data.token);
      sessionStorage.setItem("token",res.data.token);
      sessionStorage.setItem("isAuth",true);
      //console.log(sessionStorage);
       this.setState({
                    isAuth:true,
                   });
                   alert("registered");
     }catch(error){
                 alert("error in sign up");
                }
  
  };
  render() {
    return (
      <Fragment>
        {this.state.isAuth?(
          <Redirect isAuth={this.state.isAuth} to="/"/>
        ):(
    
      <div className="container ">
        <div className="">

          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="jumbotron " id="login-second">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="card" id="login-card">
                  <div className="card-header">
                    <h3 className="mt-5 sign">Sign Up As User</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: "#ffc312" }}
                          >
                            <i className="fa fa-envelope"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                          placeholder="email"
                           />
                      </div>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: "#ffc312" }}
                          >
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={this.state.name}
                          onChange={this.onChange}
                          placeholder="username"
                          
                        />
                      </div>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: "#ffc312" }}
                          >
                            <i className="fa fa-key"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                          placeholder="password"
                        />
                      </div>
                      {/* <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: "#ffc312" }}
                          >
                            <i className="fa fa-key"></i>
                          </span>
                        </div> */}
                        {/* <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                          placeholder="Re-enter password"
                        /> */}
                      {/* </div> */}
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Register"
                          className="btn float-right login_btn btn-warning btn-block"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="">
                    <div className="d-flex justify-content-center links">
                      Already have an account?<a href="/Login/user">Sign In</a>
                    </div>
                    <div className="d-flex justify-content-center">
                      <a href="/reset">Forgot your password?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
         )

       }
       </Fragment>
       )
       }
       
  
}
export default Registration;
