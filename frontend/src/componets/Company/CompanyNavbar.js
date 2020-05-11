import React, { Component,useState, Fragment } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import axios from "axios";
import {Redirect,Link} from 'react-router-dom'
import logo from "../../assets/logo.png";


export default class Navbar extends Component {
  state = {
    loggedIn: true,
    categories:[],
  };
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
        categories: res.data.data,
        
    });  
    console.log(this.state.categories)      
   };
  render() {
    // let cart;
    let profile, logout;
    if (this.state.loggedIn === true) {
      profile = (
        <ul className="navbar-nav">
          {" "}
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span
                className="fa fa-user-circle fa-2x"
                style={{ color: "#f2f2f3  " }}
                aria-hidden="true"
              ></span>
            </a>
            <div
              className="dropdown-menu"

            >
              
            

              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                {/* <a className="dropdown-item" href="/farmer/Prof">
                  Profile
                </a> */}
           
                <a className="dropdown-item" href="/">
                  <span
                
                    style={{ color: "#f2f2f3  " }}
                    aria-hidden="true"
                  ></span>
                  Log Out
                </a>
              </div>
            </div>
          </li>
        </ul>
      );
     
    } else {
      profile = (
        <a
          type="button"
          className="btn  navbar-toggle-box-collapse d-none d-md-block "
          href="user/Login/user"
          title="Profile"
        >
          <span
            className="fa fa-user fa-2x"
            style={{ color: "#f2f2f3  " }}
            aria-hidden="true"
          ></span>

         
        </a>
      );
    }
    return (
     
     <nav className="navbar navbar-default navbar-expand-md fixed-top navbar-trans navf">
        <div className="container">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            
              </button>
          <a className="logo top1" href="/user/Home">
            <img src={logo} alt="" className=""></img>
            {/* Farm
            <span className="color-b">Easy</span> */}
          </a>
          <button
            type="button"
            className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-expanded="false"
          >
            <span className="fa fa-search" aria-hidden="true"></span>
          </button>
          
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " href="/user/Home">
                  Home
                </a>
              </li>
            
       
       {/* dropdown button for deparment  and Type*/}
       <div class="dropdown">
  <a className="nav-link pt-3">Category</a>
  <div class="dropdown-content">
  {this.state.categories.map((cat) => ( 
   <Link to={{pathname:'/user/categorywise', state:{cat_id:cat._id}}}>
    {cat.catname}</Link>
  ))} 
  </div>
</div>

          {profile}
          {logout}
          </ul>
        </div>
      </nav>
    );
  }
}
