import React, {Component} from "react";
import {connect} from "react-redux";
// import _ from "./../../i18n";
import './Capsule.scss';

class Capsule extends Component{

    render() {
        return (
            <div>
                <b className="ball">
                    {/*<input type="text" className="ball-title"/>*/}
                    <span className="input">
		                <input type="text" placeholder="Entrez le titre" />
		                <span></span>
		            </span>
                </b>
            </div>
    );
    }
    }


    const mapStateToProps = state => ({
    });

    const mapDispatchToProps = {
    };

    export default connect(mapStateToProps, mapDispatchToProps)(Capsule);
