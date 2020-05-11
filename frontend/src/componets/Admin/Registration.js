import React, { Component } from "react";
// import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

class Registration extends Component {
  
  constructor (props){
    super(props);
  
  this.state = {
    name:"",
    email: "",
    govtid:"",
    password: "",
    role: "",
    
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
    govtid:this.state.govtid,
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
              alert("registerd");
     }catch(error){
                 alert("error login");
                }
              
      };              

  render() {
    return (
      <div className="container mt-5 mtop ">
        <div className="">
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="" id="login-second">
            <div class="page-wrapper p-t-50 p-b-50">
              <div class="wrapper wrapper--w900">
                <div class="card cardH card-6 ">
                  <div class="card-heading">
                    <h2 class="title text-dark ">&nbsp;&nbsp;&nbsp;&nbsp;Registration</h2>
                  </div>
                  <div class="card-body  text-light">
                    <form method="POST">
                      <div class="form-row">
                        <div class="name">name</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="full_name"
                            value={this.state.name}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Govt Id</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="govtid"
                            value={this.state.govtid}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Address</div>
                        <div class="value">
                          <input
                            class="input--style-6"
                            type="text"
                            name="address"
                            value={this.state.address}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Email address</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="email"
                              name="email"
                              value={this.state.address}
                              onChange={this.onChange}
                              placeholder="example@email.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Password</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="password"
                              name="password"
                              value={this.state.password}
                              onChange={this.onChange}
                              placeholder="Password"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-row">
                        <div class="name">Re-Password</div>
                        <div class="value">
                          <div class="input-group">
                            <input
                              class="input--style-6"
                              type="password"
                              name="password"
                              value={this.state.password}
                              onChange={this.onChange}
                              placeholder="Re-Password"
                            />
                          </div>
                        </div>
                      </div>
                  
                    </form>
                  </div>
                  <div class="card-footer">
                    <button class="btn btn--radius-2 btn-success" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Registration;
