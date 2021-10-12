import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Screens/Home";
import Logon from "./Screens/Logon/index";
import Register from "./Screens/Register";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Logon }  path="/logon"  />
           <Route component = { Register }  path= "/register"  />
       </BrowserRouter>
   )
}

export default Routes;