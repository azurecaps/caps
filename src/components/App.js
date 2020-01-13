import React, {Component} from 'react';
import './App.scss';
import Capsule from "./Capsule/Capsule";
import {connect} from "react-redux";
import {setLanguage} from "./../actions/actions";
import HomePage from "../Pages/Home/HomePage";
// import axios from "axios";
// import {Redirect} from "react-router";
import LoginPage from "../Pages/Login/LoginPage";
// import {createStore as store} from "./../store/createStore";
import axios from "axios";
import {split} from 'lodash';

export class App extends Component{
    constructor(props, context) {
        super(props, context);
        this.state ={
            user : null,
            idToken : null,
        }
    }

    componentDidMount() {
        let lng = localStorage.getItem('lng');
        if (!lng) {
                const navigatorLanguage = navigator.language || navigator.userLanguage;
                lng = ['fr', 'en'].indexOf(navigatorLanguage) > -1 ? navigatorLanguage : 'fr';
                console.log(lng);
        }
        this.props.setLanguage(lng);
        this.setState({user : localStorage.getItem('user')});
        //
        // axios.post('https://b4-api.azurewebsites.net/Auth2/login',{'username':'gana0007', 'password':'123456'}).then((res)=>{
        //     console.log(res);
        //     debugger;
        //     // if (res['data']){
        //     //     localStorage.setItem('capsules', JSON.stringify(res['data']));
        //     //     // console.log(JSON.parse(localStorage.getItem('capsules')));
        //     //     this.setState({capsules :JSON.parse(localStorage.getItem('capsules')) });
        //     // }
        // });
// console.log(localStorage.getItem('id_token'));
//         if (!localStorage.getItem('id_token')){
//             window.location.replace('https://oauth-b4-learning.azurewebsites.net/connect/authorize?client_id=ReactJsCleant&response_type=code id_token&redirect_uri=http://localhost:3000&scope=openid b4api offline_access&state=67000cbb26834e2f9dfef747efcdc930&nonce=xyz ');
//             let firstPart = split(window.location.href, 'id_token=');
//             let secondPart = split(firstPart[1], '&scope=');
//                 localStorage.setItem('id_token',secondPart[0]);
//                 this.setState({idToken: localStorage.getItem('id_token')});
//         }

            const script = document.createElement("script");
            script.async = true;
            script.src = "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js";
            this.div.appendChild(script);


            // console.log('idTOken');
        // this.setState({idToken : localStorage.getItem('id_token')});

    }

    render() {

        if(!this.state.user){
            // console.log(window.location.href);
            return (
                <div ref={el => (this.div = el)}>
                    <LoginPage/>
                    {/*<HomePage/>*/}

                </div>
            );
        }

        return (
           <div>
               <HomePage/>
               {/*<Capsule/>*/}
           </div>
       );
   }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = {
setLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
