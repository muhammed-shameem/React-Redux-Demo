import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    //Route,
    //Redirect
  } from "react-router-dom";
//import { LandingLayout } from '../crust/layout';
import { SignInPage } from '../crust/container';
import PublicRoute  from './PublicRoute'
//import PrivateRoute from './PrivateRoute';

export default function AppRouter() {
    
    return(
        <Router>
            <Switch>
                <PublicRoute path="/" component={SignInPage} exact/>
            </Switch>
        </Router>
    )    
}