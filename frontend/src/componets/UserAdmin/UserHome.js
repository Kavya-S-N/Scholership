import React, { Component } from "react";
import "../CSS/admin.css";
import NavbarT from "./NavbarT";
import NavbarA from "./NavbarA";
import Dashboard from "./Dashboard";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // useParams,
  // useRouteMatch
} from "react-router-dom";
import verifdsellr from "./verifdsellr";
import sellerapplication from "./sellrapplication";

export default class UserHome extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container-scroller">
            <NavbarT />

            {/* <!-- partial --> */}
            <div className="container-fluid page-body-wrapper">
              {/* <!-- partial:partials/_sidebar.html --> */}
              <NavbarA />
              {/* <!-- partial --> */}
              <div className="main-panel">
                <Switch>
                  <Route path={"/admin/"} component={Dashboard}></Route>

                  <Route
                    path={"/admin/verifiedseller"}
                    component={verifdsellr}
                  />
                  <Route
                    exact
                    path={"/admin/application"}
                    component={sellerapplication}
                  />
                </Switch>{" "}
                {/* <!-- main-panel ends --> */}
                <footer className="footer">
                  <div className="d-sm-flex justify-content-center justify-content-sm-between">
                    <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                      Copyright © 2020{" "}
  
                    
                    
                      . All rights reserved.
                    </span>
                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                     
                      <i className="mdi mdi-heart text-danger"></i>
                    </span>
                  </div>
                </footer>
              </div>
            </div>
            {/* <!-- page-body-wrapper ends --> */}
          </div>
        </div>
      </Router>
    );
  }
}
