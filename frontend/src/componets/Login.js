import React, { Component, Fragment } from "react";
import "./CSS/App.css";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class Login extends Component {
  constructor (props){
    super(props);
  
  this.state = {
    email: "",
    password: "",
    type: "",
    isAuth:false,

  };
  this.onChange=this.onChange.bind(this);
}

  componentDidMount() {
    this.setState(() => ({
      type: this.props.match.params.type,
    }));

    console.log(this.props.match.params);
  }
  onChange(e) {
    this.setState({ [e.target.name]:e.target.value });
  
    // console.log("123");
  }
  onSubmit  =async (e) => {
    e.preventDefault();
     const login ={
       email:this.state.email,
       password:this.state.password,
     };

     const body=JSON.stringify(login);
     const config={
       headers:{
         "Content-Type":"application/json",
       },
     };

     try{
       const res=await axios.post(
         `http://localhost:5000/api/v1/auth/login`,body,config
       );
     
sessionStorage.setItem("token",res.data.token);
sessionStorage.setItem("isAuth",true);
this.setState({
  isAuth:true,
});
    
 }
 catch(error){
   alert("error to login");
 }
  
 };



  render() {
    // console.log(this.props.match.params);
    // const { type } = this.props.match.params;
    
    const type = this.state.type;
    let social = {};
    let signup, login;

    social="#ffc312";
    signup= <a href={`/signup/${type}`}>signup</a>

    
    return (
      <Fragment>
{console.log(this.state.type)}
          {this.state.isAuth?(
            this.state.type=="admin" ?(
              <Redirect isAuth={this.state.isAuth} to="/admin"/>
            ):this.state.type=="gemploye" ?(
              <Redirect isAuth={this.state.isAuth} to="/vendor/Home"/>
            ):this.state.type=="public" ?(
            <Redirect isAuth={this.state.isAuth} to="/user/Home"/>
            ):(<Redirect to="/"/>)
            ):(
            
          
    
      <div className="container logintop ">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className=" " id="login-second">
            <div className="container">
              <div className="d-flex justify-content-center">
              
                <div className="card animated bounce" id="login-card">
                  <div className="card-header">
                    <h3 className="mt-5"> {this.state.type} signin </h3>
               
                  </div>
                  <div className="card-body">
                    
                    <form onSubmit={this.onSubmit}>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: social }}
                          >
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.onChange}
                        />
                      </div>
                      <div className="input-group form-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            style={{ background: social }}
                          >
                            <i className="fa fa-key"></i>
                          </span>
                        </div>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.onChange}
                        />
                      </div>

                      <div className="form-group ">
                        <button
                          type="submit"
                          value="Login"
                          className="btn float-right login_btn btn-block "
                          style={{
                            backgroundColor: social,
                          }}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <ul className="social-link">
                  <li >
                    <Link href="(0)">
                      <i className="fa fa-twitter "></i>
                    </Link>
                  </li>
                  <li className="facebook animated bounceIn wow delay-03s animated">
                    <Link href="(0)">
                      <i className="fa fa-facebook "></i>
                    </Link>
                  </li>
                  <li className="pinterest animated bounceIn wow delay-04s animated">
                    <Link href="(0)">
                      <i className="fa fa-pinterest "></i>
                    </Link>
                  </li>
                  <li className="dribbble animated bounceIn wow delay-06s animated">
                    <Link href="(0)">
                      <i className="fa fa-instagram "></i>
                    </Link>
                  </li>
               
                
                </ul>
                  <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                      Don't have an account?
                      {signup}
                    </div>
                    <div className="d-flex justify-content-center">
                    <Link href="/reset">Forgot your password?</Link>
                      {/* <a href="/main/Home">Admin</a> */}
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
    );
  }
}

export default Login;
