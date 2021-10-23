import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import AdminHome from "./Screens/Admin";

import Authentication from "./Screens/Authentication";
import Home from "./Screens/Home";
import Logon from "./Screens/Logon/index";
import Profile from "./Screens/Profile";
import RegisterBooks from "./Screens/Admin/Pages/Books/RegisterBooks";
import Register from "./Screens/Register";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Logon }  path="/logon"  />
           <Route component = { Register }  path= "/register"/>
           <Route component = { Authentication }  path= "/authentication"/>
           <Route component = { Profile }  path= "/profile"/>
           <Route component = { AdminHome }  path= "/admin"/>
           <Route component = { RegisterBooks }  path= "/registerBooks"/>
       </BrowserRouter>
   )
}

export default Routes;