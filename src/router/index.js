 import React from 'react'
 import { Route, Switch} from 'react-router';
 import LoginPage from '../Pages/Login/LoginPage';
 import App from "../components/App";
 import Capsule from "../components/Capsule/Capsule";
 import HomePage from "../Pages/Home/HomePage";
 // import {connectRouter} from "connected-react-router";


 export const urls = {
     index: '/',
     notFound: '*',
     Capsule : '/capsule',
     LoginPage : 'LoginPage',
     HomePage : '/HomePage',
     App:'App'
 };

 export const getRoutes = (store) => {
     return (
         <Switch>
             <Route exact path="/" component={App} />
             <Route
                 path={urls.LoginPage}
                 component={LoginPage}
             />
             <Route
                 path={urls.Capsule}
                 component={Capsule}
             />
             <Route
                 path={urls.HomePage}
                 component={HomePage}
             />
         </Switch>

     );
 };
