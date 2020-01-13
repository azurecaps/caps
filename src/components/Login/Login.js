import React,{Component} from "react";
import {connect} from "react-redux";
import "font-awesome/css/font-awesome.min.css";
import {setDisplayLogin} from "../../actions/actions";
import "./Login.scss";
import _ from "../../i18n"
import axios from "axios";
// import {Redirect} from "react-router-dom";
// import {push} from "connected-react-router";
// import {Redirect} from "react-router";


class Login extends Component{

    state = {
        username:null,
        password:null,
    };

    redirectTest () {
        console.log('in redirect');
        // debugger;
        // <Route
        //     path="/privacy-policy"
        //     component={ Redirect }
        //     loc=""
        // />
        // window.location.replace('https://oauth-b4-learning.azurewebsites.net/connect/authorize?client_id=ReactJsCleant&response_type=code id_token&redirect_uri=https://client-b4-learning.azurewebsites.net/ac&scope=openid b4api offline_access&state=67000cbb26834e2f9dfef747efcdc930&nonce=xyz');
        axios.post('https://b4-api.azurewebsites.net/Auth2/login',{username : this.state.username, password : this.state.password}).then((res)=>{
            console.log(res);
            debugger;
            // if (res['data']){
            //     localStorage.setItem('capsules', JSON.stringify(res['data']));
            //     // console.log(JSON.parse(localStorage.getItem('capsules')));
            //     this.setState({capsules :JSON.parse(localStorage.getItem('capsules')) });
            // }
        });
        //console.log('in redirect :: '+this.state.email+'//'+this.state.password);
}
    render() {
        return(
<div>
    <div className="wrap-login100">
        <div className="login100-pic js-tilt" data-tilt>
            <img src={require("./images/img-01.png")} alt="IMG"/>
        </div>

        <form className="login100-form validate-form">
					<span className="login100-form-title">
						{_("LoginTitle")}
					</span>

            <div className="wrap-input100 validate-input"
                 data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" onChange = {(event,newValue) => this.setState({username:newValue})} placeholder={_("Email")}/>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="pass" onChange = {(event,newValue) => this.setState({password:newValue})} placeholder={_("Password")}/>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
            </div>

            <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={() => {this.redirectTest()}}>
                    {_("Connect")}
                </button>
            </div>

            <div className="text-center p-t-12">
                <a className="txt2" href="#">
                    {_("ForgotLogin")}
                </a>
            </div>

            <div className="text-center p-t-65">
                <a className="txt2" href="#" onClick={() => {this.props.setDisplayLogin(false)}}>
                    {_("CreateAccount")}
                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </a>
            </div>
        </form>
    </div>
</div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    setDisplayLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);