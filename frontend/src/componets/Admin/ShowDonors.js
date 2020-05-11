import React, { Component,useState, Fragment } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from "axios";
import {Redirect,Link} from 'react-router-dom'
import "../CSS/donor.css";


export default class ShowDonors extends Component {
  state = {
    me:"",
    scholerships: [],
    scholership_id:"",
    gemployee_id:"",
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
     const reslt = await axios.get(`http://localhost:5000/api/v1/auth/me`, config); 
      this.setState({
           me: reslt.data.data._id,
         });
   const res = await axios.get(`http://localhost:5000/api/v1/gemploye/${this.state.me}/scheme`, config);   
   this.setState({
        scholerships: res.data.data,
   });        
    //  console.log(this.state.projects);
     console.log(this.state.me);
          
 };
//  getScholershipId = async (id,gemploye_id, e) => { 
//     e.preventDefault();
//     this.setState({
//         scholership_id: id,
//         gemploye_id:gemploye_id,
//         view:true,
//     });
//     // console.log(user)
// }



deleteScholership = async (id,e) => {
  alert("You Want To Delete this Scholership?");
  const token = sessionStorage.getItem("token");
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    await axios.delete(`http://localhost:5000/api/v1/scheme/${id}`,config); 
      this.setState({
            delete:true,
          });
        // console.log(this.state.)
}


render() {
return (
     // ----------------------------------------------------------------------------------------
    <div>
      <section>
        <div id="portfolio">
          <div class="" style={{backgroundColor:"black"}}>
            <div class="page-title text-center">
              <h1 class="text-dark pt-3">Scholerships</h1>
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
                            href="/vendor/addDonors"
                            class="btn btn-info btn-sm p-2"
                          >
                            Add Scholerships
                          </a>
                        </div>
                      </div>

                      <div class="">
                        <a href="/vendor/home" class="btn btn-info btn-sm p-2">
                          Back to Home
                        </a>
                      </div>
                    </div>
                    <table class="table table-hover">
                      <tr>
                        <th>
                          <label class="text-dark">Image</label>
                        </th>
                        <th>
                          {" "}
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

                        <th>
                          {" "}
                          <label className="d-flex justify-content-center text-dark">
                            Actions
                          </label>
                        </th>
                      </tr>
                      <tbody style={{color:'white'}}>
                          {this.state.scholerships.map((scholarship) => (
                            <tr key={scholarship._id}>
                              <td className="tbld">
                                <img
                                  src={`${scholarship.file}`}
                                  alt=""
                                  width="150px"
                                  height="100px"
                                ></img>
                              </td>
                              <td className="tbld">{scholarship.title}</td>
                              <td className="tbld">{scholarship.category}</td>
                              <td className="tbld">{scholarship.lastdate}</td>
                              <td className="tbld">{scholarship.eligibility}</td>
                              <td className="tbld">{scholarship.benefitsreward}</td>
                              <td className="tbld">{scholarship.description}</td>
                              <td className="tbld">{scholarship.website}</td>
                                                           

                              <td>
                                  <a
                                    href=""
                                    className="btn btn-danger btn-md mr-5"
                                    value={scholarship._id}
                                    onClick={(e) =>
                                      this.deleteScholership(scholarship._id, e)
                                    }
                                  >
                                    <i className="fa fa-trash-o"></i>
                                  </a>
                               </td>
                              <td>
                                <a href="" class="btn btn-info btn-md">
                                <i class="fa fa-edit"></i>
                                </a>
                               </td>
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
