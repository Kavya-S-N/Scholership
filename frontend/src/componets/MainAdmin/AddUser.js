import React, { Component, Fragment, } from "react";
import { Redirect } from "react-router-dom";
// import logo from "../assets/logo.jpg";
// import { Link } from "react-router-dom";
import axios from "axios";

class AddUser extends Component {
  constructor (props){
    super(props);
  
  this.state = {
    name:"",
    email: "",
    govtid: "",
    address: "",
    isAuth:false,
    
  };
  this.onChange=this.onChange.bind(this);
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
    address:this.state.address,
    govtid:this.state.govtid,
  };

     const body=JSON.stringify(reg);
     const token = sessionStorage.getItem("token");
    const config={
      headers:{
        Authorization: `Bearer ${token}`,
          "Content-Type":"application/json",
        },
   };
// console.log(body);
      try{
         const res=await axios.post(`http://localhost:5000/api/v1/gemploye`,body,config);
             alert("Add");
             this.setState({
                 isAuth:true,
             })
         }catch(error){
                 alert("error to add");
                }
  
  };
  render() {
    return (
      <Fragment>
        {this.state.isAuth?(
          <Redirect isAuth={this.state.isAuth} to="/main/show_gemploye"/>
        ):(
    
      <div className="container ">
        <div className="">

          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className="jumbotron " id="login-second">
            <div className="container">
              <div className="d-flex justify-content-center">
                <div className="card" id="login-card">
                  <div className="card-header">
                    <h3 className="mt-5 sign">Add new User</h3>
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
                            <i className="fa fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          value={this.state.phone}
                          onChange={this.onChange}
                          placeholder="phone"
                          
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
                          name="gender"
                          value={this.state.gender}
                          onChange={this.onChange}
                          placeholder="gender"
                          
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
                          type="address"
                          className="form-control"
                          name="address"
                          value={this.state.address}
                          onChange={this.onChange}
                          placeholder="address"
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
                          name="govtid"
                          value={this.state.govtid}
                          onChange={this.onChange}
                          placeholder="gvt id"
                          
                        />
                      </div>
                      
                      <div className="form-group">
                        <input
                          type="submit"
                          value="Add"
                          className="btn float-right login_btn btn-warning btn-block"
                        />
                      </div>
                    </form>
                  </div>
                  {/* <div className="">
                    <div className="d-flex justify-content-center links">
                      Already have an account?<a href="/Login/user">Sign In</a>
                    </div>
                    <div className="d-flex justify-content-center">
                      <a href="/reset">Forgot your password?</a>
                    </div>
                  </div> */}
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
export default AddUser;
