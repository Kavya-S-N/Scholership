import React, { Component,useState, Fragment } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from "axios";
import {Redirect,Link} from 'react-router-dom'

class ViewScholership extends Component {
    state = {
        scholerships: [],
        scholership_id:this.props.location.state.scholership_id,
        apply:false
     };
     componentDidMount = async () => {
       const token = sessionStorage.getItem("token");
       const config = {
         headers: {
             Authorization: `Bearer ${token}`,
             "Content-Type": "application/json",
           },
         };
  
       const res = await axios.get(`http://localhost:5000/api/v1/scheme/${this.state.scholership_id}`, config);   
       this.setState({
        scholerships: res.data.data,
       });        
         
         console.log(this.state.scholerships);    
     };
   
    render() {
        const {
        file,
        title,
        lastdate,
        category,
        eligibility,
        benefitsreward,
        description,
        website,
        }= this.state.scholerships;

        
        return (
          <div className="pt-5" style={{color:'white'}}>
              <div className="card pt-5 mx-auto">
               
              <table class="table table-hover ml-4 mr-4">
                      <tr>
                        <th>
                          <label class="text-dark">Image</label>
                        </th>
                        <th>
                         
                          <label class="text-dark">Scholership Title</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">Category</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">LastDate</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">Eligibility</label>
                        </th>
                        <th>
                          {" "}
                          <label class="text-dark">Benefits/Reward</label>
                        </th>

                        <th>
                          {" "}
                          <label class="text-dark">Description</label>
                        </th>
                        
                        <th>
                          {" "}
                          <label class="text-dark">Website</label>
                        </th>

                        
                      </tr>
                      <tbody style={{color:'white'}}>
                         <tr >
                              <td className="tbld">
                                <img
                                  src={file}
                                  alt=""
                                  width="150px"
                                  height="100px"
                                />
                              </td>
                              <td>{title}</td>
                              <td>{}</td>
                              <td>{lastdate}</td>
                              <td>{eligibility}</td>
                              <td>{benefitsreward}</td>
                              <td>{description}</td>
                              <td><a href={website}>{website}</a></td>
                                                                  
                            </tr>
                     
                        </tbody>

                     </table> 
              </div>
          </div>
         )
    }

}
export default ViewScholership
