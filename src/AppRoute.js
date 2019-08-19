import React from 'react';
import Login from './components/Login';
import { Route, Switch } from "react-router-dom";

const AppRoute = () => (
  <Switch>  
    <Route path='/' component={Login} name ="login"/>      
    
  </Switch> 
)

export default AppRoute;