import React, { Component } from "react";
import { connect } from "react-redux";
// import _ from "./../../i18n";
import styles from './Capsule.scss';

class Capsule extends Component{

    render() {
        return (
            <div >
                <h1 className={styles.test}>IN THE CASPULE</h1>
            </div>
        );
    }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Capsule);
