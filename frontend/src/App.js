import React, { Fragment } from "react";
import Login from "./componets/Login";
import fRegistration from "./componets/Admin/Registration";
import "./componets/CSS/Home.css";
import Footer from "./componets/publics/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Functions from "./componets/Admin/Functions";
import AdminNavbar from "./componets/Admin/AdminNavbar";

import All from "./componets/publics/All";
// import Alert from "./componets/publics/Alert";
import UFunctions from "./componets/Company/UFunctions";
import CompanyNavbar from "./componets/Company/CompanyNavbar";
import MFunctions from "./componets/MainAdmin/MFunctions";
import MainNavbar from "./componets/MainAdmin/MainNavbar";
import UserHome from "./componets/UserAdmin/UserHome";


class App extends React.Component {
  //  state = {

  //    user: {}
  //  };
  //  LoginUser = async text => {
  //    const res = await axios.post(
  //    ` http://localhost:5000/api/auth/`
  //    );
  //    console.log(res.data.items);
  //    this.setState({
  //      users: res.data.items
  //    });
  //  };
  // state = {
  //   alert: null,
  // };
  // setAlert = (msg, type) => {
  //   this.setState({ alert: { msg, type } });
  //   setTimeout(() => this.setState({ alert: null }), 5000);
  // };
  render() {
    return (
      <Router>
        <div className="">
          {/* <Alert alert={this.state.alert} />
          <Navbar /> */}
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}
          <Switch>
            <Route exact path={"/Login/:type"} component={Login} />
          </Switch>
          <AdminNavbar />
          <CompanyNavbar />
          <MainNavbar />
          
          <Switch>
            <Route path={"/vendor/"} component={Functions} />
            <Route path={"/user/"} component={UFunctions} />
            <Route path={"/main/"} component={MFunctions} />
            <Route exact path={"/admin"} component={UserHome} />

           


            <All></All>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
