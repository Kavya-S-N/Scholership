import React, { Component,useState, Fragment } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from "axios";
import {Redirect,Link} from 'react-router-dom'
import "../CSS/donor.css";


export default class ShowUser extends Component {
  state = {
       users: [],
};



 componentDidMount = async () => {
   const token = sessionStorage.getItem("token");
   const config = {
     headers: { 
         Authorization: `Bearer ${token}`,
         "Content-Type": "application/json",
       },
     };
    const res = await axios.get(`http://localhost:5000/api/v1/public`, config);   
   this.setState({
        users: res.data.data,
   });        
    console.log(this.state.users);
            
 };
 deleteUser = async (id,e) => {
  alert("You Want To Delete this User");
  const token = sessionStorage.getItem("token");
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    await axios.delete(`http://localhost:5000/api/v1/public/${id}`,config); 
     
}


render() {
return (
     // ----------------------------------------------------------------------------------------
    <div>
      <section>
        <div id="portfolio">
          <div class="" style={{backgroundColor:"black"}}>
            <div class="page-title text-center">
              <h1 class="text-dark pt-3">users</h1>
            </div>
           

            <div class="row">
              {/*  */}
              <div class="ml-5  mr-5 pt-4">
                <div class="">
                  <div class="">
                    <div class="row mb-4">
                      <div class="col-md-6">
                        <div class="pull-right">
                          <a
                            href="/main/add_user"
                            class="btn btn-info btn-sm p-2"
                          >
                            Add users
                          </a>
                        </div>
                      </div>

                      <div class="">
                        <a href="/vendor/home" class="btn btn-info btn-sm p-2">
                          Back to Home
                        </a>
                      </div>
                    </div>
                    <table class="table table-hover ml-5">
                      <tr>
                        <th>
                          <label class="text-dark pl-5">Name</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark pl-5">Phone</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark pl-5">Email</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark pl-4">Gender</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark pl-5">DOB</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark pl-4">Address</label>
                        </th>
                        <th>
                          {" "}
                          <label className="d-flex justify-content-center text-dark">
                            Actions
                          </label>
                        </th>
                      </tr>
                      <tbody style={{color:'white'}}>
                          {this.state.users.map((user) => (
                            <tr>
                              <td className="tbld pl-5 ">{user.name}</td>
                              <td className="tbld pl-5">{user.phone}</td>
                              <td className="tbld pl-5">{user.email}</td>
                              <td className="tbld pl-5">{user.gender}</td>
                              <td className="tbld pl-5">{user.dob}</td>
                              <td className="tbld pl-5">{user.address}</td>
                                                           

                              <td>
                                    <a
                                      href=""
                                      className="btn btn-danger btn-md  ml-5"
                                      value={user._id}
                                      onClick={(e) =>
                                        this.deleteUser(user._id, e)
                                      }
                                    >
                                      <i className="fa fa-trash-o"></i>
                                    </a>
                                 </td>
                              {/* <td>
                                <a href="" class="btn btn-info btn-md">
                                <i class="fa fa-edit"></i>
                                </a>
                               </td> */}
                            </tr>
                          ))}
                        </tbody>

                     
                        
                    </table> 
                   </div>
                 </div>
              </div> 
             </div> 
          </div> 
         </div> 
       </section>
     </div> 
     
    );
  }
}
