import React, {Component} from "react";
import {connect} from "react-redux";
import './VideoReader.scss';
import 'antd/dist/antd.css';
import ReactPlayer from 'react-player'
// import _ from "./../../i18n";

class VideoReader extends Component{
    constructor(props) {
        super(props);
        this.state = {
            source: this.props.url
        };
    }

    render() {
        return (
            <div>
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player'
                        url={this.props.url}
                        width='100%'
                        height='100%'
                        controls={true}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoReader);
