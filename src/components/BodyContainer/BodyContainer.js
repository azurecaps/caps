import React, {Component} from "react";
import {connect} from "react-redux";
import './BodyContainer.scss';
import 'antd/dist/antd.css';
// import _ from "./../../i18n";
import {setSelectedNotion, setSelectedNotionBodyType} from "../../actions/actions";
import ImageReader from "../ImageReader/ImageReader";
import VideoReader from "../VideoReader/VideoReader";
import PdfReader from "../PdfReader/PdfReader";
import Quiz from "../Quiz/Quiz";

class BodyContainer extends Component{
    state = {
        notion:null,
        bodyContainer:null,
    };

    static getDerivedStateFromProps(props, state) {
        if (undefined!== props.notion && null !== props.notion && null !== props.notion.notion && null !== props.notion.bodyContainer){
          state.bodyContainer =props.notion.bodyContainer;
        }
        return state;
    }

    render() {
        const bodySection = () => {
            if (null !== this.state.bodyContainer){
                switch (this.state.bodyContainer.type) {
                    case "ImageViewer" : {
                       return  <ImageReader url={this.state.bodyContainer.url}/>
                    }
                    case "VideoViewer" : {
                        return  <VideoReader url={this.state.bodyContainer.url}/>
                    }
                    case "PdfViewer" : {
                        return  <PdfReader url={this.state.bodyContainer.url}/>
                    }
                    default: return;
                }
            }
        };

        return (
            <div className="w-full bg-indigo-100">
                {/*{bodySection()}*/}
                <Quiz/>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    notion: state.notion,
});

const mapDispatchToProps = {
    setSelectedNotion,
    setSelectedNotionBodyType,
};

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer);
