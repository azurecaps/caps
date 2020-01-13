import React, {Component} from "react";
import {connect} from "react-redux";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import 'antd/dist/antd.css';
import HeaderM from "../../components/Header/HeaderM";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import BodyContainer from "../../components/BodyContainer/BodyContainer";

class HomePage extends Component{

    render() {
        return(
            <div className="flex">
                <div className="w-2/12 h-screen">
                    <LeftSideBar/>
                </div>
                <div className="w-10/12 h-screen">
                    <div className="w-12/12"><BodyContainer/></div>
                    <HeaderM/>
                </div>
                <div className=" h-screen">
                    <RightSideBar/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);