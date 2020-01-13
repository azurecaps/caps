import React,{Component} from "react";
import {connect} from "react-redux";
import {setDisplayLogin} from "../../actions/actions";
import "font-awesome/css/font-awesome.min.css";
import "./Register.scss";

class Register extends Component{

    render() {
        return(
            <div>

            <div className="wrap-register100">
            <form className="register100-form validate-form">
            <span className="register100-form-title">
            Registration
        </span>

                <div className="wrap-input100 validate-input">
                    <input className="input100" type="text" name="username" placeholder="Username"/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
            <i className="fa fa-user" aria-hidden="true"></i>
            </span>
                </div>

        <div className="wrap-input100 validate-input"
        data-validate="Valid email is required: ex@abc.xyz">
            <input className="input100" type="text" name="email" placeholder="Email"/>
            <span className="focus-input100"></span>
            <span className="symbol-input100">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            </span>
            </div>

            <div className="wrap-input100 validate-input" data-validate="Password is required">
            <input className="input100" type="password" name="pass" placeholder="Password"/>
            <span className="focus-input100"></span>
            <span className="symbol-input100">
            <i className="fa fa-lock" aria-hidden="true"></i>
            </span>
            </div>

            <div className="container-register100-form-btn">
            <button className="register100-form-btn" >
            Créer
            </button>
            </div>

        <div className="text-center p-t-45">
            <a className="txt2" href="#" onClick={() => {this.props.setDisplayLogin(true)}}>
        Login
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
    setDisplayLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);