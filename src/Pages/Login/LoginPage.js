import React, {Component, useState} from "react";
import {connect} from "react-redux";
import "./LoginPage.scss";
import "./util.css";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register"
import {setDisplayLogin} from "../../actions/actions";
import { useSpring, animated} from 'react-spring';
import {registerUser} from './../../api';

let flippeded=false;

const Card = ()=> {
    let [flipped, set] = useState(flippeded);
    flipped = flippeded;
    const { transform, opacity} = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: {mass: 15, tension: 300, friction: 100}
    });

    return (
        <div onClick={()=> set(state => shouldFlip())}>
            <animated.div  style={{opacity: opacity.interpolate(o => 1 - o), transform, position : "relative", zIndex: opacity.interpolate(o => 1 - o) }}>
                <Login/>
            </animated.div>
            <animated.div  style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`), position: "relative", zIndex: opacity }}>
                <Register/>
            </animated.div>
        </div>
    )
};

const shouldFlip= () => {
    return flippeded;
};

class LoginPage extends Component{
    constructor(props) {
        super(props);

        this.state={
            firstTime : false
        };
    }

componentDidUpdate(prevProps, prevState, snapshot) {
}

    componentDidMount() {
    this.props.setDisplayLogin(true);
    // let data = {
    //     "username":"hamzafiddler",
    //     "Email":"hamzafiddler@gmail.com",
    //     "password":"123456"
    // };
    // axios.post("https://api-b4-learning.azurewebsites.net/api/Registration", data,{crossDomain : true,  headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    //         "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
    //     }}).then(res => {console.log("Now is the real test : ", res)});
//         let user = {
//             "username":"hamzafiddler",
//             "Email":"hamzafiddler@gmail.com",
//             "password":"123456"
//         };
// registerUser(user).then((res)=>{
//     console.log('res : '+res);
// });
}

    static getDerivedStateFromProps(props, state) {
        flippeded = !props.login.displayLogin;
        state.firstTime = props.login.firstTimeCLicked;
        return state;
    }

    render() {
        return(
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <Card/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    login: state.login,
});

const mapDispatchToProps = {
    setDisplayLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);