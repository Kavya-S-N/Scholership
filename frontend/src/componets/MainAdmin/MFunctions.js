import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminDashboard from "../UserAdmin/Dashboard"
import MainHome from "./MainHome";
// import fRegistration from "./Registration";
import MainNavbar from "./MainNavbar";
import ShowUser from "./ShowUser";
import ShowScholership from "./ShowScholership";
import ShowCategory from './ShowCategory';
import ShowGemploye from './ShowGemploye';
import AddGemploye from './AddGemploye';
import AddUser  from './AddUser'
import AddScholership from './AddScholership'

function App() {
  return (
    <Router>
      <div className="">

        <MainNavbar />
         <Switch>
          <Route path={"/main/dashboard"} component={AdminDashboard}/>
          {/* <Route exact path={"/main/Home"} component={MainHome} /> */}
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          <Route path={"/main/show_user"} component={ShowUser} />
          <Route path={"/main/show_gemploye"} component={ShowGemploye} />
          <Route path={"/main/add_gemploye"} component={AddGemploye}/>
          <Route path={"/main/show_category"} component={ShowCategory} />
          <Route path={"/main/show_scholership"} component={ShowScholership} />
          <Route path={"/main/add_user"} component={AddUser}/>
          <Route path={"/main/add_scholership"} component={AddScholership}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
