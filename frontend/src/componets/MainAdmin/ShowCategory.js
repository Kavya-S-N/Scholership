import React, { Component,useState, Fragment } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from "axios";
import {Redirect,Link} from 'react-router-dom'
import "../CSS/donor.css";

export default class ShowCategory extends Component {
    constructor(props) {
        super(props);
          this.state = {
           category:[],
           view:false,
           delete:false,
           catname: "",
       };
       this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
       componentDidMount = async () => {
         const token = sessionStorage.getItem("token");
         const config = {
           headers: { 
               Authorization: `Bearer ${token}`,
               "Content-Type": "application/json",
             },
           };
           
         const res = await axios.get(`http://localhost:5000/api/v1/category`, config);   
         this.setState({
              category: res.data.data,
         });        
                     
       };
      deletecategory = async (id,e) => {
        alert("You Want To Delete this Category");
        const token = sessionStorage.getItem("token");
        const config = {
          headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          };
          await axios.delete(`http://localhost:5000/api/v1/category/${id}`,config); 
            this.setState({
                  delete:true,
                });
      }
      onSubmit = async (e) => {
        e.preventDefault();
           const category={
            catname:this.state.catname,
           } 
        const body = JSON.stringify(category);
        const token = sessionStorage.getItem("token");
         const config = {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        };
        const result = await axios.post(
            `http://localhost:5000/api/v1/category`,
            body,
            config
          );
          window.location.reload();
    }
      
      
  render() {
    return (
        <div>
            <div class="" style={{backgroundColor:"black"}}>
              <div class=" rowpage-title ml-5 mb-5">
                <h1 class="text-dark pt-5 mt-5" >Category List</h1>
                <div className="row">
              
                <form onSubmit={this.onSubmit}>
                <input type="text"
                className="col-md-7 input--style-6"
                name="catname"
                value={this.state.catname}
                onChange={this.onChange}
                />
                <input type="submit" className="btn btn-danger col-md-4 mt-2 ml-4 text-dark" value="Add Category"/>
                </form>

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
                            <label class="text-dark  pl-4 ml-4 pr-5 mr-5">ID</label>
                          </th>
                          <th>
                            {" "}
                            <label class="text-dark ml-3 pl-4 pr-5 mr-5">Name</label>
                          </th>
                          
                         
                         <th>
                            {" "}
                            <label className="d-flex justify-content-center text-dark ml-4 pl-4 pr-5 ">
                              Actions
                            </label>
                          </th>
                          
                        </tr>
                        <tbody style={{color:'white'}}>
                            {this.state.category.map((category) => (
                              <tr key={category._id} >
                                {/* <td className="tbld">
                                  <img
                                    src={`${category.file}`}
                                    alt=""
                                    width="150px"
                                    height="100px"
                                  ></img>
                                </td> */}
                                <td className="tbld ml-5 pl-5 pr-5 mr-5">{category._id}</td>
                                <td className="tbld ml-5 pl-5 pr-5 mr-5">{category.catname}</td>
                            
                                                                                           
  
                                <td>
                                    <a
                                      href=""
                                      className="btn btn-danger btn-md  ml-5"
                                      value={category._id}
                                      onClick={(e) =>
                                        this.deletecategory(category._id, e)
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
