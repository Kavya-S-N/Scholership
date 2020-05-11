import React, { Component,useState, Fragment } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from "axios";
import {Redirect,Link} from 'react-router-dom'
import "../CSS/donor.css";

export default class ShowGemploye extends Component {
          state = {
           gemploye:[],
           view:false,
           delete:false
       };
      
      
      
       componentDidMount = async () => {
         const token = sessionStorage.getItem("token");
         const config = {
           headers: { 
               Authorization: `Bearer ${token}`,
               "Content-Type": "application/json",
             },
           };
           
         const res = await axios.get(`http://localhost:5000/api/v1/gemploye`, config);   
         this.setState({
              gemploye: res.data.data,
         });        
                     
       };
      deleteGemploye = async (id,e) => {
        alert("You Want To Delete this G-Employe");
        const token = sessionStorage.getItem("token");
        const config = {
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          };
          await axios.delete(`http://localhost:5000/api/v1/gemploye/${id}`,config); 
            this.setState({
                  delete:true,
                });
      }
      
      
  render() {
    return (
        <div>
            <div class="" style={{backgroundColor:"black"}}>
              <div class="page-title">
                  
                 <div className="row pt-5 mt-5 ml-5 mb-3">
                <h1 class="text-dark  col-md-8">G-Employee List</h1>
                <a class="btn btn-danger text-dark" href="/main/add_gemploye">Add new</a>
                
                </div>
              </div>
             
  
              <div class="row">
                {/*  */}
                <div class="ml-5 mr-5">
                  <div class="">
                    <div class="">
                    
                      <table class="table table-hover container mx-auto">
                        <tr>
                          {/* <th>
                            <label class="text-dark">Image</label>
                          </th> */}
                          <th>
                            {" "}
                            <label class="text-dark  pl-4 pr-5 mr-5">Name</label>
                          </th>
                          <th>
                            {" "}
                            <label class="text-dark ml-5 pl-4 pr-5 mr-5">Email</label>
                          </th>
                          <th>
                            {" "}
                            <label class="text-dark ml-4 pl-3 pr-5 mr-5">Address</label>
                          </th>
                          <th>
                            {" "}
                            <label class="text-dark ml-4 pl-4 pr-5 mr-5">Gvt ID</label>
                          </th>
                         
                         <th>
                            {" "}
                            <label className="d-flex justify-content-center text-dark ml-4 pl-4 pr-5 ">
                              Actions
                            </label>
                          </th>
                        </tr>
                        <tbody style={{color:'white'}}>
                            {this.state.gemploye.map((gemploye) => (
                              <tr key={gemploye._id} >
                                {/* <td className="tbld">
                                  <img
                                    src={`${gemploye.file}`}
                                    alt=""
                                    width="150px"
                                    height="100px"
                                  ></img>
                                </td> */}
                                <td className="tbld ml-5 pl-5 pr-5 mr-5">{gemploye.name}</td>
                                <td className="tbld ml-5 pl-5 pr-5 mr-5">{gemploye.email}</td>
                                <td className="tbld ml-5 pl-5 pr-5 mr-5">{gemploye.address}</td>
                                <td className="tbld ml-5 pl-5 pr-5 mr-5">{gemploye.govtid}</td>
                                                                                           
  
                                <td>
                                    <a
                                      href=""
                                      className="btn btn-danger btn-md  ml-5"
                                      value={gemploye._id}
                                      onClick={(e) =>
                                        this.deleteGemploye(gemploye._id, e)
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
    );
  }
}
